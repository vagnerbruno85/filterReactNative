import React, {useState} from 'react';
import {StatusBar, View, ScrollView, TextInput, Text} from 'react-native';
import MOCK_DATA from '../../utils/MOCK_DATA.json';
import {styles} from './styles';

export function FilterTwo() {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.textPrimary}>PESQUISA DE NOMES</Text>
      <Text style={styles.textSecondary}>Usando mock com 1000 nomes</Text>
      <TextInput
        placeholder="Pesquisar..."
        onChangeText={setSearch}
        style={styles.input}
      />
      <ScrollView>
        {MOCK_DATA.filter(val => {
          if (search === '') {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        }).map((item, index) => (
          <Text key={index}>{item.first_name}</Text>
        ))}
      </ScrollView>
    </View>
  );
}
