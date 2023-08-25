import { StyleSheet } from "react-native";
import Metrics from "../../../Assets/Constants/Metrics";
import colors from "../../../Assets/Constants/Colors";

export default StyleSheet.create({
  menuContainer: {
    width: "100%",
    marginTop: Metrics.measure(30),
  },
  menuItemContainer: {
    backgroundColor: colors.white,
    padding: Metrics.measure(20),
    borderColor: "#f0efed",
    borderWidth: Metrics.measure(0.5),
  },
  menuText: {
    fontSize: Metrics.measure(14),
  },
});
