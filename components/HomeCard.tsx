import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typo from './Typo'
import { scale } from '@/utils/styling'
import { colors, spacingX } from '@/constants/theme'
import { ColorProperties } from 'react-native-reanimated/lib/typescript/Colors'

const HomeCard = () => {
  return (
    <ImageBackground
        source={require('@/assets/images/card.png')}

    >
    </ImageBackground>
  )
}

export default HomeCard

const styles = StyleSheet.create({
    bigImage: {
        height: scale(200),
        width: "100%",
    },
    container: {
        padding: spacingX._20,
        paddingHorizontal: scale(23),
        height: "87%",
        width: "100%",
        justifyContent: "space-between",
    },
    totalBalanceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: spacingX._5,
    },
    stats: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    statsIcon: {
        backgroundColor: colors.neutral[350],
        padding: spacingX._5,
        borderRadius: 50,
    },
    IncomeExpense: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacingX._7,
    }
})