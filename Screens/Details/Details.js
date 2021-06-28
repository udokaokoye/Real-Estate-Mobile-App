import React from 'react'
import { StyleSheet, Text, View, ImageBackground, StatusBar, StatusBarIOS, Platform, Button, Pressable  } from 'react-native'
import { ScrollView, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Ionicons, Feather} from '@expo/vector-icons'
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-navigation';
const Details = ({route, navigation}) => {
    const { data, id } = route.params;
    const dt = data.filter(house => house.id == id);
    
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <ImageBackground source={{uri: dt[0].img}} style={styles.imgContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Ionicons name='chevron-back-outline' size={30} />
                </TouchableOpacity>
                <BlurView tint={'dark'} intensity={115} style={styles.details}>
                    <Text style={styles.title}>{dt[0].title}</Text>
                    <View style={styles.detailsImgBottom}>
                        <View> 
                            <Text style={styles.location}><Ionicons name='location' size={19} /> {dt[0].location}</Text>
                            <Text style={styles.price}>${dt[0].price}</Text>
                        </View>
                        <View style={styles.loveIcon}><Ionicons name='heart' size={22} color='white' /></View>
                    </View>
                </BlurView>
            </ImageBackground>
        
        <Text style={styles.description}>{dt[0].description}</Text>

        <View style={styles.features}>
            <View style={styles.section1}>
               <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   <Ionicons name='bed' color='#7ecfdc' size={37} /> 
                    <Text style={styles.featureText}> 2</Text>
                </View>
                <Text style={styles.featureText2}>Bedrooms</Text>
            </View>
            <View style={styles.section2}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   <Ionicons name='bed' color='#7ecfdc' size={37} /> 
                    <Text style={styles.featureText}> 2</Text>
                </View>
                <Text style={styles.featureText2}>Bathrooms</Text>
            </View>
            <View style={styles.section3}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   <Ionicons name='square-outline' color='#7ecfdc' size={37} /> 
                    <Text style={styles.featureText}> 900</Text>
                </View>
                <Text style={styles.featureText2}>Square Feets</Text>
            </View>
        </View>

        <View style={styles.priceBuy}>
            <Text style={styles.price2}>${dt[0].price}</Text>
            <Pressable style={styles.buyNow}>
                <Text style={{color: 'white', fontSize: 18}}>Buy Now</Text>
            </Pressable>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: '100%',
        // backgroundColor: 'red',
        padding: 5,
        marginTop: StatusBar.currentHeight,
        // marginBottom: 80
    },
    imgContainer: {
        width: '100%',
        height: 550,
        resizeMode: 'cover',
        backgroundColor: 'teal',
        borderRadius: 15,
        overflow: 'hidden',
        // padding: 10
    },
    backBtn: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 40/2,
        // position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 5,
        top: 5,
        zIndex: 10,
        margin: 5
    },
    details: {
        width: '95%',
        height: 150,
        // backgroundColor: 'orange',
        position: 'absolute',
        bottom: 13,
        borderRadius: 19,
        alignSelf: 'center',
        padding: 15,
        overflow: 'hidden',
    },
    loveIcon: {
        width: 32,
        height: 32,
        backgroundColor: '#ff3c3f',
        borderRadius: 30/2,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    detailsImgBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 23,
        marginTop: 8,
        color: '#fff',
    },

    location: {
        fontSize: 15,
        marginTop: 8,
        color: '#fff',
    },

    price: {
        fontSize: 19,
        marginTop: 8,
        color: '#fff',
        fontWeight: 'bold'
    },
    description: {
        marginTop: 20,
        lineHeight: 25
    },
    features: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 10
    },
    featureText: {
        fontSize: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    featureText2: {
        fontSize: 20
    },
    priceBuy: {
        marginTop: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price2: {
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold'
    },
    buyNow: {
        width: 140,
        backgroundColor: '#35afc3',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9
    }

})
