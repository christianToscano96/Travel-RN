import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

const Home = () => {
  const image = {
    uri: 'https://injujuy.info/uploads/jujuy-turismo-interna-1.jpg',
  };
  return (
    <View>
      <View>
        <ImageBackground
          source={image}
          style={{width: '100%', height: 270}}
          imageStyle={{borderBottomRightRadius: 65}}>
          <View style={styles.DarkOverlay} />
          <View style={styles.searchContainer}>
            <Text style={styles.userGreet}>Holaaa!</Text>
            <Text style={styles.userText}>¿Conoces realmente Jujuy?</Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="Busca tu destino"
              placeholderTextColor="#666"
            />
          </View>
        </ImageBackground>
      </View>
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
  DarkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: '#000',
    opacity: 0.4,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  userGreet: {
    marginTop: 50,
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: '#DB810C',
    position: 'absolute',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    borderBottomRightRadius: 20,
  },
  userText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: '90%',
  },
});

export default Home;
