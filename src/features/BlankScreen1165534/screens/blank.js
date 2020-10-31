import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_4: "", TextInput_6: "", TextInput_9: "" }

  render = () => (
    <View>
      <Text style={styles.Text_3}>email:</Text>
      <TextInput
        placeholder="johndoe@gmail.com"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <Text style={styles.Text_5}>password:</Text>
      <TextInput
        placeholder="BakedBeanz123"
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
      <Text style={styles.Text_8}>username:</Text>
      <TextInput
        placeholder="John Doe "
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_3: {},
  View_1: {},
  Text_3: {},
  TextInput_4: {},
  Text_5: {},
  TextInput_6: {},
  Text_8: {},
  TextInput_9: {},
  View_1: {},
  Text_3: {
    marginLeft: -100,
    marginTop: 3,
    paddingBottom: 3,
    alignSelf: "center"
  },
  TextInput_4: {},
  Text_5: { marginLeft: 59 },
  TextInput_6: {},
  Text_8: { marginLeft: 60 },
  TextInput_9: {}
})
