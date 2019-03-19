module.exports = {
    service: {
        includes: [
            __dirname + "/scenes/**/*.tsx",
        ],
        name: "search-client",
        endpoint: {
            url: "http://localhost:4000/search-api",
        },
    },
};
