import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../../user/lib/hooks/use-navigation.tsx';

export const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const slideAnim = useRef(new Animated.Value(screenWidth)).current; // Початкове значення для анімації
  const navigation = useNavigation();

  const handleMain = () => {
    navigation.navigate(ScreenName.MainMenuScreen);
    setShowBurgerMenu(false);
  };
  const handleSaved = () => {
    navigation.navigate(ScreenName.SavedScreen);
    setShowBurgerMenu(false);
  };
  const handleTest = () => {
    navigation.navigate(ScreenName.StartQuiz);
    setShowBurgerMenu(false);
  };

  const handleShowMenu = () => {
    setShowBurgerMenu(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseMenu = () => {
    Animated.timing(slideAnim, {
      toValue: screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setShowBurgerMenu(false));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo_main_menu.png')} />
      <TouchableOpacity onPress={handleShowMenu}>
        <Image
          source={require('../../../assets/images/burger_menu_icon.png')}
        />
      </TouchableOpacity>

      <Modal visible={showBurgerMenu} transparent={true} animationType="none">
        <TouchableOpacity style={styles.modalOverlay} onPress={handleCloseMenu}>
          <Animated.View
            style={[styles.slideMenu, {transform: [{translateX: slideAnim}]}]}>
            <View style={{gap: 20}}>
              <TouchableOpacity onPress={handleMain}>
                <Text style={styles.menuText}>Main page</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSaved}>
                <Text style={styles.menuText}>Saved tips</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleTest}>
                <Text style={styles.menuText}>Fisherman`s test</Text>
              </TouchableOpacity>
            </View>
            {/* Тут можна додати інші пункти меню */}
            <TouchableOpacity onPress={handleCloseMenu}>
              <Image
                source={require('../../../assets/images/clouse_icon.png')}
              />
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  slideMenu: {
    width: '80%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 1)',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3a86ff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
