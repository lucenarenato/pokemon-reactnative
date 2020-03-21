import { StyleSheet } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

const Day3Styles = StyleSheet.create({
  day3Container: {
    flex: 1,
    backgroundColor: "#f1f1f1"
  },

  day3HeaderContainer: {
    backgroundColor: "#16142f",
    height: 260,
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  day3HeaderTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...ifIphoneX(
      {
        top: 56
      },
      {
        top: 16
      }
    ),
    paddingLeft: 16,
    paddingRight: 16
  },

  day3HeaderTopProfileContainer: {
    flexDirection: "row",
    alignItems: "center"
  },

  day3HeaderTopProfileText: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "500",
    paddingBottom: 4
  },

  day3HeaderTopHeaderLabel: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16,
    paddingTop: 4
  },

  day3SearchBoxContainer: {
    marginTop: 24,
    paddingTop: 24,
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 24,
    position: "relative",
    justifyContent: "center"
  },

  day3SeachBoxIcon: {
    width: 36,
    height: 36,
    position: "absolute",
    left: 12,
    zIndex: 1
  },

  day3SearchBoxInput: {
    backgroundColor: "#454359",
    color: "#ffffff",
    height: 56,
    width: "100%",
    borderRadius: 14,
    paddingTop: 10,
    paddingLeft: 60,
    paddingRight: 12,
    paddingBottom: 10,
    fontSize: 16,
    lineHeight: 20,
    textAlign: "left"
  },

  day3CategoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 0,
    paddingLeft: 8,
    paddingRight: 0,
    paddingBottom: 24
  },

  day3ChipContainer: {
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 8,
    borderRadius: 24,
    marginLeft: 8,
    marginRight: 8
  },

  day3ChipText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600"
  },

  day3ContentContainer: {
    backgroundColor: "#f1f1f1",
    marginTop: 72,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: "100%"
  },

  day3CardContainer: {
    marginLeft: 16,
    marginRight: 16,
    top: -80
  },

  day3Card: {
    backgroundColor: "#ffffff",
    marginTop: 24,
    marginBottom: 24,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 16
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 16
  },

  day3CardTitle: {
    color: "#16142f",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold"
  },

  day3CardLabel: {
    paddingTop: 4,
    color: "#8b8997",
    fontSize: 14,
    lineHeight: 18
  },

  day3CardImage: {
    width: 202,
    height: 192,
    position: "absolute",
    right: 0,
    bottom: -32,
    zIndex: 1
  }
});

export default Day3Styles;
