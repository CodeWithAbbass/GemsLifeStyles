import React, { useState } from "react";
import { Link } from "react-router-dom";
import ".././Css/Checkout.css";
import { useUserContext } from "../context/user_context";

const CheckoutForm = () => {
    const { SaveFillingUserInfo } = useUserContext();
    const [userInfo, setUserInfo] = useState({
        email: "",
        emailMe: "",
        country: "",
        fName: "",
        lName: "",
        address: "",
        apartment: "",
        city: "",
        postalCode: "",
        phone: "",
        saveInfoCheckbox: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        SaveFillingUserInfo(userInfo);
        // setUserInfo({
        //     email: "",
        //     emailMe: "",
        //     country: "",
        //     fName: "",
        //     lName: "",
        //     address: "",
        //     apartment: "",
        //     city: "",
        //     postalCode: "",
        //     phone: "",
        //     saveInfoCheckbox: "",
        // });
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    return (
        <form className="CheckoutForm mb-3" id="CheckoutFormId" action='no-action' method='POST' onSubmit={handleSubmit} >
            <div className="CheckoutForm_headings d-flex justify-content-between mb-3">
                <p className="contact__info">Contact Information</p>
                <p className="account">Already have an account? <Link to="/login">Log in</Link></p>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control shadow-none" id="email" name="email" placeholder="Email Address" required value={userInfo.email} onChange={onChange} />
                <label htmlFor="email">Email address</label>
            </div>

            <div className="form-check shadow-none my-2">
                <input className="form-check-input" type="checkbox" id="EmailCheckbox" name="emailMe" value={userInfo.emailMe} onChange={onChange} />
                <label htmlFor="EmailCheckbox">Email me with news and offers</label>
            </div>

            <div className="shipping__address form-floating my-4">
                <p className="shipping__heading my-3">Shipping address</p>
                <select id="country" name="country" className="form-select mb-3 shadow-none" aria-label=".form-select-sm example" value={userInfo.country} onChange={onChange} required>
                    {/* <option >Select Country...</option> */}
                    <option name="MX" value="MX">Mexico</option>
                    <option name="US" value="US">United States</option>
                    <option name="CA" value="CA">Canada</option>
                    <option name="AU" value="AU">Australia</option>
                    <option disabled={true} value="">
                        ---
                    </option>
                    <option name="AX" value="AX">Åland Islands</option>
                    <option name="AL" value="AL">Albania</option>
                    <option name="AD" value="AD">Andorra</option>
                    <option name="AM" value="AM">Armenia</option>
                    <option name="AU" value="AU">Australia</option>
                    <option name="AT" value="AT">Austria</option>
                    <option name="BY" value="BY">Belarus</option>
                    <option name="BE" value="BE">Belgium</option>
                    <option name="BA" value="BA">Bosnia &amp; Herzegovina</option>
                    <option name="BR" value="BR">Brazil</option>
                    <option name="BG" value="BG">Bulgaria</option>
                    <option name="CA" value="CA">Canada</option>
                    <option name="BQ" value="BQ">Caribbean Netherlands</option>
                    <option name="CL" value="CL">Chile</option>
                    <option name="CN" value="CN">China</option>
                    <option name="CO" value="CO">Colombia</option>
                    <option name="HR" value="HR">Croatia</option>
                    <option name="CY" value="CY">Cyprus</option>
                    <option name="CZ" value="CZ">Czechia</option>
                    <option name="DK" value="DK">Denmark</option>
                    <option name="EE" value="EE">Estonia</option>
                    <option name="FO" value="FO">Faroe Islands</option>
                    <option name="FI" value="FI">Finland</option>
                    <option name="FR" value="FR">France</option>
                    <option name="GE" value="GE">Georgia</option>
                    <option name="DE" value="DE">Germany</option>
                    <option name="GI" value="GI">Gibraltar</option>
                    <option name="GR" value="GR">Greece</option>
                    <option name="GL" value="GL">Greenland</option>
                    <option name="GP" value="GP">Guadeloupe</option>
                    <option name="GG" value="GG">Guernsey</option>
                    <option name="HK" value="HK">Hong Kong SAR</option>
                    <option name="HU" value="HU">Hungary</option>
                    <option name="IS" value="IS">Iceland</option>
                    <option name="ID" value="ID">Indonesia</option>
                    <option name="IE" value="IE">Ireland</option>
                    <option name="IM" value="IM">Isle of Man</option>
                    <option name="IL" value="IL">Israel</option>
                    <option name="IT" value="IT">Italy</option>
                    <option name="JP" value="JP">Japan</option>
                    <option name="JE" value="JE">Jersey</option>
                    <option name="JO" value="JO">Jordan</option>
                    <option name="XK" value="XK">Kosovo</option>
                    <option name="KW" value="KW">Kuwait</option>
                    <option name="LV" value="LV">Latvia</option>
                    <option name="LI" value="LI">Liechtenstein</option>
                    <option name="LT" value="LT">Lithuania</option>
                    <option name="LU" value="LU">Luxembourg</option>
                    <option name="MO" value="MO">Macao SAR</option>
                    <option name="MY" value="MY">Malaysia</option>
                    <option name="MT" value="MT">Malta</option>
                    <option name="YT" value="YT">Mayotte</option>
                    <option name="MX" value="MX">Mexico</option>
                    <option name="MX" value="MX">Moldova</option>
                    <option name="MX" value="MX">Monaco</option>
                    <option name="ME" value="ME">Montenegro</option>
                    <option name="MA" value="MA">Morocco</option>
                    <option name="NL" value="NL">Netherlands</option>
                    <option name="MK" value="MK">North Macedonia</option>
                    <option name="NO" value="NO">Norway</option>
                    <option name="PK" value="PK">Pakistan</option>
                    <option name="PH" value="PH">Philippines</option>
                    <option name="PL" value="PL">Poland</option>
                    <option name="PT" value="PT">Portugal</option>
                    <option name="QA" value="QA">Qatar</option>
                    <option name="RE" value="RE">Réunion</option>
                    <option name="RO" value="RO">Romania</option>
                    <option name="SM" value="SM">San Marino</option>
                    <option name="SA" value="SA">Saudi Arabia</option>
                    <option name="RS" value="RS">Serbia</option>
                    <option name="SG" value="SG">Singapore</option>
                    <option name="SK" value="SK">Slovakia</option>
                    <option name="SI" value="SI">Slovenia</option>
                    <option name="ZA" value="ZA">South Africa</option>
                    <option name="KR" value="KR">South Korea</option>
                    <option name="ES" value="ES">Spain</option>
                    <option name="SJ" value="SJ">Svalbard &amp; Jan Mayen</option>
                    <option name="SE" value="SE">Sweden</option>
                    <option name="CH" value="CH">Switzerland</option>
                    <option name="TW" value="TW">Taiwan</option>
                    <option name="TH" value="TH">Thailand</option>
                    <option name="TR" value="TR">Turkey</option>
                    <option name="UA" value="UA">Ukraine</option>
                    <option name="AE" value="AE">United Arab Emirates</option>
                    <option name="GB" value="GB">United Kingdom</option>
                    <option name="US" value="US">United States</option>
                    <option name="VA" value="VA">Vatican City</option>
                    <option name="VN" value="VN">Vietnam</option>
                    <option name="YE" value="YE">Yemen</option>

                </select>

                <div className="row mb-3">
                    <div className="col-6 firstNameCol">
                        <div className="form-floating">
                            <input type="text" className="form-control shadow-none" id="fName" name="fName" placeholder="first Name" value={userInfo.fName} onChange={onChange} required />
                            <label htmlFor="fName">First Name</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <input type="text" className="form-control shadow-none" id="lName" name="lName" placeholder="lName" value={userInfo.lName} onChange={onChange} required />
                            <label htmlFor="lName">Last Name</label>
                        </div>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control shadow-none" id="address" name="address" placeholder="address" value={userInfo.address} onChange={onChange} required />
                    <label htmlFor="address">Address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control shadow-none" id="apartment" name="apartment" placeholder="apartment, suit, etc. (optional)" value={userInfo.apartment} onChange={onChange} required />
                    <label htmlFor="apartment">Apartment, suit, etc. (optional)</label>
                </div>

                <div className="row mb-3">
                    <div className="col-6 cityCol">
                        <div className="form-floating">
                            <input type="text" className="form-control shadow-none" id="city" name="city" placeholder="city" value={userInfo.city} required onChange={onChange} />
                            <label htmlFor="city">City</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <input type="text" className="form-control shadow-none" id="postalCode" name="postalCode" placeholder="Postal Code" value={userInfo.postalCode} required onChange={onChange} />
                            <label htmlFor="postalCode">Postal Code</label>
                        </div>
                    </div>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control shadow-none" id="phone" name="phone" placeholder="phone" value={userInfo.phone} required onChange={onChange} />
                    <label htmlFor="phone">Phone</label>
                </div>
            </div>

            <div className="form-check shadow-none mb-3">
                <input type="checkbox" className="form-check-input shadow-none" id="saveInfoCheckbox" name="saveInfoCheckbox" value={userInfo.saveInfoCheckbox} onChange={onChange} />
                <label htmlFor="saveInfoCheckbox">Save this information for next time</label>
            </div>

            <div className="CheckoutFooterBtn">
                <Link to="/cart" className="return__Cart"><i className="fa-solid fa-chevron-left me-3"></i>Return to Cart</Link>
                <button type="submit" className="btn shadow-none" ><Link to="/shipping" className="text-white">Continue to shipping</Link></button>
            </div>
        </form>
    );
};

export default CheckoutForm;