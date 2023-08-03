import React from 'react';
import PropTypes from 'prop-types';

Contact.propTypes = {};

function Contact(props) {
  return (
    <div id="contact" class="py-20">
      <h1 class="font-bold text-5xl py-5">Contact</h1>
      <div class="flex flex-row gap-3 pb-5">
        <div class="basic-1/2 flex flex-row">
          <div class="basic-1/2 my-auto px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 rounded-lg shadow-inner shadow-black/50 dark:shadow-white/30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div class="basis-1/2">
            <div class="pl-2 flex flex-col">
              <p class="text-left">Mail</p>
              <a
                href="Vinhthai378@gmail.com"
                target="_blank"
                class="text-gray-400"
              >
                Vinhthai378@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div class="basic-1/2 flex flex-row">
          <div class="basic-1/2 my-auto px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 rounded-lg shadow-inner shadow-black/50 dark:shadow-white/30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <div class="basis-1/2">
            <div class="pl-2 flex flex-col">
              <p class="text-left">Tele</p>
              <a
                href="Vinhthai378@gmail.com"
                target="_blank"
                class="text-gray-400"
              >
                +999999999
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
