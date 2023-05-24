import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {Circle, Marker, YaMap} from "react-native-yamap";
import FilterSVG from "../assets/img/FiltrIconWhite.svg";
import {Button, Text} from "react-native-paper";
import Wrapper from "./Wrapper";
import TypeFilters from "./TypeFilters";
import SexFilters from "./SexFilters";
import AgeFilters from "./AgeFilters";
import OtherFilters from "./OtherFilters";
import {IFiltersProps} from "../screens/Filters";
import { Geocoder } from 'react-native-yamap';
import animals from "../store/Animals";

const API_KEY = '86c3d98a-7c00-42a5-87a1-c3e9997cc908'
const GEO_KEY = 'c3214d53-f6bf-41d6-9155-9e71c9a69ce6'
YaMap.init(API_KEY);

Geocoder.init(GEO_KEY);

interface Point {
    lat: Number;
    lon: Number;
}

const Map = () => {
    const [geo, setGeo] = useState({lat: 0, lon: 0})
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        animals.setGeoCode(`Минск, ${animals.currentAnimal.address}`).then(promise => {
            setLoading(false)
        })
    }, [])



return(

    <View style={styles.container}>
        {
            loading? <View></View>:
                <YaMap
                    initialRegion={{
                        lat: animals.lat,
                        lon: animals.lon,
                        zoom: 16.3
                    }}
                    showUserPosition={true}
                    rotateGesturesEnabled={false}
                    nightMode={false}
                    style = {{width: '100%', height: 300, borderRadius: 10, borderWidth: 1, borderStyle: 'solid', borderColor: '#000', maxHeight: 250}}
                >
                    <Circle
                        center={{lat: animals.lat, lon: animals.lon}}
                        radius={15}
                        fillColor={'#FF0000'}
                        strokeColor={'#FF0000'}
                        strokeWidth={4}
                        zIndex={5000}
                    />



                </YaMap>
        }


    </View>

);
};
export default Map;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});


