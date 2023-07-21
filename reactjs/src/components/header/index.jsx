import { TextField } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";

header.propTypes = {};

function header(props) {

  return (

      <div class="bg-teal-700 flex w-full p-4 border-b-2 fixed top-0 pt-30 overflow-hidden z-10" >
        <NavLink to="/home">
          <Button name="Home"></Button>
        </NavLink>
        <NavLink to="/product">
          <Button name="Product"></Button>
        </NavLink>
        <NavLink to="/about">
          <Button name="About"></Button>
        </NavLink>
        <NavLink to="/contact">
          <Button name="Contact"></Button>
        </NavLink>
      {/* <div class="relative right-0">
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </div> */}
      <br />

      </div>

  );
}

export default header;
