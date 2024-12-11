import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  ScreenName,
  useNavigation,
} from '../../../user/lib/hooks/use-navigation.tsx';
import {useUser} from '../../../user';

export const Saved = () => {
  const {user, saveUser} = useUser();
  const navigation = useNavigation();
  const renderSavedContent = user?.tips;

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalTip, setModalTip] = useState<{
    id: string;
    title: string;
    content: string;
  } | null>(null);

  const handleBackToMenu = () => {
    navigation.navigate(ScreenName.MainMenuScreen);
  };

  // Функція для відкриття модального вікна
  const openModal = (tip: {id: string; title: string; content: string}) => {
    setModalTip(tip);
    setModalVisible(true);
  };

  // Функція для закриття модального вікна
  const closeModal = () => {
    setModalVisible(false);
    setModalTip(null);
  };

  // Функція для видалення статті
  const handleDelete = () => {
    if (modalTip && user) {
      const updatedTips = user.tips.filter(tip => tip.id !== modalTip.id);
      saveUser({
        ...user,
        tips: updatedTips,
      });
      closeModal();
    }
  };

  return (
    <View style={styles.tipsContent}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
          marginLeft: 20,
        }}
        onPress={handleBackToMenu}>
        <Image source={require('../../../assets/images/back.png')} />
        <Text style={{color: 'rgba(0, 0, 0, 1)', fontSize: 16}}>Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.tipsContainer}>
        {renderSavedContent?.map(tip => (
          <TouchableOpacity key={tip.id} onPress={() => openModal(tip)}>
            <View style={styles.tip}>
              <Text style={styles.title}>{tip.title}</Text>
              <Text style={styles.content}>{tip.content}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDelete}>
                <Text style={styles.deleteButtonText}>Delete</Text>
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
    backgroundColor: 'red',
  },
  tipsContent: {
    marginTop: 40,
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
    marginBottom: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FF5252',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
