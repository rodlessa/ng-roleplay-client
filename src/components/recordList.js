import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td><img className="img-thumbnail w-30" alt={props.record.name} src={props.record.refImg}></img></td>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
   <td >VIG:{props.record.vigor}</td> 
   <td >MIND:{props.record.mind}</td> 
   <td >END:{props.record.endurance}</td> 
   <td >STR:{props.record.str}</td> 
   <td >DEX:{props.record.dex}</td>
   <td >INT:{props.record.intelligence}</td> 
   <td >FAI:{props.record.faith}</td> 
   <td >ARC:{props.record.arcane}</td>

   
   <td className="col-md-2">
    
      {/* <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> */}
     <Link className="btn btn-link" to={`/view/${props.record._id}`}>View</Link>
     {/*
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button> */}
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://54.167.59.252:5000/record/`);
     
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     
     const records = await response.json();
     
     setRecords(records);
     
     
   }
   getRecords();
   
  
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div className="container p-2 ">
     <table className="table" style={{ marginTop: 10 }}>
       <thead className="thead-dark">
         <tr>
           <th>Image</th>
           <th>Name</th>
           <th>Start Class</th>
           <th>Min. Level</th>
           <th>Stats</th>
           <th></th>
           <th></th>
           <th></th>
           <th></th>
           <th></th>
           <th></th>
           <th></th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}