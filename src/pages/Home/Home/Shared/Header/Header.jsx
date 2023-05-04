import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../assets/chef-name.png'
import { AuthContext } from '../../../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    // console.log(user?.email);

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
                                <li><a>Home</a></li>
                            </div>
                            <div className='text-gray-600 hover:text-indigo-400 font-semibold'>
                                <li><a>Blog</a></li>
                            </div>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl font-bold text-black">Social Chef</a> */}
                    <img src={logo} alt="" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='text-gray-600 hover:text-indigo-400 font-semibold'>
                            <Link className='me-2' to='/'>Home</Link>
                        </div>
                        <div className='text-gray-600 hover:text-indigo-400 font-semibold'>
                            <Link to='/blog'>Blog</Link>
                        </div>
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    {user ? 
                    (
                        <div className="w-10 rounded-full" title={user.email}>
                            <FaUserCircle className='text-4xl'></FaUserCircle>
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