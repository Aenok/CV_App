import GeneralInformation from './gen_info.jsx'
import EducationInformation from './ed_info.jsx'
import ProfessionalInformation from './prof_info.jsx'
import '../styles/styles.css'

export default function Combine() {
    return (
        <>
            <div id="container">
                <GeneralInformation />
                <EducationInformation />
                <ProfessionalInformation />
            </div>
        </>
    )
}