import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Products</h2>
      <div className="row g-4"> {/* Added gap between rows and columns */}
        {products.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product._id}> {/* Responsive grid */}
            <div className="card h-100 shadow-sm"> {/* Uniform height and subtle shadow */}
              <img
                className="card-img-top w-100"
                src={product.image}
                alt={product.title}
                style={{ height: "200px", objectFit: "cover" }} // Fixed height, no stretching
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text flex-grow-1">{product.description}</p>
                <p className="card-text fw-bold text-primary">$ {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
