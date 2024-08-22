import {useRef, useState} from 'react';
import {
  Animated,
  PanResponder,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Polyline} from 'react-native-svg';

const DrawScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [path, setPath] = useState([]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({x: pan.x._value, y: pan.y._value});
        pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: (e, gestureState) => {
        // Update ball position

        pan.setValue({x: gestureState.dx, y: gestureState.dy});

        // Append the new point to the path
        setPath(currentPath => [
          ...currentPath,
          {x: gestureState.moveX, y: gestureState.moveY},
        ]);
      },
      onPanResponderRelease: () => {
        // Finalize the stroke path and reset dragging state
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <View
      style={{
        backgroundColor: 'lavender',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Svg height="100%" width="100%" style={{position: 'absolute'}}>
        <Polyline
          points={path.map(point => `${point.x},${point.y}`).join(' ')}
          fill="none"
          stroke="pink"
          strokeWidth="2"
        />
      </Svg>

      <Animated.View
        style={{
          width: 30,
          height: 30,
          transform: [{translateX: pan.x}, {translateY: pan.y}],
          borderRadius: 50,
          backgroundColor: 'powderblue',
        }}
        {...panResponder.panHandlers}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 10,
          marginTop: 20,
          width: 80,
          height: 80,
          borderRadius: 45,
          backgroundColor: 'pink',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: 'powderblue',
        }}
        onPress={() => {
          setPath([]);
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'lavender',
            textAlign: 'center',
            fontWeight: 700,
          }}>
          ❀ Reset ❀
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default DrawScreen;
