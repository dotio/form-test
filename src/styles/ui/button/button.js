import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({children, wide, backgroundColor, color, onClick, disabled}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={'button'} style={{
      width: wide ? '100%' : 'auto',
      background: backgroundColor,
      color: color
    }}>
      {children}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.any,
  wide: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  width: 'auto',
  color: '#f2f2f2',
  backgroundColor: '#4dccc6'
};
