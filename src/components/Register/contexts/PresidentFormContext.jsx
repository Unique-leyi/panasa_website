import { useState, useContext } from "react";
import { RegisterContext } from "./RegisterContext";


function PresidentFormContext({ children }) {
    
    const [formData, setFormData] = useState({
        surname: "",
        firstname: "",
        middlename: "",
        country: "",
        email: "",
        sex: "",
        image: "",
        panasa_ratings: "",
        wespa_ratings: "",
        registration_band: "",
        room_mate: "",
        final_fling: ""
    });

    const presidentContext = { formData, setFormData };

    return (
        <RegisterContext.Provider value={presidentContext}>
            { children }
        </RegisterContext.Provider>
    )
}

export default PresidentFormContext

