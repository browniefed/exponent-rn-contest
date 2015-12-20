let React = require('react-native');
let ReactNativeART = require('ReactNativeART');

let {
  AppRegistry,
  Animated,
  StyleSheet,
  View,
  Component,
  Text,
  Dimensions
} = React;

var {
  Surface,
  Shape
} = ReactNativeART;

var {
  width,
  height
} = Dimensions.get('window');

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        <Surface width={width} height={height}>
          <Shape 
            x={0}
            y={0}
            strokeWidth={1} 
            stroke="#000" 
            d="M0,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75zM36.2510,0h32a27.75,27.75 0 0 1 21.331,45.5a27.75,27.75 0 0 1 -21.331,45.5h-32a53.6895,53.6895 0 0 0 18.7464,-20h13.2526a7.75,7.75 0 1 0 0,-15.5h-7.75a53.6895,53.6895 0 0 0 0,-20h7.75a7.75,7.75 0 1 0 0,-15.5h-13.2526a53.6895,53.6895 0 0 0 -18.7464,-20z"
          />
        </Surface>
      </View>
    )
  }
}


let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
AppRegistry.registerComponent('main', () => App);
