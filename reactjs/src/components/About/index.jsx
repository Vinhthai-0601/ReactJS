import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import myimg from '../images/Hau-Vinh-Thai.jpg'

About.propTypes = {};

function About(props) {
  return (
    <div id="about" class="py-20">
        <h1 class="font-bold text-5xl py-5">About</h1>
<div class="flex flex-row">
      <div class="basic-1/2 grow place-content-center">
        
        <img
          src= {myimg}
          alt="This is me"
          class="w-1/2 mx-auto rounded-lg  "
        />
      </div>
      <div class="basic-1/2 flex flex-col">
        <div class="flex-1 grid place-items-center">
          <p class="text-left px-6 py-4 font-medium">
            As a software developer who has just graduated with an IT major and
            has nearly 1 year of experience in the field of website programming,
            especially Front-end. Know how to run a project, usually take a
            leadership role in the school project team. Hoping to find a job
            that suits me and an opportunity to further advance my career.
          </p>
        </div>
        <div class="flex justify-center">
        <Button name="My CV" class=" py-2 px-4 rounded w-32 justify-center flex border-solid border-t-4 border-r-4 border-gray-400 hover:animate-none hover:bg-gray-400 hover:border-transparent active:text-black"></Button>

        </div>
      </div>
    </div>
    </div>   
  );
}

export default About;
