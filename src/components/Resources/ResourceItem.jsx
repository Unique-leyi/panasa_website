

function ResourceItem(props) {
   
    return (
        <div className="lg:mx-6 flex justify-center bg-darkblue shadow-lg shadow-sitepurple rounded-xl items-center flex-col my-10 overflow-hidden">
            <div className='p-5 bg-darkblue rounded-full text-center m-4'>
                <i className="ri-install-line text-8xl text-white"></i>
            </div>

            <div className='download_btn flex justify-center items-center flex-col '>
                <h3 className='font-semibold text-lg text-center'>{props.title}</h3>
                <a href={props.path} alt="alt text" target="_blank" rel="noopener noreferrer" >Get Words</a>
            </div>
        </div>
    )
}

export default ResourceItem