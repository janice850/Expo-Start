import "@/global.css"

import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import "@/global.css";

export default function Task() {

    const DATA = [
        { id: 1, title: "Hello World", description: "Hello World Again!" },
        { id: 2, title: "Supabase", description: "supabase online backend" }
    ];

    type ItemProps = {
        title: string
        description: string
    }

    const Item = ({ title, description }: ItemProps) => (
        <View className="flex-1 justify-center items-center bg-cyan-300 p-3 m-4">
            <View className="bg-lime-600 justify-center items-center">
                <Text className="font-semibold text-white">{title}</Text>
                <Text className="text-white">{description}</Text>
            </View>

            <TouchableOpacity>
                <Text>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View className="flex-1 justify-center items-center">
            <Text className="font-bold">Task</Text>

            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} description={item.description} />}
                keyExtractor={item => item.id.toString()}
            >
            </FlatList>
        </View>
    );
}