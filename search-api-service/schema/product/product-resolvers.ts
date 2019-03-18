import algolia from "algolia-sdk";

export const productQueryResolvers = {
    searchProducts: async (_: undefined, params = {}) => {
        try {
            const result = await algolia.products.search(params);
            return result.content.hits;
        } catch {
            return "Something went wrong!";
        }
    },
};
