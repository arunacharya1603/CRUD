import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'
import axios from "axios";
// import { url } from "../../client/src/constant";

const url="https://crud-server-ewkx.onrender.com"

// Use BASE_URL in your code


function UpdateUser () {
    const {id} = useParams()
    const [name, setName] =useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`${url}/getUser/`+id)
        .then(res => {console.log(res)
            setName(res.data.name)
            setEmail(res.data.email)
            setAge(res.data.age)
        })
        .catch(err => console.log(err))


    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put(`${url}/updateUser/` +id,{name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')

        })
        .catch((error)=>console.log('Error', error));
    }



    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={Update}>
            <h2>Update Users</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label><br/>
                    <input type="text" placeholder="Enter Name" className="form-control"
                        value={name}  onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label><br/>
                    <input type="email" placeholder="Enter Email" className="form-control"
                        value={email}  onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label><br/>
                    <input type="text" placeholder="Enter Age" className="form-control"
                        value={age}  onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>
        </div>
    )
}
export default UpdateUser;