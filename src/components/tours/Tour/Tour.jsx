import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
export default function Tour({tour}) {
    return(
    <>
        
        <div>
        <h3><Link to={`/city/${tour.id}`}>{tour.name}</Link></h3>
        <img src={tour.image} alt="" />
        </div>
    </>
    )
    
  }