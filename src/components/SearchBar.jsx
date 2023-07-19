import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div className="flex items-stretche max-w-md mx-auto rounded-lg">
				<div className="w-full">
					<input
						type="search"
						className="w-full px-4 py-1 text-gray-800 rounded-l-lg bg-gray-100 outline-none"
						placeholder="search"
					/>
				</div>

				<button
					type="submit"
					className="flex py-1 px-2 items-center bg-[#df593b] justify-center text-white rounded-r-lg"
				>
					<FaSearch className="w-3 h-3" />
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
