import React, { useState } from "react";
import userStyle from "./createuser.module.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
  });
  let navigate=useNavigate();
  let handleinput = (e) => {
    console.log(e.target.value);
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data);
      if(data.name !=="" && data.email!=="" && data.phoneNo!=="" &&data.password!==""){
        try {
          axios.post("http://localhost:3000/employeee",data);
          toast.success("submit");
          
        } catch (error) {
          console.log("something went wrong");
          toast.error("error")
          
        }
        navigate("/allusers")
      }
      else{
        toast.error("bche data dal")
      }

  }
  return (
    <div id={userStyle.formWrapper}>
      <form id={userStyle.formContainer}>
        <Toaster/>
      <div className={userStyle.formGroup}>

        <label htmlFor="name">Name :</label>
        <input
          type="text"
          placeholder="Enter Your name"
          value={data.name}
          name="name"
          onChange={handleinput}
        />
        </div>
        <div className={userStyle.formGroup}>

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={data.email}
          onChange={handleinput}
        />
        </div>
        <div className={userStyle.formGroup}>
        
         <label htmlFor="phnno">Phone No :</label>
        <input
          type="number"
          placeholder="Enter Your phnno "
          name="phoneNo"
          value={data.phoneNo}
          onChange={handleinput}
        />
        </div>
        <div className={userStyle.formGroup}>

          <label htmlFor="pass">Password</label>
        <input
          type="password"
          placeholder="Enter Your password"
          name="password"
          value={data.password}
          onChange={handleinput}
        />
        </div>
      <div className={userStyle.formGroup}>

        <button onClick={handleSubmit}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateUsers;
