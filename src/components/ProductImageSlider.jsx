"use client";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
	CarouselProvider,
	ImageWithZoom,
	Slide,
	Slider,
} from "pure-react-carousel";
import { useState } from "react";
import Image from "next/image";

const ProductImageSlider = () => {
	const images = [
		"https://sailors3bucket1.s3.ap-southeast-1.amazonaws.com/uploads/all/Hqt9spUo6sCDkTgAZmBImpz1tCFIxClKtOzGTOCK.jpg",
		"https://sailors3bucket1.s3.ap-southeast-1.amazonaws.com/uploads/all/psYco6U9UouqfAwhgNuyBSfdy3fqn2xBGjKnZz3A.jpg",
		"https://sailors3bucket1.s3.ap-southeast-1.amazonaws.com/uploads/all/ou2zFxh8gFFrsfiF769Czjj7QlgtEIyLGgV7mFws.jpg",
	];

	const [activeSlide, setActiveSlide] = useState(0);

	const handleSlideChange = (currentSlide) => {
		setActiveSlide(currentSlide);
	};

	return (
		<div className="flex">
			{/* Left Side Image Navigation */}
			<div className="mr-4 w-1/6">
				{images.map((image, index) => (
					<div
						key={index}
						className={`mb-2 cursor-pointer ${
							index === activeSlide ? "border-2 border-blue-500" : ""
						}`}
						onClick={() => setActiveSlide(index)}
					>
						<Image
							src={image}
							width={250}
							height={100}
							alt={`Product Image ${index + 1}`}
							className="w-full rounded"
						/>
					</div>
				))}
			</div>
            {/* carousel slider with zoom  */}
			<div className="w-5/6">
				<CarouselProvider
					visibleSlides={1}
					totalSlides={images.length}
					step={1}
					currentSlide={activeSlide}
					onChange={handleSlideChange}
					naturalSlideWidth={300}
					naturalSlideHeight={300}
					hasMasterSpinner
					lockOnWindowScroll
				>
					<Slider>
						{images.map((image, index) => (
							<Slide index={index} key={index}>
								<ImageWithZoom src={image} />
							</Slide>
						))}
					</Slider>
				</CarouselProvider>
			</div>
		</div>
	);
};

export default ProductImageSlider;
