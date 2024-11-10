import React from 'react'
import { CgNotes } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const data=[
        {
            title: "All Tasks",
            icons: <CgNotes />,
            link: "/"
        },
        {
            title: "Important Tasks",
            icons: <FaStar />,
            link: "/importanttasks"
        },
        {
            title: "Incompleted Tasks",
            icons: <MdIncompleteCircle />,
            link: "/incompletetasks"
        },
        {
            title: "Completed Tasks",
            icons: <FaCheckCircle />,
            link: "/completetasks"
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
                <Link to={items.link} key={i} className='my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300'>
                    {items.icons} &nbsp; {items.title}
                </Link>
            ))}
        </div>
        <div><button className='bg-gray-600 w-full p-2 rounded'>Log Out</button></div>
    </>
  )
}

export default Sidebar