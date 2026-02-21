import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F3C6E8',
    shadowColor: '#C46BCF',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    marginBottom: 14,
  },
});