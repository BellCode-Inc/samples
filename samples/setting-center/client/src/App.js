import './App.css';
import { GetS } from './api'
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

function App() {
  const networkInterface = createNetworkInterface({
    uri: 'http://127.0.0.1:3000/graphql'
  })
  const client = new ApolloClient({
    networkInterface: networkInterface
  });

  return (
    <ApolloProvider client={client}>
      <GetS />
    </ApolloProvider>
  )
}

export default App;
