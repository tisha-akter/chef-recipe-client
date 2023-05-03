import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container mx-auto py-3 mb-10 mt-10 '>
                <div className="border border-orange-500 p-4 sm:p-6 md:p-8">
                    <div className='mb-5'>
                        <div className="text-orange-500 font-bold text-2xl">
                            1. Differences between uncontrolled and controlled components-
                        </div>
                        <div className='text-black font-bold text-lg'>
                            Ans: In React, controlled components store form data within the component's state, while uncontrolled components allow form data to be handled by the DOM itself. Controlled components are useful for validating and manipulating form data, while uncontrolled components are useful for simple forms where you don't need to do anything with the data before sending it to a server.
                        </div>
                    </div>
                    <div className='mb-5'>
                        <div className="text-orange-500 font-bold text-2xl">
                            2. How to validate React props using PropTypes
                        </div>
                        <div className='text-black font-bold text-lg'>
                            Ans: React provides a built-in library called PropTypes for validating component props. PropTypes allow you to specify the type and shape of the data that a component should receive, helping to catch bugs early and ensure that your component receives the correct data.
                            To use PropTypes, We all need to import the PropTypes library from the 'prop-types' package.
                        </div>
                    </div>
                    <div className='mb-5'>
                        <div className="text-orange-500 font-bold text-2xl">
                            3. Difference between nodejs and express js -
                        </div>
                        <div className='text-black font-bold text-lg'>
                            Ans:  Node.js provides a runtime environment for executing JavaScript on the server-side, while Express.js is a web framework built on top of Node.js that provides additional APIs and abstractions for building web applications. Together, they provide developers with a powerful set of tools for building fast, scalable, and efficient server-side applications.
                        </div>
                    </div>
                    <div className='mb-5'>
                        <div className="text-orange-500 font-bold text-2xl">
                            4. What is a custom hook, and why will you create a custom hook? 
                        </div>
                        <div className='text-black font-bold text-lg'>
                            Ans:
                            A custom hook is a reusable function in React that allows you to share logic between components. It's like a recipe for handling common stateful behavior, such as fetching data or handling user input.
                            We create a custom hook when we want to reuse code across multiple components, without repeating yourself. Custom hooks simplify our code, making it more readable and easier to maintain, while also promoting code reuse and reducing duplication.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;