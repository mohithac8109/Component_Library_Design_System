import React from 'react';
import PropTypes from 'prop-types'; // Correct: 'prop-types' not 'PropTypes'

// InputField component: A reusable input field with a label.
const InputField = ({ label, id, type = 'text', value, placeholder, onChange, name }) => {
    return (
        // Main container for the input field and its label
        <div className="w-full space-y-1">
            {/* Label for the input field */}
            <label htmlFor={id} className="block text-sm font-medium text-gray-700"> {/* Corrected: font-medium instead of front-medium */}
                {label}
            </label>
            {/* Input element */}
            <input
                id={id}
                name={name} // Added name attribute, often useful for forms
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150 ease-in-out" // Added transition for smoother focus
            />
        </div>
    );
};

// PropTypes for the InputField component
// Defines the expected types for each prop passed to the component.
InputField.propTypes = { // Corrected: 'propTypes' (lowercase 'p')
    /**
     * The text content for the label associated with the input field.
     */
    label: PropTypes.string.isRequired,
    /**
     * The unique identifier for the input field and its corresponding label's `htmlFor` attribute.
     */
    id: PropTypes.string.isRequired,
    /**
     * The type of the input field (e.g., 'text', 'password', 'email', 'number'). Defaults to 'text'.
     */
    type: PropTypes.string,
    /**
     * The current value of the input field.
     */
    value: PropTypes.string,
    /**
     * The placeholder text to display when the input field is empty.
     */
    placeholder: PropTypes.string,
    /**
     * Callback function that is triggered when the value of the input field changes.
     * It receives the event object as an argument.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * The name attribute for the input field, which is important for form submission.
     */
    name: PropTypes.string, // Added propType for name
};

// Default props for the InputField component
// Provides default values for props if they are not explicitly passed.
InputField.defaultProps = {
    type: 'text',
    value: '',
    placeholder: '',
    name: '', // Added default for name
};

export default InputField;
