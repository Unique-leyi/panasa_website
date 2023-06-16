
import Image from "next/image"

function ResponseData(props) {
    return (
        <>
            {
                props.response ?
                    <div className="flex items-center flex-col gap-y-8 py-4 my-3 lg:my-10">
                        <div className="relative w-64 h-64">
                            <Image src={require("../../../assets/images/check-animation.gif")} alt={"Success"} style={{ objectFit: "cover"}} layout={"fill"}/>
                        </div>

                        <div className="my-6">
                            <h4 className="text-lg lg:text-xl font-bold text-white">{props.message}</h4>
                        </div>
                    </div>

                    :


                    <div className="flex items-center flex-col gap-y-8 py-4 my-3 lg:my-10">
                        <div className="relative w-64 h-64">
                            <Image src={require("../../../assets/images/error-animation.gif")} alt={"Error"} style={{ objectFit: "cover"}} layout={"fill"}/>
                        </div>

                        <div className="my-6">
                            <h4 className="text-lg lg:text-xl font-bold text-white">{props.message}</h4>
                        </div>
                    </div>
            }
        
        </>
    )

}

export default ResponseData