import { Stack, Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'coral' }}>
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <FontAwesome5 name="home" size={24} color={color} />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            )
          ),
        }}
      />
      <Tabs.Screen 
        name="Login" 
        options={{ title: 'Login' }}
      />
    </Tabs>
  );
}