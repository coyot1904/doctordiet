import { StyleSheet } from "react-native";
import Metrics from "../../Assets/Constants/Metrics";
import colors from "../../Assets/Constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  languageContainer: {
    width: "35%",
    marginTop: Metrics.measure(45),
  },
  logoIcon: {
    width: Metrics.measure(155),
    height: Metrics.measure(155),
  },
  logoContainer: {
    marginTop: Metrics.measure(100),
  },
  registerButtonText: {
    color: colors.white,
    fontSize: Metrics.measure(15),
    textAlign: "center",
  },
  registerButton: {
    backgroundColor: colors.green,
    padding: Metrics.measure(15),
    width: Metrics.measure(330),
    borderRadius: Metrics.measure(25),
  },
  buttonContainer: {
    position: "absolute",
    bottom: Metrics.measure(15),
  },
  LoginButton: {
    width: Metrics.measure(330),
    borderRadius: Metrics.measure(25),
    borderWidth: Metrics.measure(1),
    borderColor: colors.white,
    padding: Metrics.measure(15),
    marginTop: Metrics.measure(10),
  },
  skipButton: {
    width: Metrics.measure(330),
    marginTop: Metrics.measure(15),
  },
  skipBottonText: {
    fontSize: Metrics.measure(13),
    color: colors.white,
    textAlign: "center",
  },
});
