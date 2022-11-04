import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome {name}!</p>
      <Age age={age} />
    </div>
  );
}

export default Welcome;
