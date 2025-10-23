import Product from "../Product/Product";

export default function Main() {
    return (
        <div className="bg-[#f2f5fc] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 px-5 md:px-10 py-5">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}