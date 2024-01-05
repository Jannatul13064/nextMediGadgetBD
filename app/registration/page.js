"use client";
import React, { useState } from "react";

const Registration = () => {
  const [registrationType, setRegistrationType] = useState("new");

  const handleRegistrationTypeChange = (e) => {
    setRegistrationType(e.target.value);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-16 place-content-center container mx-auto text-center">
        <div className="shadow-lg p-6 my-4 rounded-xl bg-white">
          <div className="font-extrabold text-3xl mb-6 text-blue-600">
            <div className="mb-4">
              {registrationType === "new" ? "Registration" : "Log In"}
            </div>
            <hr className="" />
          </div>
          <form className="flex flex-col gap-4 items-center justify-center">
            {registrationType === "new" && (
              <>
                <div className="w-full max-w-xs">
                  <label className="form-control">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input border-indigo-500"
                      required
                    />
                  </label>
                </div>
                <div className="w-full max-w-xs">
                  <label className="form-control">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input border-indigo-500"
                      required
                    />
                  </label>
                </div>
              </>
            )}
            <div className="w-full max-w-xs">
              <label className="form-control">
                <input
                  type="email"
                  placeholder="Enter Email address"
                  className="input border-indigo-500"
                  required
                />
              </label>
            </div>
            <div className="w-full max-w-xs">
              <label className="form-control">
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="input border-indigo-500"
                  required
                />
              </label>
            </div>
            <div className="w-full max-w-xs">
              <label className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input border-indigo-500"
                  required
                />
              </label>
            </div>
            {registrationType === "new" && (
              <div className="mt-4">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary text-gray-100 border-none"
                />
              </div>
            )}
            {registrationType === "registered" && (
              <div className="mt-4">
                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-primary text-gray-100 border-none"
                />
              </div>
            )}
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="new"
                  checked={registrationType === "new"}
                  onChange={handleRegistrationTypeChange}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">New User</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  value="registered"
                  checked={registrationType === "registered"}
                  onChange={handleRegistrationTypeChange}
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Already Registered</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
