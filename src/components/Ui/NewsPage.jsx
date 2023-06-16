import Image from "next/image"



function NewsPage(props) {

    const {img, content, title, author} = props;
    const text = content.split('\n').map((item, i) => <p key={i} className="my-4">{item}</p>);

// bg-[#0c240c]
    return (
        <section className={`w-full lg:max-w-[80%] mx-2  lg:mx-auto my-20 lg:p-1 px-4 flex justify-center items-center flex-col`}>                  
        <div className="w-full h-[30rem] lg:w-[90%] lg:h-[45rem] rounded-md relative">
            <Image src={`/images/${img}` || "/"}  alt={title || "Post image"}  width={100} height={100} objectFit="cover" layout="fill"/>
        </div>

        <div className="my-10 flex flex-wrap justify-center items-center lg:flex-row flex-col">
            <h3 className="text-2xl lg:text-4xl font-bold text-primary text-center">{title || "Post Title"}</h3>
        </div>

        <div className="my-4">
            {text || <p> No Post Content. </p>}
        </div>

        <div className="my-12 w-full flex justify-between items-center lg:flex-row  flex-col">
            <div className='flex justify-center lg:justify-start items-center lg:items-start my-10'>
                <a href="#" className="bg-btncolor hover:bg-primary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-[#000]"><i className="ri-facebook-circle-fill text-xl"></i></a>
                <a href="#" className="bg-btncolor hover:bg-primary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-[#000]"><i className="ri-telegram-fill text-xl"></i></a>
                <a href="#" className="bg-btncolor hover:bg-primary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-[#000]"><i className="ri-instagram-fill text-xl"></i></a>
                <a href="#" className="bg-btncolor hover:bg-primary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-[#000]"><i className="ri-twitter-fill text-xl"></i></a>
            </div>

            <div>
              {author ? <h4 className="font-semibold text-xl font-inter"><span className="text-secondary mx-2">Credit: </span> {author}</h4> : <></>}
            </div>
        </div>

        </section>
    )
}

export default NewsPage

