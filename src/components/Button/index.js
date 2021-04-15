import React from 'react';
import { TouchableOpacity } from 'react-native';

const Button = ({
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={.95}
      {...rest}
    >
      {children}
    </TouchableOpacity>
    
  );
}

export default Button;