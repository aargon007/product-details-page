const getProductReviews =  async () => {
    const res = await fetch("http://localhost:3000/api/reviews");
    return res.json();
}

export default getProductReviews;