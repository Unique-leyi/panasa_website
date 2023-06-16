import Image from "next/image";

const userData = [
    {
        title: "Fullname",
        display: "John Doe"
    },

    {
        title: "Country",
        display: "Nigeria",
    },


    {
        title: "Email",
        display: "doe@example.com"
    },

    {
        title: "Package Badge",
        display: "Gold Badge ($300)"
    },

    {
        title: "Room Mate",
        display: "James Ken"
    },

    {
        title: "Sex",
        display: "Male"
    },


]

function Receipt(props) {
    return (
        <div className="my-4 max-w-[50%] mx-auto">
            <div className="flex justify-around items-center bg-[#4b8787] rounded-b-xl border-b-2 border-deep">
                <div className="flex justify-center items-center flex-col gap-y-3 overflow-hidden py-8">
                    <div className="relative w-20 h-20 rounded-full border-2 bg-white border-deep outline-4 outline-sitebink p-8">
                        <Image src={require("../../../assets/images/panasa-logo.png")} alt={"Panasa-logo"} style={{ objectFit: "cover" }} layout={"fill"}/>
                    </div>
                    {/* <h4 className="text-deep text-lg font-bold">Invoice Reciept</h4> */}
                </div>

                <div className="flex items-center flex-col">
                    <h3 className="text-6xl font-extrabold text-deep">Panasa</h3>
                    <h3 className="text-xl font-bold text-white">President{"'"}s Cup 2023</h3>
                </div>

                <div className="relative w-20 h-20 rounded-full border-2 bg-white border-[#0d1929] outline-4 outline-sitebink p-8 overflow-hidden">
                        <Image src={require("../../../assets/images/president-mascot.jpeg")} alt={"Panasa-logo"} style={{ objectFit: "cover" }} layout={"fill"}/>
                    </div>
            </div>


            <div className="my-4 grid grid-cols-2 gap-8">
                <div className="relative w-72 h-72 rounded-md border-4 border-[#0d1929] overflow-hidden">
                    <Image src={require("../../../assets/images/sheikh.jpg")} alt={"avatar"} style={{ objectFit: "cover" }} layout={"fill"}/>
                </div>

                <div className="">
                    <div className="py-2 bg-deep p-3 rounded-md flex gap-x-3 flex-col">
                        <h3 className="font-bold text-lg text-white">Participant Bio Details</h3>
                    </div>
                    <div className="py-4 grid grid-cols-2 gap-4">
                        {
                            userData.map((item, i) => (
                                <div key={i} className="flex flex-col my-2">
                                    <h4 className="text-black font-semibold">{item.title}</h4>
                                    <h6 className="text-sm text-[rgba(0,0,0,0.89)]">{item.display}</h6>
                                </div>
                            ))
                        }

                    </div>


                     <div>
                        <div className="py-2 bg-deep p-3 rounded-md flex gap-x-3 flex-col">
                            <h3 className="font-bold text-lg text-white">Payments</h3>
                        </div>

                        <div className="">
                            <div className="py-4 grid grid-cols-2 gap-4">
                                <div className="flex flex-col my-2">
                                    <h4 className="text-black font-semibold">Payment Method</h4>
                                    <h6 className="text-sm text-[rgba(0,0,0,0.89)]">PayPal</h6>
                                </div>

                                <div className="flex flex-col my-2">
                                    <h4 className="text-black font-semibold">Amount</h4>
                                    <h6 className="text-sm text-[rgba(0,0,0,0.89)]">Gold Badge: $300</h6>
                                </div>

                                <div className="flex flex-col my-2">
                                    <h4 className="text-black font-semibold">Status</h4>
                                    <h3>Status: <span className={`${props.status ? "bg-[#15fa5a]" : "bg-[#facc15]"} text-sm p-2 font-bold rounded-md text-deep `}>{props.status ? "Payed" : "Pending"}</span></h3>
                                </div>

                            </div>
                        </div>
                     </div>
                </div>
            </div>

        </div>
    )
}


export default Receipt