import { useState, useEffect, useRef } from "react";

import {
  Animated,
  TextInputProps,
  Easing,
  View,
  TextInput as NativeTextInput,
  TouchableWithoutFeedback,
} from "react-native";

import {
  Container,
  ErrorMessage,
  Label,
  LabelContainer,
  TextInput,
} from "./styles";

type InputProps = TextInputProps & {
  errorText?: string | null;
};

export function Input({
  errorText,
  placeholder,
  onBlur,
  onFocus,
  value,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const focusAnim = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<NativeTextInput>(null);

  const scale = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.95],
  });

  const translateY = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [20, -0],
  });

  const fontSize = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 12],
  });

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 300,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [focusAnim, isFocused, value]);

  return (
    <View style={{ width: '100%' }}>
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Container errorText={errorText}>
          <TextInput
            ref={inputRef}
            {...rest}
            onBlur={(event) => {
              setIsFocused(false);
              onBlur?.(event);
            }}
            onFocus={(event) => {
              setIsFocused(true);
              onFocus?.(event);
            }}
          />

          <LabelContainer
            style={{
              transform: [
                {
                  scale,
                },
                {
                  translateY,
                },
              ],
            }}
          >
            <Label
              errorText={errorText}
              style={{
                fontSize,
              }}
            >
              {placeholder}
              {errorText ? "*" : ""}
            </Label>
          </LabelContainer>
        </Container>
      </TouchableWithoutFeedback>
      {!!errorText && <ErrorMessage>{errorText}</ErrorMessage>}
    </View>
  );
}
