import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useBoilerplateContext } from '../../../assets/context/Boilerplate/BoilerplateContext';

export default function Group() {
  const { data, updateData } = useBoilerplateContext();

  return (
    <View>
      <Text>Group chat:</Text>
      <Text>{data}</Text>
      <TouchableOpacity onPress={() => { updateData('Hello Lady!') }}>
        <Text>Change message</Text>
      </TouchableOpacity>
    </View>
  );
}
