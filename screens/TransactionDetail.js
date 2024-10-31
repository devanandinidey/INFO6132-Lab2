// screens/TransactionDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Transaction Name:</Text>
      <Text style={styles.value}>{transaction.name}</Text>

      <Text style={styles.label}>Amount:</Text>
      <Text style={styles.value}>${transaction.amount}</Text>

      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{transaction.date}</Text>

      <Text style={styles.label}>Location:</Text>
      <Text style={styles.value}>{transaction.location}</Text>

      <Text style={styles.label}>Card Number:</Text>
      <Text style={styles.value}>{transaction.cardNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
});
