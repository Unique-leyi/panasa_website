import Image from "next/image";


function Partnership(){
    return (
        <main className="p-4 lg:py-16">
            <section className="my-4 container mx-auto grid grid-cols-1 lg:gap-16 ">
                <div className="py-2">
                    <div className="relative w-full h-full">
                        <Image src={require("../../assets/images/kenya_airways.jpeg")} alt="aysc" objectFit={"cover"} />
                    </div>
                </div>


                <div className="py-2">
                    <div className="mb-8">
                        <h3 className="text-2xl lg:text-5xl text-deep font-extrabold">PANASA Partners Kenya Airways</h3>
                    </div>

                    <div className="my-4">
                        <p className="text-darkash text-sm">
                            PANASA is pleased to announce that Kenya Airways have granted our request for a discount for all travel to Lagos Nigeria from all PANASA member countries during the period of the Africa Youth Scrabble Championship and President’s Cup. Please see terms and conditions of the discount below
                        </p>


                        <ul className="my-6 bg-ash p-6 rounded-lg border-2 border-sitepink grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-y-8">
                            <div>
                                <li className="my-3">Discount Code – <b className="text-deep">PANAS2023</b></li>

                            <li className="my-3">Flat rate of 15% will be applied on the cost of the tickets being purchased.</li>

                            <li className="my-3">Tickets can be purchased using the code from 12th February 2023 until 15th August 2023.</li>

                            <li className="my-3">Travel period must be between 19th August to 31st August 2023.</li>

                            <li className="my-3">The following fare types are covered by this discount, these are:  C, D, I, B. M, U, K, H, L, Q, T, E & N</li>

                            <li className="my-3">Trips on Kenya Airways starting from the following airports will be considered for the discount provided they are within the fare types listed above. These airports are:</li>

                            <li className="my-3">NBO (Jomo Kenyatta International Airport, Kenya)</li>

                            <li className="my-3">MBA (Moi International Airport, Kenya)</li>

                            <li className="my-3">EBB (Entebbe International Airport, Uganda)</li>
                            </div>

                            <div>
                                
                                <li className="my-3">ACC (Kotoka International Airport Ghana)</li>

                                <li className="my-3">DLA (Douala International Airport, Cameroun)</li>

                                <li className="my-3">ZNZ (Abeid Amani Karume International Airport, Tanzania)</li>

                                <li className="my-3">JNB (OR Tambo International Airport, South Africa)</li>

                                <li className="my-3">CPT (Cape Town International Airport, South Africa)</li>

                                <li className="my-3">FNA (Freetown International Airport, Sierra Leone)</li>

                                <li className="my-3">ROB (Roberts International Airport, Liberia)</li>

                                <li className="my-3">GBE (Sir Seretse Khama International Airport, Botswana)</li>

                                <li className="my-3">LUN (Kenneth Kaunda International Airport, Zambia)</li>

                                <li className="my-3">BJL (Banjul International Airport, Gambia)</li>

                                <li className="my-3"> Normal KQ baggage rules apply.</li>

                                <li className="my-3"> All other rules and conditions to apply as per market fares.</li>

                                <li className="my-3">Tickets without approved fare types and tour code will be required to pay market fare.</li>
                            </div>

                        </ul>


                        <div className="my-4">
                            
                            <h4 className="text-deep font-bold mb-3">VISA TO NIGERIA</h4>
                            <p>Players can apply for e-Visas to Nigeria by visiting portal.immigration.gov.ng and uploading their documents, filling out the online application form and making payments. Approval is granted by the Nigeria Immigration Service via the email provided between 1-3 days. Players are to travel with the printed approval letter. For all payments made online, there is no need to pay on arrival in Nigeria. The approval letter expires after 14 days of issue. Visa fee starts from $2 but varies from country to country. Please check on the Nigeria immigration portal for the exact fee that applies for your country. PANASA will issue invitation letters to players upon Registration for the Championship.</p>

                        </div>


                        <div className="my-4">
                            <h4 className="text-deep font-bold mb-3">AIRPORT PICK-UP & DROP-OFF</h4>

                            <p>
                                PANASA will be responsible for picking and dropping off all players travelling into Nigeria thru the International Airport in Lagos, Nigeria. Please ensure to share flight details with the PANASA secretariat via email i.e. info@panafricanscrabble.com. This should be done at least 48hrs before the travel date.

                                Thank you.

                                Adekoyejo Adegbesan

                                President Pan African Scrabble Association
                            </p>

                        </div>

                    </div>


                </div>

                
            </section>
        </main>
    )
}

export default Partnership