import React from 'react'
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign'; 

export default function TabLayout() {
  return (
   <Tabs screenOptions={{headerShown:false}}>
    <Tabs.Screen name="home" 
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />
    }}/>
    <Tabs.Screen name="dictionary"
    options={{
      tabBarLabel: 'Dictionary',
      tabBarIcon: ({color}) => <Entypo name="book" size={24} color={color} />
    }}
    />
    <Tabs.Screen name="practice"
    options={{
      tabBarLabel: 'Practice',
      tabBarIcon: ({color}) => <AntDesign name="playcircleo" size={24} color={color} />
    }}
    />
   </Tabs>
  )
}