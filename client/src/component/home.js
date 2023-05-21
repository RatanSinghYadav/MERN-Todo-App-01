import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./style/home.css";

function Home() {
    const [data, setData] = useState([]);

    async function GetData() {
        const res = await fetch('https://mern-todo-app-x5yo.onrender.com/getdata', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const userData = await res.json();
        setData(userData);
    }

    useEffect(() => {
        GetData();
    }, [])

     const deleteUser = async(id)=> {
        const res2 = await fetch(`https://mern-todo-app-x5yo.onrender.com/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const deleteData = await res2.json()
        alert("Data Delete Successfully");
        GetData();
    }

    return (
        <div>
            <div className='container'>
                <div className='add_btn'>
                    <Link to={'/register'} >
                        <button type="button" className="btn btn-primary"><b>+</b> Add User</button>
                    </Link>
                </div>
            </div>
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col" className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.age}</td>
                                            <td>{e.job}</td>
                                            <td>{e.number}</td>
                                            <td className='d-flex'>
                                                <Link to={`view/${e._id}`}><button className='btn btn-success'>View</button></Link>
                                                <Link to={`edit/${e._id}`}><button className='btn btn-primary'>Edit</button></Link>
                                                <button onClick={()=>deleteUser(e._id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;