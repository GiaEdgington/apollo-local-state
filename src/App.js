import React from 'react';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  cache: new InMemoryCache({
    freezeResults: true
  }),
  typeDefs,
  resolvers,
  assumeImmutableResults: true
})
function App() {
  return (
    <ApolloProvider client={client}>
      <div></div>
    </ApolloProvider>
  );
}

export default App;
