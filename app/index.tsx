import { useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";

export default function Index() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View
      style={styles.viewContainer}
    >
      <Text style={styles.titleText}>Child<Text style={styles.enableColor}>Safe</Text></Text>
      <View style={styles.switchContainer}>
        <Switch
          style={styles.switchButton}
          trackColor={{ false: '#767577', true: '#fed000' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.statusMessage}>
          {
            isEnabled
              ?
              <Text style={styles.enableColor}>Enabled</Text>
              :
              <Text>Disabled</Text>
          }
        </Text>
      </View>
      <Text style={styles.messageText}>
        {
          isEnabled
            ?
            <Text>Your phone is <Text style={styles.enableColor}>Child Safe.</Text></Text>
            :
            <Text>Your phone is not Child Safe.</Text>
        }
      </Text>
    </View>
  );

}


const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 75,
    alignItems: 'center',
    // Use padding or margin to create gaps between child elements
    paddingVertical: 10, // Adjust as needed
  },
  titleText: {
    flexGrow: 0.12,
    fontSize: 50,
    fontWeight: 600,
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