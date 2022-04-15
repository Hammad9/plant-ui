import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Dimensions ,Image} from 'react-native'
import React from 'react'
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import plants from '../consts/plants';
const width = Dimensions.get("screen").width / 2 - 30;
import { AntDesign } from '@expo/vector-icons';


const Home = ({navigation}) => {
  const catagories = ["Popular", "Organics", "Indoors", "Syntehtics"]

  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const ListCatagory = () => {
    return (

      <View style={styles.catagoriesStyle}>
        {
          catagories.map((item, index) => (
            <TouchableOpacity key={index}
              activeOpacity={0.6}
              onPress={() => setCategoryIndex(index)}
            >
              <Text key={index} style={[styles.catagoriesText, categoryIndex == index && styles.catagoryTextSelected]}>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  const Card = ({ plant }) => {
    return <TouchableOpacity onPress={()=>navigation.navigate('Details',plant)}>
    <View style={styles.cardItem}>
      <View style={{ alignItems: 'flex-end' }}>
        <View style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: plant.like ? 'rgba(245,42,42,0.2)' : 'rgba(0,0,0,0.2)'
        }}>
          <AntDesign
            name="heart"
            size={18}
            color={plant.like ? COLORS.red : COLORS.dark}
          />
        </View>
      </View>
      <View style={{height:100,alignItems:'center'}}>
          <Image style={{flex:1,resizeMode:'contain'}} source={plant.img} />
      </View>
      <View>
        <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,}}>{plant.name}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
        <Text style={{fontWeight:'bold',fontSize:18,}}>${plant.price}</Text>
        <Ionicons name="add-circle-sharp" size={24} color="green" />
      </View>
    </View>
    </TouchableOpacity>
    
  }

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }} >
      <View style={styles.header}>
        <View >
          <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Welcome to</Text>
          <Text style={{ fontSize: 38, fontWeight: 'bold', color: COLORS.green }}>Plant Shop</Text>
        </View>
        <Ionicons style={{ marginLeft: 60, marginTop: 30, }} name="cart" size={32} color="black" />
      </View>

      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" style={{ marginLeft: 20 }} size={25} color="black" />
          <TextInput style={styles.input} placeholder='Search' />
        </View>
        <View style={styles.btnSort}>
          <MaterialIcons name="sort" size={30} color="white" />
        </View>
      </View>
      <ListCatagory />
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => <Card plant={item} />}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    flex: 1,
  },
  btnSort: {
    marginLeft: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    borderRadius: 10,
  },
  catagoriesStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  catagoriesText: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
  },
  catagoryTextSelected: {
    borderBottomColor: 'green',
    color: 'green',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  cardItem: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    marginBottom: 20,
    padding: 15,
  },

})