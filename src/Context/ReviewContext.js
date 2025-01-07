import { createContext, useContext, useEffect, useState } from "react";

const ReviewContext = createContext();

export const useReviews = () => useContext(ReviewContext);

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(() => {
    const stored = localStorage.getItem("reviews");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (review) => {
    setReviews([...reviews, { id: Date.now(), ...review }]);
  };

  const updateReview = (id, updated) => {
    setReviews(reviews.map((r) => (r.id === id ? { ...r, ...updated } : r)));
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <ReviewContext.Provider
      value={{ reviews, addReview, updateReview, deleteReview }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
