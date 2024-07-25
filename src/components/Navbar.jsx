"use client"
import React, { useState } from 'react'


function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav class="bg-slate-900 fixed z-20 w-full border-gray-200 dark:bg-black">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">Eventify</span>
          </a>
          <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class={isOpen ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-slate-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-slate-900 dark:bg-gray-800 md:dark:bg-slate-900">
              <li>
                <a href="/" class="block py-2 px-3 text-white rounded hover:bg-slate-800 md:hover:bg-transparent md:border-0 md:hover:text-slate-400 md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent" >Home</a>
              </li>
              <li>
                <a href="/Services" class="block py-2 px-3 text-white rounded hover:bg-slate-800 md:hover:bg-transparent md:border-0 md:hover:text-slate-400 md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="/Event" class="block py-2 px-3 text-white rounded hover:bg-slate-800 md:hover:bg-transparent md:border-0 md:hover:text-slate-400 md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Add Event</a>
              </li>
              <li>
                <a href="/Events" class="block py-2 px-3 text-white rounded hover:bg-slate-800 md:hover:bg-transparent md:border-0 md:hover:text-slate-400 md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Events</a>
              </li>
              <li>
                <a href="/" class="block py-2 px-3 text-white rounded hover:bg-slate-800 md:hover:bg-transparent md:border-0 md:hover:text-slate-400 md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
