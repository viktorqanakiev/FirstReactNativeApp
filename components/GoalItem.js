import { View, Text, Pressable, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
      //only on android
        android_ripple={{ color: "#dddddd" }}
        //onPress={() => props.onDeleteItem(props.id)}
        onPress={props.onDeleteItem.bind(this, props.id)}
        //for ios and android
        style={(pressData) => pressData.pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#530acc",
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
