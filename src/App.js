import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import './App.css';

import{
  withAuthentication,
  Button,
  Heading,
  Image,
  View,
  Card,
  withAuthenticator
} from "@aws-amplify/ui-react";
import { signOut } from 'aws-amplify/auth';

function App() {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className='App-logo' alt="logo" />
        <Heading level={1}>
          We now have Auth
        </Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
