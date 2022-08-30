/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

const App = () => {
  const richText = useRef();

  const onChange = (content) => {
    console.log("content :");
    console.log(content);
  }

  const HTML = `
    <p>테스트</p>
    <p>두번째 줄</p>
  `

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.screen}
      >
        <Text>테스트</Text>
        <RichEditor 
          ref={richText}
          onChange={onChange}
          initialContentHTML={HTML}
          placeholder='입력해주세요'
          androidHardwareAccelerationDisabled={true}
          initialHeight={250}
        />
        <RichToolbar 
          editor={richText}
          selectedIconTint="#873c1e"
          iconTint="#312921"
          actions={[
            actions.insertImage,
            actions.setBold,
            actions.setItalic,
            actions.setUnderline,
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20
  }
});

export default App;
