// src/components/ChatComponent.js
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
} from "mdb-react-ui-kit";

const ChatComponent = () => {
  return (
    <MDBContainer fluid className="p-2" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol>
          <MDBCard id="chat2" style={{ borderRadius: "15px" }}>
            <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">Chat Name</h5>
            </MDBCardHeader>
            <div
              style={{
                position: "relative",
                height: "400px",
                overflowY: "auto",
              }}
            >
              <MDBCardBody>
                <div className="d-flex flex-row justify-content-end mb-4">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                      What are my top 10 products
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:11
                    </p>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                <div
                style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#007bff",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "18px",
                    fontWeight: "bold",
                }}
                >
                A
                </div>

                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                        Here is the lsit of products :
                        <ul>
                            <li>item1</li>
                            <li>item2</li>
                            <li>item3</li>
                            <li>item4</li>
                        </ul>                    
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted">
                      00:13
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                      Okay
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:15
                    </p>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>
              </MDBCardBody>
            </div>
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
            <a className="ms-1 text-muted px-4" href="#!">
                <MDBIcon fas icon="paperclip" />
              </a>
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
              ></input>
              <a className="ms-3 px-2" href="#!">
                <MDBIcon fas icon="paper-plane" />
              </a>
              <a className="ms-3 px-2" href="#!">
                <MDBIcon fas icon="gear" />
              </a>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ChatComponent;
