import add_button from "../assets/add.png"

export default function ProfessionalInformation() {
    return (
        <>
            <h1>Professional Experience</h1>
            <hr />
            <div className="add_prof">
                <img src={add_button} alt="add button" />
                Add another job
            </div>
        </>
    )
}