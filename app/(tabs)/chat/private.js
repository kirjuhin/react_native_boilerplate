import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Private() {
  return (
    <View>
      <Link href='/call'>Make a call</Link>
    </View>
  );
}
