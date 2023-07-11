import { createContext, useState } from "react";

export const RatingsContext = createContext();

const RatingContext = ({children, ratingData}) => {
    const [data, setData] = useState(ratingData);
   
    return (
        <RatingsContext.Provider value={data}>
            { children }
        </RatingsContext.Provider>
    )
}

export default RatingContext