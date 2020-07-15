import AsyncStorage from '@react-native-community/async-storage';

export const getData = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    return value;
  } catch (e) {
    console.log('error :>> ', e);
  }
};

export const storeData = async (name, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(name, jsonValue);
  } catch (e) {
    console.log('error :>> ', e);
  }
};
