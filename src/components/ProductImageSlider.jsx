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

const ProductImageSlider = ({images}) => {

	const [activeSlide, setActiveSlide] = useState(0);

	const handleSlideChange = (currentSlide) => {
		setActiveSlide(currentSlide);
	};

	return (
		<div className="flex">
			{/* Left Side Image Navigation */}
			<div className="mr-4 w-1/12">
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
			<div className="w-10/12 rounded-md">
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
