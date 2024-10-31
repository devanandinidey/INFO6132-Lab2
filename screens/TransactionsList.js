// screens/TransactionsList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const transactions = [
  { id: '1', name: 'Groceries', amount: 50.0, date: '2024-10-28', location: 'Walmart', cardNumber: '**** **** **** 1234' },
  { id: '2', name: 'Rent', amount: 1200.0, date: '2024-10-01', location: 'Landlord', cardNumber: '**** **** **** 5678' },
  { id: '3', name: 'Subscription', amount: 10.0, date: '2024-10-20', location: 'Netflix', cardNumber: '**** **** **** 9101' },
  { id: '4', name: 'Gas', amount: 40.0, date: '2024-10-10', location: 'Shell', cardNumber: '**** **** **** 1122' },
  { id: '5', name: 'Utilities', amount: 150.0, date: '2024-10-05', location: 'City Services', cardNumber: '**** **** **** 3344' },
  { id: '6', name: 'Dining', amount: 60.0, date: '2024-10-15', location: 'McDonald\'s', cardNumber: '**** **** **** 5566' },
  { id: '7', name: 'Shopping', amount: 200.0, date: '2024-10-25', location: 'Amazon', cardNumber: '**** **** **** 7788' },
  { id: '8', name: 'Insurance', amount: 300.0, date: '2024-10-18', location: 'AllState', cardNumber: '**** **** **** 9900' },
  { id: '9', name: 'Sports', amount: 80.0, date: '2024-10-22', location: 'Cinema', cardNumber: '**** **** **** 1123' },
  { id: '10', name: 'Charity', amount: 100.0, date: '2024-10-30', location: 'Local Charity', cardNumber: '**** **** **** 4455' },
];

export default function TransactionsList() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>${item.amount}</Text>
      <Text style={styles.itemText}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});
