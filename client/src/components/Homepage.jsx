import React from "react";
import Navbar from "./Navbar";

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <h1 className="text-4xl p-5 font-bold">
                    From the Director&apos;s Desk,
                </h1>
                <div className="flex justify-around p-16">
                    <div className="w-1/2">
                        <p className="text-md">
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
                            <button
                                className="w-1/3 h-10 mt-5 rounded-md border border-slate-200 text-white bg-blue-800"
                            >
                                Explore The Directory
                            </button>
                            <button
                                className="w-1/3 h-10 mt-2 rounded-md border border-slate-200 text-white bg-blue-800"
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
        </div>
    );
};

export default Homepage;
