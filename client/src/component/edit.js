import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


function Edit() {
    // const [update, setUpdate] = useState([]);
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
 
    // create function for API call

    const { id } = useParams("");
    const navigate = useNavigate();

    const getData = async () => {
        const res = await fetch(`http://localhost:5000/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const newData = await res.json();
        setData(newData);
    }

    useEffect(() => {
        getData();
    }, []);

    //  create function for updatation.

    const updateData = async (e) => {
        e.preventDefault();
        const { name, email, age, job, number } = data;
        const res2 = await fetch(`http://localhost:5000/edituser/${id}`, {
            method: 'PATCH',
            headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, age, job, number })
        });
        
        alert('Data updated successfuly.');
        navigate('/');
    }

    return (
        <div>
            <div style={{textAlign:'center'}}>
                <Link to={'/'}>
                    <i className="fa-solid fa-house"></i>
                </Link>
            </div>
            <div className='text-center mb-4'>
                <h2>Edit</h2>
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

                    <button type="submit" onClick={updateData} className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Edit;