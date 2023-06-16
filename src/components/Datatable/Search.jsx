import { useState } from "react"


function Search(props) {
    const [userSearch, setUserSearch] = useState("");

    const handleChange = (value) => {
        setUserSearch(value);
        props.handleSearch(value);
    }

    //   const searchStyle = {
    //     container: "justify-end items-end",
    //     inputContainer: "",
    //     inputBox: "w-80 rounded-lg",
    //     placeHolder: "Search for players",
    // };

    return (
        <div className={`flex ${props.searchStyle.container} pb-4`}>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className={`relative my-4 mx-2 ${props.searchStyle.inputContainer}`}>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search-users" className={`block p-2 pl-10 ${props.searchStyle.inputBox} text-sm text-[#000] bg-gray-50 border border-gray-300 focus:border-siteblue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder={`${props.searchStyle.placeholder}`} value={userSearch} onChange={(e) => handleChange(e.target.value)}/>
            </div>
        </div>
    )
}

export default Search