import React from 'react';
import {
  MDBCol,
  MDBBtn,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDB CSS

const ChatHistory = () => {
  return (
    <MDBCol md="2" className="bg-light" style={{ height: '100vh', overflowY: 'auto' }}>
      <div className="d-flex flex-column p-3">
        {[...Array(10)].map((_, index) => (
          <MDBBtn
            key={index}
            color="info"
            size="lg"
            block
            role="button"
            aria-expanded="false"
            className="mb-2"
          >
            <div className="d-flex flex-column align-items-center">
              <span>Chat {index + 1}</span>
            </div>
          </MDBBtn>
        ))}
      </div>
    </MDBCol>
  );
};

export default ChatHistory;