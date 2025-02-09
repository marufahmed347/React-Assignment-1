import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    let Navigate = useNavigate();
    const handleClick = ()=>{
        Navigate("/")
    }
    return (
    <>
        <h1 className='mt-20 text-md text-center font-semibold'>This page is not exits, Please return About Page</h1>

        <button onClick={handleClick} className='btn bg-red-600 p-1 rounded text-white mx-auto block mt-4'>Back About Page</button>
    </>
    )
}

export default Error;