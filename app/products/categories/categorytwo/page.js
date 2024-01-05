import React from "react";

const products = [
  {
    id: 1,
    imageSrc: "https://i.ibb.co/y0Y8Hj4/01-maxplus-step-GE-3.jpg",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    id: 2,
    imageSrc: "https://i.ibb.co/y0Y8Hj4/01-maxplus-step-GE-3.jpg",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    id: 3,
    imageSrc: "https://i.ibb.co/y0Y8Hj4/01-maxplus-step-GE-3.jpg",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  // Add more product data as needed
];

const Categorytwo = () => {
  return (
    <div className="mb-12">
      <div className="container mx-auto">
        <div className="text-center my-8 text-blue-800 font-extrabold text-2xl">
          Products Category Two
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="card lg:w-96 md:w-96 sm:w-auto glass card-normal"
            >
              <figure>
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="object-contain h-60 pt-4"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-center">
                  <div className="btn btn-primary">
                    <p>
                      <a href="tel:+8801890240594">Call for Order</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorytwo;
