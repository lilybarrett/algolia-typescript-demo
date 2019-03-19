module.exports = {
    client: {
        name: "search-client",
        includes: [
            __dirname + "/scenes/**/*.tsx",
        ],
        service: {
            name: "search-client",
            localSchemaFile: "./models/schema/schema.json",
            endpoint: {
                url: "http://localhost:4000/search-api",
            },
        },
    },
};
