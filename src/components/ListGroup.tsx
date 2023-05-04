function ListGroup() {
  const listOfCitis = ["New York", "Tokyo", "Hyderabad", "London"];

  return (
    <>
      <h1>The List: </h1>
      <ul className="list-group">
        {listOfCitis.map((city) => (
          <li className="list-group-item"> {city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
