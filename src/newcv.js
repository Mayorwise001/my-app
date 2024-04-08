import { useState } from "react";
import {useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import Experience from "./experience";



const Newcv = () => {

    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const history = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = { name,phone,email,address,formData, expert};

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            history('/')
   
            
        })
    }
    
    

    //These handles the codes for Educational system.
    const [formData, setFormData] = useState([]);
    const initialInput = {
      school: '',
      degree: '',
      location: '',
      startDate: '',
      endDate: ''
    };

    const addNewInput = (e) => {
        e.preventDefault();
        setFormData([...formData, initialInput]);
      };
    
      const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedFormData = [...formData];
        updatedFormData[index] = { ...updatedFormData[index], [name]: value };
        setFormData(updatedFormData);
      };

//usestate and handle function for the experience component.
const [expert, setExpert]=useState([])
const initialExpert = {
    company: '',
    position: '',
    location: '',
    startdate: '',
    enddate: '',
    description: ''
  };

  const addNewExpert = (e) => {
    e.preventDefault();
    setExpert([...expert, initialExpert]);
  };

  const handleExpert = (index, e) => {
    const { name, value } = e.target;
    const updatedFormData = [...expert];
    updatedFormData[index] = { ...updatedFormData[index], [name]: value };
    setExpert(updatedFormData);
  };


    return ( 
<div className="create">
            <h2>Add a new CV</h2>
           <form>
                <label>Full Name:</label>
                <input type="name"
                required
                value={name}
                onChange={(e)=>setname(e.target.value)}
                />

                <label >Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}>
                
                </input>

                <label>Phone No:</label>
                <input
                required
                type="phone"
                value={phone}
                onChange={(e)=>setphone(e.target.value)}>
                    
                </input>

                <label >Address:</label>
                <textarea
                type="text"
                value={address}
                onChange={(e)=>setaddress(e.target.value)}>
                
                </textarea>
                <label className="addedu">Add  Education:</label>
               
                {formData.map((input, index) => (
                    <div key={index}>
            <label className="eduback">{`Educational Background:${index + 1}`}</label>
          <div>
            <label htmlFor={`school${index}`}>School:</label>
            <input type="text" id={`school${index}`} name="school" value={input.school} onChange={(e) => handleChange(index, e)} />
          </div>
          <div>
            <label htmlFor={`degree${index}`}>Degree:</label>
            <input type="text" id={`degree${index}`} name="degree" value={input.degree} onChange={(e) => handleChange(index, e)} />
          </div>
          <div>
            <label htmlFor={`location${index}`}>Location:</label>
            <input type="text" id={`location${index}`} name="location" value={input.location} onChange={(e) => handleChange(index, e)} />
          </div>
          <div>
            <label htmlFor={`startDate${index}`}>Start Date:</label>
            <input type="date" id={`startDate${index}`} name="startDate" value={input.startDate} onChange={(e) => handleChange(index, e)} />
          </div>
          <div>
            <label htmlFor={`endDate${index}`} >End Date:</label>
            <input type="date" className="enddate" id={`endDate${index}`} name="endDate" value={input.endDate} onChange={(e) => handleChange(index, e)} />
          </div>

          
        </div>
      ))}
      <FontAwesomeIcon icon={faSquarePlus} className="addbtn" onClick={addNewInput}/>
      <label className="addexp">Add  Experience:</label>
      <Experience expert={expert} handleExpert={handleExpert} addNewExpert={addNewExpert}/>
      <button className="savebtn" onClick={handleSubmit}>Save</button>


                </form>
            </div>
     );
}
 
export default Newcv;