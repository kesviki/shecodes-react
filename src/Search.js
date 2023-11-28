import React from "react";

export default function Search() {
    return (
        <form id="search-form">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control search-input"
            id="city-input"
            autocomplete="off"
            autoFocus="on"
          />
        </div>
        <div className="col-3 p-0">
          <input
            type="submit"
            className="btn btn-secondary w-100"
            value="Search"
          />
        </div>
      </div>
    </form>
    );
}