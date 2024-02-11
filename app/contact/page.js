import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="grid gap-40 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <h2 className="font-extrabold text-3xl mb-6 text-blue-600">
            Contact Form
          </h2>
          {/* Insert Contact Form Here */}
          <form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input border-indigo-500"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input border-indigo-500"
              required
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input border-indigo-500"
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              style={{ height: 150 }}
              id="message"
              name="message"
              className="input border-indigo-500 resize-none rounded-md"
              required
            ></textarea>
            <button type="submit" className="mt-4 btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div>
          <h2 className="font-extrabold text-3xl mb-6 text-blue-600">
            Contact Information
          </h2>
          <p>
            <strong>Address:</strong> MediGadget BD Headquarters <br />
            [Your Address Here] <br />
            [City, State, ZIP] <br />
            [Country]
          </p>
          <p>
            <strong>Phone:</strong> <br />
            Main: [Your Phone Number] <br />
            Customer Service: [Customer Service Phone Number]
          </p>
          <p>
            <strong>Email:</strong> <br />
            General Inquiries: [General Email Address] <br />
            Customer Support: [Customer Support Email Address]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
