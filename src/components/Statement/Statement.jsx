import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";



function Statement(props) {
    return (
        <div className="bg-lightash border-l-4 border-solid border-[#4d8499] p-5 rounded-md shadow-md shadow-boldash">
            <div className="flex justify-between items-center">
                <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: 60 }} className="text-sitegreen"/>
            </div>

            <div className="my-8">
                <h4 className="text-secondary text-3xl font-bold mx-10 flex justify-end items-end mb-3">{props.title}</h4>
                <p className="text-sm text-darkash">{props.content}</p>
            </div>
        </div>
    )
}

export default Statement