import { useState } from "react";
import { useReviews } from "../../Context/ReviewContext";

const AddReview = () => {
  const { addReview } = useReviews();
  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    addReview(form);
    setForm({ name: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        className="border p-2 w-full"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Your Review"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2" type="submit">
        Submit Review
      </button>
    </form>
  );
};

export default AddReview;
