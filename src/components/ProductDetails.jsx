import getProductInfo from "@/utils/getProductInfo";
import getProductReviews from "@/utils/getProductReviews";
import ProductImageSlider from "./ProductImageSlider";
import {
	FaFacebook,
	FaLinkedinIn,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import TabsDescriptionReviews from "./TabsDescriptionReviews";

const ProductDetails = async () => {
	// Fetch the product and reviews data from your API or JSON file
	const productData = await getProductInfo();

	const { name, description, price, images, category, colors, sizes } =
		productData;

	const reviewsData = await getProductReviews();

	return (
		<>
			<div className="flex flex-col md:flex-row mt-2 gap-5">
				<div className="w-full">
					<ProductImageSlider images={images} />
				</div>
				<div className="w-full space-y-6 text-2xl font-medium">
					<h1 className="text-3xl font-medium">{name}</h1>
					<p>Price : ৳ {price}</p>
					<p>
						Color :{" "}
						{colors.map((color) => (
							<button className="btn-primary mr-2" key={color}>
								{color}
							</button>
						))}
					</p>
					<p>
						Sizes :{" "}
						{sizes.map((size) => (
							<button className="btn-primary mr-2" key={size}>
								{size}
							</button>
						))}
					</p>
					<p>
						Category : <span className="text-xl">{category.join(", ")}</span>
					</p>
					<p>Available Stock : 5</p>

					<div className="flex gap-4">
						<button className="bg-gray-900 text-white py-2 px-3 rounded-md text-base">
							Add To Cart
						</button>
						<button className="bg-gray-900 text-white py-2 px-3 rounded-md text-base">
							Buy Now
						</button>
					</div>
					<div className="flex gap-4 text-base underline">
						<button>Add to Wishlist</button>
						<button>Compare</button>
					</div>
					<div className="flex items-center gap-3">
						<span className="text-xl">Share : </span>
						<div className="flex gap-4">
							<Link
								href=""
								target="_blank"
								className="text-white rounded-md px-3 py-2 text-2xl bg-blue-800"
							>
								<FaFacebook />
							</Link>
							<Link
								href=""
								target="_blank"
								className="text-white rounded-md px-3 py-2 text-2xl bg-green-600"
							>
								<FaWhatsapp />
							</Link>
							<Link
								href=""
								target="_blank"
								className="text-white rounded-md px-3 py-2 text-2xl bg-blue-600"
							>
								<FaLinkedinIn />
							</Link>
							<Link
								href=""
								target="_blank"
								className="text-white rounded-md px-3 py-2 text-2xl bg-sky-600"
							>
								<FaTwitter />
							</Link>
						</div>
					</div>
				</div>
			</div>
            <div className="mt-5 bg-gray-50 px-5 py-5 rounded-md">
                <TabsDescriptionReviews description={description} reviewsData={reviewsData}/>
            </div>
		</>
	);
};

export default ProductDetails;
