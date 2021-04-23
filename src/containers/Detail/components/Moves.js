import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const Moves = () => {
  return (
    <View 
    style={styles.container}
    testID='detail_moves_modal'>
      <Text>
        {`Moves`}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default Moves
