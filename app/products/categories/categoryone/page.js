import React from "react";

const Categoryone = () => {
  return (
    <div className="mb-12 z-0">
      <div className="container mx-auto">
        <div className="text-center my-8 text-blue-800 font-extrabold text-2xl">
          Products Category One
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center">
          <div className="card w-96 glass card-compact">
            <figure>
              <img
                src="https://i.ibb.co/Fs8xtH4/max-3.jpg"
                alt="car!"
                className="object-contain h-80"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
          <div className="card w-96 glass card-compact">
            <figure>
              <img
                src="https://i.ibb.co/Fs8xtH4/max-3.jpg"
                alt="car!"
                className="object-contain h-80"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
          <div className="card w-96 glass card-compact">
            <figure>
              <img
                src="https://i.ibb.co/Fs8xtH4/max-3.jpg"
                alt="car!"
                className="object-contain h-80"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoryone;
