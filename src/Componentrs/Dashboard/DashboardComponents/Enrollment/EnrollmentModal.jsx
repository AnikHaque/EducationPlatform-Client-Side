const EnrollmentModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full relative">
            <h2 className="text-xl font-bold mb-4">Edit Enrollment</h2>
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default EnrollmentModal;
