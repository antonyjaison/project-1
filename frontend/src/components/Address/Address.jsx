import React, { useState } from "react";
import "./Address.css";

const Address = ({ setAddressSection, setCheckoutLoading }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [landMark, setLandMark] = useState("");

  const userData = localStorage.getItem("userData");
  const token = JSON.parse(userData).token;

  const addAddress = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/user/address", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          city: city,
          country: country,
          pincode: pincode,
          state: state,
          landMark: landMark,
        }),
      });
      
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        setAddressSection(false);
        setCheckoutLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="address_wrapper">
        <div className="address_section">
          <div className="address_heading">
            <h1>User Address</h1>
            <p>Add address to checkout</p>
          </div>
          <hr className="address_line" />

          <form className="address_form">
            <p>City</p>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
            />

            <p>State</p>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
            />

            <p>Pincode</p>
            <input
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              type="text"
            />

            <p>Country</p>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type="text"
            />

            <p>Landmark</p>
            <input
              value={landMark}
              onChange={(e) => setLandMark(e.target.value)}
              type="text"
            />

            <button onClick={(e) => addAddress(e)} className="address_button">
              Add address
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Address;
