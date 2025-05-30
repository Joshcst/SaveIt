import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router'

const index = () => {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/(auth)/welcome')
        }, 2000);
    },[router]) 

  return (
    <View style={styles.container}>
        <Image
            style={styles.logo}
            resizeMode='contain'
            source={require('@/assets/images/logo.png')}
        />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.neutral[900],
    },
    logo: {
        height: "20%",
        aspectRatio: 1,
    },
});