import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from "../actions";
import { useFormik } from 'formik';

const Form = (props) => {
    
    const formik = useFormik({
        initialValues: {      
          name: '',
          age: '',
          height: '',
          id: ''
        },
        onSubmit: values => {
          let smurf = JSON.stringify(values, null, 2);
          props.dispatch(postSmurfs(smurf));
        },
      });  

    return (
        <form onSubmit={formik.handleSubmit} style={{display: "flex", flexDirection: "column", width: "25rem", alignItems: "center", margin: "auto"}}>
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <label htmlFor="age">Age: </label>
            <input
                id="age"
                name="age"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.age}
            />
            <label htmlFor="height">Height: </label>
            <input
                id="height"
                name="height"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.height}
            />
            <label htmlFor="id">ID: </label>
            <input
                id="id"
                name="id"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.id}
            />
            <button type="submit">Add Smurf</button>
        </form>
    )
}

export default connect(state=>state)(Form);