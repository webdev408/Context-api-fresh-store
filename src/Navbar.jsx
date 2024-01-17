import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "./components/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Navbar
        </Link>

        <div className="navbar-nav">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
          <NavLink className="nav-link" to="/cart">
            <FaShoppingCart />
            {cart.length}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
