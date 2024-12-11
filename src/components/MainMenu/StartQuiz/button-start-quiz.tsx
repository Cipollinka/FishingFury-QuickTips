import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../../user/lib/hooks/use-navigation.tsx';

export const ButtonStart = () => {
  const navigation = useNavigation();

  const handleStartTest = () => {
    navigation.navigate(ScreenName.StartQuiz);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.textOne}>Fisherman's test</Text>
        <Text style={styles.textTwo}>test your fishing knowledge</Text>
      </SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={handleStartTest} style={styles.btn}>
          <Text style={styles.textBtn}>Start test</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  textOne: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
  },
  textTwo: {
    fontSize: 14,
    color: 'rgba(136, 136, 136, 1)',
  },
  btn: {
    width: 340,
    height: 52,
    backgroundColor: 'rgba(61, 148, 167, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  textBtn: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
});
