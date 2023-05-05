
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext, useState } from 'react';


const Register = () => {

    const {user, createUser, updateProfile} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        if(password.length < 6){
            setErrorMessage("you have to enter at least 6 digit")
            return;
        }

        else if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setErrorMessage('Please add at least two uppercase.');
            return;  
        }

       

        createUser(email, password)
        .then(result => {
            const loggedUSer = result.user;

            if(loggedUSer) {
                updateProfile(loggedUSer, {
                    photoURL: photo
                }).then(() => {
                    console.log("Photo Updated");
                })
            }

            console.log(loggedUSer);
            form.reset();
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col mt-10 mb-10">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URl</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URl" className="input input-bordered" />
                        </div>
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
                                <Link to="/login" className="label-text-alt link link-hover">Already Have an account?</Link>
                            </label>
                        </div>
                        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-orange-500">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;