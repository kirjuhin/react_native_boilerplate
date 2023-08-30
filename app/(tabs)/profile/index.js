import { View } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'react-native-paper';

export default function Profile() {

  return (
    <View>
      <Link href='/profile/settings'>
        <Button>Go to settings page</Button>
      </Link>
    </View>
  );
}
