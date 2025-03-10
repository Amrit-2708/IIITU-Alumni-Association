import React, { useState } from 'react'
import Navbar from './Navbar'
import collage from '../assets/collage.jpg'


const Loginpage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const isFormValid = email && password;

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex p-12 divide-x-2'>
                <div className='bg-ambder-600 w-1/2 p-8'><img src={collage} alt='collage' width="800"></img></div>

                <div className='bg-fuchsia-800 w-1/2 self-center'>
                    <div className='text-center font-serif text-4xl'>
                        Login!
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <form>
                            <div className="mb-4">
                                <label className="mt-8 block text-sm/6 font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    type="email"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                ></input>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    type="password"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                ></input>
                            </div>

                            <div className="mb-8">
                                <button
                                    className={`flex justify-center items-center w-full h-10 px-6 font-semibold rounded-md border border-slate-200 text-white ${isFormValid ? "bg-black" : "bg-gray-500"
                                        }`}
                                >
                                    Log In
                                </button>
                            </div>
                            <div className="mb-8 flex justify-center">
                                <p className="text-black">
                                    Not Joined Us Yet?<span className="mx-1"></span>

                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Loginpage
