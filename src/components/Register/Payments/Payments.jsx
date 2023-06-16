import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useState, useEffect } from "react"


function Payments(props) {

    const [success, setSuccess] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const [orderId, setOrderId] = useState(false);

     const handleAmount = (amount) => {

        switch(amount) {

            case "$300":
                return 300

            case "$265":
                return 265

            case "$50":
                return 50

            case "$250":
                return 250

            case "$215":
                return 215

            default:
            break;
        }
    
}


    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "President's Cup",
                    amount: {
                        currency_code: "USD",
                        value: handleAmount(props.amount),
                    },
                },
            ],
            application_context: {
                shipping_reference: "NO_SHIPPING"
            }
        })
        .then((orderID) => {
            setOrderId(orderID);
            return orderID;
        })
    }


    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        })
    }


    const onError = (data, actions) => {
        setErrMessage("An Error Occured with the payments");
    }

    const handleClick = (e) => {
        e.preventDefault();
        setShow(true);
    }

    return (
        <div>
            <PayPalScriptProvider 
                options={{ 
                    'client-id' : 'AXml4MKiGtN88BC6IGU_s8EBneJ3S6_gOcNbyfcfpWOfMEi3khIcWqmIh05v_cwRBUCNr0khZeIxWqbR'
                 }}
            >
                
            {
                props.show ? 
                    (<PayPalButtons 
                        style={{ layout: 'vertical' }} 
                        createOrder={createOrder}
                        onApprove={onApprove} 
                        onError={onError}
                        />) : null
            }


            {
                success ? (
                    <div className="flex flex-col items-center justify-center gap-1 bg-[rgba(0,255,0, 0.4)] border-2 border-[rgba(0,255,0,0.4)] rounded-lg">
                        <h3 className="font-bold text-lg text-black">Your Payment has been done successfully</h3>
                        <p className="text-[rgba(0,0,0,0.7)] text-sm font-medium">An invitation letter will be sent to your email</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center bg-[rgba(255,0,0, 0.4)] border-2 border-[rgba(255,0,0,0.8)] rounded-lg">
                        <h4>{errMessage}</h4>
                    </div>
                )
            }


            </PayPalScriptProvider>
        </div>
    )
}


export default Payments