import React, {useState, useEffect} from 'react';

import * as yup from 'yup';
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

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    });

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is a required field"),
        email: yup.string().email("Incorrect email format").required("Email is a required field"),
        password: yup.string().required("Password is a correct field"),
        terms: yup.boolean().oneOf([true, "on"]).test("is-true", "Must agree to our terms", val => val === true)
    });
    
    useEffect(() => {
        formSchema.isValid(formState).then(isValid => {
            setButtonDisabled(!isValid);
        });
    }, [formState]);

    const handleChanges = (event) => {
        event.persist(); // this is necessary to maintain the event object so that we can pass it to our validation function

        const newFormData = {
            ...formState,
            [event.target.name]: event.target.name === 'terms' ? event.target.checked : event.target.value
        };

        validateChange(event);

        setFormState(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                // display our data
                setPost(res.data);

                // reset our form state
                setFormState({
                    name: "",
                    email: "",
                    password: "",
                    terms: false
                });

                setServerError(null);
            })
            .catch(err => {
                setServerError("Pardon the mess! We'll have it cleaned up in a jiffy!");
            });
    };

    const validateChange = (event) => {

        // inline validation
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(isValid => {
                setErrors({
                    ...errors,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [event.target.name]: err.errors[0]
                });
            });
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChanges} />
                    {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                </label>
                <label htmlFor="email">
                    Email
                    <input type="text" id="email" name="email" value={formState.email} onChange={handleChanges} />
                    {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
                </label>
                <label htmlFor="password">
                    Password
                    <input type="text" id="password" name="password" value={formState.password} onChange={handleChanges} />
                    {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
                </label>
                <label htmlFor="terms" className="terms">
                    <input type="checkbox" id="terms" name="terms" checked={formState.terms} onChange={handleChanges} />
                    Terms of Service
                    {errors.terms.length > 0 ? <p className="error">{errors.terms}</p> : null}
                </label>
                <button type="submit" disabled={buttonDisabled}>Submit</button>
            </form>
            <pre>{JSON.stringify(post)}</pre>
        </div>
    );
};

export default Form;