import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    padding: 24,

    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#5e08cc",
  },

  input_image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  input_field: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    marginBottom: 24,
    padding: 8,
    minHeight: 50,
  },

  input_buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input_submit: {
    flex: 1,
    position: "relative",
    backgroundColor: "#ffffff",
    paddingVertical: 2,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    marginRight: 16,
    borderRadius: 6,
  },

  input_cancel: {
    flex: 1,
    position: "relative",
    backgroundColor: "transparent",
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
    borderRadius: 6,
  },

  input_cancel_text: {
    color: "#ffffff",
  },
});
