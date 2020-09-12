import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';

const pwidth = Dimensions.get('window').width;
const pheight = Dimensions.get('window').height;

export default class App extends Component {
  state = {
    lat: null,
    long: null,
  };

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.482769399999995,
          longitude: 126.7496159,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 37.482769399999995, longitude: 126.7496159}}
          title={'sample'}
          description={'sample marker'}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: pwidth,
    height: pheight,
  },
});
