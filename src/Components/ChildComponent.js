import React from "react";
import { useForm } from "react-hook-form";


const ChildComponent = ({ onSubmit, submissionStatus }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="container">
      {submissionStatus === "success" && (
        <div className="ui message success">Form submitted successfully!</div>
      )}
      {submissionStatus === "failed" && (
        <div className="ui message failed">
          Form submission failed. Please try again.
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form </h1>
        <div className="ui divider"> </div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              {...register("name", { required: "username is requied" })}
              placeholder="Username"
            />
          </div>
          <p>{errors.name?.message}</p>

          <div className="field">
            <label>Email</label>

            <input
              placeholder="email"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
          </div>
          {errors.email?.type === "required" && <p>Email is required.</p>}
          {errors.email?.type === "pattern" && <p>Invalid email format.</p>}
          {/* <p>{errors.email?.message}</p> */}
          <div className="field">
            <label>Company Name</label>
            <input
              type="text"
              {...register("company_name", {
                required: "company_name is requied",
              })}
              placeholder="Company Name"
            />
          </div>
          <p>{errors.company_name?.message}</p>

          <div className="field">
            <label>Phone Number</label>

            <input
            placeholder="phone number"
              {...register("phone_number", {
                required: true,
                pattern: /^\d+$/,
                maxLength: {
                  value: 10,
                  message: "phone number exceeds  10 charaters",
                },
              })}
            />
          </div>
          {errors.phone_number?.type === "required" && (
            <p>Phone number is required.</p>
          )}
          {errors.phone_number?.type === "pattern" && (
            <p>Invalid phone number format.</p>
          )}
          {/* {/* {errors.email?.type === "required" && <p>phone_number is required.</p>}
           */}
          <p>{errors.phone_number?.message}</p>

          <div className="field">
            <label>Lead Types ID</label>
            <input
              type="text"
              value="sandbox"
              {...register("lead_types_id")}
              placeholder="ID"
            />
          </div>
          <p>{errors.lead_types_id?.message}</p>

          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ChildComponent;
