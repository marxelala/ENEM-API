import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text, ActivityIndicator, ScrollView } from 'react-native';
import Header from '@/src/components/header';
import Card from '@/src/components/card';
import { useGetdata } from '@/src/hooks';
import Loader from '@/src/components/loader';

export default function Content() {
  const { getEnem } = useGetdata();
  const [loading, setLoading] = useState(true);
  const [enem, setEnem] = useState<any[]>([]);

  const callGetData = async () => {
    try {
      const enemResponse = await getEnem();
      if (!enemResponse.error) {
        setEnem(enemResponse);
        setLoading(false);
      } else {
        console.error('Erro ao buscar dados:', enemResponse.error);
        setLoading(false);
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    callGetData();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={{ paddingLeft: 20 }}>
          <Header />
        </View>

        <View style={styles.card}>
          {loading ? (
            <Loader />
          ) : enem.length > 0 ? (
            <FlatList
              data={enem}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Card title={item.title} year={item.year} />
              )}
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            />
          ) : (
            <Text>Nenhum dado encontrado.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
  card: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
