import add_button from "../assets/add.png"

export default function EducationInformation() {
    return (
        <>
            <h1>Education</h1>
            <hr />
            <div className="add_edu">
                <img src={add_button} alt="add_button" />
                Add another education
            </div>
        </>
    )
}