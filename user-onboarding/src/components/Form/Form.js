import React, {useState, useEffect} from 'react';

import axios from 'axios';

const Form = () => {
    const [post, setPost] = useState();

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    });

    return (
        <div className="form">

        </div>
    );
};

export default Form;