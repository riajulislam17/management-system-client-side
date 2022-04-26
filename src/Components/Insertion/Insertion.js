import React, { useState } from 'react';
import FileUpload from '../FileUpload/FileUpload';

const Insertion = () => {
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail] = useState('')

    const handleEmployee = e => {
        const newEmployee = { firstName, lastName, email };
        const url = 'http://localhost:8000/api/users/insert';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEmployee)
        }, [])
            .then(res => res.json())
            .then(data => {
                if (data.createdAt) {
                    e.target.reset();
                }
            })
        e.preventDefault();
        window.location.reload(false)
    }

    return (
        <div>
            <h1 className="text-center mb-5">Add Employee</h1>
            <form onSubmit={handleEmployee}>
                <div className="mb-1">
                    <label className="fw-bold form-label">First Name</label>
                    <input type="text" onBlur={e => setFirstName(e.target.value)} className="form-control border border-dark" placeholder="First Name" required />
                </div>
                <div className="mb-1">
                    <label className="fw-bold form-label">Last Name</label>
                    <input type="text" onBlur={e => setLastName(e.target.value)} className="form-control border border-dark" placeholder="Last Name" required />
                </div>
                <div className="mb-1">
                    <label className="fw-bold form-label">Email Address</label>
                    <input type="email" onBlur={e => setEmail(e.target.value)} className="form-control border border-dark" placeholder="email@example.com" required />
                </div>
                <div className="mb-1">
                    <button type="submit" className="form-control btn btn-dark fw-bold mt-3"><i className="fas fa-user-plus"></i></button>
                </div>
            </form>
            <strong><h3 className="text-center my-2">or</h3></strong>

            <FileUpload></FileUpload>
        </div>
    );
};

export default Insertion;