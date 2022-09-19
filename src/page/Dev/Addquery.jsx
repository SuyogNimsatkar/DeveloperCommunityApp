import React from 'react'
import DevNav from '../../component/DevNav'
import {useEffect,useState } from 'react';
import {Link,useNavigate, useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import CancelScheduleSendOutlinedIcon from '@mui/icons-material/CancelScheduleSendOutlined';
import ShareIcon from '@mui/icons-material/Share';
import developerService from '../../Service/developerService';
import Swal from 'sweetalert2';

export default function Addquery() {
  const[devId, setDevId] = useState('');
  const[query, setQuery] = useState('');
  const[topic, setTopic] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const did = localStorage.getItem('devId');
    setDevId(did);
  })

  const saveFeed = (e) => {
    e.preventDefault();
    
    const feed = {devId, topic, query};

        //create
        console.log(JSON.stringify(feed));
        developerService.addFeed(feed)
        .then(response => {
            console.log("feed added successfully", response.data);
            localStorage.setItem('feedId', response.data)
            console.log(localStorage.getItem('feedId'));
            Swal.fire({
              icon: 'success',
              title: 'Added!',
              text: `Feed added Successful.`,
              showConfirmButton: false,
              timer: 3000
            });
            navigate("/dashboard");
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: `Error`,
            showConfirmButton: false,
            timer: 3000
          });
            console.log('something went wrong', error);
        })
        
  }

//   useEffect(() => {
//     if (feedid) {
//         developerService.addFeed(feedid)
//             .then(feed=> {
//                 setQuery(feed.data.query);
//                 setTopic(feed.data.topic);
//             })
//             .catch(error => {
//                 console.log('Error adding query', error);
//             })
//     }
// }, [])

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
          <h3>Add Query</h3>
          <br/>
          <div className="form-outline mb-4" id="devId" >
            Developer Id 
            <input type="text" id="form7Example1" className="form-control"  disabled value={devId} />
            <label className="form-label" for="form7Example1"></label>
          </div>

          <div className="form-outline mb-4" id="topic">
            Topic 
            <input type="text" id="form7Example1" className="form-control"  required
                  placeholder="Enter topic" value={topic} onChange= {(e) => setTopic(e.target.value)}/>
            <label className="form-label" for="form7Example1"></label>
          </div>


          <div className="form-outline mb-4" >
            Query
            <input type="email" id="form7Example2" className="form-control" required
                  placeholder="Enter query" value={query} onChange= {(e) => setQuery(e.target.value)}/>
            <label className="form-label" for="form7Example2"></label>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => saveFeed(e)}
            >
              Post
            </Button>
          </div>
          </div>

      </Box>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recent Querys" href='/dashboard' icon={<RestoreIcon />} />
        <BottomNavigationAction label="Cancel" href='/Addquery' icon={<CancelScheduleSendOutlinedIcon />} />
      </BottomNavigation>
    </div>

  )
}
