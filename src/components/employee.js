function Employee(props){
    return(
        <>
        <h3>Your employee is {props.name}</h3>
        <p>Their role is {props.role ? props.role : "They ain't got no role"}</p>
        </>
    )
}

export default Employee;