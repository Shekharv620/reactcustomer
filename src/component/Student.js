function Student(props) {
    return (
        <div>
            <h2 style={{color:'blue'}} >Student Record</h2>
            <h3>Name:{props.name}</h3>
            <h3>RollNo:{props.rollno}</h3>
            <h3>Age:{props.age}</h3>
            <h3>Fees:{props.fees}</h3>
        </div>
    )
}
export default Student;