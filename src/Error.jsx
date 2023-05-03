import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://motos-react.vercel.app/static/media/error.44496ad1f89e5fa1e2f7.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">404 not found!</h1>
                    <p className="py-6 text-2xl">Whoops, this is embarassing.
                        Looks like the <br /> page you were looking for wasn't found</p>
                    <div className='text-3xl font-bold text-orange-500'>
                        <Link to="/">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;


