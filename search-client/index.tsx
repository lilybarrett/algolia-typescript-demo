import React from "react";
import { hot } from "react-hot-loader";
import { render } from "react-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import { ProductsPage } from "./scenes/products";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const client = new ApolloClient({
    uri: "http://localhost:4000/search-api",
    cache: new InMemoryCache(),
});

const App: React.FC = () => (
    <ApolloProvider client={client}>
        <InstantSearch
            apiKey="3e88a6d6d5359adf6336aaf33a6efc9b"
            appId="FI4RGDZGXU"
            indexName="lily_demo_ecommerce">
            <SearchBox />
            <Hits />
        </InstantSearch>
        {/* <ProductsPage /> */}
    </ApolloProvider>
);

const HotApp = hot(module)(App);

render(<HotApp />, document.getElementById("root"));

// search by brand, free_shipping, popularity, and price_range to start
