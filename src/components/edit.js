import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
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
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
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
     <div className="row">
       <div className="form-group col-sm">
         <tr>
       <img className="" src={form.refImg} alt={form.refImg}/>       </tr> 
       </div>
       </div>
      <div className="row">
       <div className="form-grou col-sm">
         <label htmlFor="position">Start Class</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       </div>
       <div className="row">
       <div className="form-group col-sm">
         <label htmlFor="level">Min. Level</label>
         <input
           type="number"
           className="form-control"
           id="level"
           value={form.level}
           onChange={(e) => updateForm({ level: e.target.value })}
         />
       </div>
       <div className="form-group col-sm">
         <label htmlFor="vigor">Vigor</label>
         <input
           type="number"
           className="form-control"
           id="vigor"
           value={form.vigor}
           onChange={(e) => updateForm({ vigor: e.target.value })}
         />
       </div>
       <div className="form-group col-sm">
         <label htmlFor="mind">Mind</label>
         <input
           type="number"
           className="form-control"
           id="mind"
           value={form.mind}
           onChange={(e) => updateForm({ mind: e.target.value })}
         />
       </div>
       <div className="form-group col-sm">
         <label htmlFor="endurance">Endurance</label>
         <input
           type="number"
           className="form-control"
           id="endurance"
           value={form.endurance}
           onChange={(e) => updateForm({ endurance: e.target.value })}
         />
       </div>
       <div className="form-group col-sm">
        <label htmlFor="str">Strength</label>
        <input
          type="number"
          className="form-control"
          id="str"
          value={form.str}
          onChange={(e) => updateForm({ str: e.target.value })}
        />
      </div>
       <div className="form-group col-sm">
         <label htmlFor="dex">DEX</label>
         <input
           type="number"
           className="form-control"
           id="dex"
           value={form.dex}
           onChange={(e) => updateForm({ dex: e.target.value })}
         />
       </div>
       <div className="form-group col-sm">
         <label htmlFor="intelligence">INT</label>
         <input
           type="number"
           className="form-control"
           id="intelligence"
           value={form.intelligence}
           onChange={(e) => updateForm({ intelligence: e.target.value })}
         />
       </div>
       <div className="form-group col-sm">
         <label htmlFor="faith">Faith</label>
         <input
           type="number"
           className="form-control"
           id="faith"
           value={form.faith}
           onChange={(e) => updateForm({ faith: e.target.value })}
         />
       </div>
       <div className="form-group col-sm">
         <label htmlFor="arcane">Arcane</label>
         <input
           type="number"
           className="form-control"
           id="arcane"
           value={form.arcane}
           onChange={(e) => updateForm({ arcane: e.target.value })}
         />
       </div>
        
      <div className="row">
      <div className="form-group col-sm">
         <label htmlFor="weaponr1">Weapon R1</label>
         <input
           type="text"
           className="form-control"
           id="weaponr1"
           value={form.weaponr1}
           onChange={(e) => updateForm({ weaponr1: e.target.value })}
         />
       </div> 
       <div className="form-group col-sm">
         <label htmlFor="weaponl1">Weapon L1</label>
         <input
           type="text"
           className="form-control"
           id="weaponl1"
           value={form.weaponl1}
           onChange={(e) => updateForm({ weaponl1: e.target.value })}
         />
       </div> </div>
       <div className="row">
      <div className="form-group col-sm">
         <label htmlFor="weaponr2">Weapon R2</label>
         <input
           type="text"
           className="form-control"
           id="weaponr2"
           value={form.weaponr2}
           onChange={(e) => updateForm({ weaponr2: e.target.value })}
         />
       </div> 
       <div className="form-group col-sm">
         <label htmlFor="weaponl2">Weapon L2</label>
         <input
           type="text"
           className="form-control"
           id="weaponl2"
           value={form.weaponl2}
           onChange={(e) => updateForm({ weaponl2: e.target.value })}
         />
       </div></div>

       <div className="row">
      <div className="form-group col-sm">
         <label htmlFor="talisman1">Talisman 1</label>
         <input
           type="text"
           className="form-control"
           id="talisman1"
           value={form.talisman1}
           onChange={(e) => updateForm({ talisman1: e.target.value })}
         />
       </div> 
       <div className="form-group col-sm">
         <label htmlFor="talisman2">Talisman 2</label>
         <input
           type="text"
           className="form-control"
           id="talisman2"
           value={form.talisman2}
           onChange={(e) => updateForm({ talisman2: e.target.value })}
         />
       </div> </div>
       <div className="row">
      <div className="form-group col-sm">
         <label htmlFor="talisman3">Talisman 3</label>
         <input
           type="text"
           className="form-control"
           id="talisman3"
           value={form.talisman3}
           onChange={(e) => updateForm({ talisman3: e.target.value })}
         />
       </div> 
       <div className="form-group col-sm">
         <label htmlFor="talisman4">Talisman 4</label>
         <input
           type="text"
           className="form-control"
           id="talisman4"
           value={form.talisman4}
           onChange={(e) => updateForm({ talisman4: e.target.value })}
         />
       </div></div>
       <div className="form-group col-sm">
         <label htmlFor="armor">Armor</label>
         <input
           type="text"
           className="form-control"
           id="armor"
           value={form.armor}
           onChange={(e) => updateForm({ armor: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="incantations">Incantations</label>
         <input
           type="text"
           className="form-control"
           id="incantations"
           value={form.incantations}
           onChange={(e) => updateForm({ incantations: e.target.value })}
         />
       </div> 
       <div className="form-group">
         <label htmlFor="refImg">Image link (use imgur.com or other image host)</label>
         <input
           type="text"
           className="form-control"
           id="refImg"
           value={form.refImg}
           onChange={(e) => updateForm({ refImg: e.target.value })}
         />
       </div> 
       </div>
       <div className="mx-auto mt-5">
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         /></div></div>
     </form>
     </div>
 );
}