import { packagesData } from "../../../pages/api/packagesdata";
import PackageItem from "./PackageItem.jsx";
import Link from "next/link";


function Packages() {
    return (
        <section className="mt-10 lg:mt-20 bg-ash px-5 py-12 lg:py-16">
            <div className="flex justify-center items-center flex-col">
                <h5 className="text-3xl lg:text-5xl text-deep font-bold text-center">Packages</h5>
                <p className="text-sm my-2">Participants gets to enjoy exquisite packages at the President{"'"}s Cup</p>
            </div>

            <div className="my-5 lg:my-8 container lg:max-w-[85%] lg:mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-y-6">
                {
                    packagesData.map((item, i) => (
                        <PackageItem key={i} {...item}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Packages