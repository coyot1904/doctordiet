import { StyleSheet } from "react-native";
import Metrics from "../../Assets/Constants/Metrics";
import colors from "../../Assets/Constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemContainer: {
    width: Metrics.measure(280),
    marginLeft: Metrics.measure(15),
    marginTop: Metrics.measure(15),
    borderTopLeftRadius: Metrics.measure(15),
    borderTopRightRadius: Metrics.measure(15),
    overflow: "hidden",
  },
  itemHeaderContainer: {
    width: Metrics.measure(280),
    height: Metrics.measure(250),
  },
  itemTitle: {
    fontSize: Metrics.measure(14),
    letterSpacing: Metrics.measure(2),
    color: colors.lightYellow,
    marginTop: Metrics.measure(15),
    marginLeft: Metrics.measure(15),
    fontWeight: "600",
  },
  itemSubTitle: {
    fontSize: Metrics.measure(20),
    color: colors.white,
    marginTop: Metrics.measure(5),
    marginLeft: Metrics.measure(15),
    fontWeight: "700",
  },
  itemHeaderBackContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  detialsIcon: {
    width: Metrics.measure(90),
    height: Metrics.measure(90),
  },
  itemFooterContainer: {
    width: "100%",
    height: Metrics.measure(90),
    flexDirection: "row",
    marginTop: Metrics.measure(5),
    borderBottomLeftRadius: Metrics.measure(15),
    borderBottomRightRadius: Metrics.measure(15),
    overflow: "hidden",
  },
  rightMargin: {
    marginRight: Metrics.measure(5),
  },
  animateIcon: {
    width: "100%",
    marginTop: Metrics.measure(25),
  },
});
