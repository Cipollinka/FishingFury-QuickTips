import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class Category {
  id?: number;
  categoryName?: string;
  tips?: {id: number; title: string; content: string}[];
}

interface RecommendationsProps {
  fishingTips: Category[];
  setSelectedTips: (
    value:
      | ((prevState: {id: number; title: string; content: string}[] | null) =>
          | {
              id: number;
              title: string;
              content: string;
            }[]
          | null)
      | {id: number; title: string; content: string}[]
      | null,
  ) => void;
  setSelectedCategoryName: (
    value: ((prevState: string | null) => string | null) | string | null,
  ) => void;
}

export const Recommendations = ({
  fishingTips,
  setSelectedTips,
  setSelectedCategoryName,
}: RecommendationsProps) => {
  return (
    <View style={{marginTop: 10}}>
      <SafeAreaView>
        <Text style={styles.textOne}>Basic recommendations</Text>
        <Text style={styles.textTwo}>Choose your category</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.content_container}>
        {fishingTips.map(item => (
          <TouchableOpacity
            onPress={() => {
              setSelectedTips(item.tips || []);
              setSelectedCategoryName(item.categoryName || '');
            }}
            style={styles.content}
            key={item.id}>
            <Text style={{fontSize: 16, color: 'rgba(255, 255, 255, 1)'}}>
              {item.categoryName}
            </Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
      <Text></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textOne: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
  },
  textTwo: {
    color: 'rgba(136, 136, 136, 1)',
    fontSize: 14,
  },
  content_container: {
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  content: {
    width: 340,
    height: 34,
    borderRadius: 12,
    backgroundColor: 'rgba(117, 189, 216, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
