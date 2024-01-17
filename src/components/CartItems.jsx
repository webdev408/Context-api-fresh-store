import { useContext } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { CartContext } from "./CartContext";

const CartItems = () => {
  const { cart, setCart, removeProduct } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const removedProduct = (product) => {
    const newCart = [...cart];
    const index = newCart.findIndex(
      (item) => item.id === product.id && item.size === product.size
    );
    newCart.splice(index, 1);
    setCart(newCart);
    removeProduct(product.id);
  };

  const increaseQty = (product) => {
    const newCart = [...cart];
    const itemInCart = newCart.find(
      (item) => item.id === product.id && item.size === product.size
    );
    itemInCart.quantity += 1;
    setCart(newCart);
  };

  const decreaseQty = (product) => {
    const newCart = [...cart];
    const itemInCart = newCart.find(
      (item) => item.id === product.id && item.size === product.size
    );
    if (itemInCart.quantity > 1) {
      itemInCart.quantity -= 1;
    } else {
      const index = newCart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const checkout = () => {
    setCart([]);
    toast.info("Thank you for shopping with us!");
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Items in Cart</h2>

      <div className="row">
        {cart.map((product) => (
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
              </div>
              <button
                type="button"
                className="btn btn-sm btn-danger mb-1"
                onClick={() => removedProduct(product)}
              >
                <FaTrashAlt />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => decreaseQty(product)}
              >
                <FaMinus />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => increaseQty(product)}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-center fst-italic ">
        Total Bill: ${totalPrice.toFixed(2)}
      </h4>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-sm btn-success"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default CartItems;
