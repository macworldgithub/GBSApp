import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

const mockLocations = [
  { id: 1, latitude: -7.747, longitude: 110.355, avatar: 'https://i.pravatar.cc/100?img=1' },
  { id: 2, latitude: -7.748, longitude: 110.357, avatar: 'https://i.pravatar.cc/100?img=2' },
  { id: 3, latitude: -7.749, longitude: 110.359, avatar: 'https://i.pravatar.cc/100?img=3' },
  { id: 4, latitude: -7.745, longitude: 110.353, avatar: 'https://i.pravatar.cc/100?img=4' },
  { id: 5, latitude: -7.746, longitude: 110.356, avatar: 'https://i.pravatar.cc/100?img=5' },
];

export default function MemberLocation() {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <StyledView className="flex-1 bg-white">
      {/* Header */}
      <StyledView className="px-4 pt-10 pb-2 flex-row justify-between items-center">
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text className="text-lg font-semibold">Location</Text>
        <TouchableOpacity onPress={() => setFilterVisible(!filterVisible)}>
          <Ionicons name="filter" size={24} color="red" />
        </TouchableOpacity>
      </StyledView>

      {/* Filter Dropdown */}
      {filterVisible && (
        <StyledView className="absolute right-4 top-20 bg-white shadow-lg rounded-lg z-10 p-2">
          <Text className="text-xs text-gray-400 mb-2">Filter</Text>
          <Text className="text-sm text-red-500 mb-1">Members</Text>
          <Text className="text-sm text-red-500">Events</Text>
        </StyledView>
      )}

      {/* Search Box */}
      <StyledView className="px-4 pb-2">
        <StyledTextInput
          className="border border-gray-300 rounded-full px-4 py-2 text-sm"
          placeholder="Sleman"
        />
      </StyledView>

      {/* Label */}
      <StyledText className="px-4 text-xs text-gray-400 mb-2">SEARCH RESULT</StyledText>

      {/* Map */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -7.747,
          longitude: 110.355,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {mockLocations.map((loc) => (
          <Marker key={loc.id} coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}>
            <Image
              source={{ uri: loc.avatar }}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </Marker>
        ))}
      </MapView>
    </StyledView>
  );
}
