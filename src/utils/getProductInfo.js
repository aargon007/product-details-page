const getProductInfo = async () => {
    const res = await fetch("http://localhost:3000/api/product");
    return res.json();
}

export default getProductInfo;