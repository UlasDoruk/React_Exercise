import React from "react";
import { useEffect, useState } from "react";

function InputEx({ addContacts, contacts }) {
  const [form, setForm] = useState({ name: "" , phone: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.phone === "") {
      return false;
    }

    addContacts([...contacts,form]);
    setForm({ name: "", phone: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="name" placeholder="Name" onChange={onChangeInput}
      //  value="name"
      ></input>
      <br></br>
      <input
        name="phone"
        placeholder="Phone Number"
        onChange={onChangeInput}
        // value="phone"
      ></input>
      <br></br>
      <button >Add</button>
    </form>
  );
}

export default InputEx;
