import {
  Image,
  Modal,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from './HeaderComponent/header-component.tsx';
import {DailyTips} from './DailyTipsComponent/render-daily-tips.tsx';
import React, {useState} from 'react';
import {Recommendations} from './BasicRecommendationsComponent/basic-recommendations.tsx';
import {ButtonStart} from './StartQuiz/button-start-quiz.tsx';
import {fishingTips} from '../../Data/fishing-tips.ts';
import {useUser} from '../../user';

export const Menu = () => {
  const {user, saveUser} = useUser();
  const [selectedTips, setSelectedTips] = useState<
    {id: number; title: string; content: string}[] | null
  >(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState<
    string | null
  >(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalTip, setModalTip] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const recommendationsTipsBasic = fishingTips;

  const handleBackToMenu = () => {
    setSelectedTips(null);
    setSelectedCategoryName(null);
  };

  const handleShareTip = async (title: string, content: string) => {
    try {
      await Share.share({
        message: `${title}\n\n${content}`,
      });
    } catch (error) {
      console.log('Помилка під час спільного доступу до поради:', error);
    }
  };

  // Перевірка наявності поради за title
  const handleAddTips = ({tip}: {tip: any}) => {
    const userTips = user?.tips || [];
    const isTipAlreadySaved = userTips.some(
      savedTip => savedTip.title === tip.title,
    );

    if (!isTipAlreadySaved) {
      saveUser({
        ...user,
        tips: [...userTips, tip],
      });
    }
  };

  const openModal = (tip: {title: string; content: string}) => {
    setModalTip(tip);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalTip(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content_container}>
        <Header />
        {selectedTips ? (
          <View style={styles.tipsContent}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center', gap: 5}}
              onPress={handleBackToMenu}>
              <Image source={require('../../assets/images/back.png')} />
              <Text style={{color: 'rgba(0, 0, 0, 1)', fontSize: 16}}>
                {selectedCategoryName}
              </Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.tipsContainer}>
              {selectedTips.map(tip => {
                // Перевірка за title
                const isTipSaved = user?.tips?.some(
                  savedTip => savedTip.title === tip.title,
                );
                return (
                  <TouchableOpacity
                    key={tip.title}
                    onPress={() => openModal(tip)}>
                    <View style={styles.tip}>
                      <Text style={styles.title}>{tip.title}</Text>
                      <Text style={styles.content}>{tip.content}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 10,
                          justifyContent: 'flex-end',
                        }}>
                        <TouchableOpacity onPress={() => handleAddTips({tip})}>
                          <Image
                            source={
                              isTipSaved
                                ? require('../../assets/images/saved_icon_white.png')
                                : require('../../assets/images/saved_black.png')
                            }
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() =>
                            handleShareTip(tip.title, tip.content)
                          }>
                          <Image
                            source={require('../../assets/images/shared_black.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        ) : (
          <>
            <DailyTips />
            <Recommendations
              setSelectedCategoryName={setSelectedCategoryName}
              setSelectedTips={setSelectedTips}
              fishingTips={recommendationsTipsBasic}
            />
            <ButtonStart />
          </>
        )}
      </View>

      {/* Модальне вікно */}
      {modalTip && (
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{modalTip.title}</Text>
              <Text style={styles.modalText}>{modalTip.content}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  content_container: {
    width: '100%',
    height: '100%',
    maxHeight: 660,
    maxWidth: 370,
    marginTop: 50,
  },
  tipsContent: {
    marginTop: 20,
  },
  tipsContainer: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,
    marginTop: 5,
  },
  tip: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(207, 242, 255, 1)',
    borderWidth: 2,
    borderColor: 'rgba(61, 148, 167, 1)',
  },
  title: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
    marginBottom: 8,
  },
  content: {
    fontSize: 15,
    color: 'rgba(75, 75, 75, 1)',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: 'rgba(75, 75, 75, 1)',
  },
  closeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
