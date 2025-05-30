// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// import { Camera } from 'expo-camera';
// import { Ionicons } from '@expo/vector-icons';

// export default function Scanner() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
//   const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     alert(`QR Code Scanned: ${data}`);
//   };

//   if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
//   if (hasPermission === false) return <Text>No access to camera</Text>;

//   return (
//     <View className="flex-1 bg-gray-800 pt-10">
//       {/* Header */}
//       <View className="flex-row items-center px-4 mb-2">
//         <Ionicons name="chevron-back" size={24} color="black" />
//         <Text className="text-base font-semibold ml-2">Scan QR Code</Text>
//       </View>

//       {/* QR Scanner */}
//       <View className="relative h-[60%] mx-4 rounded-xl overflow-hidden">
//         <BarCodeScanner
//           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//           style={{ flex: 1 }}
//           flashMode={flash}
//         />
//         <TouchableOpacity
//           onPress={() =>
//             setFlash(
//               flash === Camera.Constants.FlashMode.torch
//                 ? Camera.Constants.FlashMode.off
//                 : Camera.Constants.FlashMode.torch
//             )
//           }
//           className="absolute top-4 right-4 bg-white rounded-full p-2"
//         >
//           <Ionicons name="flashlight" size={24} color="black" />
//         </TouchableOpacity>

//         {/* Custom Scanner Box UI */}
//         <View className="absolute top-[25%] left-[10%] w-[80%] h-[50%] border-4 border-blue-400 rounded-2xl" />
//       </View>

//       {/* User Card & Connect */}
//       <View className="absolute bottom-6 left-4 right-4 bg-white rounded-3xl items-center py-6 shadow-md">
//         <Image
//           source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
//           className="w-12 h-12 rounded-full mb-2"
//         />
//         <Text className="text-lg font-semibold">Olivia Nguyen</Text>
//         <TouchableOpacity
//           className="mt-3 px-8 py-3 bg-red-500 rounded-full"
//           onPress={() => alert('Connected with Olivia!')}
//         >
//           <Text className="text-white font-semibold">Connect</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
