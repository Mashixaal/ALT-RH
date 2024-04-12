import React, { useState } from "react";

const Contact = () => {
  const [valeurFormulaire, setValeurFomulaire] = useState({
    nom: "",
    email: "",
    objet: "",
    message: ""
  });

  function handleChange( event ){
    
    let attributName = event.target.name;
    let valeur = event.target.value;
    setValeurFomulaire( {...valeurFormulaire, [attributName]:valeur } )
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(valeurFormulaire);
    alert(valeurFormulaire.nom);
  }
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom"> Nom : </label>
        <input type="text" name="nom" onChange={handleChange} /> <br />

        <label htmlFor="email"> email : </label>
        <input type="email" name="email" onChange={handleChange} /> <br />

        <label htmlFor="objet"> Objet : </label>
        <input type="text" name="objet" onChange={handleChange} /> <br />

        <label htmlFor="message"> message : </label>
        <textarea name="message" onChange={handleChange}></textarea> <br />

        <input type="submit" value="Envoyer ma demande de contact" />
      </form>
    </>
  );
};

export default Contact;