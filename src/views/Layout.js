import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { colors } from '../constants';
import { scale } from '../utils/resolutions';

const Layout = ({
  children,
  bgColor,
  ...attributes
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: bgColor || colors.white,
        },
        styles.layout,
      ]}
      {...attributes}
    >
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    // borderRadius: scale(15),
  },
});

export default Layout;