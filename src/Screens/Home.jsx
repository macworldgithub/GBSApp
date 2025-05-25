import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Cards from '../../components/Cards';

const upcomingEvents = [
    {
        id: '1',
        title: 'Synchronize Fest 2024',
        date: 'May 20',
        location: 'Yogyakarta',
        price: '$285',
        image: require('../../assets/event1.png'),
    },
    {
        id: '2',
        title: 'WJNC #9 : Gathering',
        date: 'Oct 7',
        location: 'Yogyakarta',
        price: '$185',
        image: require('../../assets/event2.png'),
    },
];

export default function Home() {
    const [likedEvents, setLikedEvents] = useState({});
    const toggleLike = (id) => {
        setLikedEvents((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    return (
        <ScrollView style={tw`bg-white px-4 pt-8 top-4`}>
            {/* Location & Notifications */}
            <View style={tw`flex-row justify-between items-center mb-4`}>
                <View>
                    <Text style={tw`text-xs text-gray-400`}>Current Location</Text>
                    <Text style={tw`font-semibold`}>Sleman, Yogyakarta</Text>
                </View>
                <TouchableOpacity>
                    <View style={tw`relative`}>
                        <FontAwesome name="bell" size={20} color="black" />
                        <View style={tw`absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500`} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Search Input */}
            <View style={tw`flex-row items-center bg-gray-100 rounded-lg px-2 mb-3`}> {/* Reduced padding */}
                <Ionicons name="search" size={18} color="#9CA3AF" />
                <TextInput
                    style={tw`ml-2 flex-1 text-sm`}
                    placeholder="Search Event"
                    placeholderTextColor="#9CA3AF"
                />
            </View>

            {/* Tabs with icons and rounded border */}
            <View style={tw`flex-row justify-around mb-4`}>
                <TouchableOpacity style={tw`flex-row items-center px-3 py-1.5 rounded-full bg-red-100`}>
                    <FontAwesome name="th-large" size={14} color="#EF4444" />
                    <Text style={tw`text-red-500 ml-1 text-sm`}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-row items-center px-3 py-1.5 rounded-full bg-gray-100`}>
                    <FontAwesome name="calendar" size={14} color="#6B7280" />
                    <Text style={tw`text-gray-600 ml-1 text-sm`}>Upcoming Events</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-row items-center px-3 py-1.5 rounded-full bg-gray-100`}>
                    <FontAwesome5 name="fire" size={14} color="#6B7280" />
                    <Text style={tw`text-gray-600 ml-1 text-sm`}>Popular events</Text>
                </TouchableOpacity>
            </View>

            {/* Upcoming Events */}
            <View style={tw`mb-2`}>
                <View style={tw`flex-row justify-between mb-2`}>
                    <Text style={tw`font-semibold`}>Upcoming Events</Text>
                    <Text style={tw`text-red-500 text-sm`}>See all events</Text>
                </View>

                <FlatList
                    data={upcomingEvents}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={tw`mr-4`}>
                            <Image source={item.image} style={{ width: 180, height: 100, borderRadius: 10 }} />
                            <Text style={tw`mt-2 font-semibold text-sm`}>{item.title}</Text>
                            <Text style={tw`text-red-500`}>{item.price}</Text>
                            <Text style={tw`text-gray-500 text-xs`}>{item.location}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={tw`mt-2 h-96`}> {/* Set height to enable vertical scroll */}
                <View style={tw`flex-row justify-between mb-2`}>
                    <Text style={tw`font-semibold`}>Popular Events</Text>
                    <Text style={tw`text-red-500 text-sm`}>See all events</Text>

                </View>
                    <Cards/>

            </View>
        </ScrollView>
    );
}
