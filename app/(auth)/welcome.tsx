import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/Button'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
import { useRouter } from 'expo-router'

const welcome = () => {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Animated.Image
          entering={FadeIn.duration(2000)}
          source={require("../../assets/images/logo.png")}
          style={styles.welcomeImage}
          resizeMode='contain'
        />

        {/* footer */}
        <View style={styles.footer}>
          <Animated.View entering={FadeInDown.duration(1000)} style={{alignItems: 'center'}}>
            <Typo color={colors.blueLight} size={30} fontWeight={'800'}>Always take control</Typo>
            <Typo color={colors.blueLight} size={30} fontWeight={'800'}>of your finances</Typo>
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).delay(100)} style={{alignItems: 'center', gap: 2}}>
            <Typo size={14} color={colors.textLight}>Finances must be arranged to set a better</Typo>
            <Typo size={14} color={colors.textLight}>lifestyle in future</Typo>
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000).delay(200)} style={styles.buttonContainer}>
            <Button onPress={() => router.push('/(tabs)')}>
              <Typo size={20} color={colors.neutral[900]} fontWeight={"600"}>Get Started</Typo>
            </Button>
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: spacingY._10,
  },
  welcomeImage: {
    width: '100%',
    height: verticalScale(300),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  loginbutton: {
    alignSelf: 'flex-end',
    marginRight: spacingX._25,
  },
  footer: {
    backgroundColor: colors.neutral[900],
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacingX._25,
  }
})