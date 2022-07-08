import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

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
    minHeight: 50,
  },

  input_submit: {
    position: "relative",
    backgroundColor: "#cccccc",
    paddingVertical: 2,
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
  },
});
