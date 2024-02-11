import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

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
          <div>
            <strong className="text-2xl">Address:</strong>
            <div className="flex mt-2 gap-8 items-center">
              <div>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="sm"
                  height="50px"
                  className="text-cyan-400"
                />{" "}
              </div>
              <div>{":"}</div>
              <div>
                MediGadget BD Headquarters <br />
                [Kazi Nazrul Avenue, Banglamotor] <br />
                [Dhaka, Bangladesh, 1205] <br />
              </div>
            </div>
          </div>
          <div>
            <strong className="text-2xl">Phone:</strong> <br />
            <div className="flex gap-3 items-center">
              <div>Official Call :{""}</div>
              <div>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="sm"
                  height="15px"
                  className="text-warning"
                />{" "}
              </div>
              <div>
                <a href="tel:+8801890240594" className="text-primary">
                  01890240594{" "}
                </a>
              </div>
            </div>
            <br />
            <div className="flex gap-3 items-center">
              <div>Support Call :{""}</div>
              <div>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="sm"
                  height="15px"
                  className="text-warning"
                />{" "}
              </div>
              <div>
                <a href="tel:+8801890240594" className="text-primary">
                  01890240594{" "}
                </a>
              </div>
            </div>
            <br />
          </div>
          <div>
            <strong className="text-2xl">Email:</strong> <br />
            <div className="flex gap-3 items-center">
              <div>Official Mail :{""}</div>
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="sm"
                  height="15px"
                  className="text-warning"
                />{" "}
              </div>
              <div>
                <a
                  href="mailto:medigadgetbd@gmail.com"
                  className="text-primary"
                >
                  medigadgetbd@gmail.com
                </a>
              </div>
            </div>
            <br />
            <div className="flex gap-3 items-center">
              <div>Support Mail :{""}</div>
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="sm"
                  height="15px"
                  className="text-warning"
                />{" "}
              </div>
              <div>
                <a
                  href="mailto:medigadgetbd@gmail.com"
                  className="text-primary"
                >
                  medigadgetbd@gmail.com
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
