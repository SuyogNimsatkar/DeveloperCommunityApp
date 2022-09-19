import {useState, useEffect } from "react";
import developerService from "../../Service/developerService";
import {useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";
import DevNav from '../../component/DevNav'
import Box from '@mui/material/Box';

export default function AddResponse() {
    
    const[devId,setDevId] = useState('');
    const[feedId,setFeedId] = useState('');
    const[answer,setAnswer] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const did = localStorage.getItem('devId');
        setDevId(did);
        console.log(did);
        console.log(devId);
        const fid = localStorage.getItem('feedId');
        setFeedId(fid);
        console.log(fid);
    })
  
    const saveResponse= (e) => {
        e.preventDefault();
    
       
     const responses = { answer,devId, feedId};
     developerService.addResponse(responses)
     .then(response => {
        console.log('Response added successfully',response.data);
        // localStorage.setItem('reponseId', response.data)
                Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: `Response added Successful.`,
                showConfirmButton: false,
                timer: 3000
            });
            navigate("/dashboard");
     } )
    .catch(error => {
        console.log('something went wrong',error);
        Swal.fire({
            icon: 'error',
            title: 'Ooops!',
            text: `Error`,
            showConfirmButton: false,
            timer: 3000
        });
     })
        
     }
    

    return ( 
        <div>
            <DevNav/>
            <br/><br/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
            <div className="col-4">
            <h2>Add new response</h2>
            <br/>
            
            <form>
                    <div className="form-outline mb-4" id="devId" >
                    <label><b>Developer Id</b></label>
                    <input
                        type="text"
                        className="form-control"
                        id="devId"
                        disabled
                        value={devId}
                        onChange= {(e) => setDevId(e.target.value)}
                        placeholder="Enter devkey"
                    />
                    </div>

                    <br/>

                    <div className="form-outline mb-4">
                    <label><b>Feed Id</b></label>
                    <input
                        type="text"
                        className="form-control col-4"
                        id="feedId"
                        disabled
                        value={feedId}
                        onChange= {(e) => setFeedId(e.target.value)}
                        placeholder="Enter feedkey"
                    />
                    </div>
                    <br/>
                    
                    <div className="form-outline mb-4">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="answer"
                        value={answer}
                        onChange= {(e) => setAnswer(e.target.value)}
                        placeholder="Enter Answer"
                    />
                    </div>
                    <br/>
                <div>
                    <button className="btn btn-primary" onClick={(e)=>saveResponse(e)}>save</button>
                </div>
            </form>
            
            </div>
            </Box>
        </div>
    );
}