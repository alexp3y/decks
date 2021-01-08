import React from 'react';
import styles from './ControlButton.module.css';

interface Props {
  action: string;
  border: boolean;
  disabled: boolean;
  onClick(): void;
}

export const ControlButton: React.FC<Props> = ({
  action,
  children,
  border,
  disabled,
  onClick,
}) => {
  const clickHandler = () => {
    if (!disabled) {
      onClick();
    }
  };
  return (
    <div className={getButtonStyles(disabled)} onClick={clickHandler}>
      <div className={styles.ctrl} style={border ? borderRight : {}}>
        {children}
        {action}
      </div>
    </div>
  );
};

const getButtonStyles = (disabled: boolean) =>
  disabled ? styles.disabledButton : styles.button;

const borderRight = {
  borderRight: '1px solid var(--color-bg)',
};
