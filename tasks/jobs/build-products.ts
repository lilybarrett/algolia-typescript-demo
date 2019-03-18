import algolia from "algolia-sdk";

const buildProducts = async () => {
    await algolia.products.insert();
};

buildProducts()
    .then(() => console.log("build products"))
    .catch((e) => console.log(e));


