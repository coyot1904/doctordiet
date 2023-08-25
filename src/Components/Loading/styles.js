import { StyleSheet } from "react-native";
import Metrics from "../../Assets/Constants/Metrics";

export default StyleSheet.create({
  boxLoading: {
    width: Metrics.measure(280),
    height: Metrics.measure(200),
    borderRadius: Metrics.measure(5),
  },
  loadingContainer: {
    flexDirection: "row",
    width: "100%",
    marginLeft: Metrics.measure(15),
    marginTop: Metrics.measure(15),
  },
  loadingContainerRow: {
    width: "100%",
    flexDirection: "row",
    marginTop: Metrics.measure(5),
  },
  smallBox: {
    width: Metrics.measure(88.5),
    height: Metrics.measure(100),
    borderRadius: Metrics.measure(5),
  },
  middleRow: {
    width: Metrics.measure(7),
  },
  secondLoader: {
    marginLeft: Metrics.measure(15),
  },
  animateIcon: {
    width: "100%",
    marginTop: Metrics.measure(25),
  },
});
