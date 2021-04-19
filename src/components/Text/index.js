import React from 'react';
import { Text as RNText } from 'react-native';

const Text = ({
  bold,
  style,
  children,
  ...rest
}) => {
  return (
    <RNText
      style={[
        {
          // fontFamily: bold ? 'Roboto_Bold' : 'Roboto_Regular',
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  )
}

export default Text;