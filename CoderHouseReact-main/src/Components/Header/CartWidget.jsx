import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa" 
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {

const {calcularCantidad} = useContext(CartContext)

    return ( 
        <div style={{
            display: calcularCantidad() === 0 ? "none" : "block"
        }}>
            <FaShoppingCart className="m-1" size="25px" color="white" />
            <span className="text-light m-3" size="50px">{calcularCantidad()}</span>
        </div>
     );
}
 
export default CartWidget; 