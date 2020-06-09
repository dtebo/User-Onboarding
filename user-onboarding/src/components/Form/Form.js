import React, {useState, useEffect} from 'react';

import axios from 'axios';

import './Form.css';

const Form = () => {
    const [post, setPost] = useState();

    const [serverError, setServerError] = useState("");

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const formSchema = yup.object().shape({
        name: "",
        email: "",
        password: "",
        terms: ""
    });
    
    const handleChanges = (event) => {
        setFormState({
            ...formState, // pull out the existing formState
            [event.target.name]: event.target.name === 'terms' ? event.target.checked : event.target.value // update the state
        });
    };

    const handleSubmit = (event) => {

    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChanges} />
                </label>
                <label htmlFor="email">
                    Email
                    <input type="text" id="email" name="email" value={formState.email} onChange={handleChanges} />
                </label>
                <label htmlFor="password">
                    Password
                    <input type="text" id="password" name="password" value={formState.password} onChange={handleChanges} />
                </label>
                <label htmlFor="terms" className="terms">
                    <input type="checkbox" id="terms" name="terms" checked={formState.terms} onChange={handleChanges} />
                    Terms of Service
                </label>
                <button type="submit" disabled={buttonDisabled}>Submit</button>
            </form>
        </div>
    );
};

export default Form;