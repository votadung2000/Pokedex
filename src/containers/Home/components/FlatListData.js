import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { scale } from '../../../utils/resolutions';
import CardFlatList from './CardFlatList';

const FlatListData = ({ data }) => {
  // console.log(onScrollHandler)
  const _renderItem = (item) => {
    return (
      <CardFlatList
        {...item}
      />
    )
  };

  const _keyExtractor = item => String(item.id);

  return (
    <View style={styles.container} >
      <FlatList
        testID='home_flatlist'
        data={data}
        numColumns={2}
        // initialNumToRender={20}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        // onEndReached={onScrollHandler}
        contentContainerStyle={{ paddingBottom: 120 }}
        columnWrapperStyle={{ justifyContent: 'space-between', }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
  },
});

export default FlatListData;