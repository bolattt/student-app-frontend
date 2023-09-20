import "./SearchBar.scss";
export default function SearchBar({ search, setSearch }) {
  console.log("<SearchBar /> rendederd");
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
