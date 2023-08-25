import { StyleSheet } from "react-native";
import Metrics from "../../Assets/Constants/Metrics";
import colors from "../../Assets/Constants/Colors";

export default StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: Metrics.measure(85),
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
  },
  headerRow: {
    flexDirection: "row",
    width: "100%",
  },
  headerSideRow: {
    width: "20%",
  },
  headerMiddleRow: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  basketContainer: {
    backgroundColor: colors.white,
    width: Metrics.measure(36),
    height: Metrics.measure(36),
    borderRadius: Metrics.measure(17),
    overflow: "hidden",
    marginTop: Metrics.measure(30),
    marginLeft: Metrics.measure(10),
    justifyContent: "center",
    alignItems: "center",
  },
  rightCorner: {
    alignItems: "flex-end",
    paddingRight: Metrics.measure(10),
  },
  backIcon: {
    width: Metrics.measure(20),
    height: Metrics.measure(20),
  },
  backContainer: {
    width: Metrics.measure(36),
    height: Metrics.measure(36),
    marginTop: Metrics.measure(31),
    marginLeft: Metrics.measure(0),
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: Metrics.measure(15),
    letterSpacing: Metrics.measure(3),
    fontWeight: "500",
    marginTop: Metrics.measure(13),
  },
});
