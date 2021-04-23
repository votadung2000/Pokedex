import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';
import { fontSize, colors } from '../../../constants';
import { scale, wScale } from '../../../utils/resolutions';
import { linkImage } from '../../../utils/helpers';
// import { limitedString } from '../../../utils/helpers';
import { Button, Text } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import routes from '../../../routes'
import getColor from '../../../utils/getColor'
import FastImage from 'react-native-fast-image'

const CardFlatList = ({
  item,
}) => {
  const navigation = useNavigation();
  // const getColor = type => {
  //   let bgColor = COLORS.find(color => color.type === type);
  //   if (bgColor) {
  //     return bgColor.color;
  //   }
  //   return "#f5bcc3"
  // }

  const gotoFindBook = (item, color) => {
    navigation.navigate(routes.DETAIL, { item: item, color });
    //console.log(item, color)
  }
  // console.log(item.img) 

  // const linkImage = (i) => {
  //   const link = i.substring(4, i.length)
  //   return 'https' + link
  // }

  return (
    <TouchableOpacity
      testID='home_card'
      style={[styles.card, { backgroundColor: getColor(item.type[0]) }]}
      onPress={() => gotoFindBook(item, getColor(item.type[0]))}
      activeOpacity={0.9}
    >
      <Text style={styles.title} testID='home_card_name'>
        {item.name}
      </Text>
      <View style={styles.body} >
        <View>
          {item.type.map((item, index) => (
            <Button
              testID='home_card_type'
              style={styles.viewType}
              key={index.toString()}
            >
              <Text style={styles.txtType}>{item}</Text>
            </Button>
          ))}
        </View>
        <FastImage
          testID='home_card_img'
          source={{ 
            uri: Platform.OS === 'android' ? item.img : linkImage(item.img),
            // headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.high,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wScale(170),
    marginBottom: scale(10),
    marginHorizontal: scale(5),
    borderRadius: scale(10),
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
  },
  image: {
    width: wScale(70),
    height: wScale(67),
  },
  title: {
    fontSize: fontSize.fontSize20,
    color: colors.white,
    fontWeight: 'bold',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(5),
  },
  viewType: {
    paddingHorizontal: scale(8),
    paddingVertical: scale(1),
    marginBottom: scale(5),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtType: {
    color: colors.white,
    fontSize: fontSize.fontSize11,
  },
});

export default CardFlatList;