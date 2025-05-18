import React from 'react';
import PropTypes from 'prop-types';

/**
 * A customizable button component using Tailwind CSS classes.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @param {function} [props.onClick] - The click handler function.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The button type.
 * @param {'primary' | 'secondary' | 'danger'} [props.variant='primary'] - The button style variant.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 */
const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled }) => {
  // Base styles applied to all buttons
  const base =
    'px-4 py-2 rounded-xl font-medium focus:outline-none focus:ring-2 transition-all';

  // Variant-specific styles
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  // Combine base, variant, and disabled styles
  // The correction is here: using a template literal directly inside the className prop
  const combinedClassName = `${base} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName} // Use the combined class name
    >
      {children}
    </button>
  );
};

// PropTypes for type checking
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  disabled: PropTypes.bool,
};

export default Button;
