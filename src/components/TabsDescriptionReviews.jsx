"use client";
import { Tab } from "@headlessui/react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const TabsDescriptionReviews = ({ description, reviewsData }) => {
	return (
		<Tab.Group>
			<Tab.List className="space-x-3 p-1 w-full">
				<Tab
					className={({ selected }) =>
						classNames(
							selected
								? "text-[#f75023] outline-none border-b-2 border-[#f75023] text-xl font-medium"
								: "text-black text-xl font-medium"
						)
					}
				>
					Description
				</Tab>
				<Tab
					className={({ selected }) =>
						classNames(
							selected
								? "text-[#f75023] border-b-2 border-[#f75023] outline-none text-xl font-medium"
								: "text-black text-xl font-medium"
						)
					}
				>
					Reviews
				</Tab>
			</Tab.List>

			
			<Tab.Panels className="mt-2">
				<Tab.Panel>
					<div className="">
						<p>{description}</p>
					</div>
				</Tab.Panel>
				<Tab.Panel>
					<div className="space-y-2">
						{reviewsData.map((review) => (
							<div key={review.username}>
								<p>{review.username}</p>
								<div className="flex ">
									<Rating
										style={{ maxWidth: 80, marginRight: 5 }}
										value={review.rating}
										readOnly
									/>
								</div>
								<p>{review?.comment}</p>
							</div>
						))}
					</div>
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};

export default TabsDescriptionReviews;
