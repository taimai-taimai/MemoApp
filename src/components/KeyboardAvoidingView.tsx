/* eslint-disable  */
import React, { useRef, useState, useEffect } from 'react'
import {
  Keyboard, Dimensions, Animated
} from 'react-native'

const KeyboardSafeView = ({ children, style }: { children: React.ReactNode, style: any }) => {
  const initialViewHeight = useRef<number | null>(null)
  const animatedViewHeight = useRef<Animated.Value | null>(null)
  const [viewHeight, setViewHeight] = useState<number | null>(null)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', handleShow)
    const hideSubscription = Keyboard.addListener('keyboardDidHide', handleHide)
    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  useEffect(() => {
    if ([initialViewHeight, animatedViewHeight, viewHeight].some((val) => val === null)) { return }
    // height is not supported with useNativeDriver: true
    // https://github.com/react-native-community/react-native-modal/issues/163
    if (viewHeight === initialViewHeight.current) {
      Animated.timing(animatedViewHeight.current as Animated.Value,
        { 
          toValue: initialViewHeight.current ?? 0, 
          duration: 300, 
          useNativeDriver: false 
        }).start()
    } else {
      Animated.timing(animatedViewHeight.current as Animated.Value,
        { 
          toValue: viewHeight ?? 0, 
          duration: 300, 
          useNativeDriver: false 
        }).start()
    }
  }, [viewHeight])

  const handleShow = ({ endCoordinates }: { endCoordinates: { height: number, screenY: number } }) => {
    if (endCoordinates.height && initialViewHeight.current) {
      const keyboardHeight = Dimensions.get('window').height - endCoordinates.screenY
      setViewHeight(initialViewHeight.current - keyboardHeight - 80)
    }
  }

  const handleHide = () => {
    if (initialViewHeight.current) {
      setViewHeight(initialViewHeight.current - 80)
    }
  }

  const handleLayout = ({ nativeEvent }: { nativeEvent: { layout: { height: number } } }) => {
    if (!initialViewHeight.current) {
      const { height } = nativeEvent.layout
      // keep viewHeight as null not to trigger useEffect on mounting.
      // Don't do this: setViewHeight(height);
      initialViewHeight.current = height
      animatedViewHeight.current = new Animated.Value(height)
    }
  }

  const animatedStyle = viewHeight
    ? {
        height: animatedViewHeight.current,
        flex: 0
      }
    : {}
  return (
    <Animated.View style={[style, animatedStyle]} onLayout={handleLayout}>
      {children}
    </Animated.View>
  )
}
export default KeyboardSafeView