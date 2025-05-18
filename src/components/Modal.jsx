import React from 'react'; // Removed { Children } as it's not used directly in this component
import PropTypes from 'prop-types';

/**
 * Modal component that displays content in a centered overlay.
 *
 * @param {object} props - The component's props.
 * @param {boolean} props.isOpen - Controls whether the modal is visible or not.
 * @param {Function} props.onClose - Callback function to be called when the modal is requested to close (e.g., by clicking the close button or an overlay).
 * @param {string} [props.title] - Optional title to display at the top of the modal.
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal.
 */
const Modal = ({ isOpen, onClose, title, children }) => {
    // If the modal is not open, don't render anything
    if (!isOpen) {
        return null;
    }

    return (
        // Fixed-position overlay that covers the entire screen
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out"
            // onClick={onClose} // Optional: Close modal when clicking on the overlay
        >
            {/* Modal content container */}
            <div
                className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl transform transition-all duration-300 ease-in-out scale-100 opacity-100"
                onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside the content
            >
                {/* Modal header with title and close button */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{title || 'Modal Title'}</h2> {/* Provide a default title if none is passed */}
                    <button
                        onClick={onClose}
                        className="text-2xl font-semibold text-gray-500 hover:text-gray-800 transition-colors duration-150 ease-in-out focus:outline-none"
                        aria-label="Close modal" // Accessibility: for screen readers
                    >
                        &times; {/* HTML entity for a multiplication sign (X) */}
                    </button>
                </div>
                {/* Modal body content */}
                <div className="text-gray-700">
                    {children}
                </div>
            </div>
        </div>
    );
};

// PropTypes for the Modal component
// Defines the expected types for each prop.
Modal.propTypes = {
    /**
     * Determines if the modal is currently open and visible.
     */
    isOpen: PropTypes.bool.isRequired,
    /**
     * Function to call when the modal needs to be closed.
     * Typically, this function will set `isOpen` to `false`.
     */
    onClose: PropTypes.func.isRequired,
    /**
     * Optional title for the modal. Displayed in the modal header.
     */
    title: PropTypes.string,
    /**
     * The content to be rendered inside the modal. Can be any valid React node.
     */
    children: PropTypes.node.isRequired,
};

// Default props for the Modal component
// Provides default values for props if they are not explicitly passed.
Modal.defaultProps = {
    title: 'Notification', // Default title if not provided
};

export default Modal;
