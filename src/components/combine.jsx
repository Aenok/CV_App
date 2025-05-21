import { useState, useCallback } from "react"

import GeneralInformation from './gen_info.jsx'
import EducationInformation from './ed_info.jsx'
import ProfessionalInformation from './prof_info.jsx'
import '../styles/styles.css'

export default function Combine() {

    const [ formData, setFormData ] = useState(
        {
            general: {
                firstName: '',
                lastName: '',
                email: '',
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

    return (
        <>
            <div id="container">
                <GeneralInformation 
                    generalInfo={formData.general}
                    handleGenUpdate={handleGenUpdate}/>
                <EducationInformation 
                    educationInfo={formData.education}
                    handleEduUpdate={handleEduUpdate}/>
                <ProfessionalInformation 
                    professionalInfo={formData.professional}
                    handleProfUpdate={handleProfUpdate}/>
                <button id="c_submit">Submit</button>
            </div>
        </>
    )
}