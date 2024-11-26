import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';

const Cards = ({home, setInputDiv, data, setUpdatedData}) => {
    const headers = {
        id:localStorage.getItem("id"), 
        authorization: `Bearer ${localStorage.getItem("token")}`
      };
   const handleComTasks = async (id) => {
    try {
        const response = await axios.put(`http://localhost:1000/api/v2/update-com-task/${id}`, 
        {},
        {headers});
        alert(response.data.message);
        
    } catch (error) {
        console.log(error);
    }
   }
   const handleImpTasks = async (id) => {
    try {
        const response = await axios.put(`http://localhost:1000/api/v2/update-imp-task/${id}`, 
        {},
        {headers});
        console.log(response);    
    } catch (error) {
        console.log(error);
    }
   }
   const handleEdit = (id,title,desc) => {
    setInputDiv("fixed");
    setUpdatedData({id:id, title:title, desc:desc})
   }
   const deleteTasks = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:1000/api/v2/delete-task/${id}`, 
        {headers});
        alert(response.data.message);   
    } catch (error) {
        console.log(error);
    }
   }

  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {data && 
        data.map((items, i) => (
            <div className='flex flex-col justify-between bg-gray-700 rounded-md p-4 hover:rounded-2xl transition-all duration-300 hover:bg-gray-800'>
            <div>
                <h3 className='text-xl text-gray-300 font-semibold'>{items.title}</h3>
                <p className='text-gray-400 my-2'>{items.desc}</p>
            </div>
            <div className='mt-4 w-full flex items-center'>
                    <button className={`${items.complete === false ? "bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300" : "bg-green-500  hover:bg-green-600 hover:scale-105 transition-all duration-300" }  p-2 rounded`}
                    onClick={()=>handleComTasks(items._id)}
                    >
                    {items.complete === true ? "Completed" : "In-Completed"}
                    </button>
                    <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                        <button className='hover:scale-125 transition-all duration-300' onClick={()=>handleImpTasks(items._id)}>
                            {items.important === false ? (<CiStar />) : (<FaStar className='text-yellow-400'/>)}
                        </button>

                        {home !== "false" && <button className='hover:scale-125 transition-all duration-300' onClick={()=>handleEdit(items._id, items.title, items.desc)}><BiEdit /></button>}

                        <button className='hover:scale-125 transition-all duration-300' onClick={()=>deleteTasks(items._id)}><MdDeleteOutline /></button>
                    </div>
            </div>
            </div>
        ))}
        {home === "true" && (
            <button className='flex flex-col justify-center items-center bg-gray-800 rounded-md p-4 text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-300' onClick={()=>setInputDiv("fixed")}> <IoMdAddCircleOutline className='text-5xl' />
            <h2 className='text-2xl mt-4'>Add Task</h2>
        </button>
        )}
    </div>
  )
}

export default Cards