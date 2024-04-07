import { useParams } from "react-router-dom"
import Reusable from "./customhook";
import {useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import './index.css';


const Fulldisplay = () => {
    const {id} = useParams();
    const {blogs:blogger, error, ispending} = Reusable('http://localhost:8000/blogs/' + id)
const history = useNavigate();
    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blogger.id,{
                method:'DELETE'
                
        }).then(()=>{
            history('/')
        })
    }
    return ( 
<div className="blog-details">

    <h2>CV Display</h2>
    {blogger && <div>
        <article>
            <div className="personal">
            <h2 className="name">{blogger.name}</h2>
            <div className="contact">
            <p className="phone"> <FontAwesomeIcon icon={faPhone} style={{ color: '#f1356d', paddingRight:'3px' }}  />{blogger.phone}</p>
            <p className="email"> <FontAwesomeIcon icon={faEnvelope} style={{ color: '#f1356d', paddingRight:'3px'}}  />{blogger.email}</p>
            </div>
            <p className="address"><FontAwesomeIcon icon={faLocationDot} style={{ color: '#f1356d', paddingRight:'3px'}}/>{blogger.address}</p>

            </div>
            <div>{blogger.formData.map((item, index)=>(
                <div key={index} >
                <h2>Educational Background</h2>
                <div class="container">
                <div className="cont1">
                    <p><strong>School:</strong> {item.school}</p>
                    <p className="location"><strong>Location:</strong> {item.location}</p>
                </div>

                    <div className="cont2">
                    <p className="degree"><strong>Degree:</strong> {item.degree}</p>
                    <p className="location"><strong>Start Date:</strong>{item.startDate}</p>
                    <p><strong>End Date:</strong>{item.endDate}</p>
                    </div>
                </div>
          <hr />

                </div>
            ))}
            </div>
           <div>{blogger.expert.map((item, index)=>(
               <div key={index}>
                <h2>Previous Experience</h2>
            <div class="container">

            <div className="cont1">
            <p><strong>Company:</strong> {item.company}</p>
            <p  className="location2"><strong>Position:</strong> {item.position}</p>
          </div>

          <div className="cont2">
          <p><strong >Location:</strong> {item.location}</p>
          <p  className="location2"><strong>Start Date:</strong> {item.startdate}</p>
          <p><strong>End Date:</strong> {item.enddate}</p>
          </div>
          </div>
          <p><strong>Description:</strong> {item.description}</p>
          
          
          <hr />

                </div>
            ))}</div>
        </article>
        <button onClick={handleClick}>Delete</button>
        </div>}
</div>
     );
}
 
export default Fulldisplay;