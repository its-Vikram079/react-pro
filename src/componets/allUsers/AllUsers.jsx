import axios from 'axios'
import React, { useEffect, useState } from 'react'
import alluserStyle from './allusers.module.css'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const AllUsers = () => {
  let [userdata,setData]=useState();
  useEffect(()=>{
    async function fetchData(){
      let {data}=await axios.get("http://localhost:3000/employeee")
      setData(data);
    }
fetchData();
  },[]);
  let handleDelete=(id)=>{
    try {
      axios.delete(`http://localhost:3000/employeee/${id}`)
      toast.success("successfuly delete")
      window.location.reload();
    } catch (error) {
      console.log("error");
    }

  }
  return (
    <div id={alluserStyle.cardWrapper} >
      {
        userdata?.map((x)=>{
  let {name,id,password,phoneNo,email}=x;
  return(
    <section key={id} id={alluserStyle.cardContainer}>
      <h1>Name:{name}</h1>
      <p>Email:{email}</p>
      <p>PhoneNo:{phoneNo}</p>
      <article className={alluserStyle.btnContainer}>
        <button><Link to={`/edit/${id}`}>Edit</Link></button>
        <button onClick={()=>{
          handleDelete(id)
        }}>Delete</button>
      </article>

    </section>
    
  )
 



        })
      }
      
    </div>
  )
}

export default AllUsers
