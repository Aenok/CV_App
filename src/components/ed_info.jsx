import { useState, useEffect } from 'react';
import add_button from "../assets/add.png"

export default function EducationInformation({ educationInfo, handleEduUpdate}) {

    const [ educationArray, setEducationArray ] = useState( educationInfo || []);

    useEffect(() => {
        handleEduUpdate(educationArray);
    }, [educationArray, handleEduUpdate]);

    // console.log(educationArray)

    function addEducation() {
        const newEducation = {
            id: crypto.randomUUID(),
            'institute': '',
            'location': '',
            'degree': '',
            'field': '',
            'date': ''
        }

        setEducationArray([...educationArray, newEducation])
    }

    function removeField(id) {
        let ret_val = [];
        for(let i = 0; i < educationArray.length; i++) {
            if(!(educationArray[i].id === id)) {
                ret_val.push(educationArray[i]);
            }
        }

        setEducationArray(ret_val);
    }
    
    function updateField(id, field, e_val) {
        let ret_val = [];
        for(let edu in educationArray) {
            if(educationArray[edu].id === id) {
                ret_val.push( {...educationArray[edu], [field]: e_val})
            } else {
                ret_val.push(educationArray[edu]);
            }
        }
        setEducationArray(ret_val);
    }
    
    return (
        <>
            <h1>Education</h1>
            <hr />
                {educationArray.map(edu => (
                    <div key={edu.id} className="edu_card">
                        <input
                            type="text" 
                            placeholder="Name of institute"
                            value={edu.institute}
                            onChange={(e) => updateField(edu.id, 'institute', e.target.value, )} 
                        />
                        <input
                            type="text"
                            placeholder="location" 
                            value={edu.location}
                            onChange={(e) => updateField(edu.id, 'location', e.target.value)}
                        />
                        <div>
                            <input 
                                type="text" 
                                placeholder="Degree/Diploma obtained" 
                                value={edu.degree}
                                onChange={(e) => updateField(edu.id, 'degree', e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Field of study" 
                                value={edu.field}
                                onChange={(e) => updateField(edu.id, 'field', e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Dated obtained" 
                                value={edu.date}
                                onChange={(e) => updateField(edu.id, 'date', e.target.value)}
                            />
                        <div className="btn_div">
                            <button onClick={() => removeField(edu.id)}>Cancel</button>
                        </div>
                    </div>
                </div>
                ))}
                <div className="add_edu" onClick={addEducation}>
                    <img src={add_button} alt="add_button" />
                    Add another education
                </div>
        </>
    )
}
