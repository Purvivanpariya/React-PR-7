import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function View() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    let all = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];
    setRecord(all);
  }, []);

  const deleteData = (id) =>{
    let deleteRecord = record.filter((val)=>{
      return val.userid != id
    })
    setRecord(deleteRecord)
    localStorage.setItem('user',JSON.stringify(deleteRecord))
    alert('User Deleted')
  }

  return (
    <center>
      <h1 className="pt-5" style={{color:'rgba(255, 255, 255, 0.800)'}}>View Page</h1>
      <div className="container">
       
        
          <table className="my-5">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
            record.map((val)=>{
              return(
                <tr>
                  <td>{val.userid}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>
                    <button className="bg-danger text-white border-0 p-1 px-2 me-3" onClick={()=>deleteData(val.userid)}><MdDelete /></button>
                    <Link className="bg-primary text-white border-0 py-2 px-2 me-3"  to={`/edit/${val.userid}`}><FaRegEdit /></Link>
                  </td>
                </tr>
              )
            })
          }
            </tbody>
          </table>
        </div>
     
      <Link style={{color:'white',textDecoration:'none',padding:'15px',marginTop:'10px',backgroundColor:'rgba(255, 255, 255, 0.405)'}} to={"/add"}>Add</Link>
    </center>

  );
}

export default View;
