import React from 'react';
import { View, Text, Button } from 'react-native';

const name = 'Bharath';
const age = 21;
const email = '';
function App(): React.JSX.Element {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hi, my name is {name}.</Text>
      <Text style={{ fontSize: 30 }}>I am {age} years old.</Text>
      <Text style={{ fontSize: 20 }}>
        My email is {email ? email : 'not added'}.
      </Text>
      <Text style={{ fontSize: 20 }}>React Native</Text>
      <Button title='Press here'></Button>
      <Text style={{ fontSize: 18 }}>Programming with Bharath</Text>
      <Button title='Press here to learn'></Button>
    </View>
  );
}

export default App;
