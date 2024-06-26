// components/CustomButton.tsx

import React from 'react';
import styles from './customButton.module.css'; // Import CSS module for styling

interface CustomButtonProps {
  text: string;
  onClick?: () => void; // Optional click handler
  border?: boolean; // Optional prop to determine if border should be applied
  fill?: boolean; // Optional prop to determine if background should be filled
  icon?: string | JSX.Element;
  primary?: boolean; // Optional prop to make the button primary
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, border, fill, icon, primary }) => {
  const buttonClass = primary ? styles.primary : styles.secondary;
  const buttonStyle = {
    border: border ? '2px solid #333' : 'none',
    backgroundColor: fill ? '#14244B' : 'transparent',
    color: primary ? 'white' : '#333',
  };

  return (
    <button className={`${styles.customButton} ${buttonClass}`} style={buttonStyle} onClick={onClick}>
      {typeof icon === 'string' ? (
        <span className={styles.icon}>{icon}</span>
      ) : (
        <span className={styles.icon}>{icon}</span>
      )}
      {text}
    </button>
  );
};

export default CustomButton;
