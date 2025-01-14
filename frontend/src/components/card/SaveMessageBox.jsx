import React from 'react';

const SaveMessageBox = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-md p-6 w-96">
        <h3 className="text-lg font-semibold mb-4">Save Changes</h3>
        <p className="text-sm text-gray-700 mb-6">{message}</p>
        <div className="flex justify-end gap-4">
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
            >
              Cancel
            </button>
          )}
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveMessageBox;
