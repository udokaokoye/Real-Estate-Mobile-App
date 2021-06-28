import React from 'react'
import { StyleSheet, Button, Text, View, TextInput, Dimensions, Image, Platform, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons} from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
const Home = ({navigation}) => {
    var carousel;
    const arr = [
                {
                    id: 1,
                     img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
                     title: 'Single-Family (Detached)',
                     location: 'Atlanta, Georgia',
                     price: '2,857,254',
                     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
                }, 
                {
                    id: 2,
                    img: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1060&q=80',
                    title: 'Mediterranean 15 sqr feet',
                    location: 'Cincinnati, Ohio',
                    price: '458,021',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
               },
               {
                    id: 3,
                    img: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80',
                    title: 'Midcentury Modern',
                    location: 'Dayton, Ohio',
                    price: '1,741,852',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
                },
                {
                    id: 4,
                    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
                    title: 'Split-Level',
                    location: 'Boston, Masachusset',
                    price: '1,258,789',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
            },
            {
                    id: 5,
                    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
                    title: 'French Country',
                    location: 'Huston, Texas',
                    price: '3,100,058',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
        }
            ];
    const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

let renderItem = ({item,index}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', {
          data: arr,
          id: item.id
      })} style={styles.card}>
          <View style={styles.bannerImg}>
              <Image style={styles.img} source={{uri: item.img}}/>
          </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.bottomCardTab}>
            <View style={styles.locationPrice}>
            <Text style={styles.location}><Ionicons name='location' size={15} /> {item.location}</Text>
            <Text style={styles.price}>${item.price}</Text>
            </View>
            <View style={styles.loveIcon}><Ionicons name='heart' size={22} color='white' /></View>
        </View>
      </TouchableOpacity>

    )
}
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <View style={styles.nav}>
                    <View style={styles.locationContainer}>
                        <Ionicons name="location" size={25} color="black"  />
                        <Text style={styles.locationText}>California, USA <Ionicons name='chevron-down-outline' size={25} /></Text>
                    </View>
                    <Ionicons name="notifications" size={25} color="black" />
                </View>
                
                <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={25} color="black" />
                <TextInput style={styles.searchInput} placeholder='Search' />
                </View>

                <View  style={styles.cardSlider}>
                <Carousel
                    ref={(c) => {carousel = c; }}
                    data={arr}
                    renderItem={renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={400}
                    activeSlideOffset={50}
                />
                </View>
                
                
                <View style={styles.recommendedContainer}>
                    <View style={styles.recommendedBar}>
                        <Text style={styles.recommendedTitle}>Recommended</Text>
                        <Text style={styles.recommendedViewAll}>View all</Text>
                    </View>
                    {arr.slice(0, 5).map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Details', {
                                data: arr,
                                id: item.id
                            })} key={index} style={styles.recommendedCard}>
                                <View style={styles.recommendedImg}>
                                    <Image source={{uri: item.img}} style={{...styles.img, borderRadius: 20}} />
                                </View>
                                <View style={{width: '60%', padding: 5, marginTop: 15, marginLeft: 2}}>
                                <Text style={styles.recommendedtitle}>{item.title}</Text>
                                <View style={styles.recommendedbottomCardTab}>
                                    <View style={styles.recommendedlocationPrice}>
                                    <Text style={styles.recommendedlocation}><Ionicons name='location' size={15} /> {item.location}</Text>
                                    <Text style={styles.recommendedprice}>$ {item.price}</Text>
                                    </View>
                                    <View style={styles.recommendedloveIcon}><Ionicons name='heart' size={18} color='white' /></View>
                                </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                
                {/* <Button title="Second Page" onPress={() => navigation.navigate('Third')} /> */}
            </SafeAreaView>
        </ScrollView>
    )
}


export default Home

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f7fdfd',
        flex: 1,
        marginBottom: 80
    },
    searchContainer: {
        width: '80%',
        backgroundColor: '#F2F7FB',
        alignSelf: 'center',
        borderRadius: 18,
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        padding: 10,
        marginTop: 20
        
    },
    searchInput: {
        padding: 12,
        width: '100%'
    },
    nav: {
        // backgroundColor: 'red',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        overflow: 'hidden',
        padding: 20,
    },
    locationContainer: {
        // backgroundColor: 'blue',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationText: {
        fontSize: 22,
        display: 'flex',
        alignItems: 'center',
        marginLeft: 10
    },
    cardSlider: {
        width: '100%',
        height: 'auto',
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        // padding: 2,
    },
    card: {
        // width: '100%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 400,
        padding: 15,
        marginVertical: 15,
        marginLeft: 25,
        marginRight: 25,
        // overflow: 'hidden',
        elevation: 5,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: 0, width: 3},
                shadowOpacity: 0.2,
                shadowRadius: 7
            },
            android: {
                elevation: 3
            }
        })
    },

    bannerImg: {
        width: '100%',
        height: '70%',
        // backgroundColor: 'blue',
        borderRadius: 25,
        overflow: 'hidden'
    },
    
    img: {
        width: '100%',
        height: '100%'
    },

    title: {
        fontSize: 23,
        marginTop: 8
    },

    location: {
        fontSize: 15,
        marginTop: 8
    },

    price: {
        fontSize: 19,
        marginTop: 8,
        color: '#31abbc',
        fontWeight: 'bold'
    },

    bottomCardTab: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },

    loveIcon: {
        width: 32,
        height: 32,
        backgroundColor: '#ff3c3f',
        borderRadius: 30/2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    recommendedContainer: {
        width: '100%',
        height: 'auto',
        // backgroundColor: 'red',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    recommendedBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    recommendedTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    recommendedViewAll: {
        fontSize: 18
    },
    recommendedCard: {
        marginTop: 22,
        width: '100%',
        height: 130,
        borderRadius: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        // overflow: 'hidden',
        elevation: 5,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: 0, width: 3},
                shadowOpacity: 0.1,
                shadowRadius: 5
            },
            android: {
                elevation: 3
            }
        })
    },
    recommendedImg: {
        width: '40%',
        height: '100%',
        // backgroundColor: 'yellow'
    },
    recommendedbottomCardTab: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'teal'
    },
    recommendedtitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    recommendedlocation: {
        marginTop: 10,
        fontSize: 16
    },
    recommendedprice: {
        marginTop: 10,
        fontSize: 18,
        color: '#31abbc',
    },
    recommendedloveIcon: {
        width: 29,
        height: 27,
        backgroundColor: '#ff3c3f',
        borderRadius: 29/2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        alignSelf: 'flex-end',
        
    },

})
