import { useState, useCallback } from "react"

import GeneralInformation from './gen_info.jsx'
import EducationInformation from './ed_info.jsx'
import ProfessionalInformation from './prof_info.jsx'
import '../styles/styles.css'

export default function Combine() {

    const [ editable, setEditable ] = useState(true);
    const [ formData, setFormData ] = useState(
        {
            general: {
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                phone: ''
            },
            education: [],
            professional: []
        }
    )

    console.log(formData)

    const handleGenUpdate = useCallback((newGenInfo) => {
        setFormData(prevData => ({
            ...prevData,
            general: newGenInfo
        }));
    }, []);

    const handleEduUpdate = useCallback((newEduInfo) => {
        setFormData(prevData => ({
            ...prevData,
            education: newEduInfo
        }));
    }, []);

    const handleProfUpdate = useCallback((newProfInfo) => {
        setFormData(prevData => ({
            ...prevData,
            professional: newProfInfo
        }));
    }, []);

    if(editable) {
        return (
            <>
                <div id="container">
                    <GeneralInformation 
                        generalInfo={formData.general}
                        handleGenUpdate={handleGenUpdate}/>
                    <ProfessionalInformation 
                        professionalInfo={formData.professional}
                        handleProfUpdate={handleProfUpdate}/>
                    <EducationInformation 
                        educationInfo={formData.education}
                        handleEduUpdate={handleEduUpdate}/>
                    <button onClick={() => setEditable(false)} id="c_submit">Submit</button>
                </div>
            </>
        )
    } else {



        return (
            <>
                <div id="f_container">
                    <nav>
                        <div id="f_name">
                            {formData.general.firstName + " " + formData.general.lastName}
                        </div>
                        <div id="f_address">
                            {formData.general.address}
                        </div>
                        <div id="f_bot_info">
                            <div id="f_phone">{formData.general.phone}</div>
                            <div id="f_email">{formData.general.email}</div>
                        </div>
                    </nav>
                    <div id="wrapper">
                        <div id="f_experience">
                            <h1>Experience</h1>
                            <hr />
                            {formData.professional.map(prof => (
                                <div key={prof.id} className="prof_div">
                                    <h3><strong>{prof.title}</strong> {" - " + prof.start + " to " + prof.end}</h3>
                                    <p className="target"><em>{prof.company}</em></p>
                                    <p>{prof.responsibilities}</p>
                                </div>
                            ))}
                        </div>
                        <div id="f_education">
                            <h1>Education</h1>
                            <hr />
                            {formData.education.map(edu => (
                                <div key={edu.id} className="exp_div">
                                    <h3><strong>{edu.degree}</strong>{ ": " + edu.field + " - " + edu.date}</h3>
                                    <p>{edu.institute +  ", " + edu.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}