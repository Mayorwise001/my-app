import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'

const Homelist = ({blogs, title}) => {




    return ( 
        <div className="blog-list">
                    {blogs.map((blogger, index)=>(
            <div className="blog-preview" key={blogger.id}>
                <Link to={`/blogs/${blogger.id}`}>
                <h3>{title} <FontAwesomeIcon icon={faBookOpen} className="bookopen"/></h3>
                
                <h2>{blogger.name} {index + 1}</h2>
                    <b>Click for more....</b>
                </Link>
            </div>
        ))}
    </div>
     );
}
 
export default Homelist;