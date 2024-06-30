import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Icon } from '@rneui/themed';


const CustomHeader = () => {
    return (
        <Header
            containerStyle={styles.headerContainer}
            rightContainerStyle={styles.icons}
            rightComponent={
                <View style={styles.icons}>
                    <Icon name="question-circle" type="font-awesome-5" size={20} onPress={() => console.log('FQA')} />
                    <Icon name="donate" type="font-awesome-5" size={20} onPress={() => console.log('Give Money')} />
                    {/* <Icon name="bug" type="font-awesome-5" size={20} onPress={() => console.log('Home')} /> */}
                </View>
            }
        />
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#f2f2f2',
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
