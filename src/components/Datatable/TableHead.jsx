

function TableHead({heads}) {
    return (
       <thead className="text-xs text-gray-700 uppercase bg-lightblue">
            <tr>
                {heads.map((head, i) => (
                    <th key={i} scope="col" className="py-3 px-6 text-ash">
                        {head.title}
                    </th>
                ))}
            </tr>
        </thead> 
    )
}

export default TableHead