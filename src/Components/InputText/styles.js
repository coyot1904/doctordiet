import { StyleSheet } from "react-native";
import Metrics from "../../Assets/Constants/Metrics";
import colors from "../../Assets/Constants/Colors";

export default StyleSheet.create({
  input: {
    marginTop: Metrics.measure(25),
    borderWidth: Metrics.measure(1),
    padding: Metrics.measure(17),
    borderRadius: Metrics.measure(5),
    borderColor: colors.xxDarkGrey,
    fontSize: Metrics.measure(17),
  },
  logoIcon: {
    width: Metrics.measure(20),
    height: Metrics.measure(20),
    position: "absolute",
    left: Metrics.measure(300),
    top: Metrics.measure(-38),
  },
  showIcon: {
    width: Metrics.measure(30),
    height: Metrics.measure(30),
    position: "absolute",
    left: Metrics.measure(295),
    top: Metrics.measure(-42),
  },
});
