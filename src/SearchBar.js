import React from "react";

function SearchBar() {
  return (
    <div className="NavBar">
      <ul>
        <li>Best Match</li>
        <li>Highest Rated</li>
        <li>Most Reviewed</li>
      </ul>
      <form>
        <input type="text" placeholder="What do you want to eat?" />
        <input type="submit" value="Search for food" />
      </form>
    </div>
  );
}
