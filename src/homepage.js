import {useState, useEffect} from "react";
import Reusable from "./customhook";
import Homelist from "./homedisplay";
const Home = () => {
    const {blogs, error, ispending}=Reusable('http://localhost:8000/blogs')

    return ( 
        <div className="">
            {error && <div>{error}</div>}
            {ispending && <h6>Loading...</h6>}
            {blogs && <Homelist blogs={blogs} title={'Resume Application'}/>}
        </div>
     );
}
 
export default Home;