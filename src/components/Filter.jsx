export const Filter = ({ filter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input onChange={filter} />
    </div>
  );
};
