import { useContext, useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import { CartContext } from "../../context/CartContext";


const ItemCount = ({initial = 1, handleAgregar, stock, id}) => {

    
    const {isInCart} = useContext(CartContext);
    
    const [cantidad, setCantidad] = useState(initial)



    const aumentar = () => {
    setCantidad(cantidad + 1)
    cantidad >= stock  ? setCantidad(cantidad + 0) : setCantidad(cantidad + 1)
    }

    const restar = () => {
        if (cantidad > 1) {
    setCantidad(cantidad - 1)
    }
}

    const confirm = () => {
        handleAgregar(cantidad)
    }

    return ( 
        <>
                <Container>
                    <p className="mb-0 mt-3">Cantidad: {cantidad}</p>
                    <Button size="sm" onClick={restar}>-</Button>
                    <Button size="sm" className=" m-2" onClick={aumentar}>+</Button>
                    <Button disable={isInCart(id)} size="sm" className="px-3" onClick={confirm}>Agregar al carrito</Button>
                </Container>
        </>
     );
}
 
export default ItemCount;