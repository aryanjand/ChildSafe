import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Icon } from '@rneui/themed';
import { ThemedView } from '../ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

export type CustomHeaderProps = {
    lightColor?: string;
    darkColor?: string;
}
const CustomHeader = ({ lightColor, darkColor }: CustomHeaderProps) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Header
            backgroundColor={backgroundColor}
            containerStyle={styles.headerContainer}
            rightContainerStyle={styles.icons}
            rightComponent={
                <View style={styles.icons}>
                    <Icon name="question-circle" type="font-awesome-5" size={25} color={textColor} onPress={() => console.log('FQA')} />
                    <Icon name="donate" type="font-awesome-5" size={25} color={textColor} onPress={() => console.log('Give Money')} />
                    {/* <Icon name="bug" type="font-awesome-5" size={20} onPress={() => console.log('Home')} /> */}
                </View>
            }
        />
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'space-around',
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
});

export default CustomHeader;
