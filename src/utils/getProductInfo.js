const getProductInfo = async () => {
    const res = await fetch("https://product-details-page-tawny.vercel.app/api/product");
    return res.json();
}

export default getProductInfo;