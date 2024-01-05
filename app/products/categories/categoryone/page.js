import React from "react";

const products = [
  {
    id: 1,
    imageSrc: "https://i.ibb.co/Fs8xtH4/max-3.jpg",
    title: "Blood Glucose Test Meter",
    brand: "Bionime",
    model: "GE Max Series",
    price: 1190,
    originalPrice: 2950,
    warranty: "3 years brand warranty",
  },
  {
    id: 2,
    imageSrc: "https://i.ibb.co/Fs8xtH4/max-3.jpg",
    title: "Blood Glucose Test Meter",
    brand: "Bionime",
    model: "GE Max Series",
    price: 1190,
    originalPrice: 2950,
    warranty: "3 years brand warranty",
  },
  {
    id: 3,
    imageSrc: "https://i.ibb.co/Fs8xtH4/max-3.jpg",
    title: "Blood Glucose Test Meter",
    brand: "Bionime",
    model: "GE Max Series",
    price: 1190,
    originalPrice: 2950,
    warranty: "3 years brand warranty",
  },
  // Add more product data as needed
];

const Categoryone = () => {
  return (
    <div className="mb-12 z-0">
      <div className="container mx-auto">
        <div className="text-center my-8 text-blue-800 font-extrabold text-2xl">
          Products Category One
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="card lg:w-96 md:w-96 sm:w-auto glass card-compact"
            >
              <figure>
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="object-contain h-60"
                />
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title">{product.title}</h2>
                <div>
                  <span className="font-bold">Brand : </span>
                  {product.brand}
                </div>
                <div>
                  <span className="font-bold">Model : </span>
                  {product.model}
                </div>
                <div>
                  <span className="font-bold">Price : </span>
                  <del>{product.originalPrice}</del>{" "}
                  <span className="font-bold text-red-600">
                    {product.price}
                  </span>{" "}
                  TK
                </div>
                <div>
                  <span className="font-bold">Warranty : </span>
                  {product.warranty}
                </div>
                <small> </small>
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

export default Categoryone;
