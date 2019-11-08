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
          alert(JSON.stringify(values, null, 2));
        },
      });  

    return (
        <form onSubmit={formik.handleSubmit}>
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
            <button type="submit">Submit</button>
        </form>
    )
}

const mapStateToProps = (state) => { 
    return { smurfVillage: state }; 
};

export default connect(mapStateToProps)(Form);