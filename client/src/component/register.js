import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    
    const [data, setData] = useState({
        name: '',
        email: '',
        age: '',
        job: '',
        number: ''

    });

    const Userdata = (e) => {
        const { name, value } = e.target;
        setData((newData) => {
            return {
                ...newData,
                [name]: value,
            }
        })
    }

    let addUser = async (e) => {
        e.preventDefault();
        const { name, email, age, job, number } = data;
        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, age, job, number
            })
        });
        const addData = await res.json();

        if (res.status === 422 || !addData) {
            window.alert("Plz fill the require field.");
        } else {
            window.alert("Registered successfully.");
            navigate('/'); 
        }
    }

    return (
        <div>
            <div style={{textAlign:'center'}}>
                <Link to={'/'}>
                    <i className="fa-solid fa-house"></i>
                </Link>
            </div>
            <div className='text-center mb-4'>
                <h2>Register</h2>
            </div>
            <div className='container'>
                <form >
                    <div className='row'>
                        <div className="mb-3 col-4">
                            <label className="form-label">Name</label>
                            <input value={data.name} name='name' onChange={Userdata} type="text" className="form-control" />
                        </div>
                        <div className="mb-3 col-4">
                            <label className="form-label">Email</label>
                            <input value={data.email} name='email' onChange={Userdata} type="text" className="form-control" />
                        </div>
                        <div className="mb-3 col-4">
                            <label className="form-label">Age</label>
                            <input value={data.age} name='age' onChange={Userdata} type="number" className="form-control" />
                        </div>
                        <div className="mb-3 col-4">
                            <label className="form-label">Job</label>
                            <input value={data.job} name='job' onChange={Userdata} type="text" className="form-control" />
                        </div>
                        <div className="mb-3 col-4">
                            <label className="form-label">Number</label>
                            <input value={data.number} name='number' onChange={Userdata} type="number" className="form-control" />
                        </div>
                    </div>

                    <button type="submit" onClick={addUser} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register;