import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { ProductsQuery } from "../../models/schema/ProductsQuery";

const PRODUCTS_QUERY = gql`
    query ProductsQuery {
        searchProducts {
            brand
            categories
            description
            free_shipping
            image
            name
            objectID
            popularity
            price
            price_range
            rating
            type
            url
        }
    }
`;

export const ProductsPage = () => (
    <Query<ProductsQuery> query={PRODUCTS_QUERY}>
        {({ data, loading, error }) => {
            if (loading) { return <p>Loading...</p>; }
            if (error) { return <p>{error.message}</p>; }
            if (!data) { return <p>No results...</p>; }
            console.log(data);
            return (
                <>
                    <h2>Algolia demo data for products</h2>
                    {data.searchProducts!.map((hit) => {
                        return (
                            <div key={hit!.objectID!}>
                                <p>{hit!.name}</p>
                            </div>
                        );
                    })}
                </>
            );
        }}
    </Query>
);
