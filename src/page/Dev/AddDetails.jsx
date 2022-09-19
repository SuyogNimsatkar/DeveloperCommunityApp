import React from 'react'
import DevNav from '../../component/DevNav'
import { Button } from '@mui/material'
import {ToastContainer,toast}from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';
import developerService from '../../Service/developerService';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );


export default function AddDetails() {
    const navigate = useNavigate()
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[skillLevel, setSkillLevel] = useState('');
    const[userId, setUserId] = useState('');
    const[errors, setErrors] = useState('');

    useEffect(() => {
        const id = localStorage.getItem('userId');
        setUserId(id);
        const uname = localStorage.getItem('userName');
        setEmail(uname);
    })
    

    const saveDetails = (e) => {
        e.preventDefault();
        const details = {name, email, skillLevel, userId};
        const errors = validate({...details});
        if(Object.keys(errors).length === 0){
            console.log(JSON.stringify(details));
            developerService.addDetails(details)
            .then(response => {
                localStorage.setItem('Name', details.name);
                localStorage.setItem('Skill', details.skillLevel);
                console.log("details added", response.data);
                localStorage.setItem('devId', response.data);
                console.log(localStorage.getItem('devId'));
                Swal.fire({
                    icon: 'success',
                    title: 'Added!',
                    text: `Details added Successful.`,
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate('/dashboard');
            })
            .catch( error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: `Details already available`,
                    showConfirmButton: false,
                    timer: 3000
                });
                console.log("error", error);
            })
        }
        else{
            setErrors(errors);
        }
    }




  return (
    <div>
        <DevNav/>
        <br/><br/><br/>
        <Box
            sx={{
                marginTop: 12,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
        <form >
            <div className="container">
                <h1>Add details</h1>
                <div className='patform'>
                    <div className="row">
                        <label><b>Name</b></label>
                        <input type="text" placeholder="Enter Name" name="name" required 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}/>
                            {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                    </div><br/>

                    <div className="row">
                        <label><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="email" disabled
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div><br/>

                    <div className="row">
                        <label><b>Skill Level</b></label>
                        <input type="text" placeholder="Enter Skill level" name="skill level" required
                            value={skillLevel} 
                            onChange={(e) => setSkillLevel(e.target.value)}/>
                            {errors.skillLevel && <p style={{color: 'red'}}>{errors.skillLevel}</p>}
                    </div><br/>

                    <div className="row">
                        <label><b>User Id</b></label>
                        <input type="number" placeholder="Enter User Id" name="User Id"
                        disabled
                            value={userId} 
                            onChange={(e) => setUserId(e.target.value)}/>
                    </div>
                    <br/>
                
                    <Button  variant="contained" onClick={saveDetails} >submit</Button><br></br>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                
                </div>
            </div>
        </form>
        </Box>
    </div>
  )

  function validate({name, skillLevel}) {
    let errors = {};
    if (!name?.trim()) {
      errors.name = 'Name required';
    }
    if (!skillLevel) {
      errors.skillLevel = 'SkillLevel required';
    }
    return errors;
  }
}


