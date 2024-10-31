import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from './screens/TransactionsList';
import TransactionDetail from './screens/TransactionDetail';
import Summary from './screens/Summary';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transactions List" component={TransactionsList} />
      <Stack.Screen name="Transaction Detail" component={TransactionDetail} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TRANSACTIONS" component={TransactionsStack} />
        <Tab.Screen name="SUMMARY" component={Summary} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
