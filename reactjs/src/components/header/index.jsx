import React from 'react';
//import './styles.scss'
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
header.propTypes = {
    
};

function header(props) {
    return (
        <div>
        <NavLink to='/home'><Button>Home</Button></NavLink>
        <NavLink to='/product'><Button>Product</Button></NavLink>
        <NavLink to='/about'><Button>About</Button></NavLink>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        </div>
    );
}

export default header;