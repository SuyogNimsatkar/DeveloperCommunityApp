import { useState,useEffect } from "react";
import swal from 'sweetalert';
import adminService from "../../Service/adminService";
import developerService from "../../Service/developerService";
import AdminNav from "../../component/AdminNav";
import Box from '@mui/material/Box';

export default function DeleteQuery() {
    const [feed,setFeeds]=useState([]);

    useEffect(() => {
        init();
    }, []);

    const init =() => {
      developerService.getAllFeeds()
      .then(response=>{
        console.log("printing the feed data",response.data);
        setFeeds(response.data);
      })
      .catch(error=>{
        console.log("something went wrong".error);
      })
    }
  
  
    const handleDelete = (feedid) => {
      console.log('Printing feedid', feedid);
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover your Feed",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          adminService.deleteFeed(feedid)
          .then(response => {
            console.log('feed deleted successfully', response.data);
            init();
          })
          swal("Poof! Your feed has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your feed is safe!");
        }
      });
      }
  
    return ( 
      <div>
        <AdminNav/>
        <br/> <br/> <br/>

        <Box
          sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
          >
        <div className="col-md-8">
          <h3>List of feeds</h3>
          <hr/>
          <div>
            <table className="table table-bordered table-striped" >
                <thead className="thead-dark">
                  <tr>
                    <th>Feedid</th>
                    <th>Query</th>
                    <th>Topic</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                  feed.map(feed => (
                    <tr key={feed.feedid}>
                    <td>{feed.feedid}</td>
                    <td>{feed.query}</td>
                    <td>{feed.topic}</td>
                    <td>
                      <button className="btn btn-danger ml-2" onClick={() => {handleDelete(feed.feedid);}}>Delete</button>
                    </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div> 
        </Box>
      </div> 
     );
  }