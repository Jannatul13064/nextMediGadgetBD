import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>Contact Us</h1>
        <p>
          Thank you for your interest in MediGadget BD! We are here to assist
          you with any inquiries you may have. Please feel free to reach out to
          us using the contact information below or by filling out the contact
          form.
        </p>
      </div>
      <div>
        <h2>Contact Information:</h2>
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
      <div>
        <h2>Contact Form:</h2>
        {/* Insert Contact Form Here */}
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p>
          Thank you for choosing MediGadget BD. We look forward to hearing from
          you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
