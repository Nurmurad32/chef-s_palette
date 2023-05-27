import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-5'>Blogs</h2>
            <div>
                <h3>Tell us the differences between uncontrolled and controlled components.</h3>
                <ul>
                    <li>
                        <p><strong> Uncontrolled Components:</strong><br />

                            i. In uncontrolled components, the form inputs manage their own state internally, without relying on React state.<br />
                            ii. The state of the form inputs is handled by the DOM itself.<br />
                            iii. You can access the input values using DOM methods like getElementById or querySelector.<br />
                            iv. Uncontrolled components are typically used when you don't need to perform validation or access the input values frequently.</p>
                    </li>
                    <li>
                        <p><strong> Controlled Components:</strong><br />
                            i. Controlled components rely on React state to manage the state of form inputs.<br />
                            ii. The state values are stored in the component's state variables, and changes are handled through event handlers.<br />
                            iii. The input values are set via the value prop, and updates are managed through onChange event handlers.<br />
                            iv. Controlled components allow for more control and enable you to perform validation, transformation, or any other logic on the input values.
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>How to validate React props using PropTypes?</h3>
                <p>
                    1. Import the PropTypes module into your component file. <br />
                    2. Define the propTypes property for your component.<br />
                    3. Use the various PropTypes validators to specify the expected types and any additional constraints for each prop.<br />
                    4. Pass the props to your component, ensuring they match the specified PropTypes.<br />
                    PropTypes provides a range of validators such as string, number, boolean, object, array, function, shape, and more. By defining propTypes, you can enforce the correct types and constraints for the props received by your components. This helps catch and prevent potential bugs and ensures that your components receive the expected data, enhancing the reliability and maintainability of your code.
                </p>

            </div>
            <div>
                <h3>Tell us the difference between nodejs and express js.?</h3>
                <p>
                    <ul>
                        <li>
                            Node.js:
                            <p>i. Node.js is a JavaScript runtime environment built on the V8 JavaScript engine. <br />
                                ii. It allows you to run JavaScript code on the server-side, outside of a web browser.<br />
                                iii. Node.js provides a runtime environment that enables server-side scripting, networking, and file system access.<br />
                                iv. It offers a vast ecosystem of modules and packages through npm (Node Package Manager).<br />
                                iv. Node.js is known for its non-blocking, event-driven architecture, making it efficient for handling concurrent requests and building scalable applications.
                            </p>
                        </li>
                        <li>
                            Express.js:
                            <p>i. Express.js is a web application framework built on top of Node.js.<br />
                                ii. It provides a set of features and tools to simplify the development of web applications and APIs.<br />
                                iii. Express.js helps in handling HTTP requests, defining routes, and managing middleware functions.<br />
                                iv. It allows you to create robust and modular web applications by providing a layer of abstraction and structure.<br />
                                iv. Express.js is known for its simplicity and flexibility, allowing developers to customize their application's behavior and add middleware as needed.
                            </p>
                        </li>
                    </ul>
                </p>
            </div>
            <div>
                <h3>What is a custom hook, and why will you create a custom hook?</h3>
                <p>
                    Custom hooks allow you to extract and share common stateful or side-effectful logic from components, making your code more modular, reusable, and easier to maintain. Here are a few reasons why you might create a custom hook:
                    <ul>
                        <li>Code Reusability: If you find yourself repeating the same logic in multiple components, creating a custom hook allows you to encapsulate that logic into a single function. You can then reuse the custom hook across different components, promoting code reusability.</li>
                        <li>Abstraction and Encapsulation: Custom hooks enable you to abstract complex or repetitive logic into a single function. This abstraction helps to separate concerns, making your components cleaner and more focused on their specific responsibilities.</li>
                        <li>Improved Readability: By extracting logic into a custom hook, you can declutter your components and make them more readable. The custom hook serves as a self-contained unit of logic that can be easily understood and reused.</li>
                        <li>Testing: Custom hooks make testing easier since you can test the hook independently of the components that use it. This facilitates more focused and comprehensive unit testing.</li>
                        <li>Sharing Logic across Projects: Custom hooks can be shared across different projects or within a team, allowing developers to leverage existing solutions and accelerate development.</li>
                    </ul>
                    Creating custom hooks is a powerful technique in React development that promotes code reuse, abstraction, and separation of concerns. They enable you to extract and share common logic, enhancing the maintainability and scalability of your React applications.
                </p>
            </div>
        </div>
    );
};

export default Blogs;