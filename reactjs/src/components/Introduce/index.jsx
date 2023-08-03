import React from "react";
import Button from "../Button";
import myimg from '../images/Hau-Vinh-Thai.jpg'


introduct.propTypes = {};

function introduct(props) {
  return (
    <div class="w-full bg-white flex flex-col gap-5 px-0 py-40 mx-auto" id="home">
      <div class="flex flex-col-reverse md:flex-row gap-5">
        <div class="flex flex-col gap-5 md:flex-1">
          <h2
            class="text-7xl font-bold font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-orange-500 via-yellow-500 to-pink-500
            animate-text"
          >
            Web Developer
          </h2>
          <p class="text-left px-6 font-medium">
            As a software developer who has just graduated with an IT major and
            has nearly 1 year of experience in the field of website programming,
            especially Front-end. Know how to run a project, usually take a
            leadership role in the school project team. Hoping to find a job
            that suits me and an opportunity to further advance my career.
          </p>
          <div class="flex justify-center">
            <Button
              name="Contact Me"
              class="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded w-64 justify-center flex"
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div class="flex-1 grid place-items-center">
          <img
            src={myimg}
            alt="This is me"
            class="animate-bounce animate-infinite animate-duration-[3000ms] animate-ease-in animate-alternate-reverse animate-fill-both rounded-full w-1/2 "
          />
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:items-center gap-10 md:justify-center font-medium text-lg text-black dark:text-neutral-100">

      </div>
    </div>
  );
}

export default introduct;
