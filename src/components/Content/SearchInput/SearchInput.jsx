export default function SearchInput({ handleChangeParams }) {
  return (
    <div className="content_search">
      <input
        className="content_search_input"
        type="text"
        placeholder="Search emoji..."
        onChange={(e) => handleChangeParams(e.target.value)}
      />
      <div className="content_search_icon">
        <img src="./assets/images/search.svg" alt="" />
      </div>
    </div>
  );
}
