import { useState, useEffect, useMemo } from "react";

function TablePaginate({ total = 0, itemsPerPage = 10, currentPage = 1, onPageChange }) {
  const [totalPages, setTotalPages] = useState(0);

  // Setting the Total Pages
  useEffect(() => {
    if (total > 0 && itemsPerPage > 0) {
      setTotalPages(Math.ceil(total / itemsPerPage));
    }
  }, [total, itemsPerPage]);

  const paginateItems = useMemo(() => {
    const pages = [];
    const maxVisiblePages = 5;
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, currentPage - halfMaxVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className="cursor-pointer">
          <a
            onClick={() => onPageChange(i)}
            className={`${i === currentPage ? "bg-deep text-white" : " "} py-2 px-3 leading-tight  bg-lightash border border-white`}
          >
            {i}
          </a>
        </li>
      );
    }

    return pages;
  }, [totalPages, currentPage, onPageChange]);

  if (totalPages === 0) return null;

  return (
    <ul className="inline-flex items-center -space-x-px lg:m-0 my-3">
      <li className={`${currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer "} `} disabled={currentPage === 1}>
        <a
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="block py-2 px-3 ml-0 leading-tight text-sitered bg-lightash rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Previous</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        </a>
      </li>

      {paginateItems}

      <li className={`${currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer "} `} disabled={currentPage === totalPages}>
        <a
          onClick={() => onPageChange(currentPage + 1)}
          className="block py-2 px-3 leading-tight text-sitered  bg-lightash rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Next</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default TablePaginate;
