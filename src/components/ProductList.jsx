import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductList = () => {
  const { addToCart, products } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="my-4 text-center">Product Basket</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.quantity}</p>
                <p className="card-text">Price: ${product.price}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
