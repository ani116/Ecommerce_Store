import { useEffect, useState } from "react";
import {  useLocation, useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";
const API_URL = "https://fakestoreapi.com/products";

const ProductPages = () => {

    const [product, setProduct] = useState(null);
    const [loading, setloading] = useState(false);
    const location = useLocation()

    const productId = location.pathname.split("/").at(-1);


    async function fetchingData(productId){
        setloading(true);
       
        try {
            const res = await fetch(`${API_URL}/${productId}`);
            if (!res.ok) {
                throw new Error('Failed to fetch product');
            }
            const data = await res.json();
            setProduct(data);
            console.log(data);
        } 
        catch (error) {
            setProduct(null);
        }
        setloading(false)
    }

    useEffect( () => {
        if(productId){
            fetchingData(productId);
        }
    }, [productId] )

    return(
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : product ? (
                <ProductItem post={product}/>
            ) : (
                <div>Product not found</div>
            )}
        </div>
        
    )
}

export default ProductPages;