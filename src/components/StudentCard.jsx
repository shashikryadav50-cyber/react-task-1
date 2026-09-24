function StudentCard(props) {
  return (
    <div>
      <h2>Hello, {props.name}! 👋</h2>

      <p>Course: {props.course}</p>

      <p>Graduation Year: {props.year}</p>

      <p>This information is received using Props.</p>
    </div>
  );
}

export default StudentCard;