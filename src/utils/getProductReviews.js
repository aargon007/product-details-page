const getProductReviews =  async () => {
    const res = await fetch("https://product-details-page-tawny.vercel.app/api/reviews");
    return res.json();
}

export default getProductReviews;