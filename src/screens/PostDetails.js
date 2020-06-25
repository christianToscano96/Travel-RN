import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-ionicons';

const PostDetails = ({navigation}) => {
  const image = {
    uri: 'https://images.clarin.com/2018/05/13/H172xGP0M_720x0__1.jpg',
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
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
      >
        <Text style={styles.tagline}>Descubre Las Yungas</Text>
        <Text style={styles.placeme}>
          El mejor lugar para explorar del Paìs
        </Text>

        <TouchableOpacity onPress={goToHome}
          style={{
            position: 'absolute',
            left: 20,
            top: 30,
            backgroundColor: '#ff6200',
            padding: 10,
            width: 45,
            borderRadius: 40,
          }}>
          <Icon name="arrow-back" size={24} color="#fff" style={{left: 5}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
            top: 30,
            backgroundColor: '#ff6200',
            padding: 10,
            width: 43,
            borderRadius: 40,
          }}>
          <Icon name="heart" size={24} color="#fff" style={{left: 2}} />
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity style={styles.bookTicketbtn}>
        <Text style={styles.bookTicketText}>Reserva ahora</Text>
      </TouchableOpacity>

      <ScrollView style={{backgroundColor: 'white'}}>
        <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
          Sobre el lugar
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 14,
            fontWeight: 'normal',
            justifyContent: 'flex-start',
            textAlign: 'justify',
            lineHeight: 26,
            opacity: 0.5,
          }}>
          Yungas o yunga son regiones o ecorregiones de bosque andino y selva de
          montaña a lo largo del flanco oriental de los Andes centrales.
          Constituye una ecorregión global, se localiza desde el norte del Perú,
          atraviesa Bolivia y llega hasta el norte de Argentina y se caracteriza
          por ser una región biogeográfica longitudinal de bosque de montaña,
          nuboso, lluvioso y tropical.
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 14,
            fontWeight: 'normal',
            justifyContent: 'flex-start',
            textAlign: 'justify',
            lineHeight: 26,
            opacity: 0.5,
          }}>
          Si se amplía la definición para incluir al Bosque andino del norte, se
          puede afirmar que la región se extiende hasta Colombia y Venezuela.
          Hay amplitud de conceptos, pero por lo general se considera desde una
          altitud de 300 o 600 m s. n. m. hasta los 3000 o 3800 m s. n. m.
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 14,
            fontWeight: 'normal',
            justifyContent: 'flex-start',
            textAlign: 'justify',
            lineHeight: 26,
            opacity: 0.5,
          }}>
          En las partes bajas se caracteriza por tener una vegetación de bosque
          denso, húmedo y perennifolio que rivaliza en biodiversidad con la
          selva tropical amazónica, pero en las partes altas la selva cede paso
          a la serranía de bosque caducifolio, también llamado bosque enano,
          donde predominan los arbustos y pastizales.
        </Text>

        <View>
          <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
            Lugares sugeridos
          </Text>
          <FlatList
            data={gallery}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <View style={{paddingBottom: 40}}>
                  <Image
                    source={item.image}
                    style={{
                      width: 150,
                      height: 150,
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
                </View>
              );
          }}
          />
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
  image: {
    height: 380,
    justifyContent: 'flex-end',
  },
  tagline: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginVertical: 4,
  },
  placeme: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  bookTicketbtn: {
    position: 'absolute',
    right: 12,
    top: 350,
    backgroundColor: '#ff6200',
    padding: 16,
    borderRadius: 40,
    elevation: 5,
  },
  bookTicketText: {
    color: 'white',
    fontSize: 14,
  },
});

export default PostDetails;
