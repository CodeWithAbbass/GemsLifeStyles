import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import { useProductContext } from '../../context/product_context';
import { useUserContext } from '../../context/user_context';
import PriceFormat from '../../Helpers/PriceFormat';
import CheckoutProgressbar from '../CheckoutProgressbar';
import "../../Css/Checkout.css";
import "../../Css/General.css";

const Checkout = () => {

    let Navigate = useNavigate();
    const { cart, total_item, total_price, shipping_fee, getCartItems } = useCartContext();
    const { CalcDiscount } = useProductContext();
    const { user } = useUserContext();

    const [checkoutInfo, setCheckoutInfo] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        state: "",
        avatar: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        Navigate("/payment");
    };
    const onChange = (e) => {
        const { name, value } = e.target;
        setCheckoutInfo({
            ...checkoutInfo,
            [name]: value,
        });
    };
    const openOrderDetails = () => {
        document.querySelector('.MobileOrderDetailsSidebar').style.width = "100%";
    }
    const closeOrderDetails = () => {
        document.querySelector('.MobileOrderDetailsSidebar').style.width = "0%";
    }

    useEffect(() => {
        setCheckoutInfo(user);
        getCartItems();
        if (cart.length !== 0) {
            document.querySelector('#gridCheck').onclick = (e) => {
                e.preventDefault();
            }
        }
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, [location]);


    ////////////////////////////////////////////
    if (cart.length === 0) {
        return (
            <div className="Continue_Shopping w-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="EmptyStateTitle">Your cart is empty</h1>
                <Link to={"/allproducts"} className="Continue_Shopping_Btn">Continue Shopping</Link>
            </div>
        );
    }
    ////////////////////////////////////////////

    return (
        <div className='Checkout container'>
            <CheckoutProgressbar />
            <div className="Checkout_MainContainer row justify-content-between">
                <div className="formContainer col-8 pe-lg-5">
                    <form className="CheckoutForm mb-3 row" id="CheckoutFormId" action='#' method='POST' autoComplete='on' onSubmit={handleSubmit} >
                        <h3 className='pb-2 mb-4'>Shipping Address</h3>
                        <div className="col-12 mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <div className="input-group position-relative">
                                <span className="input-group-text shadow-none rounded-0 position-absolute d-block bg-transparent border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                </span>
                                <input type="number" className="form-control shadow-none rounded-0 ps-5 overflow-hidden" id="phone" name='phone' placeholder="03001234567" value={checkoutInfo.phone} onChange={onChange} autoComplete="true" required title="11 characters minimum" />
                                <span type="button" className="TooltipBtn" data-bs-toggle="tooltip" data-bs-placement="right" title="For Delivery Question">?</span>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="fName" className="form-label">First Name</label>
                            <input type="text" className="form-control shadow-none rounded-0" id="fname" name='fname' value={checkoutInfo.fname} onChange={onChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lName" className="form-label">Last Name</label>
                            <input type="text" className="form-control shadow-none rounded-0" id="lname" name='lname' value={checkoutInfo.lname} onChange={onChange} required />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control shadow-none rounded-0" id="address" name='address' value={checkoutInfo.address} onChange={onChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <select id="city" className="form-select shadow-none rounded-0" name='city' value={checkoutInfo.city} onChange={onChange} required>
                                <option defaultValue="">Choose a City</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
                                <option value="Ahmadpur East">Ahmadpur East</option>
                                <option value="Ali Khan Abad">Ali Khan Abad</option>
                                <option value="Alipur">Alipur</option>
                                <option value="Arifwala">Arifwala</option>
                                <option value="Attock">Attock</option>
                                <option value="Bhera">Bhera</option>
                                <option value="Bhalwal">Bhalwal</option>
                                <option value="Bahawalnagar">Bahawalnagar</option>
                                <option value="Bahawalpur">Bahawalpur</option>
                                <option value="Bhakkar">Bhakkar</option>
                                <option value="Burewala">Burewala</option>
                                <option value="Chillianwala">Chillianwala</option>
                                <option value="Chakwal">Chakwal</option>
                                <option value="Chichawatni">Chichawatni</option>
                                <option value="Chiniot">Chiniot</option>
                                <option value="Chishtian">Chishtian</option>
                                <option value="Daska">Daska</option>
                                <option value="Darya Khan">Darya Khan</option>
                                <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                                <option value="Dhaular">Dhaular</option>
                                <option value="Dina">Dina</option>
                                <option value="Dinga">Dinga</option>
                                <option value="Dipalpur">Dipalpur</option>
                                <option value="Faisalabad">Faisalabad</option>
                                <option value="Ferozewala">Ferozewala</option>
                                <option value="Fateh Jhang">Fateh Jang</option>
                                <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                                <option value="Gojra">Gojra</option>
                                <option value="Gujranwala">Gujranwala</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="Gujar Khan">Gujar Khan</option>
                                <option value="Hafizabad">Hafizabad</option>
                                <option value="Haroonabad">Haroonabad</option>
                                <option value="Hasilpur">Hasilpur</option>
                                <option value="Haveli Lakha">Haveli Lakha</option>
                                <option value="Jatoi">Jatoi</option>
                                <option value="Jalalpur">Jalalpur</option>
                                <option value="Jattan">Jattan</option>
                                <option value="Jampur">Jampur</option>
                                <option value="Jaranwala">Jaranwala</option>
                                <option value="Jhang">Jhang</option>
                                <option value="Jhelum">Jhelum</option>
                                <option value="Kalabagh">Kalabagh</option>
                                <option value="Karor Lal Esan">Karor Lal Esan</option>
                                <option value="Kasur">Kasur</option>
                                <option value="Kamalia">Kamalia</option>
                                <option value="Kamoke">Kamoke</option>
                                <option value="Khanewal">Khanewal</option>
                                <option value="Khanpur">Khanpur</option>
                                <option value="Kharian">Kharian</option>
                                <option value="Khushab">Khushab</option>
                                <option value="Kot Addu">Kot Addu</option>
                                <option value="Jauharabad">Jauharabad</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Lalamusa">Lalamusa</option>
                                <option value="Layyah">Layyah</option>
                                <option value="Liaquat Pur">Liaquat Pur</option>
                                <option value="Lodhran">Lodhran</option>
                                <option value="Malakwal">Malakwal</option>
                                <option value="Mamoori">Mamoori</option>
                                <option value="Mailsi">Mailsi</option>
                                <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                                <option value="Mian Channu">Mian Channu</option>
                                <option value="Mianwali">Mianwali</option>
                                <option value="Multan">Multan</option>
                                <option value="Murree">Murree</option>
                                <option value="Muridke">Muridke</option>
                                <option value="Mianwali Bangla">Mianwali Bangla</option>
                                <option value="Muzaffargarh">Muzaffargarh</option>
                                <option value="Narowal">Narowal</option>
                                <option value="Nankana Sahib">Nankana Sahib</option>
                                <option value="Okara">Okara</option>
                                <option value="Renala Khurd">Renala Khurd</option>
                                <option value="Pakpattan">Pakpattan</option>
                                <option value="Pattoki">Pattoki</option>
                                <option value="Pir Mahal">Pir Mahal</option>
                                <option value="Qaimpur">Qaimpur</option>
                                <option value="Qila Didar Singh">Qila Didar Singh</option>
                                <option value="Rabwah">Rabwah</option>
                                <option value="Raiwind">Raiwind</option>
                                <option value="Rajanpur">Rajanpur</option>
                                <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                                <option value="Rawalpindi">Rawalpindi</option>
                                <option value="Sadiqabad">Sadiqabad</option>
                                <option value="Safdarabad">Safdarabad</option>
                                <option value="Sahiwal">Sahiwal</option>
                                <option value="Sangla Hill">Sangla Hill</option>
                                <option value="Sarai Alamgir">Sarai Alamgir</option>
                                <option value="Sargodha">Sargodha</option>
                                <option value="Shakargarh">Shakargarh</option>
                                <option value="Sheikhupura">Sheikhupura</option>
                                <option value="Sialkot">Sialkot</option>
                                <option value="Sohawa">Sohawa</option>
                                <option value="Soianwala">Soianwala</option>
                                <option value="Siranwali">Siranwali</option>
                                <option value="Talagang">Talagang</option>
                                <option value="Taxila">Taxila</option>
                                <option value="Toba Tek Singh">Toba Tek Singh</option>
                                <option value="Vehari">Vehari</option>
                                <option value="Wah Cantonment">Wah Cantonment</option>
                                <option value="Wazirabad">Wazirabad</option>
                                <option value="" disabled>Sindh Cities</option>
                                <option value="Badin">Badin</option>
                                <option value="Bhirkan">Bhirkan</option>
                                <option value="Rajo Khanani">Rajo Khanani</option>
                                <option value="Chak">Chak</option>
                                <option value="Dadu">Dadu</option>
                                <option value="Digri">Digri</option>
                                <option value="Diplo">Diplo</option>
                                <option value="Dokri">Dokri</option>
                                <option value="Ghotki">Ghotki</option>
                                <option value="Haala">Haala</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Islamkot">Islamkot</option>
                                <option value="Jacobabad">Jacobabad</option>
                                <option value="Jamshoro">Jamshoro</option>
                                <option value="Jungshahi">Jungshahi</option>
                                <option value="Kandhkot">Kandhkot</option>
                                <option value="Kandiaro">Kandiaro</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Kashmore">Kashmore</option>
                                <option value="Keti Bandar">Keti Bandar</option>
                                <option value="Khairpur">Khairpur</option>
                                <option value="Kotri">Kotri</option>
                                <option value="Larkana">Larkana</option>
                                <option value="Matiari">Matiari</option>
                                <option value="Mehar">Mehar</option>
                                <option value="Mirpur Khas">Mirpur Khas</option>
                                <option value="Mithani">Mithani</option>
                                <option value="Mithi">Mithi</option>
                                <option value="Mehrabpur">Mehrabpur</option>
                                <option value="Moro">Moro</option>
                                <option value="Nagarparkar">Nagarparkar</option>
                                <option value="Naudero">Naudero</option>
                                <option value="Naushahro Feroze">Naushahro Feroze</option>
                                <option value="Naushara">Naushara</option>
                                <option value="Nawabshah">Nawabshah</option>
                                <option value="Nazimabad">Nazimabad</option>
                                <option value="Qambar">Qambar</option>
                                <option value="Qasimabad">Qasimabad</option>
                                <option value="Ranipur">Ranipur</option>
                                <option value="Ratodero">Ratodero</option>
                                <option value="Rohri">Rohri</option>
                                <option value="Sakrand">Sakrand</option>
                                <option value="Sanghar">Sanghar</option>
                                <option value="Shahbandar">Shahbandar</option>
                                <option value="Shahdadkot">Shahdadkot</option>
                                <option value="Shahdadpur">Shahdadpur</option>
                                <option value="Shahpur Chakar">Shahpur Chakar</option>
                                <option value="Shikarpaur">Shikarpaur</option>
                                <option value="Sukkur">Sukkur</option>
                                <option value="Tangwani">Tangwani</option>
                                <option value="Tando Adam Khan">Tando Adam Khan</option>
                                <option value="Tando Allahyar">Tando Allahyar</option>
                                <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
                                <option value="Thatta">Thatta</option>
                                <option value="Umerkot">Umerkot</option>
                                <option value="Warah">Warah</option>
                                <option value="" disabled>Khyber Cities</option>
                                <option value="Abbottabad">Abbottabad</option>
                                <option value="Adezai">Adezai</option>
                                <option value="Alpuri">Alpuri</option>
                                <option value="Akora Khattak">Akora Khattak</option>
                                <option value="Ayubia">Ayubia</option>
                                <option value="Banda Daud Shah">Banda Daud Shah</option>
                                <option value="Bannu">Bannu</option>
                                <option value="Batkhela">Batkhela</option>
                                <option value="Battagram">Battagram</option>
                                <option value="Birote">Birote</option>
                                <option value="Chakdara">Chakdara</option>
                                <option value="Charsadda">Charsadda</option>
                                <option value="Chitral">Chitral</option>
                                <option value="Daggar">Daggar</option>
                                <option value="Dargai">Dargai</option>
                                <option value="Darya Khan">Darya Khan</option>
                                <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                                <option value="Doaba">Doaba</option>
                                <option value="Dir">Dir</option>
                                <option value="Drosh">Drosh</option>
                                <option value="Hangu">Hangu</option>
                                <option value="Haripur">Haripur</option>
                                <option value="Karak">Karak</option>
                                <option value="Kohat">Kohat</option>
                                <option value="Kulachi">Kulachi</option>
                                <option value="Lakki Marwat">Lakki Marwat</option>
                                <option value="Latamber">Latamber</option>
                                <option value="Madyan">Madyan</option>
                                <option value="Mansehra">Mansehra</option>
                                <option value="Mardan">Mardan</option>
                                <option value="Mastuj">Mastuj</option>
                                <option value="Mingora">Mingora</option>
                                <option value="Nowshera">Nowshera</option>
                                <option value="Paharpur">Paharpur</option>
                                <option value="Pabbi">Pabbi</option>
                                <option value="Peshawar">Peshawar</option>
                                <option value="Saidu Sharif">Saidu Sharif</option>
                                <option value="Shorkot">Shorkot</option>
                                <option value="Shewa Adda">Shewa Adda</option>
                                <option value="Swabi">Swabi</option>
                                <option value="Swat">Swat</option>
                                <option value="Tangi">Tangi</option>
                                <option value="Tank">Tank</option>
                                <option value="Thall">Thall</option>
                                <option value="Timergara">Timergara</option>
                                <option value="Tordher">Tordher</option>
                                <option value="" disabled>Balochistan Cities</option>
                                <option value="Awaran">Awaran</option>
                                <option value="Barkhan">Barkhan</option>
                                <option value="Chagai">Chagai</option>
                                <option value="Dera Bugti">Dera Bugti</option>
                                <option value="Gwadar">Gwadar</option>
                                <option value="Harnai">Harnai</option>
                                <option value="Jafarabad">Jafarabad</option>
                                <option value="Jhal Magsi">Jhal Magsi</option>
                                <option value="Kacchi">Kacchi</option>
                                <option value="Kalat">Kalat</option>
                                <option value="Kech">Kech</option>
                                <option value="Kharan">Kharan</option>
                                <option value="Khuzdar">Khuzdar</option>
                                <option value="Killa Abdullah">Killa Abdullah</option>
                                <option value="Killa Saifullah">Killa Saifullah</option>
                                <option value="Kohlu">Kohlu</option>
                                <option value="Lasbela">Lasbela</option>
                                <option value="Lehri">Lehri</option>
                                <option value="Loralai">Loralai</option>
                                <option value="Mastung">Mastung</option>
                                <option value="Musakhel">Musakhel</option>
                                <option value="Nasirabad">Nasirabad</option>
                                <option value="Nushki">Nushki</option>
                                <option value="Panjgur">Panjgur</option>
                                <option value="Pishin Valley">Pishin Valley</option>
                                <option value="Quetta">Quetta</option>
                                <option value="Sherani">Sherani</option>
                                <option value="Sibi">Sibi</option>
                                <option value="Sohbatpur">Sohbatpur</option>
                                <option value="Washuk">Washuk</option>
                                <option value="Zhob">Zhob</option>
                                <option value="Ziarat">Ziarat</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="state" className="form-label">State</label>
                            <select id="state" className="form-select shadow-none rounded-0" name='state' value={checkoutInfo.state} onChange={onChange} required>
                                <option defaultValue="">Please select a region, state or province.</option>
                                <option value="Azad Kashmir">Azad Kashmir</option>
                                <option value="Balochistan">Balochistan</option>
                                <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Sindh">Sindh</option>
                            </select>
                        </div>
                        <div className="col-md-12 mb-3 emailgroup position-relative">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control shadow-none rounded-0" id="email" aria-describedby="emailHelp" placeholder='Optional' required name='email' value={checkoutInfo.email} onChange={onChange} />
                            <button type="button" className="TooltipBtn" data-bs-toggle="tooltip" data-bs-placement="right" title="We'll send your order confirmation here.">?</button>
                        </div>
                        <h3 className=' pb-2 mt-5 mb-4'>Shipping Methods</h3>
                        <div className="col-12">
                            <div className="row flex-sm-wrap align-items-center">
                                <div className="col-sm-9 ">
                                    <div className="form-check">
                                        <input className="form-check-input me-2 rounded-5" type="checkbox" id="gridCheck" name="standardShipping" value={"Yes"} defaultChecked onChange={onChange} />
                                        <label className="form-check-label" htmlFor="gridCheck">Standard Shipping - {PriceFormat(shipping_fee)}</label>
                                    </div>
                                </div>
                                <div className="col-sm-3 text-center">
                                    <button type='submit' className="btn shadow-none rounded-0 float-sm-end w-100">Next</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-4 align-self-center OrderSummery_MainContainer p-0">
                    <div className="DesktopOrderSummery">
                        <div className="OrderSummery" >
                            <p className='OrderSummery_heading mb-2'>Order Summery</p>
                            <div className="OrderSummery_Cart_Subtotal row py-2">
                                <span className='Cart_Subtotal_item col-8 text-start'>Cart Subtotal</span>
                                <span className='Cart_Subtotal_item col-4 text-end'>{PriceFormat(total_price)}</span>
                            </div>
                            <div className="OrderSummery_Shipping row py-2">
                                <div className='OrderSummery_Shipping_item col-8 text-start'>
                                    <p className='Shipping_item_heading fw-semibold'>Shipping</p>
                                    <p className='OrderSummery_Shipping_item'>Standard Shipping - Fixed</p>
                                </div>
                                <span className='OrderSummery_Shipping_item col-4 text-end'>{PriceFormat(shipping_fee)}</span>
                            </div>
                            <div className="OrderSummery_Total row py-2">
                                <span className='OrderSummery_Total_item_heading col-8 text-start fw-semibold'>Order Total</span>
                                <span className='OrderSummery_Total_item_amount col-4 text-end fw-semibold'>{PriceFormat(total_price + shipping_fee)}</span>
                            </div>
                            <div className="OrderProduct_Details">
                                <div className="accordion accordion-flush bg-none" id="accordionFlushExample">
                                    <div className="accordion-item bg-transparent">
                                        <h2 className="accordion-header bg-transparent d-flex justify-content-between py-3" id="flush-headingOne">
                                            <div className="accordion-button px-0 collapsed bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">{total_item} Item in Cart
                                            </div>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body p-0">
                                                {cart.map((curItem, index) => {
                                                    let { discount, price, image, name, quantity } = curItem;
                                                    const Price = CalcDiscount(discount, price);
                                                    return (
                                                        <div className="Checkout_ProductInfo row mb-4" key={index}>
                                                            <div className="row">
                                                                <div className="col-3"><img src={image[0]} alt="Product" className='w-100' /></div>
                                                                <div className="col-6">
                                                                    <p className='fw-bold'>{name}</p>
                                                                    <p className='fw-bold'>Qty: <span className='fw-normal'>{quantity}</span></p>
                                                                </div>
                                                                <div className="col-3 text-end">{PriceFormat(Price)}</div>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="MobileOrderSummery container">
                        <div className="row justify-content-between align-items-center py-2">
                            <ul className="col-6 mb-0 OrderSummery_EstimatedHeading ">
                                <li className="OrderSummery_EstimatedAmount_item">Estimated Total</li>
                                <li className="OrderSummery_EstimatedAmount_item">{PriceFormat(total_price)}</li>
                            </ul>
                            <div className="col-6 OrderSummery_EstimatedAmount text-end">
                                <button className='btn' onClick={openOrderDetails}>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="MobileOrderDetailsSidebar">
                        <div className="DesktopOrderSummery MobileOrderSummerySidebar px-2 py-2">
                            <div className="OrderSummery container">
                                <div className="OrderSummery_Header row align-items-center">
                                    <p className='OrderSummery_heading d-inline border-0 col-10 p-0'>Order Summery</p>
                                    <div className="MobileOrderSummerySidebar_closebtn text-end d-inline col-2 p-0" onClick={closeOrderDetails}>&times;</div>
                                </div>
                                <div className="OrderSummery_Cart_Subtotal row py-2">
                                    <span className='Cart_Subtotal_item col-8 text-start'>Cart Subtotal</span>
                                    <span className='Cart_Subtotal_item col-4 text-end'>{PriceFormat(total_price)}</span>
                                </div>
                                <div className="OrderSummery_Shipping row py-2">
                                    <div className='OrderSummery_Shipping_item col-8 text-start'>
                                        <p className='Shipping_item_heading fw-semibold'>Shipping</p>
                                        <p className='OrderSummery_Shipping_item'>Standard Shipping - Fixed</p>
                                    </div>
                                    <span className='OrderSummery_Shipping_item col-4 text-end'>{PriceFormat(shipping_fee)}</span>
                                </div>
                                <div className="OrderSummery_Total row py-2">
                                    <span className='OrderSummery_Total_item_heading col-8 text-start fw-semibold'>Order Total</span>
                                    <span className='OrderSummery_Total_item_amount col-4 text-end fw-semibold'>{PriceFormat(total_price + shipping_fee)}</span>
                                </div>
                                <div className="OrderProduct_Details">
                                    <div className="accordion accordion-flush bg-none" id="accordionFlushExample">
                                        <div className="accordion-item bg-transparent">
                                            <h2 className="accordion-header bg-transparent d-flex justify-content-between py-3" id="flush-headingOne">
                                                <div className="accordion-button px-0 collapsed bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">{total_item} Item in Cart
                                                </div>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body p-0">
                                                    {cart.map((curItem, index) => {
                                                        let { discount, price, image, name, quantity } = curItem;
                                                        const Price = CalcDiscount(discount, price);
                                                        return (
                                                            <div className="Checkout_ProductInfo" key={index}>
                                                                <div className="row my-4">
                                                                    <div className="col-3"><img src={image[0]} alt="Product" className='w-100' /></div>
                                                                    <div className="col-6">
                                                                        <p className='fw-bold'>{name}</p>
                                                                        <p className='fw-bold'>Qty: <span className='fw-normal'>{quantity}</span></p>
                                                                    </div>
                                                                    <div className="col-3 text-end">{PriceFormat(Price)}</div>
                                                                </div>
                                                                <hr />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
