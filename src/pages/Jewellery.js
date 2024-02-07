import React, { useEffect} from "react";

import Category from "../components/Category";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/FetchSlices";

const Jewellery = () => {

    const {posts, loading} = useSelector((state) => state.data);
    const dispatch = useDispatch();

    useEffect( () => {
       dispatch( fetchData("jewelery"));
    }, [] )

    return(
        <div className="mt-8 w-11/12 max-w-[1200px] mx-auto text-center items-center">
            {
                loading ? 
                (
                    <Spinner></Spinner>
                ) :
                
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6 items-center justify-center text-center">
                    {
                        posts.map( (post) => <Category key={post.id} post={post}/> )
                    }
                </div>
            }
        </div>
    )
};

export default Jewellery; 