import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { createTheme } from '@mui/material/styles';
import developerService from '../Service/developerService';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ViewResponses from '../page/Dev/ViewResponses';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {

  const [feeds, setFeeds] = useState([]);
  // const feed = {feedid, query, topic};
  // const params = useParams();

  // useEffect(() =>{
  //   getResponses();
  // },[])

  // const getResponses = async ()=>{
  //   let result = await fetch(`http://localhost:8081/developers/getresponse/${params.respid}`);
  //   result = await result.json();
  // }

  useEffect(() => {
        developerService.getAllFeeds()
            .then(response => {
              console.log('displaying feeds', response.data);
              setFeeds(response.data);

            })
            .catch(error => {
                console.log('Feed not found', error);
            })
        }, [])
  

  return (<>
      

    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }} theme={darkTheme}>
          DashBoard
        </Typography>
        <MDBCard>
      <MDBCardBody>
        {
          feeds.map(feed => (
            <>
            <MDBCardTitle key={feed.feedid}>
            {feed.feedid}.  {feed.topic}
            </MDBCardTitle>
            <MDBCardText>
              {feed.query}
            </MDBCardText>
            <MDBListGroup>
            {/* {
              resps.map(response => (
                <MDBCardText key={response.responseId}>
                  {response.response}
                </MDBCardText>
              ))
            } */}
              
              <Button href="/AddResponse">Add response</Button>
              <Button href="/ViewResponses">View response</Button>
            </MDBListGroup>
            <br/>
            <MDBCardLink href='#' >Like</MDBCardLink>
            <MDBIcon fas icon="thumbs-up" />
            
            <br/>
            <br/><br/>
            </>
          ))
          
        }
        
      </MDBCardBody>
    </MDBCard>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          
          <StyledFab color="secondary" aria-label="add" href='/addquery'>
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 ,
           bgcolor: 'background.default',}} />
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
    </>
  );
}
