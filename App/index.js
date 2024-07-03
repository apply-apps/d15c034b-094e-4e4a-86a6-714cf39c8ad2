// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, View, ScrollView } from 'react-native';

const stories = [
    { id: '1', title: 'Cinderella', content: 'Once upon a time...' },
    { id: '2', title: 'Snow White', content: 'Once upon a time...' },
    { id: '3', title: 'Sleeping Beauty', content: 'Once upon a time...' },
];

function HomeScreen({ navigation }) {
    const renderStory = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Story', { story: item })}
        >
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fairy Tales</Text>
            <FlatList
                data={stories}
                renderItem={renderStory}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

function StoryScreen({ route }) {
    const { story } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.storyContainer}>
                    <Text style={styles.title}>{story.title}</Text>
                    <Text style={styles.content}>{story.content}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F5F5F5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    item: {
        backgroundColor: '#FFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    title: {
        fontSize: 18,
    },
    storyContainer: {
        padding: 20,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
    },
});

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Story" component={StoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}