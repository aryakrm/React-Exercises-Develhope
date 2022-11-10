import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome {name}!</p>
      {age > 18 && <Age age={age} />}
    </div>
  );
}

export default Welcome;
