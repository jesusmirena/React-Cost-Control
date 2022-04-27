import { useState, useEffect } from "react";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="">Filter by expenses</label>
          <select
            name=""
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">--All the Categories--</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="miscellaneous">Miscellaneous expenses</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
