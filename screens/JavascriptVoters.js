import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const JavaScriptVoters = () => {
  const [total, setTotal] = useState([]);
  firestore()
    .collection('second')
    .onSnapshot(snapshot => {
      setTotal(snapshot.docs.map((doc, i) => doc.data()));
    });

  return (
    <View className="flex-1 bg-gray-900 items-center flex-col">
      {total?.map(({Name}, i) => (
        <View
          key={i}
          className="mx-5 felx flex-col shadow-black round-md text-left mt-2 pl-10 h-10 w-96 space-y-2">
          <View className= "flex flex-col my-2  ">
            <Text className="text-gray-400 text-lg  font-extrabold">
              {Name}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default JavaScriptVoters;
