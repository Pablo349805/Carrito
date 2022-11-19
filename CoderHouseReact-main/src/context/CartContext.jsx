import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()
// const { Provider } = contexto; 

// export const useCarrito = () => {
//     return useContext(contexto)
// }

const init = JSON.parse(localStorage.getItem("carrito")) || []

const CartProvider = ( {children} ) => {

     const [carrito, setCarrito] = useState(init)
  console.log(carrito)

  
  const addToCart = (item) => {
    setCarrito([...carrito, item])
  }
  
  const removeItem = (ItemId) => {
    const newCart = carrito.filter( (item) => item.id !== ItemId)
    setCarrito ( newCart )
  }

  const calcularCantidad = () => {
    return carrito.reduce( (acc, item) => acc + item.cantidad, 0)
  } 

  const calcularTotal = () => {
    return carrito.reduce( (acc, item) => acc + (item.cantidad * item.price), 0)
  }

  const isInCart = (Itemid) => {
    return carrito.some( (item) => item.id === Itemid)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }
  
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    
  }, [carrito])

  const valor_del_contexto = {
        carrito,
        addToCart,
        removeItem,
        calcularCantidad,
        vaciarCarrito,
        isInCart,
        calcularTotal}

    return (
        <CartContext.Provider value={ 
          valor_del_contexto
         }> 
            {children}
        </CartContext.Provider>
        
      );
}
 
export default CartProvider;