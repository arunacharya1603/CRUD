import React from "react";
import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
// import {url} from "../../client/src/constant"

const url="http://localhost:3001"

// Use BASE_URL in your code



function CreateUser () {
    const [name, setName] =useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post(`${url}/createUser`,{name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')

        })
        .catch((error)=>console.log('Error', error));

    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form  onSubmit={Submit}>
            <h2>Add Users</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label><br/>
                    <input type="text" placeholder="Enter Name" className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label><br/>
                    <input type="email" placeholder="Enter Email" className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label><br/>
                    <input type="text" placeholder="Enter Age" className="form-control"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
        </div>
        
    )
}

export default CreateUser;
