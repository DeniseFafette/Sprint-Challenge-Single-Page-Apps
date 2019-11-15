import React, { useState } from "react";
import { withFormik, Form, Field } from 'formik';

export default function SearchForm() {
 
  return (
    <section className="search-form">
      <Form />
      <Field
        type="text"
        name="name"
        placeholder="Name"
      />
      <Field
        type="text"
        name="species"
        placeholder="Species"
      />

     // Add a search form here
    </section>
  );
}
