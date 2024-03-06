import React from 'react';
import './Button.scss';
import PlusIcon from '../../assets/PlusIcon.jsx';

const Button = ({
  onClick,
  children,
  className,
  disabled,
  size,
  leftIcon,
  variant,
}) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  const buttonClass = `custom-button ${className} ${
    disabled ? 'disabled' : ''
  } ${size} ${leftIcon ? 'with-icon' : ''} ${variant}`;

  return (
    <button className={buttonClass} onClick={handleClick} disabled={disabled}>
      {leftIcon && (
        <span className="icon">
          <PlusIcon/>
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
