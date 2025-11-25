"use client";

import * as React from "react";
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MdOutlineCancel } from "react-icons/md";
import apiRequests from "@/services/config";
import Alert from "@/lib/Alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FiEdit } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Label } from "@/components/ui/label";

export const dynamic = "force-dynamic"
export type Product = {
	id: string;
	title: string;
	images: [{ image1: string; primary: boolean }, { image2: string; primary: boolean }];
	show: boolean;
};

export const columns = (toggleShow: (id: string, show: boolean) => void, removeProduct: (id: string) => void): ColumnDef<Product>[] => [
	{
		accessorKey: "id",
		header: "شناسه",
		cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
	},
	{
		accessorKey: "title",
		header: "عنوان",
		cell: ({ row }) => <div className="capitalize text-lg">{row.getValue("title")}</div>,
	},
	{
		accessorKey: "primary image",
		header: "عکس اول",
		cell: ({ row }) => {
			const images = row.original.images;

			return (
				<div className="flex gap-2">
					<img src={`${images[0].image1}`} alt="product" className="w-12 h-12 object-cover rounded" />
				</div>
			);
		},
	},
	{
		accessorKey: "secondary image",
		header: "عکس دوم",
		cell: ({ row }) => {
			const images = row.original.images;

			return (
				<div className="flex gap-2">
					<img src={`${images[1].image2}`} alt="product" className="w-12 h-12 object-cover rounded" />
				</div>
			);
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const product = row.original;

			return (
				<div className="flex gap-3">
					{/* show / hide */}
					<div onClick={() => toggleShow(product.id, product.show)} className="p-1.5 text-white bg-sky-500 max-w-max rounded-md cursor-pointer">
						{product.show ? <AiOutlineEye className="size-5" /> : <AiOutlineEyeInvisible className="size-5" />}
					</div>
					{/* edit */}
					<Dialog>
						<form className="self-end">
							<DialogTrigger asChild>
								<div className="p-1.5 text-white bg-orange-400 max-w-max rounded-md cursor-pointer">
									<FiEdit className="size-5" />
								</div>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
								<DialogHeader>
									<DialogTitle className="font-dana">ویرایش محصول</DialogTitle>
								</DialogHeader>
								<div className="grid gap-4">
									<div className="grid gap-3">
										<Label htmlFor="name-1" className="font-dana">
											عنوان
										</Label>
										<Input value={product.title} id="name-1" name="name" required />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="name-1" className="font-dana mt-4">
											عکس ها
										</Label>
										<div className="grid grid-cols-2 gap-5 font-dana">
											<img src={`${product.images[0].image1}`} alt="product" className="w-30 h-30 object-cover rounded" />
											<img src={`${product.images[1].image2}`} alt="product" className="w-30 h-30 object-cover rounded" />
										</div>
									</div>
								</div>
								<DialogFooter>
									<DialogClose asChild>
										<Button className="font-dana" variant="outline">
											بستن
										</Button>
									</DialogClose>
									<Button className="font-dana" type="submit">
										تایید
									</Button>
								</DialogFooter>
							</DialogContent>
						</form>
					</Dialog>
					{/* delete */}
					<Dialog>
						<form className="self-end">
							<DialogTrigger asChild>
								<div className="p-1.5 text-white bg-red-500 max-w-max rounded-md cursor-pointer">
									<MdOutlineCancel className="size-5" />
								</div>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
								<DialogHeader>
									<DialogTitle className="font-dana text-right my-5">محصول حذف شود ؟</DialogTitle>
								</DialogHeader>
								<DialogFooter className="dir-rtl">
									<DialogClose asChild onClick={() => removeProduct(product.id)}>
										<Button className="font-dana bg-red-500 hover:bg-red-600 text-white" type="submit">
											حذف
										</Button>
									</DialogClose>
									<DialogClose asChild>
										<Button className="font-dana" variant="outline" type="submit">
											لفو
										</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</form>
					</Dialog>
				</div>
			);
		},
	},
];

export function ProductsTable({ data }: { data: Product[] }) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const [products, setProducts] = React.useState(data);

	const toggleShow = async (id: string, show: boolean) => {
		await apiRequests
			.patch(`/products/${id}`, { show: !show })
			.then((res) => {
				setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, show: !show } : p)));
				Alert("info", show ? "محصول پنهان شد" : "محصول نمایش داده شد");
			})
			.catch((res) => Alert("error", "وضعیت محصول تغییری نکرد"));
	};
	const removeProduct = async (id: string) => {
		await apiRequests
			.delete(`/products/${id}`)
			.then((res) => {
				setProducts((prev) => prev.filter((p) => p.id !== id));
				Alert("info", "محصول با موفقیت حذف شد");
			})
			.catch((res) => {
				Alert("error", "محصول حذف نشد")
			});

		
	};

	const table = useReactTable({
		data: products,
		columns: columns(toggleShow, removeProduct),
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full">
			<div className="flex items-center py-4">
				<Input placeholder="فیلتر محصولات بر اساس نام" value={(table.getColumn("title")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)} className="max-w-sm" />
			</div>
			<div className="overflow-hidden rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>;
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									بدون نتیجه.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end px-2 mt-4">
				<div className="flex gap-2 3xs:gap-0 items-center space-x-0 md:space-x-6 lg:space-x-8">
					<div className="flex items-center space-x-2">
						<Select
							value={`${table.getState().pagination.pageSize}`}
							onValueChange={(value) => {
								table.setPageSize(Number(value));
							}}
						>
							<SelectTrigger className="h-8 w-[70px] flex-center gap-5 border border-black/70 rounded-md">
								<SelectValue placeholder={table.getState().pagination.pageSize} />
							</SelectTrigger>
							<SelectContent side="top">
								{[5, 10, 20, 30, 40, 50, 100].map((pageSize) => (
									<SelectItem key={pageSize} value={`${pageSize}`}>
										{pageSize}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="flex 3xs:w-[70px]  2xs:w-[100px] items-center justify-center text-xs 2xs:text-sm font-medium">
						صفحه {table.getState().pagination.pageIndex + 1} از {table.getPageCount()}
					</div>
					<div className="flex items-center space-x-2 dir-ltr">
						<Button variant="outline" size="icon" className="hidden size-8 lg:flex" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
							<span className="sr-only">Go to first page</span>
							<ChevronsLeft />
						</Button>
						<Button variant="outline" size="icon" className="size-8" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
							<span className="sr-only">Go to previous page</span>
							<ChevronLeft />
						</Button>
						<Button variant="outline" size="icon" className="size-8" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
							<span className="sr-only">Go to next page</span>
							<ChevronRight />
						</Button>
						<Button variant="outline" size="icon" className="hidden size-8 lg:flex" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
							<span className="sr-only">Go to last page</span>
							<ChevronsRight />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
