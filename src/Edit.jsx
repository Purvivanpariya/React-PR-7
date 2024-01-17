import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./App.css";

function Edit() {
  const { id } = useParams();
  const nevigate = useNavigate("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [record, setRecord] = useState([]);

  // const userid = Math.floor(Math.random() * 10000)
  const handleSubmit = (e) => {
    nevigate("/");
    e.preventDefault();
    if (!name || !email || !password) {
      alert("All field are required");
      return false;
    }
    let updateRecord = record.map((val) => {
      if (val.userid == id) {
        return {
          ...val,
          name: name,
          email: email,
          password: password,
        };
      }
      return val;
    });
    setRecord(updateRecord);
    localStorage.setItem("user", JSON.stringify(updateRecord));
    alert("Record update");
    nevigate("/");
  };

  // let obj = {
  //   name,email,password,userid
  // }
  // let all = [...record,obj]
  // localStorage.setItem('user',JSON.stringify(all));
  // setRecord(all);
  // setName('')
  // setEmail('')
  // setPassword('')

  useEffect(() => {
    let all = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];
    setRecord(all);
    let single = all.find((val) => val.userid == id);
    setName(single.name);
    setEmail(single.email);
    setPassword(single.password);
  }, []);

  return (
    <>
      <h1
        className="text-center mb-5 pt-5"
        style={{ color: "rgba(255, 255, 255, 0.800)" }}
      >
        Add Page
      </h1>

      <form className="login-form mx-auto mb-5">
        <div>
          <label for="name">Name </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <label for="email">Email </label>
          <input
            id="email"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label for="password">Password </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button class="btn btn--form" type="button" onClick={handleSubmit}>
          Log in
        </button>
      </form>

      <center>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            padding: "15px",
            marginTop: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.405)",
            border: "1px solid transparent",
            borderRadius: "15%",
          }}
          to={"/"}
        >
          View
        </Link>
      </center>
    </>
  );
}

export default Edit;
