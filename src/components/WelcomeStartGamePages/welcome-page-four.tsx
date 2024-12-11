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

export const WelcomePageFour = () => {
  const {user, saveUser} = useUser();
  const navigation = useNavigation();

  useEffect(() => {
    if (user?.hasSeenOnboardingFour === true) {
      return navigation.navigate(ScreenName.MainMenuScreen);
    }
  }, [user?.hasSeenOnboardingFour]);

  const handleNextPage = async () => {
    await saveUser({...user, hasSeenOnboardingFour: true});
    navigation.navigate(ScreenName.MainMenuScreen);
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/background.png')} style={{position:'absolute', width:'100%', height: '100%'}} />
      <View style={styles.content_container}>
        <SafeAreaView style={styles.content}>
          <SafeAreaView style={styles.content_bait}>
            <Text style={styles.content_textOne}>Bait Basics</Text>
            <Text style={styles.content_textTwo}>
              Use live bait like worms or minnows{'\n'}for freshwater fish.
              These are especially{'\n'}effective for species like bass and
              trout.{'\n'}
              Live bait can mimic the natural prey of{'\n'}freshwater fish,
              increasing your chances{'\n'}
              of a bite.
            </Text>
          </SafeAreaView>
          <SafeAreaView style={styles.btn_container}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/saved_icon_white.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/sherid_icon_white.png')}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.text_container}>
          <Text style={styles.textOne}>Save your favorite tips</Text>
          <Text style={styles.textTwo}>for quick access anytime!</Text>
        </SafeAreaView>
        <TouchableOpacity onPress={handleNextPage} style={styles.btn}>
          <Text style={styles.btn_text}>Start now</Text>
        </TouchableOpacity>
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
    width: 340,
    height: 210,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'rgba(61, 148, 167, 1)',
    backgroundColor: 'rgba(207, 242, 255, 1)',
    gap: 5,
    padding: 19,
  },
  content_bait: {
    gap: 5,
  },
  content_textOne: {
    fontWeight: '500',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
  },
  content_textTwo: {
    fontSize: 15,
    color: 'rgba(75, 75, 75, 1)',
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
  text_container: {
    gap: 18,
    alignItems: 'center',
  },
  textOne: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
  },
  textTwo: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
  },
  btn_container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 10,
  },
});
