import React, {useState} from 'react';
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
import Icon from 'react-native-ionicons';

const Home = ({navigation}) => {
  const image = {
    uri: 'https://injujuy.info/uploads/jujuy-turismo-interna-1.jpg',
  };
  const recentImage = {
    uri:
      'https://www.tucumanalas7.com.ar/u/fotografias/m/2018/2/15/f608x342-75143_104866_13.jpg',
  };
  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          'https://www.visitingargentina.com/wp-content/uploads/2018/01/jujuy.jpg',
      },
      title: 'Tilcara',
      key: '1',
    },
    {
      image: {
        uri:
          'https://www.paginacentral.com.ar/wp-content/uploads/2018/04/Yungas.jpg',
      },
      title: 'Yungas',
      key: '2',
    },
    {
      image: {
        uri:
          'https://descubrirturismo.com/wp-content/uploads/2019/05/salinas-grandes-41-principal-11.jpg',
      },
      title: 'Salinas',
      key: '3',
    },
    {
      image: {uri: 'https://pbs.twimg.com/media/C9xoR6aXgAEqiwU.jpg'},
      title: 'Ciudad De San Salvador',
      key: '4',
    },
  ]);

  const goToDetails = () => {
    navigation.navigate('PostDetails');
  };

  return (
    <View style={{flexGrow: 1, height: '100%'}}>
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
            <Icon name="search" style={styles.iconSearch} />
            <Icon
              name="menu"
              size={26}
              color={'#fff'}
              style={{position: 'absolute', top: -120, left: 16}}
            />
            <Icon
              name="notifications-outline"
              size={26}
              color={'#fff'}
              style={{position: 'absolute', top: -120, right: 30}}
            />
          </View>
        </ImageBackground>
      </View>

      <ScrollView>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Top Lugares</Text>
        </View>
        <View style={{paddingVertical: 20, paddingLeft: 16}}>
          <FlatList
            data={gallery}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={goToDetails}>
                  <Image
                    source={item.image}
                    style={{
                      width: 150,
                      height: 250,
                      marginRight: 8,
                      borderRadius: 10,
                    }}
                  />
                  <View style={styles.imageOverlay} />
                  <Icon
                    name="heart"
                    size={18}
                    color="white"
                    style={styles.imageLocationIcons}
                  />
                  <Text style={styles.imageText}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{marginBottom: 60}}>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>
              Lugares de Encuentro
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#ff6200'}}>
              Ver todos
            </Text>
          </View>
          <Image
            source={recentImage}
            style={{
              width: '92%',
              height: 250,
              borderRadius: 10,
              alignSelf: 'center',
            }}
          />
          <View style={{position: 'absolute', bottom: 0, padding: 16}}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="heart"
                color="white"
                size={22}
                style={{marginLeft: 10, position: 'relative', top: 4}}
              />
              <Text
                style={{fontSize: 22, color: 'white', fontWeight: 'normal', marginBottom: 10, marginHorizontal: 10}}>
                Carnaval de Humahuaca
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontWeight: 'normal',
                marginBottom: 4,
                marginLeft: 16,
              }}>
              Veni a descubris los lugares donde podras disfrutar del Gran
              Carnaval Norteño
            </Text>
          </View>
        </View>
      </ScrollView>
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
    paddingTop: 120,
    paddingLeft: 16,
  },
  userGreet: {
    marginTop: 70,
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: '#ff6200',
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
    marginTop: 10,
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
  iconSearch: {
    color: '#666',
    fontSize: 24,
    position: 'absolute',
    top: 30,
    right: 60,
    opacity: 0.6,
  },
  imageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.4,
  },
  imageLocationIcons: {
    position: 'absolute',
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  imageText: {
    position: 'absolute',
    color: 'white',
    marginTop: 4,
    fontSize: 18,
    left: 30,
    bottom: 10,
    fontWeight: 'bold',
  },
});

export default Home;
