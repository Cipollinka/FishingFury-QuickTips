import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {dailyTips} from '../../../Data/daily-tips.ts';

export const DailyTips = () => {
  return (
    <View style={{marginTop: 10, height: 128}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', gap: 10}}>
          {dailyTips.map(tip => (
            <SafeAreaView key={tip.id} style={styles.content}>
              <Text>{tip.title}</Text>
              <Text style={styles.line} />
              <Text>{tip.text}</Text>
            </SafeAreaView>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
