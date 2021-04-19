import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { Layout } from '../../../views';
import { Text, Button } from '../../../components';
import { scale } from '../../../utils/resolutions';
import { colors, fontSize } from '../../../constants';

import About from './About'
import BaseStats from './BaseStats'
import Evolution from './Evolution'
import Moves from './Moves'

const MOVESCREEN = [
  {
    "screen": "About",
    "txtColor": colors.colortxtMoveScreen,
  },
  {
    "screen": "Base Stats",
    "txtColor": colors.colortxtMoveScreen,
  },
  {
    "screen": "Evolution",
    "txtColor": colors.colortxtMoveScreen,
  },
  {
    "screen": "Moves",
    "txtColor": colors.colortxtMoveScreen,
  },
]

function Modal({ item }) {
  const [moveScreen, setMoveScreen] = useState('About')
  return (
    <View
      testID='detail_view_modal'
      style={{ padding: 5 }}
    >
      <View style={styles.viewTab}>
        {MOVESCREEN.map((itemMove, indexMove) => (
          <Button
            testID='detail_tab_modal'
            style={styles.buttonTab}
            key={indexMove.toString()}
            onPress={() => setMoveScreen(itemMove.screen)}
          >
            {
              itemMove.screen == moveScreen ?
                <Text testID='detail_txttab_modal' style={[styles.txtTab, { color: itemMove.txtColor }]}>
                  {`${itemMove.screen}`}
                </Text>
                :
                <Text testID='detail_txttab_modal' style={[styles.txtTab, { color: "#d9dee9" }]}>
                  {`${itemMove.screen}`}
                </Text>
            }
            {
              itemMove.screen == moveScreen ?
                <View testID='detail_ngang_modal' style={{ height: scale(1), width: scale(30), backgroundColor: 'blue' }} />
                :
                <View testID='detail_ngang_modal' style={{ height: scale(1), width: scale(30), backgroundColor: '#e1e5ed' }} />
            }
          </Button>
        ))}
      </View>
      <View style={styles.viewScreen}>
        {
          moveScreen == "About" ? <About item={item} />
            : moveScreen == "Base Stats" ? <BaseStats item={item} />
              : moveScreen == "Evolution" ? <Evolution item={item} />
                : <Moves item={item} />
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonTab: {
    margin: scale(9),
    paddingHorizontal: scale(10),
    paddingVertical: scale(3),
    alignItems: 'center',
    marginTop: scale(20),
    marginBottom: scale(2),
  },
  txtTab: {
    fontWeight: 'bold',
    fontSize: fontSize.fontSize13,
    marginTop: scale(10),
    marginBottom: scale(10),
  },
  viewScreen: {
    justifyContent: 'center',
  },
  viewTab: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
export default Modal


















// import React from 'react'
// import {View, Text} from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import routes from '../../../routes'

// const Top = createMaterialTopTabNavigator();

// import About from './About'
// import BaseStats from './BaseStats'
// import Evolution from './Evolution'
// import Moves from './Moves'

// export default function Modal() {
//   return (
//     <NavigationContainer
//       independent={true}
//     >
//       <Top.Navigator
//         headerMode="none"
//         initialRouteName={routes.ABOUT}
//       >
//         <Top.Screen name={routes.ABOUT} component={About} />
//         <Top.Screen name={routes.BASESTATS} component={BaseStats} />
//         <Top.Screen name={routes.EVOLUTION} component={Evolution} />
//         <Top.Screen name={routes.MOVES} component={Moves} />
//       </Top.Navigator>
//     </NavigationContainer>
//   )
// }


{/* <Button
          style={styles.buttonTab}
          onPress={() => setMoveScreen("About")}
        >
          <Text style={styles.txtTab}>
            {`About`}
          </Text>
        </Button>
        <Button
          style={styles.buttonTab}
          onPress={() => setMoveScreen("Base Stats")}
        >
          <Text style={styles.txtTab}>
            {` Base Stats`}
          </Text>
        </Button>
        <Button
          style={styles.buttonTab}
          onPress={() => setMoveScreen("Evolution")}
        >
          <Text style={styles.txtTab}>
            {` Evolution`}
          </Text>
        </Button>
        <Button
          style={styles.buttonTab}
          onPress={() => setMoveScreen("Moves")}
        >
          <Text style={styles.txtTab}>
            {`Moves`}
          </Text>
        </Button> */}