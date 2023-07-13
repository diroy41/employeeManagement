import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import axios from "axios";

const ListEmployeeComponent = () => {
    const [employeeArray, setEmployeeArray] = useState([]);

    useEffect(() => {
        getAllEmployee();
    }, []);

    function getAllEmployee() {
        EmployeeService.getAlEmployee()
            .then((res) => {
                setEmployeeArray(res.data);
                console.log(res);
            })
            .catch((e) => console.log(e));
    }

    function deleteEmployee(e, id) {
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
            .then(() => {
                getAllEmployee(); // Refresh the employee list after deletion
            })
            .catch((e) => console.log(e));
    }

    return (
        <div className="container d-flex flex-column justify-content-between bg-gradient">
            <div className="text-center my-4">
                <h1 className="display-4 text-white">Employee Management System</h1>
                <Link to="/add-employee" className="btn btn-primary mt-4">
                    Add Employee
                </Link>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped bg-white shadow w-100">
                    <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employeeArray.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <div className="btn-group">
                                    <Link
                                        to={`/add-employee/${employee.id}`}
                                        className="btn btn-info"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={(e) => {
                                            deleteEmployee(e, employee.id);
                                        }}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <footer className="mt-4 text-center">
        <span className="text-white">
          Created By Ahmed Ali &copy; {new Date().getFullYear()}
        </span>
            </footer>
        </div>
    );
};

export default ListEmployeeComponent;

