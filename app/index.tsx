import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";


export default function Index() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (

    <ThemedView style={styles.viewContainer}>
      <ThemedText type="title" style={styles.titleText}>Child<Text style={styles.enableColor}>Safe</Text></ThemedText>
      <ThemedView style={styles.switchContainer}>
        <Switch
          style={styles.switchButton}
          trackColor={{ false: '#767577', true: '#fed000' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <ThemedText style={styles.statusMessage}>
          {
            isEnabled
              ?
              <ThemedText style={styles.enableColor}>Enabled</ThemedText>
              :
              <ThemedText>Disabled</ThemedText>
          }
        </ThemedText>
      </ThemedView>
      <ThemedText style={styles.messageText}>
        {
          isEnabled
            ?
            <ThemedText>Your phone is <ThemedText style={styles.enableColor}>Child Safe.</ThemedText></ThemedText>
            :
            <ThemedText>Your phone is not Child Safe.</ThemedText>
        }
      </ThemedText>
    </ThemedView>
  );

}


const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 45,
  },
  titleText: {
    flexGrow: 0.15,
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexGrow: 0.25,
  },
  switchButton: {
    transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }],
  },
  statusMessage: {
    fontSize: 18,
    fontWeight: "bold"
  },
  messageText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  enableColor:
  {
    color: '#FFD700',
    fontWeight: "bold"
  }
});