import { StyleSheet } from "react-native";
import Metrics from "../../Assets/Constants/Metrics";
import colors from "../../Assets/Constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.measure(15),
  },
  languageContainer: {
    width: "35%",
    marginTop: Metrics.measure(45),
  },
  backBtnContainer: {
    width: "100%",
  },
  logoIcon: {
    width: Metrics.measure(20),
    height: Metrics.measure(20),
    marginTop: Metrics.measure(15),
    marginLeft: Metrics.measure(-7),
  },
  headerText: {
    fontSize: Metrics.measure(30),
    fontWeight: "500",
  },
  headerContainer: {
    marginTop: Metrics.measure(15),
  },
  registerAccountBtnText: {
    color: colors.white,
    fontSize: Metrics.measure(16),
    textAlign: "center",
  },
  registerAccountBtn: {
    backgroundColor: colors.black,
    width: "100%",
    padding: Metrics.measure(15),
    marginTop: Metrics.measure(15),
    borderRadius: Metrics.measure(25),
  },
  speratorContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: Metrics.measure(30),
  },
  speratorLine: {
    borderColor: colors.red,
    borderTopWidth: Metrics.measure(1),
    width: "45%",
  },
  speratorTextContainer: {
    width: "10%",
  },
  speratorText: {
    textAlign: "center",
    fontSize: Metrics.measure(16),
    marginTop: Metrics.measure(-10),
  },
  socialMediaContainer: {
    borderColor: colors.darkGrey,
    width: "100%",
    padding: Metrics.measure(15),
    marginTop: Metrics.measure(15),
    borderRadius: Metrics.measure(25),
    borderWidth: Metrics.measure(1),
  },
  socialMediaText: {
    color: colors.black,
    fontSize: Metrics.measure(15),
    textAlign: "center",
  },
  socialMediaContentContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  facebookIcon: {
    width: Metrics.measure(20),
    height: Metrics.measure(20),
    marginRight: Metrics.measure(10),
  },
  forgetPasswordText: {
    color: colors.blue,
    marginTop: Metrics.measure(10),
    fontSize: Metrics.measure(12),
  },
});
