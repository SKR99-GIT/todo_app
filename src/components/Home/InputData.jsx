import React, { useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import axios from 'axios';

const InputData = ({InputDiv, setInputDiv, UpdatedData, setUpdatedData}) => {
  const headers = {
    id:localStorage.getItem("id"), 
    authorization: `Bearer ${localStorage.getItem("token")}`
  };
 const [Data, setData] = useState({title:"", desc:""});

 useEffect(() => {
   setData({title: UpdatedData.title, desc: UpdatedData.desc})
 }, [UpdatedData])
 
 const change = (e) => {
  const {name, value} = e.target;
  setData({...Data, [name]: value});
 };

  const submitData = async () => {
    if (Data.title === "" || Data.desc === "") {
      alert("All feilds are required")
    }else{
      await axios.post("http://localhost:1000/api/v2/create-task", Data, {headers});
      setData({title:"", desc:""});
      setInputDiv("hidden")
    }
 }
 const updateTask = async () => {
  if (Data.title === "" || Data.desc === "") {
    alert("All feilds are required")
  }else{
    await axios.put(`http://localhost:1000/api/v2/update-task/${UpdatedData.id}`, Data, {headers});
    setUpdatedData({id:"", title:"", desc:""});
    setData({title:"", desc:""});
    setInputDiv("hidden")
  }
 }
  return (
    <>
    <div className={`${InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
    <div className={`${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className='w-2/6 bg-gray-900 p-4 rounded'>
        <div className='flex justify-end'>
             <button className='text-2xl my-2' onClick={()=>{setInputDiv("hidden"); setData({title:"", desc:""}); setUpdatedData({id:"", title:"", desc:""}); }}><RxCross2 /></button>
        </div>
            <input type="text" placeholder='Title' name='title' className='px-3 py-2 rounded w-full bg-gray-700' value={Data.title} onChange={change}/>

            <textarea id="" cols="30" rows="10" placeholder='Enter your description' name='desc' className='px-3 py-2 rounded w-full bg-gray-700 my-3' value={Data.desc} onChange={change}></textarea>

            {UpdatedData.id === "" ? 
            <button className='px-3 py-2 bg-yellow-400 rounded text-xl text-black font-semibold' 
            onClick={submitData}>Submit</button> :
            <button className='px-3 py-2 bg-purple-600 rounded text-xl text-black font-semibold' 
            onClick={updateTask}>Update</button>
            }
        </div>
    </div>
    </>
  )
}

export default InputData