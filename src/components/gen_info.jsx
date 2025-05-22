import { useState, useEffect } from 'react';

export default function GeneralInformation({ generalInfo, handleGenUpdate }) {

    const [ genData, setGenData ] = useState(generalInfo);

    useEffect(() => {
        if(genData) {
            handleGenUpdate(genData);
        }
    }, [genData, handleGenUpdate]);

    const updateGenData = (objKey, value) => {
        // console.log(`updateGenData firing...`)
        setGenData({...genData, [objKey] : value})
    }

    return (
        <>

            <h1>General Information</h1>
            <hr />
            <div id="name_div">
                <h4>Full Name</h4>
                <div>
                    <div className="n_input_div">
                        <input 
                            type="text" 
                            id="firstName"
                            value={genData.firstName}
                            onChange={(e) => updateGenData('firstName', e.target.value)}/>
                        <label htmlFor="firstName">First Name</label>

                    </div>
                    <div className="n_input_div">
                        <input 
                            type="text" 
                            id="lastName"
                            value={genData.lastName}
                            onChange={(e) => updateGenData('lastName', e.target.value)}/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
            </div>
            <div id="address_div">
                <div id="email_div">
                    <h4>Email Address</h4>
                    <div id="e_input_div">
                        <input 
                            type="text" 
                            id="email"
                            value={genData.email}
                            onChange={(e) => updateGenData('email', e.target.value)}/>
                        <label htmlFor="email">example@example.com</label>
                    </div>
                </div>
                <div id="address">
                    <h4>Home Address</h4>
                    <div id="address_input_div">
                        <input 
                            type="text" 
                            id="add"
                            value={genData.address}
                            onChange={(e) => updateGenData('address', e.target.value)}
                             />
                        <label htmlFor="add">123 Road St, Province, Country, Postal Code</label>
                    </div>
                </div>
            </div>
            <div id="phone_div">
                <h4>Phone Number</h4>
                <div id="p_input_div">
                    <input 
                        type="tel" 
                        id="phone_number" 
                        value={genData.phone}
                        onChange={(e) => updateGenData('phone', e.target.value)}
                        placeholder="000-000-0000"/>
                    <label htmlFor="phone_number">Please enter a valid phone number</label>
                </div>
            </div>

        </>
    )
}