import React, { useState, useEffect } from 'react';
import { 
  View, 
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import { Layout } from '../../views';
import { Text, Button } from '../../components';
import { colors, fontSize } from '../../constants';
import { scale, wScale } from '../../utils/resolutions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import routes from '../../routes';

import Config from "react-native-config";
import axios from 'axios';

import getColor from '../../utils/getColor'

const Scanner = () => {

  const [dataP, setDataP] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    dataPokedex();
  }, []);

  const dataPokedex = () => {
    axios
      .get(Config.API_DATA)
      .then(function (response) {
        setDataP(response.data.pokemon);
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  const goBack = () => {
    navigation.goBack();
  }

  const getChossee = id => {
    let getCs = dataP.find(gtCho => parseInt(gtCho.id) === parseInt(id));
    if (getCs) {
      const color = getColor(getCs.type[0])
      navigation.navigate(routes.DETAIL, { item: getCs, color });
    }
    else{
      ToastAndroid.show("Pokedex Not Found", ToastAndroid.SHORT);
    }
  }

  const _onBarCodeRead = (data) => {
    if (data) {
      getChossee(data.data);
    }
  }

  return (
    <Layout bgColor="transparent">
      <RNCamera
        style={styles.camera}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}
        onBarCodeRead={_onBarCodeRead}
      >
        <View style={styles.header}>
          <Button
            testID='buttonBackScanner'
            style={styles.btnBack}
            onPress={goBack}
          >
            <FontAwesome
              size={26}
              name="angle-left"
              color={colors.white}
            />
          </Button>
        </View>
        <View style={styles.scanContainer}>
          <View style={styles.scanFrame}>
            <Text bold style={styles.scanTxt}>
              {`Scanning...`}
            </Text>
          </View>
        </View>
      </RNCamera>
    </Layout>
  )
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  btnBack: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
  },
  scanContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    borderWidth: 2,
    borderColor: colors.white,
    width: wScale(170),
    height: wScale(230),
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanTxt: {
    color: colors.white,
    fontSize: fontSize.larger,
    letterSpacing: 1.1,
  },
});

export default Scanner;