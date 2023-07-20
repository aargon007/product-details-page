import db from "@/productDetails.json";
import { NextResponse } from "next/server";

export const GET = () => {
	let reviews = db.reviews;
	return NextResponse.json(reviews);
};
