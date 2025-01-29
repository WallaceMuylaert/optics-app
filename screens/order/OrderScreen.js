import React from 'react';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import createStyles from '../../src/styles/styles';


const OrderScreen = () => {
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Pedidos</Text>
      <Text style={styles.subtitle}>Aqui você pode visualizar e gerenciar seus pedidos</Text>
    </View>
  );
};

export default OrderScreen;
