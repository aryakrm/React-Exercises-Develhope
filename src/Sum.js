export function Sum({ numbers = [1, 2, 3, 3, 4] }) {
  return (
    <div className="Sum">
      <h1>{numbers.reduce((a, b) => a + b, 0)}</h1>
    </div>
  );
}
