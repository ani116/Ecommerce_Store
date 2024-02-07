
import { useSelector } from "react-redux";

const ClickedItem = ({post}) => {
    const {cart} = useSelector( (state) => state );
    return(
        <div>

            <div>
                
                <div>
                    <img src={post.image} alt=""/>
                </div>
                <div>
                    <p>{post.description}</p>
                </div>

            </div>

        </div>
    )
}

export default ClickedItem;