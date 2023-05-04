import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {

    const { signIn, signInWithGoogle, singInWithGithub } = useContext(AuthContext);
    // console.log(signIn)
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUSer = result.user;
                console.log(loggedUSer)
                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        // console.log('goooogleeeee is coming')
        signInWithGoogle()
            .then(result => {
                const loggedUSer = result.user;
                console.log(loggedUSer);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSignIn = () => {
        console.log('github is comming')
        singInWithGithub()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Login</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-orange-500">Login</button>
                        </div>
                    </form>
                    <p className=" m-4 mt-0 ml-8">
                        <Link to="/register" className="label-text-alt link link-hover">New to SocialChef? Please register</Link>
                    </p>

                    <div className='flex'>
                        <div className='p-5'>
                            <button onClick={handleGoogleSignIn} className="btn  bg-orange-500 text-sm"><FaGoogle className='mr-1 text-primary text-xl'></FaGoogle>google</button>
                        </div>
                        <div className='p-5'>
                            <button onClick={handleGithubSignIn} className="btn btn-primary bg-orange-500 "><FaGithub className='text-black text-xl mr-1'></FaGithub> github</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
