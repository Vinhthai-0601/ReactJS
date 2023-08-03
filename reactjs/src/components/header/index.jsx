import { TextField } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import { HashLink as Link } from 'react-router-hash-link';

header.propTypes = {};

function header(props) {

  return (

      <div class="bg-teal-700 flex w-full p-4 border-b-2 fixed top-0 pt-30 overflow-hidden z-10" >
        <Link to="#home">
          <Button name="Home"></Button>
        </Link>
        <Link to="#product">
          <Button name="Product"></Button>
        </Link>
        <Link to="#about">
          <Button name="About"></Button>
        </Link>
        <Link to="#contact">
          <Button name="Contact"></Button>
        </Link>
      {/* <div class="relative right-0">
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </div> */}
      <br />

      </div>

  );
}

export default header;
