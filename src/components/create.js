import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./main.css";

export default function Create() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",vigor:"",mind: "",endurance: "",dex: "",intelligence: "",faith:"", arcane: "",weaponr1: "", weaponr2:"", weaponl1: "",weaponl2: "",
   talisman1:"", talisman2: "", talisman3:"", talisman4: "", armor: "", incantations: "",refImg: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://54.167.59.252:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", position: "", level: "", vigor:"",mind: "",endurance: "",dex: "",intelligence: "",faith:"", arcane: "",weaponr1: "", weaponr2:"", weaponl1: "",weaponl2: "",
   talisman1:"", talisman2: "", talisman3:"", talisman4: "", armor: "", incantations: "",refImg: "",
});
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
 
    <div className="container p-5">
    <h3>New Class</h3>
    <form onSubmit={onSubmit}>

     <div className="row">
    <div className="form-group col-sm">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
      </div>
      <div className="form-grou col-sm">
        <label htmlFor="position">Start Class</label>
        <select
          type="text"
          className="form-control"
          id="position"
          value={form.position}
          onChange={(e) => updateForm({ position: e.target.value })}
        ><option>Hero</option>
        <option>Bandit</option>
        <option>Astrologer</option>
        <option>Warrior</option>
        <option>Prisioner</option>
        <option>Confessor</option>
        <option>Wretch</option>
        <option>Vagabon</option>
        <option>Prophet</option>
        <option>Samurai</option>
        </select>
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
       <div className="row">
      <div className="form-group col-sm w-25 p-3">
      <img src={form.refImg} alt={form.name}/>        
      </div>
      </div>
       </div>
       <div className="mx-auto mt-5">
       <div className="form-group">
         <input
           type="submit"
           value="Create Class"
           className="btn btn-primary"
         />
       </div></div>
     </form>
   </div>
 );
}