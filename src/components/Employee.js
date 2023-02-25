function Employee(props) {
  //props.name = "something";
  return (
    <>
      <h2>Employee {props.name}</h2>
      <h3>{props.role ? props.role : "No Role"}</h3>{" "}
    </>
  );
}

export default Employee;
