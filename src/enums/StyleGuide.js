import { Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const COLOR = {
  Tab_Color:'#585858',
  Button_color:'#FFC000',
  white: '#ffffff',
  black: '#000000',
  text_color:'#929292',
  Widget_background:'#313131',
  "_#BFBFBF":"#BFBFBF",
  "_#D9D9D9":"#D9D9D9",
  blue:"#0066FF",
}

//date

const currentDate = new Date();
const formattedDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(currentDate);

const ACTIVE_OPACITY = 0.75

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const FONT = {
  Murecho_Bold: "Murecho-Bold",
  Murecho_Medium: "Murecho-Medium",
  Murecho_Regular: "Murecho-Regular",
}

const TEXT_STYLE = {
  text_regular: {

    fontStyle: "normal",
    fontSize: 14,

    fontFamily: FONT.Murecho_Medium
  },
  text_bold: {

    fontStyle: "normal",

    fontSize: 14,

    fontFamily: FONT.Murecho_Bold
  },
  title_regular: {

    fontStyle: "normal",
    fontSize: 24,

    fontFamily: FONT.Murecho_Medium

  },
  title_bold: {

    fontStyle: "normal",
    fontSize: 24,

    fontFamily: FONT.Murecho_Bold
  },
  button_regular: {
    fontStyle: "normal",
    fontSize: 16,

    fontFamily: FONT.Murecho_Medium
  },

}

export {
  FONT, COLOR, TEXT_STYLE, width, ACTIVE_OPACITY, height, wp, hp,formattedDate
}