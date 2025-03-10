import React from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useNavigate } from 'react-router-dom';


const AddMoreInfo = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const [hostel_name, setHostel_name] = useState();
    const [currently, setCurrently] = useState();
    const [company_name, setCompany_name] = useState();
    const [designaton, SetDesignation] = useState();
    const [linkedin, setLinkedin] = useState();
    const [github, setGithub] = useState('');
    const isInfoFilled = hostel_name && currently && company_name && designaton && linkedin && github;

    function handleSubmit() {
        console.log("h_name yeh rha: ", hostel_name);
        console.log("currently yeh rha: ", currently);
        console.log("company yeh rha: ", company_name);
        console.log("designation yeh rha: ", designaton);
        console.log("linkedin yeh rha: ", linkedin);
        console.log("github yeh rha: ", github);
        setOpen(false);
        navigate('/list')
    }


    return (
        <div>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
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
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="size-6 text-red-600"
                                        />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <DialogTitle
                                            as="h3"
                                            className="text-base font-semibold text-gray-900"
                                        >
                                            Let us know more about you
                                        </DialogTitle>
                                        <form className="mt-2">
                                            <div className="border-b border-gray-900/10 pb-12">
                                                <p className="text-sm/6 text-gray-600">
                                                    Congratulations...! You are a verified alumni of IIITU
                                                </p>

                                                <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-6 bg-gamber-600">
                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="branch"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Hostel Name
                                                        </label>
                                                        <div className="mt-2 grid grid-cols-1">
                                                            <select
                                                                id="branch"
                                                                name="branch"
                                                                onChange={(e) => { setHostel_name(e.target.value) }}
                                                                autoComplete="branch"
                                                                placeholder="Select Hostel"
                                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-bae text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            >
                                                                <option>Bhutagni Hostel</option>
                                                                <option>
                                                                    Chitagni Hostel
                                                                </option>
                                                            </select>
                                                            <ChevronDownIcon
                                                                aria-hidden="true"
                                                                className="pointer-events-none col-start-1 row-start-1 mr-2 self-center justify-self-end text-gray-500 sm:size-4"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="branch"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Currently Persuing?
                                                        </label>
                                                        <div className="mt-2 grid grid-cols-1">
                                                            <select
                                                                id="branch"
                                                                name="branch"
                                                                onChange={(e) => { setCurrently(e.target.value) }}
                                                                autoComplete="branch"
                                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-bae text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            >
                                                                <option>Persuing Higher Studies</option>
                                                                <option>
                                                                    Into Corporate
                                                                </option>
                                                            </select>
                                                            <ChevronDownIcon
                                                                aria-hidden="true"
                                                                className="pointer-events-none col-start-1 row-start-1 mr-2 self-center justify-self-end text-gray-500 sm:size-4"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="company"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Current Company
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="company"
                                                                name="company"
                                                                required
                                                                type="text"
                                                                onChange={(e) => { setCompany_name(e.target.value) }}
                                                                autoComplete="email"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="designation"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Designation
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="designation"
                                                                name="designation"
                                                                type="text"
                                                                required
                                                                onChange={(e) => SetDesignation(e.target.value)}
                                                                autoComplete="number"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="linkedin"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            LinkedIn Link
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="linkedin"
                                                                name="linkedin"
                                                                type="text"
                                                                required
                                                                onChange={(e) => { setLinkedin(e.target.value) }}
                                                                autoComplete="joining_year"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="github"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Github Link
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="github"
                                                                name="github"
                                                                type="text"
                                                                required
                                                                onChange={(e) => { setGithub(e.target.value) }}
                                                                autoComplete="graduated_year"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    disabled={!isInfoFilled}
                                    className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3 sm:w-auto ${isInfoFilled
                                        ? "bg-red-600 cursor-pointer  hover:bg-red-500"
                                        : "bg-gray-500 cursor-not-allowed"
                                        }`}
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

        </div>
    )
}

export default AddMoreInfo
