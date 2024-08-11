import React from 'react';
import { MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDB CSS

const Navbar = () => {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBNavbarBrand className="mx-auto" href="/">
        <span className="d-none d-md-block">Agino</span>
      </MDBNavbarBrand>
    </MDBNavbar>
  );
};

export default Navbar;
