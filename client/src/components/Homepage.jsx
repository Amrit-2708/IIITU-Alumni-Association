import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Navbar from "./Navbar";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";

const Homepage = () => {
    const navigate = useNavigate()



    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [roll, setRoll] = useState();
    const [joining_year, setJoining_year] = useState();
    const [branch, setBranch] = useState();
    const [graduated_year, setGraduated_year] = useState();

    const [hostel_name, setHostel_name] = useState();
    const [currently, setCurrently] = useState();
    const [company_name, setCompany_name] = useState();
    const [designaton, SetDesignation] = useState();
    const [linkedin, setLinkedin] = useState();
    const [github, setGithub] = useState();


    function handleJoin() {
        setOpen(true);
    }

    function handleSubmit() {
        console.log("name yeh rha: ", name);
        console.log("email yeh rha: ", email);
        console.log("branch yeh rha: ", branch);
        console.log("roll yeh rha: ", roll);
        console.log("joining_year yeh rha: ", joining_year);
        console.log("graduated_year yeh rha: ", graduated_year);
        navigate('/');
        setOpen(false);
        setTimeout(() => {
            setOpen2(true);
        }, 1000);
        
    }

    function handleSubmit2() {
        console.log("h_name yeh rha: ", hostel_name);
        console.log("currently yeh rha: ", currently);
        console.log("company yeh rha: ", company_name);
        console.log("designation yeh rha: ", designaton);
        console.log("linkedin yeh rha: ", linkedin);
        console.log("github yeh rha: ", github);

        console.log("pehle ka form check kr rhe: ", name);
    }

    return (
        <div>
            <Navbar></Navbar>

            <div>
                <h1 className="text-4xl p-5 font-bold">
                    From the Director&apos;s Desk,
                </h1>
                <div className="flex justify-around p-16">
                    <div className="w-1/2">
                        <p className="text-md" style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio,
                            vitae lacinia arcu netus et malesuada fames ac turpis egestas. Sed
                            lectus. Praesent elementum hendrerit tortor. Sed semper libero
                            eget felis porttitor sodales. Fusce suscipit varius mi, quis
                            commodo purus. Morbi lectus risus, iaculis vel, suscipit quis,
                            luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                            Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
                            euismod in, nibh. Quisque volutpat condimentum velit. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos himenaeos. Morbi lectus risus, iaculis vel, suscipit
                            quis, luctus non, massa. Fusce ac turpis quis ligula lacinia
                            aliquet. Nulla facilisi. Integer lacinia sollicitudin massa.
                        </p>

                        <div className="flex flex-col">
                            <button className="w-1/3 h-10 mt-5 rounded-md border border-slate-200 text-white bg-blue-800">
                                Explore The Directory
                            </button>
                            <button
                                onClick={handleJoin}
                                className="w-1/3 h-10 mt-2 rounded-md border border-slate-200 cursor-pointer text-white bg-blue-800"
                            >
                                Join Network
                            </button>
                        </div>
                    </div>

                    <div className="self-center">
                        <img
                            src="https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png"
                            width="300"
                            alt=""
                        ></img>
                    </div>
                </div>
            </div>

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
                                            Come Join with Us
                                        </DialogTitle>
                                        {/* <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                                This action cannot be undone.
                                            </p>
                                        </div> */}
                                        <form className="mt-2">
                                            <div className="border-b border-gray-900/10 pb-12">
                                                {/* <h2 className="text-base/7 font-semibold text-gray-900">
                                                    Personal Information
                                                </h2> */}
                                                <p className="text-sm/6 text-gray-600">
                                                    Please use your college email-id to receive otp for verification
                                                </p>

                                                <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-6 bg-gamber-600">
                                                    <div className="sm:col-span-3">
                                                        <label
                                                            htmlFor="first-name"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Name
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="first-name"
                                                                name="first-name"
                                                                type="text"
                                                                required
                                                                onChange={(e) => { setName(e.target.value) }}
                                                                autoComplete="given-name"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="email"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Email address
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="email"
                                                                name="email"
                                                                required
                                                                type="email"
                                                                onChange={(e) => { setEmail(e.target.value) }}
                                                                autoComplete="email"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="roll_number"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Roll No.
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="roll_number"
                                                                name="roll_number"
                                                                type="text"
                                                                maxLength="5"
                                                                required
                                                                onChange={(e) => {
                                                                    const value = e.target.value;
                                                                    // Check if the value is a number
                                                                    if (/^\d*$/.test(value)) {
                                                                        setRoll(value);
                                                                    }
                                                                    else {
                                                                        alert("roll number should be whole number");
                                                                    }
                                                                }}
                                                                autoComplete="number"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />




                                                            {/* <input
                                                                id="roll_number"
                                                                name="roll_number"
                                                                type="number"
                                                                maxLength="5"
                                                                required
                                                                onChange={(e) => {setRoll(e.target.value)}}
                                                                autoComplete="number"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            /> */}
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="branch"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Branch
                                                        </label>
                                                        <div className="mt-2 grid grid-cols-1">
                                                            <select
                                                                id="branch"
                                                                name="branch"
                                                                onChange={(e) => { setBranch(e.target.value) }}
                                                                autoComplete="branch"
                                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-bae text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            >
                                                                <option>Computer Science & Engineering</option>
                                                                <option>
                                                                    Electronics & Communication Engineering
                                                                </option>
                                                                <option>Information Technology</option>
                                                            </select>
                                                            <ChevronDownIcon
                                                                aria-hidden="true"
                                                                className="pointer-events-none col-start-1 row-start-1 mr-2 self-center justify-self-end text-gray-500 sm:size-4"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="joining-year"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            College Joining Year
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="joining-year"
                                                                name="joining-year"
                                                                type="month"
                                                                min="2014-01"
                                                                max="2025-12"
                                                                required
                                                                placeholder="YYYY-MM"
                                                                onChange={(e) => { setJoining_year(e.target.value) }}
                                                                autoComplete="joining_year"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="graduated-year"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            College Graduated Year
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="graduated-year"
                                                                name="graduated-year"
                                                                type="month"
                                                                min="2018-06"
                                                                max="2024-06"
                                                                placeholder="YYYY-MM"
                                                                required
                                                                onChange={(e) => { setGraduated_year(e.target.value) }}
                                                                autoComplete="graduated_year"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="joining_year"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            College Joining Year
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="joining-year"
                                                                name="joining-year"
                                                                type="date"
                                                                autoComplete="joining_year"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="graduated_year"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            College Graduated Year
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="graduated-year"
                                                                name="graduated-year"
                                                                type="text"
                                                                autoComplete="graduated_year"
                                                                className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                            />
                                                        </div>
                                                    </div> */}
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
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Submit
                                </button>
                                {/* <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Submit
                                </button> */}
                                <button
                                    type="button"
                                    // data-autofocus
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


            <Dialog open={open2} onClose={setOpen2} className="relative z-10">
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
                                                    Please use your college email-id to receive otp for verification
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
                                                            LinkedIn
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
                                                            Github
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
                                    onClick={handleSubmit2}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setOpen2(false)}
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
    );
};

export default Homepage;
