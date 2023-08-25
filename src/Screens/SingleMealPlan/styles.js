import { StyleSheet } from "react-native";
import Metrics from "../../Assets/Constants/Metrics";
import colors from "../../Assets/Constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    width: "100%",
    height: Metrics.measure(200),
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
    position: "absolute",
  },
  backIcon: {
    width: Metrics.measure(20),
    height: Metrics.measure(20),
  },
  itemHeaderContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: Metrics.measure(15),
    marginLeft: Metrics.measure(15),
    marginBottom: Metrics.measure(15),
  },
  title: {
    fontSize: Metrics.measure(18),
    fontWeight: "500",
  },
  downIcon: {
    width: Metrics.measure(18),
    height: Metrics.measure(18),
    marginTop: Metrics.measure(3),
  },
  dailyInfoContainer: {
    margin: Metrics.measure(15),
  },
  dailyText: {
    fontSize: Metrics.measure(16),
    letterSpacing: Metrics.measure(2),
    fontWeight: "500",
  },
  dailyPlanContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: Metrics.measure(10),
  },
  dailyIcon: {
    width: Metrics.measure(100),
    height: Metrics.measure(100),
    borderRadius: Metrics.measure(15),
  },
  dailyMainTitle: {
    fontSize: Metrics.measure(18),
    fontWeight: "500",
    marginTop: Metrics.measure(10),
    marginLeft: Metrics.measure(10),
    marginRight: Metrics.measure(10),
  },
  leftRow: {
    width: "30%",
  },
  middleRow: {
    width: "60%",
  },
  rightRow: {
    width: "10%",
  },
  subTitleDailyText: {
    fontSize: Metrics.measure(14),
    marginTop: Metrics.measure(10),
    marginLeft: Metrics.measure(10),
    marginRight: Metrics.measure(10),
    color: colors.xDarkGrey,
  },
  seperator: {
    borderColor: colors.xDarkGrey,
    borderTopWidth: Metrics.measure(0.5),
    width: Metrics.measure(330),
    height: Metrics.measure(1),
    marginLeft: Metrics.measure(15),
    marginTop: Metrics.measure(10),
  },
  basketContainer: {
    width: Metrics.measure(30),
    height: Metrics.measure(30),
    backgroundColor: colors.xLightGrey,
    borderRadius: Metrics.measure(15),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    width: Metrics.measure(15),
    height: Metrics.measure(15),
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
  menuContainer: {
    width: "100%",
    marginTop: Metrics.measure(30),
  },
  menuItemContainer: {
    backgroundColor: colors.white,
    padding: Metrics.measure(20),
    borderColor: "#f0efed",
    borderWidth: Metrics.measure(0.5),
    flexDirection: "row",
  },
  menuText: {
    fontSize: Metrics.measure(14),
    width: "90%",
  },
  modalHeaderContainer: {
    width: "100%",
  },
  addToDailyContainer: {
    position: "absolute",
    bottom: Metrics.measure(15),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  addToDailyRoutineText: {
    backgroundColor: colors.black,
    padding: Metrics.measure(15),
    color: colors.white,
    borderRadius: Metrics.measure(15),
    overflow: "hidden",
    fontSize: Metrics.measure(18),
    fontWeight: "500",
    width: Metrics.measure(300),
    textAlign: "center",
  },
});
