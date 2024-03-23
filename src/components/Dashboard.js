import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { CreateUserContext } from '../context/CreateUserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  let [currentuser,error,userStatus,data,CreateUser]=useContext(CreateUserContext)
    let [data1,setdata]=useState({});
    const navigate=useNavigate()
    let userObj=currentuser; 
    const valuesArray = Object.values(data);  // Destructuring assignment

// Create a new object with specific properties you want
    function handleMonday()
     {
        console.log(valuesArray[3])
    }
    function handleTuesday()
     {
        let userobf={
            '2':'walking'
        }
        setdata({...userobf})
    }
    function handleWednesday()
     {
        let userobf={
            '3':'jogging'
        }
        setdata({...userobf})
    }
    function handleThursday()
     {
        let userobf={
            '4':'swimming'
        }
        setdata({...userobf})
    }
    function handleFriday()
     {
        let userobf={
            '5':'cardio'
        }
        setdata({...userobf})
    }
    
    function handleSaturday()
     {
        let userobf={
            '6':'rest'
        }
        setdata({...userobf})
    }
    function handleSunday()
     {
        let userobf={
            '7':'rest'
        }
        setdata({...userobf})
    }
    function handleProfile() {
      navigate("/profile")
    }
  return (
    <div>
        <div className="row">
            <div className="col-sm-3 col-md-4 col-lg-6 bg-primary">
                <h1 className=''>GET FIT</h1>
            </div>
            <div className="col-sm-3 col-md-4 col-lg-6 bg-secondary ml-10">
                <button className="green" onClick={handleProfile}>profile</button>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-2 col-md-3 col-lg-4 bg-danger mt-10">
                <div className="text-blue ">
                    <button className="badge text-bg-primary s-100% h-100%" onClick={handleMonday}>MONDAY</button>
                    <div className="col-sm-6 col-md-5 col-lg-4 bg-info mt-100">
                    </div>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100%" onClick={handleTuesday}>TUESDAY</button>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100% "onClick={handleWednesday}>WEDNESDAY</button>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100%"onClick={handleThursday}>THURSDAY</button>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100%"onClick={handleFriday}>FRIDAY</button>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100%"onClick={handleSaturday}>SATURDAY</button>
                </div>
                <div className="text-blue">
                <button className="badge text-bg-primary s-100% h-100%"onClick={handleSunday}>SUNDAY</button>
                </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4 bg-info mt-100">
            {Object.keys(data).map(key => (
                        <div key={key}>{data[key]}</div>
                    ))}
            </div>
        </div>

    </div>
  )
}

export default Dashboard