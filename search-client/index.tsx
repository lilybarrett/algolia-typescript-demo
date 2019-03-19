import React from "react";
import { hot } from "react-hot-loader";
import { render } from "react-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ProductsPage } from "./scenes/products";

const client = new ApolloClient({
    uri: "http://localhost:4000/search-api",
    cache: new InMemoryCache(),
});

const App: React.FC = () => (
    <ApolloProvider client={client}>
        <ProductsPage />
    </ApolloProvider>
);

const HotApp = hot(module)(App);

render(<HotApp />, document.getElementById("root"));
