import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';  // use o useRouter para navegação

interface CardProps {
  title: string;
  year: number;
}

const Card = ({ title, year }: CardProps) => {
  const router = useRouter();

  const handlePress = () => {
    // Ao clicar no card, redireciona para a página de detalhes com o 'id' como parâmetro
    router.push(`/detail/${title}`);  // Passando 'title' como identificador
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>Ano: {year}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default Card;
