

function Spinner() {
    return (
        <div className="flex justify-center items-center flex-col py-8 lg:py-14">
            <span className="loader"></span>
            <span className="text-sm lg:text-xl font-bold mt-4 text-deep">Loading...</span>
        </div>
    )
}

export default Spinner