import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
const VotesScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-gray-900 items-center flex-col">
      <TouchableOpacity onPress={()=>navigation.navigate('pythonvoters')}>
        <View className="m-5 flex shadow-black shadow-md border border-black round-md text-left justify-center  pl-10 h-16 w-96">
          <Text className="text-gray-400 text-lg  font-extrabold">Python</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('javascriptvoters')}>
        <View className="m-5 flex shadow-black shadow-sm border border-black round-md text-left justify-center  pl-10 h-16 w-96">
          <Text className="text-gray-400 text-lg  font-extrabold">
            Javascript
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('govoters')}>
        <View className="m-5 flex shadow-black shadow-sm border border-black round-md text-left justify-center  pl-10 h-16 w-96">
          <Text className="text-gray-400 text-lg  font-extrabold">Go</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VotesScreen;
