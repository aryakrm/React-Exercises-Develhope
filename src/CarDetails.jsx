export default function CarDetails({ model, year, color }) {
  return (
    <div>
      <h1>Car Details</h1>
      <h3>Car's Model is: {model}</h3>
      <h3>Car's made in: {year}</h3>
      <h3>Car's Color is: {color}</h3>
    </div>
  );
}
