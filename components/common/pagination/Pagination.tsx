"use client";
import { useRouter } from "next/router";
interface paginationProps {
  currentPage: number;
  totalPages: number;
}
const Pagination: React.FC<paginationProps> = ({ currentPage, totalPages }) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      currentPage += 1;
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Nút Quay lại */}
      <button
        className={`px-4 py-2 border rounded ${
          currentPage === 1 ? "hidden" : "hover:bg-gray-100"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Các số trang */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`px-4 py-2 border rounded ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Nút Tiếp theo */}
      <button
        className={`px-4 py-2 border rounded ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
