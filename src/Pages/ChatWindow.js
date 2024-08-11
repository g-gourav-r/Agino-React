import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDB CSS
import ChatBox from "../components/ChatBox";
import Navbar from '../components/NavBar';
import ChatHistory from '../components/ChatHistory';




const Layout = () => {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <Navbar />
        <ChatHistory />
            <MDBCol md="10">
        <ChatBox/>
    </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Layout;
