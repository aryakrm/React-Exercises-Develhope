function Age({ age }) {
  return <div>{age > 18 && <p>Your age is {age}</p>}</div>;
}

export default Age;
