import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../../assets/chef-name.png'
import { AuthContext } from '../../../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <div >
                                <NavLink to='/' className='navlinkbuttons'
                                    style={({ isActive, isPending }) => ({
                                        color: isActive ? "orange" : ""
                                    })}>
                                    <span className='me-2'>Home</span>
                                </NavLink>
                            </div>
                            <div className='text-gray-600 hover:text-indigo-400 font-semibold'>
                                <NavLink to='/blog' className='navlinkbuttons'
                                    style={({ isActive, isPending }) => ({
                                        color: isActive ? "orange" : ""
                                    })}>
                                    <span className='me-2'>Blog</span>
                                </NavLink>
                            </div>
                        </ul>
                    </div>
                    <img src={logo} alt="" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='text-gray-600 hover:text-indigo-400 font-semibold'>
                            <NavLink to='/' className='navlinkbuttons'
                                style={({ isActive, isPending }) => ({
                                    color: isActive ? "orange" : ""
                                })}>
                                <span className='me-2'>Home</span>
                            </NavLink>
                        </div>
                        <div className='text-gray-600 hover:text-indigo-400 font-semibold'>
                            <NavLink to='/blog' className='navlinkbuttons'
                                style={({ isActive, isPending }) => ({
                                    color: isActive ? "orange" : ""
                                })}>
                                <span className='me-2'>Blog</span>
                            </NavLink>
                        </div>
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    {user ?
                        (
                            <div title={user.email}>
                                {user.photoURL ?
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} /> 
                                        </div>
                                    </label>  
                                    : 
                                    <FaUserCircle className='text-4xl'></FaUserCircle>
                                }

                            </div>
                        ) :
                        (
                            <Link to="/login">
                                <button className='btn btn-sm bg-orange-500'>Login</button>
                            </Link>
                        )}
                    {user && (
                        <button onClick={handleLogOut} className='btn btn-sm bg-orange-500'>Logout</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;