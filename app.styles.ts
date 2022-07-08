import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  //* upper part

  input_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",

    paddingBottom: 24,
    marginBottom: 24,

    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  input_field: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flex: 5,
    marginRight: 16,
    padding: 8,
  },

  input_submit: {
    position: "relative",
    backgroundColor: "#cccccc",
    paddingVertical: 2,
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  //* lower part

  goals_container: {
    flex: 7,
  },
});
