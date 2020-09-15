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
import Geolocation from '@react-native-community/geolocation';

const pwidth = Dimensions.get('window').width;
const pheight = Dimensions.get('window').height;

export default class App extends Component {
  state = {
    lat: 32.1111, // dummy value
    long: 122.121212, //dummy value
  };

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        console.log(this.state.lat, this.state.long);
      },
      (error) => {
        // console.log(error.code, error.message);
        console.log(error, 'error');
      },
    );
  }

  render() {
    return (
      <MapView
        style={styles.map}
        region={{
          latitude: this.state.lat,
          longitude: this.state.long,
          latitudeDelta: 0.9,
          longitudeDelta: 0.9,
        }}>
        <Marker
          draggable
          coordinate={{latitude: this.state.lat, longitude: this.state.long}}
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
