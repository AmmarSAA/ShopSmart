import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

// Function to generate a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const commentsPerPage = 8;
  const pageCount = Math.ceil(comments.length / commentsPerPage);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/comments?skip=${getRandomNumber(
            1,
            100
          )}&limit=50`
        );
        // Extract the 'comments' array from the API response
        const commentsArray = response.data.comments;
        setComments(commentsArray);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, []);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const displayedComments = comments.slice(
    currentPage * commentsPerPage,
    (currentPage + 1) * commentsPerPage
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Comments</h2>
      {displayedComments.length > 0 ? (
        displayedComments.map((comment) => (
          <div className="card mb-3" key={comment.id}>
            <div className="card-body">
              <h5 className="card-title">
                User: {comment.user?.username || "Unknown"}
              </h5>
              <p className="card-text">{comment.body}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-info">No Comments Found</div>
      )}

      {comments.length > commentsPerPage && (
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"pagination justify-content-center mt-4"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      )}
    </div>
  );
};

export default Comment;
