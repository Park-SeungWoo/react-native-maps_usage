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
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const pwidth = Dimensions.get('window').width;
const pheight = Dimensions.get('window').height;

export default class App extends Component {
  state = {
    lat: 10, // dummy value
    long: 10, //dummy value
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
        // provider={PROVIDER_GOOGLE}
        region={{
          latitude: this.state.lat,
          longitude: this.state.long,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}>
        <Marker
          draggable
          coordinate={{latitude: this.state.lat, longitude: this.state.long}}
          title={'sample'}
          description={'sample marker'}
        />
        <Marker
          draggable
          coordinate={{
            latitude: this.state.lat - 0.001,
            longitude: this.state.long - 0.001,
          }}
          title={'sample2'}
          description={'sample marker2'}
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
