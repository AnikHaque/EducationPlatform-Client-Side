const CourseModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="text-xl font-bold">Edit Course</h2>
              <button
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={onClose}
              >
                ✕
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseModal;
