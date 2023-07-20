import getProductInfo from "@/utils/getProductInfo";
import getProductReviews from "@/utils/getProductReviews";
import ProductImageSlider from "./ProductImageSlider";

const ProductDetails = () => {
	// Fetch the product and reviews data from your API or JSON file
	  const productData = getProductInfo();
      const {name, description, price, images, category, colors, sizes} = productData;

	  const reviewsData = getProductReviews();
	//   console.log(reviewsData);

	return (
		<div className="flex mt-2">
			<div className="w-full">
                <ProductImageSlider/>
            </div>
            <div className="w-full">
                
            </div>
		</div>
	);
};

export default ProductDetails;
