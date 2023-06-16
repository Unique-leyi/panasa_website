

function FilterBtn(props) {

    const active = `bg-secondary text-white lg:bg-sitered lg:text-white lg:outline-none  border-none outline-none py-2 px-6 rounded-md font-semibold text-sm cursor-pointer hover:bg-sitered hover:text-white font-montserrat mx-2`;

    const isFilter = props.filter === props.title ? active : " ";


    return (
        <button className={`${isFilter}  my-1 gallery_btn`} onClick={props.handleSetFilter}>{props.title}</button>
    )
}

export default FilterBtn