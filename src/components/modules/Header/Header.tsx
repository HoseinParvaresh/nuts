export default function Header() {
	return (
		<div className="border-b border-gray-300">
			<div className="flex items-center justify-between container">
				{/* group name */}
				<div className="bg-green-500 p-3 rounded-lg">
					<p className="text-5xl font-bold">I.N.S.T Group</p>
				</div>
				{/* title and search box */}
				<div className="flex flex-col items-center justify-center gap-8">
					<p className="text-4xl font-bold">Iran Nuts and Spices Trading Group</p>
					{/* search box */}
					<div className="flex-center w-full">
						<div className="border-y-2 border-l-2 border-gray-300 rounded-l-md w-full">
							<input placeholder="Search products..." className="outline-none p-2" type="text" />
						</div>
						<div className="bg-green-600 text-white p-2.5 border border-green-600 rounded-r-md">
							<svg className="size-5.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
							</svg>
						</div>
					</div>
				</div>
				{/* logo */}
				<div className="flex-center flex-col">
					<img className="size-50" src="/images/logo.png" alt="logo" />
					<p className="text-4xl font-bold">Nuts & Spices</p>
				</div>
			</div>
		</div>
	);
}
