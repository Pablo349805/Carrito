import { Link } from "react-router-dom"


const Item = ({title, image, id, category, price, description}) => {

    return ( 
        <div className="col">
            <div className="card" style={{width: '15rem'}}>
                <img className="card-img-top" src={image} alt="imagen_producto" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                        {category} - {price}</p>
                    <Link className="btn btn-primary" to={"/item/"+id}>VER</Link>
                
                </div>
            </div>
        </div>

);
}
export default Item;

