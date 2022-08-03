import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import {RadioButton} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {ProgressBar} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {
  const navigation = useNavigation();
  const increment = firestore.FieldValue.increment(1);
  const [value, setValue] = useState(null);
  const [Name, setName] = useState('');
  const [item, setItem] = useState(1);
  const [First, setFirst] = useState(1);
  const [progress1, setProgress1] = useState(1);
  const [progress2, setProgress2] = useState(1);
  const [progress3, setProgress3] = useState(1);
  const [error, setError] = useState(false);

  const [Second, setSecond] = useState(1);
  const [Third, setThird] = useState(1);

  useEffect(() => {
    firestore()
      .collection('counter')
      .doc('1')
      .get()
      .then(querySnapshot => {
        setItem(
          querySnapshot.data().first +
            querySnapshot.data().second +
            querySnapshot.data().third,
        );
        setFirst(querySnapshot.data().first);
        setSecond(querySnapshot.data().second);
        setThird(querySnapshot.data().third);
      })
      .then(() => {
        setProgress1(First / item);
        setProgress2(Second / item);
        setProgress3(Third / item);
      });
  }, [voteHandler, First, Second, Third, progress1, progress2, progress3]);

  const voteHandler = async () => {
    if (Name !== '' && value !== null) {
      await firestore().collection(`${value}`).add({value, Name});

      if (value === 'first') {
        await firestore()
          .collection('counter')
          .doc('1')
          .update({first: increment})
          .then(
            firestore()
              .collection('counter')
              .doc('1')
              .get()
              .then(querySnapshot => {
                setItem(
                  querySnapshot.data().first +
                    querySnapshot.data().second +
                    querySnapshot.data().third,
                );
                setFirst(querySnapshot.data().first);
                setSecond(querySnapshot.data().second);
                setThird(querySnapshot.data().third);
              })
              .then(() => {
                setProgress1(First / item);
                setProgress2(Second / item);
                setProgress3(Third / item);
              }),
          );
      }

      if (value === 'second') {
        firestore()
          .collection('counter')
          .doc('1')
          .update({second: increment})
          .then(
            firestore()
              .collection('counter')
              .doc('1')
              .get()
              .then(querySnapshot => {
                setItem(
                  querySnapshot.data().first +
                    querySnapshot.data().second +
                    querySnapshot.data().third,
                );
                setFirst(querySnapshot.data().first);
                setSecond(querySnapshot.data().second);
                setThird(querySnapshot.data().third);
              })
              .then(() => {
                setProgress1(First / item);
                setProgress2(Second / item);
                setProgress3(Third / item);
              }),
          );
      }

      if (value === 'third') {
        firestore()
          .collection('counter')
          .doc('1')
          .update({third: increment})
          .then(
            firestore()
              .collection('counter')
              .doc('1')
              .get()
              .then(querySnapshot => {
                setItem(
                  querySnapshot.data().first +
                    querySnapshot.data().second +
                    querySnapshot.data().third,
                );
                setFirst(querySnapshot.data().first);
                setSecond(querySnapshot.data().second);
                setThird(querySnapshot.data().third);
              })
              .then(() => {
                setProgress1(First / item);
                setProgress2(Second / item);
                setProgress3(Third / item);
              }),
          );
      }
      setError(false);
      setName('');
      setValue(null);
    } else {
      setError(true);
    }
  };
  return (
    <View className="bg-gray-900 flex-1">
      <View className="">
        <View className="flex flex-row  items-center">
          <Text className="text-lg text-white">Enter Name:</Text>
          <TextInput
            value={Name}
            onChangeText={text => {
              setName(text);
            }}
            mode="outlined"
            label="Name"
            theme={{
              colors: {
                text: 'white',
                placeholder: 'white',
                primary: 'white',
              },
            }}
            className="bg-gray-900 m-5 flex-1"
          />
        </View>
        <Text className="text-white">
          What Programming language do you use during the coding interview?
        </Text>
      </View>
      <View>
        <RadioButton.Group
          onValueChange={value => {
            setValue(value);
          }}
          value={value}>
          <RadioButton.Item
            label="Python"
            value="first"
            theme={{colors: {text: 'white'}}}
            uncheckedColor="white"
          />
          <RadioButton.Item
            label="JavaScript"
            value="second"
            theme={{colors: {text: 'white'}}}
            uncheckedColor="white"
          />
          <RadioButton.Item
            label="Go"
            value="third"
            theme={{colors: {text: 'white'}}}
            uncheckedColor="white"
          />
        </RadioButton.Group>
      </View>
      <View className="flex flex-row justify-between ">
        <Text
          className="max-w-xs w-32 ml-2 mr-2 text-white underline underline-offset-4"
          onPress={() => navigation.navigate('voters')}>
          View Votes
        </Text>
        <Button
          mode="contained"
          className="max-w-xs w-24 mr-2"
          onPress={voteHandler}>
          Vote
        </Button>
      </View>
      {error ? (
        <Text className="text-white text-base">please enter name and select a vote</Text>
      ) : (
        <Text></Text>
      )}
      <View className=" flex flex-row items-center mt-24">
        <View className="">
          <Text className="text-white text-lg">Python </Text>
          <Text className="text-white text-lg">Javascript </Text>
          <Text className="text-white text-lg">Go </Text>
        </View>
        <View className="flex flex-col ">
          <ProgressBar progress={progress1} className="w-64 h-6 m-1 relative" />

          <ProgressBar progress={progress2} className="w-64 h-6 m-1" />
          <ProgressBar progress={progress3} className="w-64 h-6 m-1" />
        </View>
        <View className="flex flex-col space-y-3">
          <Text className="text-white text-md">
            {(progress1 * 100).toFixed(2)}%
          </Text>
          <Text className="text-white text-md">
            {(progress2 * 100).toFixed(2)}%
          </Text>
          <Text className="text-white text-md">
            {(progress3 * 100).toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
