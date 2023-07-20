import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center dark:bg-white px-5">
			<div className="offset-sm-2 text-gray-50 text-center">
				<h5 className="text-gray-700 font-semibold text-3xl font-mono">
					Page not found
				</h5>
				<p className="text-gray-700 mt-2 mb-6">
					We are sorry, but the page you requested was not found
				</p>
				<Link href='/' className="bg-[#df593b]  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg">
					Back to Home
				</Link>
			</div>
		</div>
    );
};

export default NotFound;