import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const Experience = ({expert, handleExpert, addNewExpert}) => {


    return ( 
        <div className="expert">

{expert.map((input, index) => (
                    <div key={index}>
            <label className="eduback">{`Experience:${index + 1}`}</label>
          <div>
            <label htmlFor={`school${index}`}>Company:</label>
            <input type="text" id={`company${index}`} name="company" value={input.company} onChange={(e) => handleExpert(index, e)} />
          </div>
          <div>
            <label htmlFor={`degree${index}`}>Position:</label>
            <input type="text" id={`position${index}`} name="position" value={input.position} onChange={(e) => handleExpert(index, e)} />
          </div>
          <div>
            <label htmlFor={`location${index}`}>Location: </label>
            <input type="text" id={`location${index}`} name="location" value={input.location} onChange={(e) => handleExpert(index, e)} />
          </div>
          <div>
            <label htmlFor={`startdate${index}`}>Start Date:</label>
            <input type="date" id={`startdate${index}`} name="startdate" value={input.startdate} onChange={(e) => handleExpert(index, e)} />
          </div>
          <div>
            <label htmlFor={`enddate${index}`}>End Date: </label>
            <input type="date" id={`enddate${index}`} name="enddate" value={input.enddate} onChange={(e) => handleExpert(index, e)} />
          </div>
          <div>
            <label htmlFor={`description${index}`}>Description: </label>
            <textarea className="describeinp" type="text" id={`description${index}`} name="description" value={input.description} onChange={(e) => handleExpert(index, e)} />
          </div>
</div>
          ))}

<FontAwesomeIcon icon={faSquarePlus} className="addexpbtn" onClick={addNewExpert}/>

</div>
     );
}
 
export default Experience;