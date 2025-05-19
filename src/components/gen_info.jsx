// import { useState } from 'react';
import "../styles/styles.css"

export default function GeneralInformation() {
    return (
        <>

            <h1>General Information</h1>
            <hr />
            <div id="name_div">
                <h4>Full Name</h4>
                <div>
                    <div className="n_input_div">
                        <input type="text" id="firstName"/>
                        <label htmlFor="firstName">First Name</label>

                    </div>
                    <div className="n_input_div">
                        <input type="text" id="lastName"/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
            </div>
            <div id="email_div">
                <h4>Email Address</h4>
                <div id="e_input_div">
                    <input type="text" id="email"/>
                    <label htmlFor="email">example@example.com</label>
                </div>
            </div>
            <div id="phone_div">
                <h4>Phone Number</h4>
                <div id="p_input_div">
                    <input type="number" id="phone_number" placeholder="000-000-0000"/>
                    <label htmlFor="phone_number">Please enter a valid phone number</label>
                </div>
            </div>

        </>
    )
}