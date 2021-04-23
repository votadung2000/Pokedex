import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { scale } from '../../../utils/resolutions';
import CardFlatList from './CardFlatList';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FlatListData = ({ delay, data, contentContainerStyle, ...rest }) => {
  // console.log(onScrollHandler)
  const _renderItem = (item) => {
    return (
      <CardFlatList
        {...item}
      />
    )
  };

  const _keyExtractor = item => String(item.id);
  console.log('delay', delay);
  return (
    <FlatList
      {...rest}
      testID='home_flatlist'
      data={data}
      numColumns={2}
      initialNumToRender={20}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      // contentContainerStyle={{ paddingBottom: 20 }}
      columnWrapperStyle={{ justifyContent: 'space-around', }}
      contentContainerStyle={contentContainerStyle}
      ListFooterComponent={
        delay && <ActivityIndicator size={25} color="red" />
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
  },
});

export default FlatListData;