import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Chat() {
  return (
    <View>
      <Link href='/chat/private'>Go to private chat</Link>
      <Link href='/chat/group'>Go to group chat</Link>
    </View>
  );
}
