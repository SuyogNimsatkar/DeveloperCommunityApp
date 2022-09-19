import React, { useEffect } from 'react'
import DevNav from '../../component/DevNav'
import { Button } from '@mui/material'
import {ToastContainer,toast}from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams} from 'react-router-dom';
import developerService from '../../Service/developerService';
import { useState } from 'react';
import Swal from 'sweetalert2';


export default function UpdateDetails() {
    
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[skillLevel, setSkillLevel] = useState('');
    const[userId, setUserId] = useState('');
    const[devId, setDevId] = useState('');
    const[errors, setErrors] = useState('');
    const uname = localStorage.getItem('Name');
    const uskill = localStorage.getItem('Skill');

    useEffect(() => {
        const id = localStorage.getItem('userId');
        setUserId(id);
        const did = localStorage.getItem('devId');
        setDevId(did);
        const uname = localStorage.getItem('userName');
        setEmail(uname);
    })

    // useEffect( () =>{
    //     if(devId){
    //         developerService.getDevById(devId)
    //         .then(response => {
    //             setName(response.data.name);
    //             setEmail(response.data.email);
    //             setSkill(response.data.skill);
    //         })
    //     }
        
    // },[] )

    const updateData = (e) => {
        e.preventDefault();

        const details = {name, email, skillLevel, userId}
        const errors = validate({...details});
        if(Object.keys(errors).length === 0){
            console.log(JSON.stringify(details));
        developerService.updateDetails(devId, details)
        .then(response =>{
            localStorage.setItem('Name', details.name);
            localStorage.setItem('Skill', details.skillLevel);
            console.log("Updated successfully",response.data);
            Swal.fire({
                icon: 'success',
                title: 'Updated',
                text: `updated details successfully`,
                showConfirmButton: false,
                timer: 3000
            });        
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: `Error`,
                showConfirmButton: false,
                timer: 3000
            }); 
            console.log('Error updating details',error);
         }) 
        }
        else{
            setErrors(errors);
        }

    }
   
  return (<>
  <div>
    <DevNav/>
    <br/><br/><br/><br/>
 
    <form >
        <div className="container">
            <h1>Update details</h1>
            <div className='patform'>
            <div className="row">
                <label><b>Name</b></label>
                <input type="text" name="name" required 
                    placeholder={uname}
                    value={name}
                    onChange= {(e) => setName(e.target.value)}
                    />
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
            </div><br></br>
            <div className="row">
                <label><b>Email</b></label>
                <input type="email" name="email" disabled
                    value={email}
                    onChange= {(e) => setEmail(e.target.value)}
                    />
            </div><br></br>
            <div className="row">
                <label><b>Skill Level</b></label>
                <input type="text" name="skill level" required
                    placeholder={uskill}
                    value={skillLevel}
                    onChange= {(e) => setSkillLevel(e.target.value)}
                    />
                {errors.skillLevel && <p style={{color: 'red'}}>{errors.skillLevel}</p>}
            </div>
            <div className="row">
                <label><b>User Id</b></label>
                <input type="number" placeholder="Enter User Id" name="User Id"
                disabled
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)}/>
            </div>
            <div className="row">
                <label><b>Developer Id</b></label>
                <input type="number" placeholder="Enter Developer Id" name="Dev Id"
                    disabled
                    value={devId} 
                    onChange={(e) => setDevId(e.target.value)}/>
            </div>
            <br/>
            
                <Button  variant="contained" onClick={updateData} >submit</Button><br></br>
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
             
    </div>
              

                 </>
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


