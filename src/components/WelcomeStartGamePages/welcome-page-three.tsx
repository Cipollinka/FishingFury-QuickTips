import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  ScreenName,
  useNavigation,
} from '../../user/lib/hooks/use-navigation.tsx';
import {fishingTips} from '../../Data/fishing-tips.ts';
import { useUser } from "../../user";
import React, { useEffect } from "react";

export const WelcomePageThree = () => {
  const {user, saveUser} = useUser();
  const navigation = useNavigation();
  useEffect(() => {
    if (user?.hasSeenOnboardingThree === true) {
      return navigation.navigate(ScreenName.WelcomePageFour);
    }
  }, [user?.hasSeenOnboardingThree]);
  const handleNextPage = async () => {
    await saveUser({
      ...user,
      hasSeenOnboardingThree: true
    });
    navigation.navigate(ScreenName.WelcomePageFour);
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/background.png')} style={{position:'absolute', width:'100%', height: '100%'}} />
      <View style={styles.content_container}>
        <SafeAreaView style={styles.list}>
          {fishingTips.map(item => (
            <TouchableOpacity style={styles.content} key={item.id}>
              <Text style={{fontSize: 16, color: 'rgba(255, 255, 255, 1)'}}>
                {item.categoryName}
              </Text>
            </TouchableOpacity>
          ))}
        </SafeAreaView>
        <SafeAreaView style={styles.text_container}>
          <Text style={styles.textOne}>
            Find the right tips based{'\n'}on the type of fishing
          </Text>
          <Text style={styles.textTwo}>
            based on the type of fishing and your{'\n'}needs. Just choose a
            category!
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
    width: 340,
    height: 34,
    borderRadius: 12,
    backgroundColor: 'rgba(117, 189, 216, 1)',
    justifyContent: 'center',
    alignItems: 'center',
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
  list: {gap: 10},
});
