import { useState } from 'react';
import React from 'react'

export default function NavBer() {

  const [showLogin, setShowLogin] = useState(true);

  function toggleForm() {
    setShowLogin(!showLogin);
  }


  return (
    <div className="navbar text-white md:px-10 ">
      <div className="flex-1">
        <a className="hover:text-violet-500 duration-300 cursor-pointer font-semibold  normal-case text-xl">forestUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal  px-1">
          <li><a className='hover:text-violet-500 duration-300 hidden md:block '>Home</a></li>
          <li><a className='hover:text-violet-500 duration-300 hidden md:block'>About</a></li>
          <li tabIndex={0}>
            <a className='hover:text-violet-200 hidden md:block '>
              <div className='flex items-center justify-center'>
                <div>
                  Services
                </div>
                <div>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </div>
              </div>


            </a>
            <ul className="p-2 ">
              <li><a className='hover:text-violet-500 duration-300 hover:bg-gray-900 hover:duration-75 hover:bg-opacity-30'>Action</a></li>
              <li><a className='hover:text-violet-500 duration-300 hover:bg-gray-900 hover:duration-75 hover:bg-opacity-30'>Privacy</a></li>
            </ul>
          </li>
          <li><a className='hover:text-violet-500 duration-300 hidden md:block'>Contact</a></li>
          <li className=''>
            <label htmlFor="my-modal" className="btn px-8 py-1.5 hover:text-violet-500 duration-300">Log in</label>

            <input type="checkbox" id="my-modal" className="modal-toggle " />

            <div className="modal bg-black bg-opacity-50">
              <div className="modal-box bg-black bg-opacity-80 ">
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 ">
                  <h2 className="text-lg font-bold mb-4">{showLogin ? '' : ''}</h2>
                  {showLogin ? (
                    <form id="login-form" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                      <div id="login-modal" className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                        <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label for="email" className="block mb-2 text-sm">Email address</label>
                          <input type="email" name="email" id="email" placeholder="Email Address" className="w-full px-3 py-2 text-gray-900" fdprocessedid="u8s23" er rounded-md required />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <label for="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
                          </div>
                          <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md text-gray-900" fdprocessedid="snjo4" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="modal-action">
                          <label htmlFor="my-modal" type="button" className="w-full bg-violet-400 cursor-pointer hover:bg-violet-600 text-center px-8 py-3 font-semibold rounded-md " fdprocessedid="6r90j">Sign in</label>
                        </div>
                        <p className="px-6 text-sm text-center ">Don't have an account yet?
                          <a rel="noopener noreferrer" onClick={toggleForm} href="#" className="hover:underline text-violet-400"> Register </a>
                        </p>
                      </div>
                    </form>
                  ) : (
                    <form action="#"  className=" pt-0 ng-untouched ng-pristine ng-valid ">
                      <div className="space-y-4">
                        <div className=" text-center">
                          <h1 className="my-3 text-4xl font-bold">Register Now</h1>
                          <p className="text-sm dark:text-gray-400">Create your account</p>
                        </div>
                        <div>
                          <label for="email" className="block mb-2 text-sm">Email address</label>
                          <input type="email" name="email" id="email" placeholder="Email Address" className="w-full px-3 py-2 text-gray-900" fdprocessedid="u8s23" er rounded-md required />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <label for="password" className="text-sm">Password</label>
                          </div>
                          <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md text-gray-900" fdprocessedid="snjo4" required />
                        </div>
                        <div className="flex justify-between mb-2">
                          <label for="password" className="text-sm">Re type Password</label>
                        </div>
                        <input type="password" name="password" id="password" placeholder="Re-type Password" className="w-full px-3 py-2 border rounded-md text-gray-900" fdprocessedid="snjo4" required />

                        <div className='flex gap-5'>
                          <div>
                            <label for="text" className="text-sm">First Name</label>
                            <input type="text" placeholder="Your First Name" className="input w-full max-w-xs" />
                          </div>
                          <div>
                            <label for="text" className="text-sm">Last Name</label>
                            <input type="text" placeholder="Your Last Name" className="input w-full max-w-xs" />
                          </div>
                        </div>
                        <div className='flex justify-start gap-3'>
                          <input type="radio" name="radio-7" className="radio radio-info bg-black" checked />
                          <label htmlFor="text">Male</label>
                          <input type="radio" name="radio-7" className="radio radio-info bg-black" />
                          <label htmlFor="text">Female</label>
                        </div>
                        <select className="select select-bordered w-full max-w-xs ">
                          <option disabled selected className='bg-gray-900'>Select a country</option>
                          <option className='bg-gray-900'>Bangladesh</option>
                          <option className='bg-gray-900'>Sweden</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <div className="modal-action">
                          <label htmlFor="my-modal" type="button" className="w-full bg-violet-400 cursor-pointer hover:bg-violet-600 text-center px-8 py-3 font-semibold rounded-md " fdprocessedid="6r90j">Register</label>
                        </div>
                        <p className="px-6 text-sm text-center ">Already have an Account?
                          <a rel="noopener noreferrer" href="#" onClick={toggleForm} className="hover:underline  text-violet-500"> Login </a>
                        </p>
                      </div>
                    </form>
                  )}
                </div>

              </div>
            </div>

          </li>
        </ul>
      </div>
    </div>
  )
}

