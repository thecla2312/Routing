import React from 'react'
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container-md about-section text-center">
        <h1>oops, page not found</h1>
        <link to="/">
            <button className="btn btn-success">Go back to Homepage</button>
        </link>
    </div>
 ) 
}

export default Error;