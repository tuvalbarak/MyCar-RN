/**
 * Sample React Native App
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  useColorScheme,
  View,
  Linking,
} from 'react-native';



import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

//TextInput
const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  function Section({children, title}: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {color: isDarkMode ? Colors.light : Colors.dark},
          ]}>
          {children}
        </Text>
      </View>
    );
  }

  function App(): JSX.Element {
    const isDarkMode = useColorScheme();

    //backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

    //logo for header

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'blue',
          borderWidth: 4,
        }}>
        <View style={styles.rootContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}></Text>
            <Image
              style={styles.logoImg}
              source={require('./images/logoMyCar.png')}
            />
          </View>
          <View style={styles.underTitleContainer}></View>
          <Text style={styles.inputTitle}>
            להתחברות לאפקלציית MyCar אנא הזינו את מספר הטלפון והמייל שלכם
          </Text>

          <View style={styles.emailSection}>
            <Image
              source={require('./images/messageSquare.png')}
              style={styles.emailIcon}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="הכנס אימייל"
              value={text}
            />
          </View>

          <View style={styles.phoneSection}>
            <Image
              source={require('./images/callSquare.png')}
              style={styles.phoneIcon}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="הקלד מספר טלפון"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.beforefooterContainer}>
          <Text style={styles.helpText}>צריך עזרה?</Text>
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL('http://google.com')}>
            יצירת קשר עם התמיכה
          </Text>
        </View>
      </SafeAreaView>
    );
  }
  const windowHeigth = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const styles = StyleSheet.create({
    //style for TextInput
    input: {
      height: 50,
      width: 0.7 * windowWidth,
      margin: 20,
      marginLeft: 100,
      borderWidth: 2,
      padding: 12,
      alignContent: 'center',
    },
    logoImg: {
      height: 0.1 * windowHeigth,
      width: 0.7 * windowWidth,
      alignItems: 'center',
      marginTop: 20,
    },
    rootContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    headerContainer: {
      backgroundColor: 'white',
      height: 0.12 * windowHeigth,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      paddingHorizontal: 15,
    },
    headerImage: {
      width: 24,
      height: 24,
      marginRight: 16,
    },
    headerTitle: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    inputTitle: {
      fontSize: 15,
      marginRight: 16,
      marginTop: 20,
      alignItems: 'center',
    },
    linkText: {
      fontSize: 15,
      marginRight: 16,
      marginTop: 20,
      alignItems: 'center',
      color: 'blue',
    },
    helpText: {
      fontSize: 15,
      marginRight: 16,
      marginTop: 20,
      alignItems: 'center',
      color: 'black',
    },
    footerContainer: {
      backgroundColor: 'white',
      height: 0.1 * windowHeigth,
      flexDirection: 'row',
      borderBottomWidth: 4,
      borderColor: 'gray',
      justifyContent: 'space-between',
    },
    beforefooterContainer: {
      backgroundColor: 'white',
      height: 0.2 * windowHeigth,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    underTitleContainer: {
      backgroundColor: 'yellow',
      height: 0. * windowHeigth,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 40,
      fontWeight: '700',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    emailSection: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'white',
      borderColor: '#000',
      height: 50,
      margin: 10,
    },
    emailIcon: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'flex-end',
      marginLeft: 300,

    },
    phoneSection: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'white',
      height: 50,
      margin: 12,
    },
    phoneIcon: {
      padding: 10,
      margin: 12,
      height: 25,
      width: 25,
      marginLeft: 300,
      marginTop: 200,
      resizeMode: 'stretch',
      alignItems: 'flex-end',
    },
    linearGradient: {
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      marginTop: 16,
      width: 350,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });

  return <App />;
};

export default TextInputExample;
