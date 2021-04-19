import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native'
console.disableYellowBox = true;

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Layout } from '../../views';
import { Text, Button } from '../../components';
import { colors, fontSize } from '../../constants';
import { scale } from '../../utils/resolutions';
import routes from '../../routes'

import { FlatListData } from './components'
// import Config from "react-native-config";
// import axios from 'axios';
import { observer } from "mobx-react";
import { useStore } from '../../context';

const Home = ({ navigation }) => {
  const { pokedexStore: { pokemon, fetchPokemon } } = useStore();
  useEffect(() => {
    fetchPokemon();
  }, []);

  // addRecords = (page) => {
  //   // assuming this.state.dataPosts hold all the records
  //   const newRecords = []
  //   for(var i = page * 12, il = i + 12; i < il && i < 
  //     this.state.dataPosts.length; i++){
  //     newRecords.push(this.state.dataPosts[i]);
  //   }
  //   this.setState({
  //     posts: [...this.state.posts, ...newRecords]
  //   });
  // }

  // onScrollHandler = () => {
  //   this.setState({
  //     page: this.state.page + 1
  //   }, () => {
  //     this.addRecords(this.state.page);
  //   });
  // }

  return (
    <Layout testID='home_screen'>
      <View style={styles.container}>
        <View style={styles.header}>
          <Button
            testID='icon_home_back'
            onPress={() => alert("Back")}
            style={styles.icon}
          >
            <Ionicons name="arrow-back-outline" size={26} />
          </Button>
          <Button
            testID='icon_home_scan'
            onPress={() => navigation.navigate(routes.SCANNER)}
            style={styles.icon}
          >
            <Ionicons name="ios-scan-outline" size={26} />
          </Button>
        </View>
        <Text style={styles.txtHeader}>
          {`Pokedex`}
        </Text>
        <View style={styles.content}>
          <FlatListData
            data={pokemon}
          />
        </View>
      </View>
    </Layout>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1, 
    marginTop: 25,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: scale(15),
    paddingHorizontal: scale(10),
  },
  icon: {
    paddingVertical: scale(5),
    paddingHorizontal: scale(5),
  },
  txtHeader: {
    fontSize: fontSize.biggest2,
    fontWeight: 'bold',
    marginBottom: scale(10),
    paddingHorizontal: scale(15),
  },
})

export default observer(Home);


// const [dataP, setDataP] = useState([]);
  // const [page, setPage] = useState()

  // useEffect(() => {
  //   dataPokedex();
  // }, []);

  // const dataPokedex = () => {
  //   axios
  //     .get(Config.API_DATA)
  //     .then(function (response) {
  //       setDataP(response.data);
  //       // setPage(0);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // };

  // const addRecords = (page) => {
  //   const newRecords = [];
  //   for (var i = page * 12, il = i + 12; i < il && i < dataP.length; i++) {
  //     newRecords.push(dataP[i]);
  //   }
  //   setDataP(...dataP, ...newRecords)
  // }

  // const onScrollHandler = () => {
  //   setPage(page + 1)
  //   addRecords(page)
  // }

  // if (!dataP) {
  //   return <View >{`loading`}</View>
  // }