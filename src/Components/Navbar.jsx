import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('light')

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>

        <li><NavLink to='/' className={({ isActive }) => isActive ? ' font-bold border-2 p-2 rounded-xl border-[#1DD100]' : 'font-family'}>Home</NavLink></li>
        <li><NavLink to='/all' className={({ isActive }) => isActive ? ' font-bold border-2 p-2 rounded-xl border-[#1DD100]' : 'font-family'}>All Craft Items</NavLink></li>

        <li><NavLink to='/add' className={({ isActive }) => isActive ? ' font-bold border-2 p-2 rounded-xl border-[#1DD100]' : 'font-family'}>Add Craft Item</NavLink></li>

        <li><NavLink to='/my' className={({ isActive }) => isActive ? ' font-bold border-2 p-2 rounded-xl border-[#1DD100]' : 'font-family'}>My Craft List</NavLink></li>

    </>


    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    return (
        <div className="navbar container mx-auto bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className=" flex items-center">
                    <img className="w-14 md:block hidden" src={'https://i.ibb.co/5vM0P0y/OIG1-2-Sr5-E9-T-removebg-preview.png'} alt="" />
                    <h1 className=" font-bold text-xl lg:text-2xl">Artful Abode</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex space-x-4 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={user?.photoURL} alt="" /> : ""
                            }
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        {
                            user ? <li className="font-bold">{user?.displayName}</li> : ""
                        }
                    </ul>
                </div>
                {
                    user ? <button onClick={handleSignOut} className="btn btn-sm font-bold bg-[#1DD100]">Log Out</button> : <Link to='/login'><button className="btn btn-sm font-bold bg-[#1DD100]">Log In</button></Link>
                }
                <div className="flex justify-end">
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;