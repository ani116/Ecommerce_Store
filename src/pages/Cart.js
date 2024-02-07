import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart} = useSelector( (state) => state );
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount(cart.reduce( (total, curr) =>  total + curr.price, 0));
    }, [cart] ) 

    
    return(
        <div>

            {
                cart.length > 0 ? 
                (
                    <div className="w-11/12 max-w-[1200px] mx-auto mt-10 flex flex-row">
                        
                        <div className="max-w-[60%]">
                        {
                            cart.map( (item) => <CartItem item={item}></CartItem> )
                        }
                        </div>
                        <div className="max-w-[40%] flex flex-col justify-between p-20">
                            <div>
                                <h1 className="font-bold text-green-500 text-2xl">Your Cart</h1>
                                <h1 className="font-bold text-green-500 text-4xl">Summary</h1>
                                <p className="mt-4">Total item: <span className="bg-green-500 rounded-full p-2">{cart.length}</span> </p>
                            </div>
                            <div className="fixed bottom-5">
                                <p>Total Amount : <span className="font-bold">${totalAmount}</span></p>
                                <button className="border bg-green-500 w-[100%] text-white px-20 py-2 rounded-lg">
                                    CheckOut Now
                                </button>
                            </div>
                        </div>

                    </div>
                ) :
                (
                    <div className="your-cart border border-black w-full min-h-screen flex flex-col text-center justify-center items-center overflow-y-auto">

                        <h1>Your Cart is Empty</h1>
                        <Link to="/">
                        <button className="border bg-green-500 text-center text-white px-20 py-2 rounded-lg m-auto">
                            Shop Now
                        </button>
                        </Link>
                    </div>
                )
            }

        </div>
    )
};

export default Cart; 