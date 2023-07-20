import db from "@/productDetails.json";
import { NextResponse } from "next/server";

export const GET = () => {
	let product = db.product;
	return NextResponse.json(product);
};
