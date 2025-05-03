import { View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import * as Icons from 'phosphor-react-native';

export default function CustomTabs({ state, descriptors, navigation }: BottomTabBarProps) {

  const tabbarIcons: any = {
    index: (isFocused: boolean) => (
      <Icons.House
        size={verticalScale(30)}
        weight={isFocused ? 'fill' : 'regular'}
        color={isFocused ? colors.primary : colors.neutral[400]}
      />
    ),
    wallet: (isFocused: boolean) => (
      <Icons.Wallet
        size={verticalScale(30)}
        weight={isFocused ? 'fill' : 'regular'}
        color={isFocused ? colors.primary : colors.neutral[400]}
      />
    ),
    savings: (isFocused: boolean) => (
      <Icons.Database
        size={verticalScale(30)}
        weight={isFocused ? 'fill' : 'regular'}
        color={isFocused ? colors.primary : colors.neutral[400]}
      />
    ),
    profile: (isFocused: boolean) => (
      <Icons.User
        size={verticalScale(30)}
        weight={isFocused ? 'fill' : 'regular'}
        color={isFocused ? colors.primary : colors.neutral[400]}
      />
    ),
  }
  return (
    <View style={ styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label:any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            // href={buildHref(route.name, route.params)}
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {
              tabbarIcons[route.name] && tabbarIcons[route.name](isFocused)

            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row', 
    width: '100%',
    height: Platform.OS === 'ios' ? verticalScale(73) : verticalScale(55),
    backgroundColor: colors.neutral[900],
    borderTopWidth: 1,
    borderTopColor: colors.neutral[800],
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabBarItem: {
    marginBottom: Platform.OS === 'ios' ? spacingY._10 : spacingY._5, 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
})