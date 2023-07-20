'use client'
import { Tab } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const TabsDescriptionReviews = ({description, reviewsData}) => {
	return (
		<Tab.Group>
			<Tab.List className="space-x-3 p-1 w-full">
				<Tab
					className={({ selected }) =>
						classNames(selected ? "text-[#f75023] outline-none border-b border-[#f75023]" : "text-black")
					}
				>
					Description
				</Tab>
				<Tab
					className={({ selected }) =>
						classNames(selected ? "text-[#f75023] border-b border-[#f75023] outline-none" : "text-black")
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
					<div className="">
						<h1>Reviews</h1>
					</div>
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};

export default TabsDescriptionReviews;
