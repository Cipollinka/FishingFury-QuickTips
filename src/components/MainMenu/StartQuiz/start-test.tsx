import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fishingQuizData, QuizQuestion} from '../../../Data/quiz.ts';
import {
  ScreenName,
  useNavigation,
} from '../../../user/lib/hooks/use-navigation.tsx';

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(20);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null,
  );
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [isTimeOut, setIsTimeOut] = useState(false); // Додаємо змінну для перевірки часу
  const [quizFinished, setQuizFinished] = useState(false); // Для перевірки, чи завершено вікторину

  const totalQuestions = fishingQuizData.length;
  const currentQuestion: QuizQuestion = fishingQuizData[currentQuestionIndex];
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate(ScreenName.MainMenuScreen);
  };

  useEffect(() => {
    // Якщо вікторина завершена або таймер вичерпався, зупиняємо таймер
    if (quizFinished || timer === 0) {
      setIsTimeOut(true); // Якщо час вичерпався або вікторина завершена, ставимо isTimeOut в true
      setShowScore(true); // Показуємо результат
      return; // Перериваємо інтервал, якщо вікторина завершена або час вичерпано
    }

    // Якщо вікторина не завершена, запускаємо таймер
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0)); // Зменшуємо таймер
    }, 1000);

    return () => clearInterval(interval); // Очистка інтервалу після зміни
  }, [timer, quizFinished]); // Залежить від timer та quizFinished

  // Залежить від timer та quizFinished

  const handleAnswer = (isCorrect: boolean, optionIndex: number) => {
    setSelectedOptionIndex(optionIndex);
    setIsAnswerCorrect(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < fishingQuizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOptionIndex(null);
      setIsAnswerCorrect(null);
      setTimer(20); // Скидаємо таймер до 20 секунд
      setIsTimeOut(false); // Скидаємо статус часу
    } else {
      setQuizFinished(true); // Завершуємо вікторину, якщо це останнє питання
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowScore(false);
    setSelectedOptionIndex(null);
    setIsAnswerCorrect(null);
    setTimer(20); // Скидаємо таймер до 20 секунд для першого питання
    setIsTimeOut(false); // Скидаємо статус часу
    setQuizFinished(false); // Скидаємо статус завершення вікторини
  };

  return (
    <View>
      <ImageBackground
        style={styles.container}
        source={require('../../../assets/images/launch-screen.png')}>
        <View
          style={{
            marginLeft: 16,
            marginRight: 16,
            alignItems: 'center',
            marginTop: 35,
            gap: 20,
          }}>
          <Image
            source={require('../../../assets/images/logo_main_menu.png')}
          />
          <View
            style={{
              width: 360,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={handleHome}>
              <Image
                source={require('../../../assets/images/clouse_test.png')}
              />
            </TouchableOpacity>
            <Text style={styles.timerText}>{timer}</Text>
            <Text
              style={{
                width: 59,
                height: 28,
                borderRadius: 500,
                backgroundColor: 'rgba(61, 148, 167, 1)',
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
                paddingTop: 3,
              }}>
              {currentQuestion.id}/{totalQuestions}
            </Text>
          </View>
          <View>
            {showScore ? (
              <View style={styles.scoreContainer}>
                {timer === 0 ? (
                  <View style={{alignItems: 'center', gap: 30}}>
                    <Text style={styles.timeOutText}>Time left!</Text>
                    <TouchableOpacity onPress={resetQuiz} style={styles.button}>
                      <Text style={styles.buttonText}>Try one more time</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={{alignItems: 'center', gap: 20}}>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: 24,
                        fontWeight: '500',
                      }}>
                      Your cool!
                    </Text>
                    <Text
                      style={{
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: 16,
                        fontWeight: '500',
                      }}>
                      Test results:
                    </Text>
                    <View
                      style={{
                        width: 335,
                        height: 67,
                        backgroundColor: 'rgba(50, 186, 124, 1)',
                        borderRadius: 18,
                        marginVertical: 10,
                      }}>
                      <View
                        style={{
                          height: 60,
                          width: 335,
                          backgroundColor: 'rgba(255, 255, 255, 1)',
                          padding: 12,
                          borderRadius: 18,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <Image
                          source={require('../../../assets/images/yes.png')}
                        />
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: '700',
                          }}>
                          {score}/{fishingQuizData.length} right answers
                        </Text>
                        <View />
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={handleHome}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Back home</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            ) : (
              <View style={styles.questionContainer}>
                <Text style={styles.categoryText}>
                  {currentQuestion.category}: {currentQuestion.question}
                </Text>
                {currentQuestion.options.map((option, index) => (
                  <View
                    key={index}
                    style={[
                      {
                        width: 335,
                        height: 67,
                        backgroundColor: 'rgba(136, 203, 227, 1)',
                        marginVertical: 8,
                        borderRadius: 18,
                      },
                      selectedOptionIndex === index && {
                        backgroundColor: isAnswerCorrect ? 'green' : 'red',
                      },
                    ]}>
                    <TouchableOpacity
                      style={styles.optionButton}
                      onPress={() => handleAnswer(option.isCorrect, index)}>
                      <Text style={styles.optionText}>{option.option}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  questionContainer: {
    width: 360,
    marginVertical: 20,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 1)',
    marginVertical: 20,
  },
  timerText: {
    fontSize: 18,
    color: 'rgba(61, 148, 167, 1)',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  optionButton: {
    height: 60,
    width: 335,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 12,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    color: 'rgba(46, 46, 46, 1)',
    fontSize: 16,
    fontWeight: '700',
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timeOutText: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 1)',
    marginBottom: 20,
  },
  button: {
    width: 340,
    height: 52,
    backgroundColor: 'rgba(61, 148, 167, 1)',
    padding: 12,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
