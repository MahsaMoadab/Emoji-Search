export default function ToggleViewButton({ toggleView, view }) {
  return (
    <div className="content_filter_select_view">
      <button
        className={`view_btn card_view_btn ${view === 'card' ? "active" : ""}`}
        onClick={() => toggleView("card")}
      >
        <img src="./assets/images/card.svg" alt="" />
      </button>
      <button
        className={`view_btn grid_view_btn ${view === 'grid' ? "active" : ""}`}
        onClick={() => toggleView("grid")}
      >
        <img src="./assets/images/grid.svg" alt="" />
      </button>
    </div>
  );
}
