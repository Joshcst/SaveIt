import { ScrollView, StyleSheet, TouchableOpacity, View, ViewComponent } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX } from '@/constants/theme'
import * as Icons from 'phosphor-react-native';
import { verticalScale } from '@/utils/styling'
import HomeCard from '@/components/HomeCard'

const Home = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{gap: 4}}>
            <Typo size={16} color={colors.neutral[400]}>Welcome to the App</Typo>
            <Typo size={16} color={colors.neutral[400]}>Welcome to the App</Typo>
          </View>
          <TouchableOpacity style={styles.searchIcon}>
            <Icons.MagnifyingGlass
              size={verticalScale(30)}
              weight="bold"
              color={colors.neutral[400]}
            />
          </TouchableOpacity>
        </View>

        {/* Body */}
        <ScrollView 
          contentContainerStyle={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}>
          {/* card */}
          <View>
            <HomeCard></HomeCard>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacingX._10,
  },
  searchIcon: {
    backgroundColor: colors.neutral[900],
    padding: spacingX._10,
    borderRadius: 50,
  },
  scrollViewStyle: {
    marginBottom: spacingX._10,
    paddingBottom: verticalScale(100),
    gap: spacingX._25,
  },
  floatingButton: {
    height: verticalScale(50),
    width: verticalScale(50),
    borderRadius: 100,
    position: 'absolute',
    bottom: verticalScale(30),
    right: verticalScale(30),
  },
})