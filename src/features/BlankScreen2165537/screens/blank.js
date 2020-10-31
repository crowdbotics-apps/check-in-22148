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

  state = {
    CheckBox_2: true,
    CheckBox_3: true,
    CheckBox_4: true,
    CheckBox_5: true,
    CheckBox_6: true,
    CheckBox_7: true,
    CheckBox_8: true,
    CheckBox_9: true,
    CheckBox_10: true,
    CheckBox_11: true,
    CheckBox_12: true,
    CheckBox_13: true,
    CheckBox_14: true,
    CheckBox_15: true,
    CheckBox_18: true,
    CheckBox_20: true
  }

  render = () => (
    <View>
      <CheckBox
        title="Sadness"
        checked={this.state.CheckBox_2}
        onPress={nextChecked => this.setState({ CheckBox_2: nextChecked })}
      />
      <CheckBox
        title="Anger"
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <CheckBox
        title="Anxiety"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
      <CheckBox
        title="Shame"
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
      />
      <CheckBox
        title="Joy"
        checked={this.state.CheckBox_6}
        onPress={nextChecked => this.setState({ CheckBox_6: nextChecked })}
      />
      <CheckBox
        title="Helplessness"
        checked={this.state.CheckBox_7}
        onPress={nextChecked => this.setState({ CheckBox_7: nextChecked })}
      />
      <CheckBox
        title="Irritability ( do you get annoyed or mad really quickly "
        checked={this.state.CheckBox_8}
        onPress={nextChecked => this.setState({ CheckBox_8: nextChecked })}
      />
      <CheckBox
        title="Loneliness"
        checked={this.state.CheckBox_9}
        onPress={nextChecked => this.setState({ CheckBox_9: nextChecked })}
      />
      <CheckBox
        title="Mood Swings"
        checked={this.state.CheckBox_10}
        onPress={nextChecked => this.setState({ CheckBox_10: nextChecked })}
      />
      <CheckBox
        title="Racing Thoughts "
        checked={this.state.CheckBox_11}
        onPress={nextChecked => this.setState({ CheckBox_11: nextChecked })}
      />
      <CheckBox
        title="Crying"
        checked={this.state.CheckBox_12}
        onPress={nextChecked => this.setState({ CheckBox_12: nextChecked })}
      />
      <CheckBox
        title="Numb "
        checked={this.state.CheckBox_13}
        onPress={nextChecked => this.setState({ CheckBox_13: nextChecked })}
      />
      <CheckBox
        title="Thoughts of Suicide "
        checked={this.state.CheckBox_14}
        onPress={nextChecked => this.setState({ CheckBox_14: nextChecked })}
      />
      <CheckBox
        title="Thoughts of Self Harm "
        checked={this.state.CheckBox_15}
        onPress={nextChecked => this.setState({ CheckBox_15: nextChecked })}
      />
      <CheckBox
        title="Thoughts of Harming Others "
        checked={this.state.CheckBox_18}
        onPress={nextChecked => this.setState({ CheckBox_18: nextChecked })}
      />
      <CheckBox
        title="Thoughts of Using Drugs "
        checked={this.state.CheckBox_20}
        onPress={nextChecked => this.setState({ CheckBox_20: nextChecked })}
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
  CheckBox_2: {},
  CheckBox_3: {},
  CheckBox_4: {},
  View_1: {},
  CheckBox_2: {},
  CheckBox_3: {},
  CheckBox_4: {},
  CheckBox_5: {},
  CheckBox_6: {},
  CheckBox_7: {},
  CheckBox_8: {},
  CheckBox_9: {},
  CheckBox_10: {},
  View_1: {},
  CheckBox_2: {},
  CheckBox_3: {},
  CheckBox_4: {},
  CheckBox_5: {},
  CheckBox_6: {},
  CheckBox_7: {},
  CheckBox_8: {},
  CheckBox_9: {},
  CheckBox_10: {},
  CheckBox_11: {},
  CheckBox_12: {},
  CheckBox_13: {},
  CheckBox_14: {},
  CheckBox_15: {},
  CheckBox_18: {},
  CheckBox_20: {}
})
