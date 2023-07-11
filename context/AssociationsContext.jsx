import { createContext, useState } from "react";

export const AssociationsContext = createContext();

const AssociationContext = ({children, associationData}) => {
    const [data, setData] = useState(associationData);
   
    return (
        <AssociationsContext.Provider value={data}>
            { children }
        </AssociationsContext.Provider>
    )
}

export default AssociationContext