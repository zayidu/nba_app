import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class NewsComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>News</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
});

export default NewsComponent;
