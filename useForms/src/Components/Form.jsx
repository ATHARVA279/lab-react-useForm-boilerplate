import { useForm } from "react-hook-form";
import React from 'react';

const Form = () => {
    const [registration, setRegistration] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setRegistration(true);
    };

    return (
        <>
        {registration && (            
            <div >
                <h1>Registration Successful</h1>
            </div>)}

            <div className="forms">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="values">
                        <label>First Name:</label>
                        <input type="text" name="firstName" {...register("firstName", { required: "First Name is required!" })} />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>

                    <div className="values">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" {...register("lastName", { required: "Last Name is required!" })} />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>

                    <div className="values">
                        <label>Email:</label>
                        <input type="email" name="email" {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i, message: "Invalid email address!" })} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="values">
                    <label>Password:</label>
                    <input type="password" name="password" {...register("password", {
                        required: "Password is required!",
                        minLength: { value: 5, message: "Password must be at least 6 characters long!" },
                        maxLength: { value: 20, message: "Password must be less than 20 characters long!" },
                    })} />
                    {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <input type="submit" value="Submit" className="submit" />
                </form>
            </div>
        </>


    );
};

export default Form;
