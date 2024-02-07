
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlices";

const CartItem = ({item}) => {
  
    const dispatch = useDispatch();
    const removeFromCart = () =>{
      dispatch(remove(item.id))
    }

    return(
        <div className="">

      <div className="border-b border-gray-400 flex flex-col gap-4 relative p-5">
         
         <div className="h-[200px] flex items-center justify-center">
          <img src={item.image} alt="" className="h-full w-[25%]"/>
         </div>

         <div className="flex flex-col justify-center items-center text-center gap-4">
          <h1 className="font-bold">{item.title}</h1>
          <h1>
            {
              item.description.length < 100 ? item.description : `${item.description.substring(0,100)}..`
            }
          </h1>
          <div>
            <p className="text-green-600">${item.price}</p>
          </div>
          <div onClick={removeFromCart} className="absolute top-5 text-2xl bg-red-400 rounded-full p-3 right-6 cursor-pointer">
              <FcDeleteDatabase />
            </div>
         </div>

      </div>

    </div>
    )
}

export default CartItem;