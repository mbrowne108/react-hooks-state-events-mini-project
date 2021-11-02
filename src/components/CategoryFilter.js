import React from "react";

function CategoryFilter({categories, handleFilter }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return (
          <button 
            key={index}
            onClick={(event) => {
              handleFilter(event.target.value)
              event.target.className = "selected"
            }}
            value={category}
            className=""
          >
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
