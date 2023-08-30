import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Call() {
  return (
    <View style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Link href='../'>Hang up</Link>
    </View>
  );
}
