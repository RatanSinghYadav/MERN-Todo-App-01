import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import img from './style/profile.jpg';
import './style/view.css';

function View() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const { id } = useParams("");

    const getData = async () => {
        const res = await fetch(`https://mern-todo-app-x5yo.onrender.com/getuser/${id}`, {
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


    const deleteUser = async(id)=> {
        const res2 = await fetch(`https://mern-todo-app-x5yo.onrender.com/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const deleteData = await res2.json();
        console.log(deleteData);
        alert("Data Delete Successfully");
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
                <h2>Wellcome {data.name}</h2>
            </div>

            <div className='container profile'>
                <div className='row'>
                    <div className='col-md-6'><img src={img} alt='' className='img' /></div>
                    <div className='col-md-6'>
                        <Link to={`/edit/${data._id}`}><button className='btn btn-primary'>Edit</button></Link>
                        <button onClick={()=>deleteUser(data._id)} className='btn btn-danger'>Delete</button>
                    </div>
                    <div className='col-md-6'><b>Name:</b>{data.name}</div>
                    <div className='col-md-6'><b>Mobile:</b>{data.number}</div>
                    <div className='col-md-6'><b>Age:</b>{data.age}</div>
                    <div className='col-md-6'><b>Job:</b>{data.job}</div>
                    <div className='col-md-6'><b>Email:</b>{data.email}</div>
                </div>
            </div>
        </div>
    )
}

export default View;