import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductDetail({navigation,route}) {
  const { product } = route.params;
  const [like,setLike] = useState(product.liked);
  const toggleLike = () => {
    const newLike = !like;
    setLike(newLike);
    updateAPI(product.id,newLike) ;
  };
  const updateAPI = (id, updatedData) => {
    fetch(`https://66faa7eaafc569e13a9caa55.mockapi.io/data/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ liked: updatedData}),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Error ${response.status}: ${text}`);
          });
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.discount}>15% OFF | {product.price}$</Text>
        <Text style={styles.originalPrice}>449$</Text>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          It is a very important form of writing as we write almost everything in paragraphs, 
          be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={toggleLike} >
          <Icon name={like ? 'heart' : 'heart-o'} size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageContainer: {
    backgroundColor: '#FFFACD', // Màu vàng nhạt
    alignItems: 'center',
    padding: 10,
  },
  image: {
    height: 200,
    width: 300,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discount: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
  originalPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
    padding: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  addButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
