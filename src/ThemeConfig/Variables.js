
// AntDesign global Variables
export const antDTheme = (themeColor) => ({
  colorPrimary: themeColor.$Color23,
  colorPrimaryBg: themeColor.$Color23,
  colorPrimaryBgHover: themeColor.Secondary,
  controlHeightSX: 30,
  controlHeightSM: 40,
  controlHeightLG: 50,
  fontSize: 16,
  fontFamily: '"Nunito", sans-serif;',
  borderRadius: 8,
  fontSizeHeading1: 44,
  fontSizeHeading2: 28,
  fontSizeHeading3: 24,
  fontSizeHeading4: 18,
  fontSizeHeading5: 16,
  fontWeightStrong: 700,
  colorBgContainer: themeColor.WhiteBgColor,
  colorTextHeading: themeColor.BlackTextColor,
});

//AntDesign Components Variables
export const antDComponents = (themeColor) => ({

  Button: {
    sizeStep: 10,
    controlPaddingHorizontal: 40,
    paddingContentHorizontal: 20,
    controlPaddingHorizontalSM: 20,
    paddingContentVertical: 40,
    colorBorder: themeColor.Primary,
    colorBgTextHover: themeColor.Secondary,
    colorText: themeColor.Primary,
    colorBgTextActive: themeColor.Secondary,
    controlHeightLG:56,
    controlHeight: 44,
    controlHeightSM: 32,
    colorBorderSecondary: themeColor.Secondary,
    colorPrimaryText: themeColor.Primary,
    paddingXS: 20,
    fontSize: 16,
    borderRadius: 8,
    colorBgBase: themeColor.Primary,
  },
  Layout: {
    colorBgHeader: themeColor.LeftNavBg,
  },
  Menu: {
    colorItemBgSelected: themeColor.ActiveMenu,
    colorItemTextSelected: themeColor.Primary,
  },
  Input: {
    borderRadius: 8,
    colorBorder: themeColor.BorderColor,
    controlHeight: 44,
    controlHeightMD: 100,
    colorBgContainer: themeColor.WhiteBgColor
  },
  Select: {
    borderRadius: 8,
    colorBorder: themeColor.BorderColor,
    controlHeightLG: 44,
    controlHeight: 36,
    controlHeightSM: 28,
    controlHeightMD: 100,
    //colorFillSecondary: themeColor.Transparent,
    //colorIcon: '#f00',
    // colorIconHover: '#f00',
    //colorBgElevated: themeColor.WhiteBgColor,
    controlItemBgHover: themeColor.Secondary,
    controlItemBgActive: themeColor.WhiteBgColor,
    colorPrimary: themeColor.Primary,
    //colorPrimary: themeColor.TestColor,
    //colorBgContainer: themeColor.GrayD8,
    //fontSizeIcon: 80,
  

  },

  Progress:{
    colorInfo: themeColor.ProgressCircle,
  },

  Tabs:{
    colorBorderSecondary: themeColor.Transparent,
    colorPrimary: themeColor.ProgressCircle,
    colorText: themeColor.TextColorPrimary,
    fontSize:20,
    fontWeight:700,
    // borderBottomColor: themeColor.TestColor,
    // colorBgContainer: themeColor.TestColor,

  },
  Badge:{
    controlHeight:36,
    controlHeightSM:24,
  },


});