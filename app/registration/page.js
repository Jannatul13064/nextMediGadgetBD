import React from "react";

const Registration = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-16 place-content-center container mx-auto text-center">
        <div className="shadow-lg shadow-blue-500/50 ... p-6 my-4 rounded-xl">
          <div className="font-extrabold text-3xl mb-6 text-blue-600 ">
            <div className="mb-4"> Registration</div>
            <hr className="" />
          </div>
          <form action="">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input w-full max-w-xs border-indigo-500"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input w-full max-w-xs  border-indigo-500"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter Email address"
                    className="input w-full max-w-xs  border-indigo-500"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Mobile Number</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="input w-full max-w-xs border-indigo-500"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Set Password</span>
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input w-full max-w-xs  border-indigo-500"
                    required
                  />
                </label>
              </div>
              {/* <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">
                      Re-type Password
                    </span>
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input w-full max-w-xs"
                    required
                  />
                </label>
              </div> */}
            </div>
            <div className="mt-4">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary text-gray-100 border-none"
              />
            </div>
          </form>
        </div>
        <div>
          <div className="shadow-lg shadow-blue-500/50 ... p-6 my-4 rounded-xl">
            <div className="font-extrabold  text-3xl mb-6 text-blue-600">
              <div className="mb-4">Sign In</div>
              <hr />
            </div>
            <form action="">
              <div className="flex flex-col flex-wrap gap-4 items-center justify-center">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Email</span>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter Email address"
                      className="input w-full max-w-xs  border-indigo-500"
                      required
                    />
                  </label>
                </div>

                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Set Password</span>
                    </div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input w-full max-w-xs  border-indigo-500"
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-primary text-gray-100 border-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
