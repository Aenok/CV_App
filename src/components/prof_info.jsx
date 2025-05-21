import { useState, useEffect } from "react"
import add_button from "../assets/add.png"

export default function ProfessionalInformation({ professionalInfo, handleProfUpdate}) {

    const [ profArray, setProfArray ] = useState(professionalInfo || [])

    // console.log(profArray)

    useEffect(() => {
            handleProfUpdate(profArray);
    }, [profArray, handleProfUpdate]);

    function addProf() {
        const newProf = {
            id: crypto.randomUUID(),
            'title': '',
            'company': '',
            'start': '',
            'end': '',
            'responsibilities': ''
        }

        setProfArray([...profArray, newProf])
    }

    function removeField(id) {
        let ret_val = [];
        for(let i = 0; i < profArray.length; i++) {
            if(!(profArray[i].id === id)) {
                ret_val.push(profArray[i])
            }
        }

        setProfArray(ret_val)
    }

    function updateField(id, field, value) {
        let ret_val = [];
        for(let i = 0; i < profArray.length; i++) {
            if(profArray[i].id === id) {
                ret_val.push({...profArray[i], [field]: value})
            } else {
                ret_val.push(profArray[i])
            }
        }

        setProfArray(ret_val);
    }

    return (
        <>
            <h1>Professional Experience</h1>
            <hr />
            {profArray.map(prof => (
                <div key={prof.id} className="prof_card">
                <div>
                    <input 
                        type="text" 
                        value={prof.title}
                        onChange={(e) => updateField(prof.id, 'title', e.target.value)}
                        placeholder="Job title"/>
                    <input 
                        type="text" 
                        value={prof.company}
                        onChange={(e) => updateField(prof.id, 'company', e.target.value)}
                        placeholder="Company name"/>
                </div>
                <div>
                    <input type="text" 
                        value={prof.start}
                        onChange={(e) => updateField(prof.id, 'start', e.target.value)}
                        placeholder="Start date"/>
                    <input 
                        type="text" 
                        value={prof.end}
                        onChange={(e) => updateField(prof.id, 'end', e.target.value)}
                        placeholder="End date"/>
                </div>
                <textarea 
                    name="responsibilities" 
                    className="responsibilities" 
                    value={prof.responsibilities}
                    onChange={(e) => updateField(prof.id, 'responsibilities', e.target.value)}
                    placeholder="Enter in your responsibilities..."></textarea>
                <div className="btn_div">
                    <button onClick={() => removeField(prof.id)}>Cancel</button>
                </div>
            </div>
            ))}
            <div onClick={addProf} className="add_prof">
                <img src={add_button} alt="add button" />
                Add another job
            </div>
        </>
    )
}