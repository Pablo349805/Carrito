import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";


const CartScreen = () => {
    
    const { carrito, removeItem, vaciarCarrito, calcularTotal } = useContext(CartContext)


    return ( 
        <>
            <div className="container my-5" >
                <h2>Resumen de compra</h2>
                {carrito.length > 0 ? <h3 className="m-3">Precio total: ${calcularTotal()}</h3> : ""}
                {carrito.map( (item) => ( 
                        <div className="card" key={item.id} style={{width: '18rem'}}>
                            <img className="card-img-top w-50 m-5" src={item.image} alt="imagen_producto" />
                            <li className="list-group-item">{item.title}</li>
                            <li className="list-group-item">Cantidad: {item.cantidad}</li>
                            <li className="list-group-item">Precio: {item.price * item.cantidad}</li>
                            <button className= "btn btn-danger" onClick={() => removeItem(item.id)}>
                                <BsTrash />
                                </button>
                            <hr/>
                        </div >
                ))
                }
                <hr/>
                <div className="d-flex align-items-center" >
                    <h3 className="m-4">Precio total: ${calcularTotal()}</h3>
                    {carrito.length > 0 ? (<button className="btn bg-danger m-2" onClick={vaciarCarrito}>Vaciar Carrito</button>) : (<button className="btn bg-danger" disabled>Vaciar Carrito</button>)}
                    <Link to="/"><button className="btn btn-success m-2">Seguir comprando</button></Link>
                    <Link to="/checkout"><button className="btn btn-success m-2">Terminar mi compra</button></Link>
                </div>
            </div>
        </>
);
    }
export default CartScreen;
