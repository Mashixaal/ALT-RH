import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup'

const Informations = () => {
    const initialValues = {
        fName: "",
        lName: "",
        birthDay: "12/04/2006",
        adrNumber: "",
        adrRoad: "",
        adrCity: "",
        adrZipCode: "",
        birthDay: "",
        phone: "",
        email: "",
    };
    const submit = (values) => {
        console.log(values);
    }
    const validSchema = yup.object().shape({
        fName: yup.string().required('Champs requis').max(50, 'maximum 50 caractères'),
        lName: yup.string().required('Champs requis').max(50, 'maximum 50 caractères'),
        birthDay: yup.date().nullable().required('Date requis').max(new Date(2006,4), 'Date doit être dans le passée'),
        adrNumber: yup.number().integer().required('Champs obligatoire').moreThan(-1, 'doit être positif'),
        adrRoad: yup.string().required('Champs requis').max(50, 'maximum 50 caractères'),
        adrCity: yup.string().required('Champs requis').max(50, 'maximum 50 caractères'),
        adrZipCode: yup.string().required('Champs obligatoire').min(5, 'exactement 5 chiffres').matches( /^([0-9]{5})*$/, 'Code postale invalide'),
        phone: yup.string().required('Champs obligatoire').matches( /^([0-9]{2,10})*$/, 'téléphone invalide'),
        email: yup.string().required('Champs obligatoire').email('email incorrect'),
        
      });
    return (
        <>
        <h2>Informations</h2>
        <hr />
        <Formik 
            initialValues={initialValues} 
            onSubmit={submit} 
            validationSchema={validSchema}
        >
            <Form action="">
            <div className="row">
                <div className="gauche col-md-5">
                    <div className="civ">
                        <Field name="civilite" type="radio" value="mr" checked/><label htmlFor="civilite">Mr</label>
                        <Field name="civilite" type="radio" value="ms"/><label htmlFor="civilite">Ms</label>
                        <Field name="civilite" type="radio" value="na"/><label htmlFor="civilite">N/A</label>
                    </div>
                    <br />
                    <div className="infos">
                        <Field name="fName" type="text" placeholder="Firstname"/>
                        <ErrorMessage name="fName" />
                        <br />
                        <Field name="lName" type="text" placeholder="Lastname"/>
                        <ErrorMessage name="lName" />
                        <br />
                        <label htmlFor="birthDay">Birthday</label><br />
                        <Field name="birthDay" type="date" />
                        <ErrorMessage name="birthDay" />
                    </div>
                </div>
                <div className="col-md-2">
                    <span className="vr"></span>
                </div>
                <div className="droite col-md-5 d-flex">
                    <b>Address</b><br />
                    <Field name="adrNumber" type="text" placeholder="Number"/>
                    <ErrorMessage name="adrNumber" /><br />
                    <Field name="adrRoad" type="text" placeholder="Road"/>
                    <ErrorMessage name="adrRoad" />
                    <br />
                    <Field name="adrCity" type="text" placeholder="City"/>
                    <ErrorMessage name="adrCity" />
                    <br />
                    <Field name="adrZipCode" type="text" placeholder="ZipCode"/>
                    <ErrorMessage name="adrZipCode" />
                </div>
            </div>
            <hr />
            <b>Contact</b><br />
            <div className="row">
                <div className="gauche col-md-6 w-50">
                    <Field name="phone" placeholder="Phone"/>
                    <ErrorMessage name="phone" />
                </div>
                <div className="gauche col-md-6 w-50">
                    <Field name="email" placeholder="Email"/>
                    <ErrorMessage name="email" />
                </div>
            </div>
            <hr />
            <button type="submit" className="btn btn-lg btn-primary mx-auto w-100">Soumettre</button>
            </Form>
        </Formik>
        </>
    )
}
export default Informations;