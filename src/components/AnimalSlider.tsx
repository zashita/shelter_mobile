import React, {useState} from 'react';
import {Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";

export interface AnimalSliderProps{
    sliderActive: boolean;
    setSliderActive: any;
}


const images = [
    require('../assets/img/examplecard.png'),
    require('../assets/img/examplecard.png'),
    require('../assets/img/examplecard.png'),
]

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const AnimalSlider:React.FC<AnimalSliderProps> = ({sliderActive, setSliderActive}) => {
    const [ImgActive, setImgActive] = useState(0)

    const onChange = (nativeEvent: any) =>{
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if(ImgActive !== slide){
                setImgActive(slide)
            }
        }
    }
    return (
        <SafeAreaView
            style = {styles.container}
            onTouchEnd={() => setSliderActive(false)}
        >
            <View
                style={styles.wrap}
                onTouchEnd={e => e.stopPropagation()}
            >
                <ScrollView
                 onScroll={({nativeEvent})=> onChange(nativeEvent)}
                 showsHorizontalScrollIndicator={false}
                 pagingEnabled={true}
                 horizontal={true}
                 style={styles.wrap}
                >
                    {
                        images.map((image, index)=>{
                            return(
                                <Image
                                key = {index}
                                resizeMode={'stretch'}
                                style={styles.image}
                                source={image}
                                />
                            )
                            }
                        )
                    }
                </ScrollView>
                <View style = {styles.wrapDot}>
                    {
                        images.map((image, index)=>{
                            return(
                                <Text
                                    key = {index}
                                    style={ImgActive === index? styles.dotActive : styles.dotInactive}
                                >
                                    ●
                                </Text>
                            )
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position: "absolute",
        width: WIDTH,
        height: HEIGHT,

    },
    wrap:{
        width: WIDTH - 20,
        height: HEIGHT* 0.75,
        alignSelf: "center",
        borderRadius: 20
    },
    image: {
        width: WIDTH - 20,
        height: HEIGHT* 0.75,
        alignSelf: "center",
        marginTop: HEIGHT * 0.25,
        borderRadius: 20
    },
    wrapDot:{
        position: 'absolute',
        bottom: 20,
        flexDirection: "row",
        alignSelf: "center",
        textAlignVertical: "center"
    },
    dotActive: {
        color: '#CDCDCD',
        fontSize: 12,
        marginRight: 3,
    },
    dotInactive:{
        color: '#D9D9D9',
        fontSize: 7,
        marginTop: 3,
        marginRight: 3,
    }

})

export default AnimalSlider;
