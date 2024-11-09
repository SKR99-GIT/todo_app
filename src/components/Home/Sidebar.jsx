import React from 'react'
import { CgNotes } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


const Sidebar = () => {
    const data=[
        {
            title: "All Tasks",
            icons: <CgNotes />
        },
        {
            title: "Important Tasks",
            icons: <FaStar />
        },
        {
            title: "Incompleted Tasks",
            icons: <MdIncompleteCircle />
        },
        {
            title: "Completed Tasks",
            icons: <FaCheckCircle />
        },
    ];
  return (
    <>
        <div>
            <h2 className='text-xl font-semibold'>The Task Manager</h2>
            <h4 className='mb-1 text-gray-400'>skr1999@gamil.com</h4>
            <hr />
        </div>
        <div>
            {data.map((items, i) => (
                <div className='my-2 flex items-center'>
                    {items.icons} &nbsp; {items.title}
                </div>
            ))}
        </div>
        <div><button className='bg-gray-600 w-full p-2 rounded'>Log Out</button></div>
    </>
  )
}

export default Sidebar