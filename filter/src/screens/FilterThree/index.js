import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import MOCK_DATA from '../../utils/MOCK_DATA.json';

import {styles} from './styles';

export function FilterThree() {
  const [searchText, setSearchText] = useState('');
  const results = MOCK_DATA;

  const [list, setList] = useState(results);
  const handleOrderClick = () => {
    let newList = list ? [...list] : [...results];

    newList.sort((a, b) =>
      a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0,
    );
    // newList.sort((a, b) => {
    //   if (a.first_name > b.first_name) {
    //     return 1;
    //   } else {
    //     if (b.first_name > a.first_name) {
    //       return -1;
    //     } else {
    //       return 0;
    //     }
    //   }
    // });
    setList(newList);
  };

  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else {
      setList(
        results.filter(
          item =>
            item.first_name.toLowerCase().indexOf(searchText.toLowerCase()) >
            -1,
        ),
      );
    }
  }, [searchText]);
  return (
    <View style={styles.container}>
      <Text>FILTRO TRES</Text>
      <Text>Filtrando Listagem de Contatos</Text>

      <TextInput
        style={styles.input}
        placeholder="Pesquise uma pessoa"
        placeholderTextColor={'#888'}
        value={searchText}
        onChangeText={t => setSearchText(t)}
      />
      <TouchableOpacity onPress={handleOrderClick} style={styles.orderButtom}>
        <Text style={{color: '#222'}}>ORDENAR A-Z</Text>
      </TouchableOpacity>

      <FlatList
        data={list}
        style={styles.list}
        renderItem={({item}) => (
          <Text style={{color: 'white', marginTop: 10}}>{item.first_name}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
