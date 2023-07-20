import getProductInfo from '@/utils/getProductInfo';
import getProductReviews from '@/utils/getProductReviews';

const ProductDetails =async () => {
    // Fetch the product and reviews data from your API or JSON file
  const productData =await getProductInfo();
  console.log(productData);

  const reviewsData = await getProductReviews();
  console.log(reviewsData);

  return (
    <div>

    </div>
  );
};

export default ProductDetails;