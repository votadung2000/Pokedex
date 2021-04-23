import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const Evolution = () => {
  return (
    <View
      style={styles.container}
      testID='detail_evolution_modal'
    >
      <Text>
        {`Evolution`}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Evolution
