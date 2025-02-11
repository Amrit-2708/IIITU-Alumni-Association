const Navbar = () => {
    return (
        <nav className="mx-auto max-w-8xl flex items-center justify-between p-6 lg:px-8 font-bold text-neutral-100 bg-blue-800">
            <div className="flex items-center">
                <img src="https://iiitu.ac.in/Indian_Institute_of_Information_Technology,_Una_logo.png" width={80}></img>
                <a className="navbar-brand ml-3 text-2xl" href="/">
                    IIITU Alumni Association
                </a>
            </div>

            <div className="flex-col">

                {/* Navbar Links */}
                <div className="sm:flex sm:gap-x-6 md:flex md:gap-x-8 lg:flex lg:gap-x-12">
                    <a href="/" className="text-sm/6 font-semibold py-2">
                        Home
                    </a>

                    <a href="/" className="text-sm/6 font-semibold py-2">
                        Signup
                    </a>

                    {/* <a href="/admin" className="text-sm/6 font-semibold py-2">
                        Admin
                    </a> */}

                    {/* <button className="text-sm/6 font-semibold py-2">
                        Log Out
                    </button> */}
                </div>
            </div>

            {/* Hamburger menu for smaller screens */}

        </nav>
    );
};

export default Navbar;