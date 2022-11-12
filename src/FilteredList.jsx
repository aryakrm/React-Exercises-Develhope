import { useMemo } from "react";

export default function FilteredList() {
  const list = [
    {
      id: 1,
      name: "Mike",
      age: 12,
    },
    {
      id: 2,
      name: "Julia",
      age: 23,
    },
    {
      id: 3,
      name: "Max",
      age: 15,
    },
    {
      id: 4,
      name: "Rose",
      age: 32,
    },
  ];
  function filteredList() {
    return list.filter((item) => item.age > 18);
  }
  const result = useMemo(() => filteredList(), [list]);

  return (
    <div>
      {result.map((item) => {
        return (
          <div>
            <h1>.{item.id}</h1>
            <h1>name: {item.name}</h1>
            <h1>age: {item.age}</h1>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
