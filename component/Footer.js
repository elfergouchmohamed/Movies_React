import React, { Component } from 'react'
import { View, Text,StyleSheet } from "react-native";

export default class Footer extends Component {
  render() {
    return (
        <View style={styles.footer}>
            <Text>This footer will be pushed to the bottom</Text>  
        </View>
    )
  }
  
}
const styles = StyleSheet.create({
    footer: {
      backgroundColor: "grey",
      padding: 40,
      height:10
    }
})
