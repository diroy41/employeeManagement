import React, { useState, useEffect } from 'react';
import EmployeeService from '../service/EmployeeService';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const employeeData = { firstName, lastName, email };

    function saveEmployee(e) {
        e.preventDefault();
        if (employeeData.firstName !== "" && employeeData.lastName !== "" && employeeData.email !== "") {
            if (id) {
                EmployeeService.updateEmployee(id, employeeData)
                    .then(navigate("/employee"))
                    .catch(e => console.log(e));

            } else {
                EmployeeService.saveEmployee(employeeData)
                    .then(navigate("/employee"))
                    .catch(e => console.log(e));
            }
        } else {
            alert("Fill all inputs!");
        }
    }

    function title() {
        if (id) {
            return "Update Employee";
        } else {
            return "Add Employee";
        }
    }

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id)
                .then(res => {
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setEmail(res.data.email);
                })
                .catch(e => console.log(e));
        }
    }, [id]);

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center mt-5'>
            <div className='card col-md-8'>
                <h2 className='text-center'>{title()}</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <input className='form-control'
                                   value={firstName}
                                   onChange={(e) => setFirstName(e.target.value)}
                                   type="text"
                                   placeholder='Enter First Name'
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input className='form-control'
                                   value={lastName}
                                   onChange={(e) => setLastName(e.target.value)}
                                   type="text"
                                   placeholder='Enter Last Name'
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <input className='form-control'
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   type="email"
                                   placeholder='Enter Email'
                            />
                        </div>
                        <button onClick={(e) => saveEmployee(e)} className='btn btn-success'>Save</button>{" "}
                        <Link to={"/employee"} className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent;

