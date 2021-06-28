import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Third = ({navigation}) => {
    return (
        <View>
            <Text>Third Screen</Text>
            <Button title='Back' onPress={() => navigation.navigate("Home")} />
        </View>
    )
}

export default Third

const styles = StyleSheet.create({})
