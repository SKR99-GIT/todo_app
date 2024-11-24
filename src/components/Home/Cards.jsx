import React from 'react'
import { CiStar } from "react-icons/ci";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from 'react';

const Cards = ({home, setInputDiv, data}) => {

   const [ImportantButton, setImportantButton] = useState("Incomplete")

  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
        {data && 
        data.map((items, i) => (
            <div className='flex flex-col justify-between bg-gray-800 rounded-sm p-4'>
            <div>
                <h3 className='text-xl font-semibold'>{items.title}</h3>
                <p className='text-gray-300 my-2'>{items.desc}</p>
            </div>
            <div className='mt-4 w-full flex items-center'>
                    <button className={`${items.status === "Complete" ? "bg-green-500" : "bg-orange-500" }  p-2 rounded`}>
                        {items.status}
                    </button>
                    <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                        <button><CiStar /></button>
                        <button><BiEdit /></button>
                        <button><MdDeleteOutline /></button>
                    </div>
            </div>
            </div>
        ))}
        {home === "true" && (
            <button className='flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:cursor-pointer hover:scale-105 transition-all duration-300' onClick={()=>setInputDiv("fixed")}> <IoMdAddCircleOutline className='text-5xl' />
            <h2 className='text-2xl mt-4'>Add Task</h2>
        </button>
        )}
    </div>
  )
}

export default Cards