import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Toast } from "primereact/toast";
import './App.css'

const options = [
    { label: "C#", value: "C#" },
    { label: "ReactJs", value: "ReactJs" },
    { label: "Java", value: "Java" },
    { label: "C++", value: "C++" },
    { label: "Python", value: "Python" },
];

const App = () => {
    const [name, setName] = useState("");
    const [address, setaddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telephone, setTelephone] = useState("");
    const [note, setnote] = useState("");
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toast = useRef(null);

    const handleReset = () => {
        setName("");
        setaddress(" ");
        setEmail("");
        setPassword("");
        setTelephone("");
        setSelectedOption(options[1]);
    };

    const handleSubmit = () => {
        let isValid = true;

        // Validate name
        if (!/^[a-zA-Z]+$/.test(name)) {
            isValid = false;
            toast.current.show({
                severity: "error",
                summary: "Validation Error",
                detail: "Name should only contain characters",
                life: 3000,
            });
        }

        // Validate address
        if (!/\d/.test(address) || !/[a-zA-Z]/.test(address)) {
            isValid = false;
            toast.current.show({
                severity: "error",
                summary: "Validation Error",
                detail: "address address is invalid",
                life: 3000,
            });
        }


        // Validate email
        if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            toast.current.show({
                severity: "error",
                summary: "Validation Error",
                detail: "Email address is invalid",
                life: 3000,
            });
        }

        // Validate password
        if (password.length < 6 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
            isValid = false;
            toast.current.show({
                severity: "error",
                summary: "Validation Error",
                detail: "Password should be at least 6 characters long and have medium strength",
                life: 3000,
            });
        }

        // Validate telephone
        if (!/^\[9-0]+$/.test(telephone)) {
            isValid = false;
            toast.current.show({
                severity: "error",
                summary: "Validation Error",
                detail: "Telephone should only contain numbers",
                life: 3000,
            });
        }
        // Validate Notes
        if (!/\d/.test(note) || !/[a-zA-Z]/.test(note)) {
            isValid = false;
            toast.current.show({
                severity: "error",
                summary: "Validation Error",
                detail: "note is invalid",
                life: 3000,
            });
        }


        if (isValid) {
            toast.current.show({
                severity: "success",
                summary: "Success",
                detail: "Form submitted successfully",
                life: 3000,
            });
        }
    };

    return (

        <div className="p-fluid" >
            <Toast ref={toast} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ textAlign: 'center' }}> REGISTRATION FORM</h1>
                <hr style={{ width: '20%' }} />

            </div>
            <div className="p-field">
                <label htmlFor="name">Name:</label>
                <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} className="p-inputtext" />
            </div>
            <div className="p-field">
                <label htmlFor="address">Address:</label>
                <InputText id="address" value={address} onChange={(e) => setaddress(e.target.value)} className="p-inputtext" />
            </div>
            <div className="p-field">
                <label htmlFor="email">E-mail:</label>
                <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="p-field">
                <label htmlFor="password">Password:</label>
                <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="p-field">
                <label htmlFor="telephone">Telephone:</label>
                <InputText id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
            <label htmlFor="dropdown" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                COURSE:<br />
                <select id="dropdown" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} style={{ marginLeft: '10px', marginRight: '10px' }}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
            <div className="p-field">
                <label htmlFor="address">Notes:</label>
                <InputText id="note" value={note} style={{ padding: '40px ' }} onChange={(e) => setnote(e.target.value)} className="p-inputtext" /><br />
            </div>
            <div className="p-field" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button label="Reset" icon="pi pi-refresh" style={{ backgroundColor: 'blue', color: 'darkgreen', fontSize: '25px', padding: '2px 70px' }} onClick={handleReset} className="p-button-secondary" /><br />
                <Button label="Send" icon="pi pi-check" style={{ backgroundColor: 'blue', color: 'darkgreen', fontSize: '25px', padding: '2px 70px' }} onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default App;