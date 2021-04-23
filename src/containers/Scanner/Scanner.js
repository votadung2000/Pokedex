import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ToastAndroid,
  PermissionsAndroid,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Layout } from '../../views';
import { Text, Button } from '../../components';
import { colors, fontSize } from '../../constants';
import { scale, wScale, hScale } from '../../utils/resolutions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RNCamera } from 'react-native-camera';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import routes from '../../routes';

import Config from "react-native-config";
import axios from 'axios';

import getColor from '../../utils/getColor'

const Scanner = () => {
  const [permissions, setPermission] = useState();
  const [dataP, setDataP] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dataPokedex();
      checkPermission();
    }
  }, [isFocused]);

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
    else {
      ToastAndroid.show("Pokedex Not Found", ToastAndroid.SHORT);
    }
  }

  const _onBarCodeRead = (data) => {
    if (data) {
      getChossee(data.data);
    }
  }

  const checkPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      setPermission(granted);
    } catch (err) {
      console.warn(err);
    }
  }

  if (!permissions) {
    return <ActivityIndicator />
  }
  if (permissions === "denied") {
    return (
      <View style={styles.containerDenied}>
        <Text style={styles.txtDenied}>
          {`Need access to your Camera`}
        </Text>
        <View>
          <TouchableOpacity
            onPress={checkPermission}
            style={styles.opacityDenied}
          >
            <Text style={styles.txtOpaDenied}>
              {`Go back to the Menu`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goBack}
            style={styles.opacityDenied}
          >
            <Text style={styles.txtOpaDenied}>
              {`Go back Home`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <Layout bgColor="transparent">
      <RNCamera
        style={styles.camera}
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
  containerDenied: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txtDenied: {
    fontSize: fontSize.fontSize20,
    fontWeight: '900'
  },
  txtOpaDenied: {
    fontSize: fontSize.large,
    fontWeight: '900'
  },
  opacityDenied: {
    width: wScale(200),
    marginTop: scale(20),
    height: hScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(10),
  }
});

export default Scanner;