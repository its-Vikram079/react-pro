import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import toast,{Toaster} from 'react-hot-toast';
import userStyle from '../createUsers/createuser.module.css'
import { useNavigate, useParams } from 'react-router-dom';

const EditUsers = () => {
  let [data,setData]=useState({
    name:"",
    email:"",
    password:"",
    phoneNo:"",

  });
  let navigate =useNavigate()
  let {id}=useParams();
  console.log(id);
  useEffect(() => {
   async function fetchData(){
    let {data}= await axios.get(`http://localhost:3000/employeee/${id}`);
    console.log(data); 
    setData(data);
   } 
   fetchData();

  }, []);
  let handleinput=(e)=>{
     console.log(e.target.value);
     let {name,value}=e.target;
     setData({...data,[name]:value});
  }
  let formUpdate=(e)=>{
    e.preventDefault();
    console.log(data);
    try {
      axios.put(`http://localhost:3000/employeee/${id}`,data);
      toast.success("successfully updated");
      setData({
        name:"",
        password:"",
        email:"",
        phoneNo:"",
      })
      // navigate("/allusers")
      window.location.assign("/allusers")

    } 
    catch (error) {
      console.log("error");
      
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

        <button onClick={formUpdate} >Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditUsers
