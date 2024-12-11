import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../user/lib/hooks/use-navigation.tsx';
import {useUser} from '../../user';
import React, {useEffect} from 'react';

export const WelcomePageOne = () => {
  const {user, saveUser, isLoading} = useUser();
  const navigation = useNavigation();
  useEffect(() => {
    if (user?.hasSeenOnboardingOne === true) {
      return navigation.navigate(ScreenName.WelcomePageTwo);
    }
  }, [user?.hasSeenOnboardingOne]);
  const handleNextPage = async () => {
    await saveUser({...user, hasSeenOnboardingOne: true});
    navigation.navigate(ScreenName.WelcomePageTwo);
  };
  console.log('User', user);
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/background.png')} style={{position:'absolute', width:'100%', height: '100%'}} />
      <View style={styles.content_container}>
        <SafeAreaView style={styles.content}>
          <Image source={require('../../assets/images/logo_fish.png')} />
          <Image source={require('../../assets/images/welcome.png')} />
        </SafeAreaView>
        {user && user?.hasSeenOnboardingOne === false && !isLoading && (
          <TouchableOpacity onPress={handleNextPage} style={styles.btn}>
            <Text style={styles.btn_text}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(136, 203, 227, 1)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content_container: {
    width: '100%',
    height: '100%',
    maxHeight: 660,
    maxWidth: 370,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
  content: {
    alignItems: 'center',
  },
  btn: {
    width: 234,
    height: 52,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(61, 148, 167, 1)',
  },
  btn_text: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
});
