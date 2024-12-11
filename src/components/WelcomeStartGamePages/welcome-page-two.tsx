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
import {getRandomTip} from '../../Data/daily-tips.ts';
import { useUser } from "../../user";
import React, { useEffect } from "react";

export const WelcomePageTwo = () => {
  const {user, saveUser} = useUser();
  const navigation = useNavigation();
  useEffect(() => {
    if (user?.hasSeenOnboardingTwo === true) {
      return navigation.navigate(ScreenName.WelcomePageThree);
    }
  }, [user?.hasSeenOnboardingTwo]);

  const randomTip = getRandomTip();

  const handleNextPage = async () => {
    await saveUser({
      ...user,
      hasSeenOnboardingTwo: true
    });
    navigation.navigate(ScreenName.WelcomePageThree);
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/background.png')} style={{position:'absolute', width:'100%', height: '100%'}} />
      <View style={styles.content_container}>
        <SafeAreaView style={styles.content}>
          <Text>{randomTip.title}</Text>
          <Text style={styles.line} />
          <Text>{randomTip.text}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.text_container}>
          <Text style={styles.textOne}>
            Receive a new fishing{'\n'}tip every day
          </Text>
          <Text style={styles.textTwo}>
            Right on the main screen! Just what you{'\n'}need for a better
            fishing experience!
          </Text>
        </SafeAreaView>
        <TouchableOpacity onPress={handleNextPage} style={styles.btn}>
          <Text style={styles.btn_text}>Next</Text>
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
    width: 280,
    height: 128,
    borderRadius: 18,
    backgroundColor: 'rgba(207, 242, 255, 1)',
    gap: 5,
    padding: 19,
  },
  line: {
    width: 250,
    backgroundColor: 'rgba(136, 203, 227, 1)',
    height: 1,
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
});
