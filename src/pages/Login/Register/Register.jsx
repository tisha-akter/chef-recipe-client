
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react';


const Register = () => {

    const {user, createUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result => {
            const loggedUSer = result.user;
            console.log(loggedUSer);
            form.reset();
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
                            <input type="text" name='photo' placeholder="Photo URl" className="input input-bordered" required />
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