import React, { useState } from "react";
import "../../styles/PaginationStyle.css"; // Assuming you have a CSS file for styling

const Pagination = ({ handlePagination, currentPage }) => {
  const [num, setNum] = useState(1);
  const [cur, setCur] = useState(currentPage || 1);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];

  const nextPage = () => {
    const nextPageNum = num + 1;
    setNum(nextPageNum);
    handlePagination(nextPageNum);
  };

  const prevPage = () => {
    if (num > 1) {
      const prevPageNum = num - 1;
      setNum(prevPageNum);
      handlePagination(prevPageNum);
    }
  };

  const goToPage = (page) => {
    setCur(page);
    handlePagination(page);
  };

  return (
    <div className="pagination-container">
      <button onClick={prevPage} className="pagination-button">
        &lt;
      </button>
      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => goToPage(pg.page)}
          className={`pagination-button ${cur === pg.page && "active"}`}
        >
          {pg.page}
        </button>
      ))}
      <button onClick={nextPage} className="pagination-button">
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
