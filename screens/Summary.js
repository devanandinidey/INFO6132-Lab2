// screens/Summary.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

// Define a color palette based on one color (e.g., blue)
const baseColor = '#007bff'; // Base blue color
const shades = [
  `${baseColor}66`, // Light Shade (40% opacity)
  `${baseColor}99`, // Medium Light Shade (60% opacity)
  `${baseColor}cc`, // Medium Shade (80% opacity)
  `${baseColor}`,    // Base Shade (100% opacity)
  `${baseColor}ff`,  // Dark Shade (100% opacity)
];

// Sample transaction categories
const categories = [
  { name: 'Groceries', amount: 150 },
  { name: 'Rent', amount: 1200 },
  { name: 'Utilities', amount: 200 },
  { name: 'Dining', amount: 300 },
  { name: 'Sports', amount: 150 },
  { name: 'Insurance', amount: 100 },
];

// Calculate total expenses
const totalExpenses = categories.reduce((sum, category) => sum + category.amount, 0);

// Prepare data for the PieChart using the defined shades
const pieData = categories.map((category, index) => ({
  name: category.name,
  amount: category.amount,
  color: shades[index % shades.length], // Cycle through the shades
  legendFontColor: '#7F7F7F',
  legendFontSize: 15,
}));

// Calculate percentages
const getPercentage = (amount) => ((amount / totalExpenses) * 100).toFixed(1) + '%';

export default function Summary() {
  // Prepare the labels for the grid view
  const labelData = pieData.map(category => ({
    name: category.name,
    percentage: getPercentage(category.amount),
    color: category.color,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Expenses for the Month</Text>
        <Text style={styles.cardValue}>${totalExpenses}</Text>
      </View>

      <Text style={styles.chartTitle}>Expenses by Category</Text>
      <View style={styles.chartContainer}>
        <PieChart
          data={pieData}
          width={350} // Set the width to fit on the page
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              marginVertical: 8,
              borderRadius: 16,
            },
          }}
          accessor="amount"
          backgroundColor="transparent"
          
          absolute // Show absolute values inside the chart
        />
      </View>

      <Text style={styles.labelTitle}>Category Percentages</Text>
      <FlatList
        data={labelData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.labelItem}>
            <View style={[styles.colorBox, { backgroundColor: item.color }]} />
            <Text style={styles.labelText}>{`${item.name}: ${item.percentage}`}</Text>
          </View>
        )}
        numColumns={2} // Set to 2 for grid view
        columnWrapperStyle={styles.columnWrapper}
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
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  labelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flex: 1,
  },
  colorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  labelText: {
    fontSize: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
