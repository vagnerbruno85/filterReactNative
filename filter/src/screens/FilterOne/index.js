import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export default function filterOne() {
  // const [filter, setFilter] = useState(fruits);
  const [filterFruits, setFilterFruits] = useState('');
  let fruits = ['maçã', 'banana', 'uva', 'manga', 'laranja'];

  console.log('FILTER', filterFruits);
  function FilterItem(query) {
    return fruits.filter(function (el) {
      let frutasFiltradas = el.toLowerCase().indexOf(query.toLowerCase()) > -1;
      setFilterFruits(frutasFiltradas);
    });
  }

  // console.log('AN', FilterItem('an'));
  // console.log('MA', FilterItem('ma'));

  return (
    <View styles={styles.container}>
      <Text>Teste Filtrar Frutas</Text>

      {/* <Text>frutas: {filterFruits}</Text> */}
    </View>
  );
}
