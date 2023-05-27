import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center mt-5 mb-5'>Blogs</h2>
            <div>
                <h3>1. Tell us the differences between uncontrolled and controlled components.</h3>
                <ul>
                    <li>
                        <p><strong> Uncontrolled Components:</strong>

                            i. In uncontrolled components, the form inputs manage their own state internally, without relying on React state.
                            ii. The state of the form inputs is handled by the DOM itself.
                            iii. You can access the input values using DOM methods like getElementById or querySelector.
                            iv. Uncontrolled components are typically used when you don't need to perform validation or access the input values frequently.</p>
                    </li>
                    <li>
                        <p><strong> Controlled Components:</strong>
                            i. Controlled components rely on React state to manage the state of form inputs.
                            ii. The state values are stored in the component's state variables, and changes are handled through event handlers.
                            iii. The input values are set via the value prop, and updates are managed through onChange event handlers.
                            iv. Controlled components allow for more control and enable you to perform validation, transformation, or any other logic on the input values.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;