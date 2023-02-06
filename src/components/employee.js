function Employee (props){
    return (
        <>
        <h3>Your employee name is {props.name}</h3>
        <p>with a role of {props.role ? props.role : "They ain't got nothing to do"}</p>      
        </>
    )

}
export default Employee;