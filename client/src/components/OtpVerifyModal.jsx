/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import AddMoreInfo from './AddMoreInfo'

import axios from 'axios'


const OtpVerifyModal = ({ email, setGoVerify, setOpenn }) => {
    const [open, setOpen] = useState(true);
    const [otp, setOtp] = useState();
    const [verified, setVerified] = useState(false);

    function handleVerify() {
        console.log('hdfgf', email, otp);
        axios
            .post("http://localhost:3001/verify", { email, otp })
            .then((result) => {
                console.log(result);
                if (result.data.message === 'OTP verified succesfully') {
                    // setGoVerify(false); 
                    setOpenn(false);
                    setVerified(true);

                }
            })
            .catch((error) => {
                // console.log(error.response.data.message);
                alert(error.response.data.message);
            });
    }


    return (
        <div>
            {(verified && (<AddMoreInfo></AddMoreInfo>))}
            {(!verified && (<Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                        <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                            Verify Account
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                You would have received a OTP on submitted email id. Please enter that below in order to verify yourself.
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <label className="mb-1 block text-sm/6 font-medium text-gray-900">
                                                Enter OTP
                                            </label>
                                            <input
                                                className="block rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                                type="email"
                                                placeholder="Enter the received otp"
                                                onChange={(e) => setOtp(e.target.value)}
                                                required
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    // onClick={() => setOpen(false)}
                                    onClick={handleVerify}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Verify
                                </button>
                                {/* <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button> */}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>))}
        </div>
    )
}

export default OtpVerifyModal
