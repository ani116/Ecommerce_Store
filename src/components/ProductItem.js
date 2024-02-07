import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlices";
import { useNavigate } from "react-router-dom";


const ProductItem = ({post}) => {
    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();
    const isProductActive = cart.some( (p) => p.id === post.id );
    const navigation = useNavigate();

    function removeCartHandler(){
        dispatch(remove(post.id));
    }
    function addCartHanler(){
        dispatch(add(post));
    }
    return(
        <div className="space-y-20">
            <div className="flex w-11/12 max-w-[1200px] mx-auto items-center gap-[8rem] mt-10">
            
                <div>
                    <img src={post.image} alt="" className="w-[30rem] "/>
                </div>

                <div className="space-y-4 items-center text-center">
                    <h1 className="font-bold text-2xl text-center">{post.title}</h1>
                    <p className="text-2xl text-center">Availability: {post.rating.count} </p>
                    <p className="text-2xl text-center"><span>Price: </span>${post.price}</p>
                    <p className="text-2xl text-center">Description:</p>
                    <p className="text-center"> {post.description}</p>
                    <p className="text-center text-xl">Rating: <span className="text-orange-500">{post.rating.rate}</span></p>
                    <div >
                        {
                            isProductActive ? 
                            (
                            <button onClick={removeCartHandler} className="border border-black transition-all delay-300 rounded-lg hover:bg-black hover:text-white p-1 font-bold">
                                Remove From Cart 
                            </button>
                            ) : 
                            (<button onClick={addCartHanler} className="border border-black transition-all delay-300 rounded-lg hover:bg-black hover:text-white p-2 font-bold">
                                Add to Cart
                            </button>)
                        }
                    </div>
                    
                </div>

            </div>

            <div className="text-center">
                <button onClick={ () => navigation(-1)} className="border border-black transition-all delay-300 rounded-lg bg-black text-white  p-2 "> Go back</button>
            </div>
        </div>
        
    )
}

export default ProductItem;