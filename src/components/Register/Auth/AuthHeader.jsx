

function AuthHeader(props){
    return (
        <div className="flex justify-center items-center flex-col lg:my-6 my-3">
            <h4 className="text-2xl lg:text-4xl font-extrabold text-deep mb-3">{props.title}</h4>
            <h5 className="text-lg lg:text-xl font-semibold text-[rgba(0,0,0,0.45)]">{props.miniTitle}</h5>
        </div>
    )
}

export default AuthHeader