import React from "react";

function ProductCard({ image, title, price, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-success">{price}</span>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>


      
    </div>
  );
}

function Body() {
  const products = [
    {
      image: "https://via.placeholder.com/150",
      title: "Product 1",
      price: "$29.99",
      description: "This is a description for product 1.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 2",
      price: "$39.99",
      description: "This is a description for product 2.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 3",
      price: "$49.99",
      description: "This is a description for product 3.",
    },
    // Add more products as needed
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Products</h1>
      <div className="row">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">© 2025 Your E-Commerce Store</p>
          <div>
            <a href="#" className="text-white mx-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white mx-3">
              Terms of Service
            </a>
            <a href="#" className="text-white mx-3">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Body;
