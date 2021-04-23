import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { colors, fontSize } from '../../../constants';
import { scale } from '../../../utils/resolutions';
import { Text } from '../../../components';

const Info = ({ label, value }) => (
  <View style={styles.viewTxt}>
    <Text style={styles.txtTxt}>
      {label}
    </Text>
    <Text style={styles.txtTxt2}>
      {value}
    </Text>
    <View style={styles.viewIndex}>
      {
        value > 50 ?
          <View style={[styles.viewViewIndex, { width: `${value}%`, backgroundColor: colors.colorIndexBase2, }]} />
          : <View style={[styles.viewViewIndex, { width: `${value}%`, backgroundColor: colors.colorIndexBase1, }]} />
      }
    </View>
  </View>
)
const BaseStats = ({ item }) => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <View
        testID='detail_base_modal'
        style={styles.container}
      >
        <View
          testID='detail_viewinfo_base_modal'
          style={styles.viewInfo}
        >
          <Info label="HP" value={45} />
          <Info label="Attck" value={60} />
          <Info label="Defence" value={48} />
          <Info label="Sp. Atk" value={65} />
          <Info label="Sp. Def" value={65} />
          <Info label="Speed" value={45} />
          <Info label="Total" value={97} />
        </View>
        <View
          testID='detail_viewbreeding_base_modal'
          style={{ paddingHorizontal: scale(2) }}
        >
          <Text style={styles.txtBreeding}>
            {`Type defenses`}
          </Text>
          <Text style={styles.txtTxtxx}>
            {`The effectiveness of each typeon ${item.name}`}
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: scale(6),
  },
  viewTxt: {
    flexDirection: 'row',
    margin: scale(3),
    alignItems: 'center',
  },
  txtTxt: {
    width: scale(70),
    margin: scale(2),
    paddingHorizontal: scale(2),
    color: colors.txtAbout1,
    fontSize: fontSize.smaller,
  },
  txtTxt2: {
    width: scale(45),
    margin: scale(2),
    paddingHorizontal: scale(15),
    color: colors.txtAbout2,
    fontWeight: 'bold',
    fontSize: fontSize.smaller,
  },
  txtBreeding: {
    paddingHorizontal: scale(10),
    margin: scale(2),
    fontWeight: 'bold',
    fontSize: fontSize.fontSize14,
    marginBottom: scale(5),
    color: colors.txtAbout2,
  },
  viewIndex: {
    width: scale(170),
    height: scale(3),
    backgroundColor: colors.viewBase,
    marginLeft: scale(10)
  },
  txtTxtxx: {
    margin: scale(2),
    paddingHorizontal: scale(10),
    color: colors.txtAbout1,
    fontSize: fontSize.smaller,
  },
  viewViewIndex: {
    height: scale(3),
  },
  viewInfo: {
    marginBottom: scale(10),
    paddingHorizontal: scale(15),
  },
})
export default BaseStats
