import { useEffect, useState } from "react";
import { Container } from "./style";
import { Switch } from "react-native";

export function ToggleSwitch({ initialValue = false }) {
  const [switchValue, setSwitchValue] = useState(initialValue);

  useEffect(() => {
    setSwitchValue(initialValue);
  }, [initialValue]);

  const toggleSwitch = (value: any) => {
    setSwitchValue(value)
  }

  return (
    <Container style={{ backgroundColor: switchValue ? '#08AE25' : '#E5E5E5' }}>
      <Switch
        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        trackColor={{ false: 'transparent', true: 'transparent' }}
        thumbColor={'#fff'}
        onValueChange={toggleSwitch}
        value={switchValue}
      />
    </Container>
  )
}