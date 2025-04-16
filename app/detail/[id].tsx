import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router'; 
import { useGetdata } from '@/src/hooks'; 
import Loader from '@/src/components/loader';

const Detail = () => {
  const { getEnem } = useGetdata();
  const { id } = useLocalSearchParams(); 

  const [enemDetail, setEnemDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.log('ID não encontrado.');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getEnem();
        console.log(response);  
        const data = response.find((item: any) => item.title === id);  

        if (data) {
          setEnemDetail(data);
        } else {
          console.log('Detalhes não encontrados para o ID:', id);
        }
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);  

  if (loading) {
    return <Loader />
  }

  if (!enemDetail) {
    return <Text>Detalhes não encontrados.</Text>;
  }

  return (
    <View style={styles.containerMain}>
      <View style={styles.back}>
        <Link href={'../content'}>
        <Image 
        source={require('@/assets/images/back.svg')}
        />
        </Link>
      </View>
      <View style={styles.cardContainer}>
      <Text style={styles.title}>{enemDetail.title} - {enemDetail.year}</Text>

      <Text style={styles.description}>Disciplinas:</Text>
      {Array.isArray(enemDetail.disciplines) && enemDetail.disciplines.length > 0 ? (
        enemDetail.disciplines.map((discipline: { label: string; value: string }, index: number) => (
          <Text key={index} style={styles.text}>{discipline.label}</Text>  
        ))
      ) : (
        <Text style={styles.text}>Nenhuma disciplina disponível.</Text>
      )}

      <Text style={styles.description}>Idiomas:</Text>
      {Array.isArray(enemDetail.languages) && enemDetail.languages.length > 0 ? (
        enemDetail.languages.map((language: { label: string; value: string }, index: number) => (
          <Text key={index} style={styles.text}>{language.label}</Text>  
        ))
      ) : (
        <Text style={styles.text}>Nenhum idioma disponível.</Text>
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', 
    borderRadius: 10,          
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.1,     
    shadowRadius: 5,           
    elevation: 5,              
    marginHorizontal: 15,     
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,          
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',        
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',             
  },
  back:{
    position:'absolute',
    left:0,
    top:0
  }
});

export default Detail;
