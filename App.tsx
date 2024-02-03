import React from 'react';
import { View, Text, Button } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>React Native</Text>
      <Button title='Press here'></Button>
      <Text style={{ fontSize: 20 }}>Programming with Bharath</Text>
      <Button title='Press here to learn'></Button>
    </View>
  );
}

export default App;
