import React from "react"
import { Formik } from "formik";
import { TextField } from "@material-ui/core"
import './App.css';

const App = (props) => {
  return (
    <Formik initialValues={{ name: 'vlad' }} onSubmit={data => {
      console.log(data)
    }}>
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
        </form>
      )}
    </Formik>
  );
}

export default App;
