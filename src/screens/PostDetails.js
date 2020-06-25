import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const PostDetails = () => {
  return (
    <View style={styles.container}>
      <Text>This PostDetails page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PostDetails;
