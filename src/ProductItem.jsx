import React, {useState, useEffect} from "react"
import {useParams} from "react-router";
import Navlink from "react-router-dom"

const ProductItem = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products${id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then(data => {
            setProduct(data);
            setLoading(false);
          })
          .catch(error => {
            console.error("There was a problem fetching the product:", error);
            setLoading(false);
          });
      }, []);

      const Loading= () => {
        return(
            <>
            <div className="col-md-6">

            </div>
            </>
        )
      }

      const ShowProduct = () => {

        return(
        <>
        <div className="col-md-6">
            <img src={product.image} alt={product.title} height="400px" width= "400px"/>
        </div>
        <div className="col-md-6">
          <h4>{product.category}</h4>
          <h1>{product.title}</h1>
          <p className="lead-fw-bolder"> 
          Rating {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
           </p>
          <h3 className="display-6 fw-bold my-4">{product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2">
            Add to Cart
            </button>

          <button>
            <Navlink to= "/cart" className ="btn btn-dark ms-2 px-3 py-2"/>
            Go to Cart
          </button>
        </div>

        </>
        )
      }

    return ( 
        <div className="ProductItem">
          <div className="row">
            {loading ? <Loading/> : <ShowProduct/>}
          </div>
            
        </div>
     );
}
 
export default ProductItem;