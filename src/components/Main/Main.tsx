"use client"

import Product from "../Product/Product";
import { motion } from "motion/react";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
export default function Main() {
	return (
		<div className="bg-[#f2f5fc] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 px-5 md:px-10 py-5">
			{data.map((p, index) => (
				<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
					<Product />
				</motion.div>
			))}
		</div>
	);
}
