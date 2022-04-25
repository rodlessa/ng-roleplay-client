import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function View() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
   vigor:"",mind: "",endurance: "",dex: "",intelligence: "",faith:"", arcane: "",refImg: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://54.167.59.252:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     position: form.position,
     vigor: form.vigor,
     mind: form.mind,
     endurance: form.endurance,
     dex: form.dex,
     intelligence: form.intelligence,
     faith: form.faith,
     arcane: form.arcane,
     weaponr1:form.weaponr1 ,
     weaponr2: form.weaponr2,
     weaponl1: form.weaponl1,
     weaponl2: form.weaponl2,
     talisman1: form.talisman1,
     talisman2: form.talisman2,
     talisman3: form.talisman3, 
     talisman4: form.talisman4, 
     armor: form.armor, 
     incantations: form.incantations,
     refImg: form.refImg,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div className="container p-5">
     <h3>{form.name}</h3>
     <form onSubmit={onSubmit}>
     <div className="flexbox">
     <div className="row ">
       <div className="form-group col-sm p-5">
       <img src={form.refImg} alt={form.refImg} /> 
       <label htmlFor="position"><b>Start Class</b></label>
       <p>{form.position}</p>
       </div>
       </div>
      
       <div className="row">
        <p><b>Stats:</b></p>
       <div className="form-group col-sm">
         <label htmlFor="level"><b>Min. Level</b></label>
         <p>{form.level}</p>
       </div>
       <div className="form-group col-sm">
         <label htmlFor="vigor"><b>Vigor</b></label>
         <p>{form.vigor}</p>
       </div>
       <div className="form-group col-sm">
         <label htmlFor="mind"><b>Mind</b></label>
         <p>{form.mind}</p>
       </div>
       <div className="form-group col-sm">
         <label htmlFor="endurance"><b>Endurance</b></label>
         <p>{form.endurance}</p>
       </div>
       <div className="form-group col-sm">
         <label htmlFor="str"><b>Strength</b></label>
         <p>{form.str}</p>
       </div>
       <div className="form-group col-sm">
         <label htmlFor="dex"><b>DEX</b></label>
         <p>{form.dex}</p>
       </div>
       <div className="form-group col-sm">
         <label htmlFor="intelligence"><b>INT</b></label>
         <p>{form.intelligence}</p>
       </div>
       <div className="form-group col-sm">
         <label htmlFor="faith"><b>Faith</b></label>
         <p>{form.faith}</p>
       </div>
       <div className="form-group col-sm">
         <label htmlFor="arcane"><b>Arcane</b></label>
         <p>{form.arcane}</p>
       </div>
       <div className="row">
      <div className="form-group col-sm">
         <label htmlFor="weaponr1"><b>Weapon R1</b></label>
         <p>{form.weaponr1}</p>
       </div> 
       <div className="form-group col-sm">
         <label htmlFor="weaponl1"><b>Weapon L1</b></label>
        <p>{form.weaponl1}</p>
         
       </div> </div>
       <div className="row">
      <div className="form-group col-sm">
         <label htmlFor="weaponr2"><b>Weapon R2</b></label>
         <p>{form.weaponr2}</p>
       </div> 
       <div className="form-group col-sm">
         <label htmlFor="weaponl2"><b>Weapon L2</b> </label>
         <p>{form.weaponl2}</p>
       </div></div>

       <div className="row">
      <div className="form-group col-sm">
         <label htmlFor="talisman1"><b>Talisman 1</b></label>
         <p>{form.talisman1}</p>
       </div> 
       <div className="form-group col-sm">
         <label htmlFor="talisman2"><b>Talisman 2</b></label>
         <p>{form.talisman2}</p>
       </div> </div>
       <div className="row">
      <div className="form-group col-sm">
         <label htmlFor="talisman3"><b>Talisman 3</b></label>
         <p>{form.talisman3}</p>
       </div> 
       <div className="form-group col-sm">
         <label htmlFor="talisman4"><b>Talisman 4</b></label>
         <p> {form.talisman4}</p>
       </div></div>
       <div className="form-group col-sm">
         <label htmlFor="armor"><b>Armor</b></label>
         <p>{form.armor}</p>
       </div>
       <div className="form-group">
         <label htmlFor="incantations"><b>Incantations</b></label>
         <p>{form.incantations}</p>
       </div> 
       </div>
       </div>
     </form>
     </div>
 );
}