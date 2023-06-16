

function Prize(props) {
    return (
        <div className="mx-4 flex flex-col gap-y-5 my-4 rounded-lg shadow-md shadow-[rgba(0,0,0,0.6)] border-2 border-sitepurple p-4">
            <div className="my-2">
                <h4 className="text-xl lg:text-3xl font-bold text-deep text-justify">{props.position}</h4>
            </div>

            <div className="bg-deep rounded-md p-3 shadow-md shadow-[rgba(0,0,0,0.7)]">
                <h5 className="text-lg text-white font-extrabold mb-3 text-justify">{props.prize}</h5>
                {props.owner && <p className="text-sm font-medium text-ash">{props.owner}</p>}
            </div>
        </div>
    )
}

export default Prize