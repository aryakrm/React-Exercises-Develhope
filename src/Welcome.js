import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <div>
      {name === "John" && <p>Welcome {name}!</p>}
      {age > 18 && age < 65 ? <Age age={age} /> : <p>You are very young!</p>}
    </div>
  );
}

export default Welcome;
