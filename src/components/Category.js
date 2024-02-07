import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlices";
import { NavLink } from "react-router-dom";

const Category = ({post}) => {

    const dispatch = useDispatch(); 
    const {cart} = useSelector( (state) => state )
    const isProductActive = cart.some( (p) => p.id === post.id )

    function removeCartHandler(){
        dispatch( remove(post.id) )
    }
    function addCartHanler(){
        dispatch( add(post) );
    }

    return(
        <div className=" ">

            <div className="border border-black rounded-lg text-center space-y-3 hover:scale-[1.1] hover:shadow-black shadow-lg p-2 transition-all delay-100">
                
                <div className="space-y-3">


                    <NavLink to={`/products/${post.id}`}> 
                        <p className="font-bold">{post.title.length < 15 ? `${post.title}` : `${post.title.substring(0,15)}...` }</p>
                    </NavLink>

                    
                    <p> {post.description.length < 40 ? `${post.description}` : `${post.description.substring(0, 40)}...` } </p> 
                    <div className="flex justify-center ">
                        <img src={post.image} alt="[]" className="w-[12rem] h-[15rem]"/>
                    </div>
                    
                    
                </div>
                <div className=" flex justify-between items-center p-2">

                    <p>${post.price}</p>

                    <div className="border border-black transition-all delay-300 rounded-lg hover:bg-black hover:text-white p-1">
                    {
                        isProductActive ? ( <button onClick={removeCartHandler}>Remove to cart</button> ) : ( <button onClick={addCartHanler}>Add to Cart</button> )
                    }
                    </div>

                </div>

            </div>
        </div>
            
    )
};

export default Category; 