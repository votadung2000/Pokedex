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
  </View>
)
const InfoHeightWeight = ({ label, value, heightweight }) => (
  <View style={styles.viewTxt}>
    <Text style={styles.txtTxt}>
      {label}
    </Text>
    <Text style={styles.txtTxt2}>
      {value} {heightweight}
    </Text>
  </View>
)
const About = ({ item }) => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <View
        testID='detail_about_modal'
        style={{ padding: scale(6), }}
      >
        <View
          testID='detail_viewinfo_modal'
          style={{ marginBottom: scale(12), }}
        >
          <Info label="Specles" value="Specles" />
          <InfoHeightWeight label="Height" value="Height" heightweight={`(${item.height})`} />
          <InfoHeightWeight label="Weight" value="Weight" heightweight={`(${item.weight})`} />
          <Info label="Abilitles" value="Abilitles" />
        </View>
        <View testID='detail_viewinfoheight_modal'>
          <Text style={styles.txtBreeding}>
            {`Breeding`}
          </Text>
          <Info label="Gender" value="Abilitles" />
          <Info label="Egg Groups" value="Monster" />
          <Info label="Egg Cycle" value={item.type[0]} />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  viewTxt: {
    flexDirection: 'row',
    margin: scale(3),
    justifyContent: 'flex-start',
  },
  txtTxt: {
    width: scale(110),
    margin: scale(2),
    paddingHorizontal: scale(16),
    color: colors.txtAbout1,
    fontSize: fontSize.smaller,
  },
  txtTxt2: {
    width: scale(130),
    margin: scale(2),
    paddingHorizontal: scale(11),
    color: colors.txtAbout2,
    fontSize: fontSize.smaller,
    fontWeight: 'bold',
  },
  txtBreeding: {
    paddingHorizontal: scale(14),
    margin: scale(2),
    fontWeight: 'bold',
    fontSize: fontSize.fontSize14,
    marginBottom: scale(8),
  }
})
export default About
