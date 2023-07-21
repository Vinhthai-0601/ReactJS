import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

About.propTypes = {};

function About(props) {
  return (
    <div>
        <h1 class="font-bold text-5xl py-5">About</h1>
<div class="flex flex-row">
      <div class="basic-1/2 grow place-content-center">
        
        <img
          src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/330528729_1142141383168024_946827100295592021_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ynoZeeZw89MAX9V-9MA&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfC9ABBHaUCr2uhkiv0z00guHUlqUIpMlBlKwDhtSbrAwA&oe=64BDB77F"
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
