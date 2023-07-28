import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Toast } from "primereact/toast";

const options = [
  { label: "C#", value: "C#" },
  { label: "ReactJs", value: "ReactJs" },
  { label: "Java", value: "Java" },
  { label: "C++", value: "C++" },
  { label: "Python", value: "Python" },
];

const Exam23 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toast = useRef(null);

  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setSelectedOption(options[0]);
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
    if (!/^\d+$/.test(telephone)) {
      isValid = false;
      toast.current.show({
        severity: "error",
        summary: "Validation Error",
        detail: "Telephone should only contain numbers",
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
    <div className="p-fluid">
      <Toast ref={toast} />
      <div className="p-field">
        <label htmlFor="name">Name</label>
        <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="email">Email</label>
        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="password">Password</label>
        <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="telephone">Telephone</label>
        <InputText id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="dropdown">Dropdown</label>
        <Dropdown id="dropdown" options={options} value={selectedOption} onChange={(e) => setSelectedOption(e.value)} />
      </div>
      <div className="p-field">
        <Button label="Reset" icon="pi pi-refresh" onClick={handleReset} className="p-button-secondary" />
        <Button label="Submit" icon="pi pi-check" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default App;