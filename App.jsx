import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import Main from './Main';

export default function App() {
  return (
    <View style={{  justifyContent: 'center', alignItems: 'center',paddingVertical: Platform.OS === 'android' ? 40 : 0 }}>
      <SafeAreaView >
        <Text>VIKASH ECOM APP</Text>
        <Main/>
      </SafeAreaView>
    </View>
  );
}

