import { StyleSheet } from "react-native";
import Metrics from "../../../Assets/Constants/Metrics";
import colors from "../../../Assets/Constants/Colors";

export default StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: Metrics.measure(105),
  },
  backContainer: {
    backgroundColor: colors.xLightGrey,
    width: Metrics.measure(36),
    height: Metrics.measure(36),
    borderRadius: Metrics.measure(17),
    overflow: "hidden",
    marginTop: Metrics.measure(30),
    marginLeft: Metrics.measure(10),
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    width: Metrics.measure(20),
    height: Metrics.measure(20),
  },
  headerContainer: {
    width: "100%",
    height: Metrics.measure(95),
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
  title: {
    fontSize: Metrics.measure(14),
    letterSpacing: Metrics.measure(2),
    marginTop: Metrics.measure(25),
  },
  subTitle: {
    fontSize: Metrics.measure(18),
    fontWeight: "500",
    marginTop: Metrics.measure(3),
  },
  modalContainer: {
    marginTop: Metrics.measure(30),
    width: "100%",
    height: "100%",
    backgroundColor: "#f4f4f4",
    borderTopRightRadius: Metrics.measure(5),
    borderTopLeftRadius: Metrics.measure(5),
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: Metrics.measure(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: Metrics.measure(4),
    elevation: Metrics.measure(1),
  },
  modalHeaderContainer: {
    width: "100%",
    flexDirection: "column",
  },
  closeContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
  closeIconContainer: {
    backgroundColor: colors.white,
    width: Metrics.measure(30),
    height: Metrics.measure(30),
    borderRadius: Metrics.measure(15),
    justifyContent: "center",
    alignItems: "center",
    marginRight: Metrics.measure(15),
    marginTop: Metrics.measure(10),
  },
  titleContainer: {
    width: "100%",
    marginTop: Metrics.measure(-10),
  },
  modalTitleText: {
    textAlign: "center",
    fontSize: Metrics.measure(16),
  },
  modalSubTitleText: {
    textAlign: "center",
    fontSize: Metrics.measure(16),
    fontWeight: "500",
    marginTop: Metrics.measure(3),
  },
});
