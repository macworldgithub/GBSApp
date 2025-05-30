// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import QRCode from 'react-native-qrcode-svg'; // This is the QR code generator component
// import { Ionicons } from '@expo/vector-icons';
// import { tw } from 'nativewind'; 

// export default function QRCodeScreen() {
//   const user = {
//     name: 'Olivia Nguyen',
//     avatar: 'https://randomuser.me/api/portraits/women/44.jpg', // Replace with dynamic image if needed
//     qrValue: 'https://example.com/user/olivia-nguyen' // Can be dynamic
//   };

//   const handleOpenScanner = () => {
//     // Your scanner opening logic here
//     console.log('Opening scanner...');
//   };

//   return (
//     <View className="flex-1 bg-[#f8f8fb] px-4 pt-10">
//       {/* Top bar */}
//       <View className="flex-row items-center mb-6">
//         <Ionicons name="chevron-back" size={24} color="black" />
//         <Text className="text-base font-semibold ml-2">QR Code</Text>
//       </View>

//       {/* QR Code */}
//       <View className="items-center bg-white rounded-2xl shadow-md p-6 mx-6 mb-6">
//         <QRCode value={user.qrValue} size={200} />
//       </View>

//       {/* User Info */}
//       <View className="items-center space-y-2 mb-10">
//         <Image
//           source={{ uri: user.avatar }}
//           className="w-12 h-12 rounded-full"
//         />
//         <Text className="text-lg font-semibold">{user.name}</Text>
//         <Text className="text-sm text-gray-500">Scan my QR Code</Text>
//       </View>

//       {/* Button */}
//       <TouchableOpacity
//         onPress={handleOpenScanner}
//         className="flex-row items-center justify-center bg-red-500 rounded-full py-3 mx-8"
//       >
//         <Ionicons name="qr-code-outline" size={20} color="white" />
//         <Text className="text-white font-semibold ml-2">Open Code Scanner</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
