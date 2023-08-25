import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client";

import { RootStack } from "./src/Screens/index";

// Apollo Config
import client from "./src/Config/ApolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
