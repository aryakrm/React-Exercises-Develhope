import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <div>
      {name === "John" && age > 18 && age < 65 && <p>Welcome {name}!</p>}
      {age > 18 && age < 65 && <Age age={age} />}
    </div>
  );
}

export default Welcome;
