import { useEffect } from "react";
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import adminService from "../../Service/adminService";
import { Navigate, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import AdminNav from "../../component/AdminNav";
import Box from '@mui/material/Box';
// import {ColumnDi}

const ViewDeveloper = () => {
    const[user, setUser] = useState([]);
    const[blocked, setBlocked] = useState('');
    const[userId, setUserId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        init();
      }, []);
    
    //   const init = () => {
    //     adminService.getAllUser()
    //     .then(response => {
    //       console.log('Printing Responses',response.data);
    //       setResponses(response.data);
    //     })
    //     .catch(error => {
    //        console.log('something went wrong',error);
    //     })
    //   }

    const init = () => {
        adminService.getAllUser() 

            .then(response => {
                console.log('User Details', response.data);
                setUser(response.data);

            })
            .catch(error => {
                console.log("Error fetching details", error);
            })
    }

    const Block = (e) => {
        e.preventDefault();
        adminService.blockUser(userId)
        .then(response => {
            console.log("User is Blocked", response.data);
        })
        Swal.fire({
            icon: 'success',
            title: 'User Blocked!',
            text: `User is blocked.`,
            showConfirmButton: false,
            timer: 4000
        });
        navigate("/ViewDeveloper");
        
    }

    const Unblock = (e) => {
        e.preventDefault();
        adminService.unblockUser(userId)
        .then(response => {
            console.log("User is Unblocked", response.data);
        })
        Swal.fire({
            icon: 'success',
            title: 'User UnBlocked!',
            text: `User is unblocked.`,
            showConfirmButton: false,
            timer: 4000
        });
        navigate("/ViewDeveloper");
    }

    return (
        <div>
        <AdminNav/>
      <br/> <br/> <br/>

      <Box
        sx={{
            marginTop: 9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        <div>
            <h3>List of Users</h3>
            <div>
                <table className="table table-bordered table-striped" border="1" cellPadding="10">
                <tbody>
                <tr>
                <th>UserId</th>
                <th>Email</th>
                <th>IsBlocked</th>
                </tr>
                {
                    user.map(user => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.userName}</td>
                            <td>{JSON.stringify(user.blocked)}</td>
                        </tr>
                    ))
                }
                </tbody>
                </table>
            </div>
            <br/>
            <div className="form-outline mb-4" >
                Add UserId
                <input type="number" id="form7Example2" className="form-control" required
                    placeholder="Enter userid" value={userId} onChange= {(e) => setUserId(e.target.value)}/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={(e) => Block(e)}
                >
                Block
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={(e) => Unblock(e)}
                >
                UnBlock
                </Button>

            </div>
        </div>
        </Box>
        </div>
    );
}
export default ViewDeveloper;



// import React, { Component } from 'react';
// import adminService from '../../Service/adminService';

// class ViewDeveloper extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             developer: []
//         }
//     }

//     componentDidMount(){
//         adminService.getAll().then((response) => {
//             this.setState({ developer: response.data})
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h2 className="text-center">List of developers</h2>
//                  <br></br>
                 
//                  <div className = "row">
//                         <table className = "table table-striped table-bordered">

//                             <thead>
//                                 <tr>
//                                    <th>Id</th>
//                                    <th>Name</th>
//                                    <th>Email</th>
//                                     <th>IsBlocked</th>
//                                     <th>Skill level</th>
//                                     <th>ACtion</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     this.state.developer.map(
//                                         developer => 
//                                         <tr key = {developer.devId}> 
//                                             <td> {developer.devId}</td>
//                                              <td> {developer.name}</td>
//                                              <td> {developer.email}</td>
//                                              <td> {developer.isBlocked}</td>  
//                                              <td>{developer.skillLevel}</td>                             
//                                                  <td>
//                                                  {/* <button onClick={ () => this.updateCourse(course.courseId)} className="btn btn-info">Update </button> */}
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCourse(course.courseId)} className="btn btn-danger">Block </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewCourse(course.courseId)} className="btn btn-info">Unblock </button>
//                                              </td>
//                                         </tr>
//                                     )
//                                 }
//                             </tbody>
//                         </table>

//                  </div>

//             </div>
//         );
//     }
// }

// export default ViewDeveloper;