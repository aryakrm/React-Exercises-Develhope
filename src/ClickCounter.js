export default function ClickCounter({ click, count }) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={click}>increase +</button>
    </div>
  );
}
