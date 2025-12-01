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
import { Textarea } from "../ui/textarea";

export const dynamic = "force-dynamic";
type ProductImage = {
	image1?: string | File;
	image2?: string | File;
	primary: boolean;
  };
export type Product = {
	id: string;
	title: string;
	images: ProductImage[];
	show: boolean;
	description: string;
};

export const columns = (toggleShow: (id: string, show: boolean) => void, removeProduct: (id: string) => void, editProduct: (id: string, title: string, description: string, image1: File | string | undefined, image2: File | string | undefined,show:boolean) => void): ColumnDef<Product>[] => [
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
		accessorKey: "description",
		header: "توضیحات",
		cell: ({ row }) => {
			const desc = row.original.description.split("/");

			return (
				<div className="capitalize text-sm">
					<ul>
						{desc.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			);
			// <div className="capitalize text-sm">{row.getValue("description")}</div>
		},
	},
	{
		accessorKey: "primary image",
		header: "عکس اول",
		cell: ({ row }) => {
			const images = row.original.images;

			return (
				<div className="flex gap-2 size-20">
					<img src={`${images[0].image1}`} alt="product" className="object-cover rounded" />
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
				<div className="flex gap-2 size-20">
					<img src={`${images[1].image2}`} alt="product" className="object-cover rounded" />
				</div>
			);
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const product = row.original;
			const [title, setTitle] = React.useState(product.title);
			const [description, setDescription] = React.useState(product.description);
			const [image1, setImage1] = React.useState<File | string | undefined>(product.images[0].image1);
			const [image2, setImage2] = React.useState<File | string | undefined>(product.images[1].image2);

			const previewImage = (e: any) => {
				const [file] = e.target.files;
				if (file) {
					e.target.nextElementSibling.src = URL.createObjectURL(file);
				}
			};
			return (
				<div className="flex gap-3">
					{/* show / hide */}
					<div onClick={() => toggleShow(product.id, product.show)} className="p-1.5 text-white bg-sky-500 max-w-max rounded-md cursor-pointer">
						{product.show ? <AiOutlineEye className="size-5" /> : <AiOutlineEyeInvisible className="size-5 text-red-300" />}
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
										<Input value={title} onChange={(e) => setTitle(e.target.value)} id="name-1" name="name" required />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="name-2" className="font-dana">
											توضیحات
										</Label>
										<Textarea value={description} onChange={(e) => setDescription(e.target.value)} id="name-2" />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="name-1" className="font-dana mt-4">
											عکس ها
										</Label>
										<div className="grid grid-cols-2 gap-5 font-dana">
											<label htmlFor="file-1" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
												<img src={image1} alt="" />
												<input
													accept="image/*"
													onChange={(e) => {
														e.target.files ? setImage1(e.target.files[0]) : "";
														previewImage(e);
													}}
													id="file-1"
													type="file"
													className="hidden"
												/>
												<img id="blah" src="/" alt="" />
											</label>
											<label htmlFor="file-2" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
												<img src={image2} alt="" />
												<input
													accept="image/*"
													onChange={(e) => {
														e.target.files ? setImage2(e.target.files[0]) : "";
														previewImage(e);
													}}
													id="file-2"
													type="file"
													className="hidden"
												/>
												<img id="blah" src="/" alt="" />
											</label>
										</div>
									</div>
								</div>
								<DialogFooter>
									<DialogClose asChild>
										<Button className="font-dana" variant="outline">
											بستن
										</Button>
									</DialogClose>
									<Button className="font-dana" type="submit" onClick={() => editProduct(product.id, title, description, image1, image2,product.show)}>
										ویرایش
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
				Alert("success", show ? "محصول پنهان شد" : "محصول نمایش داده شد");
			})
			.catch((res) => Alert("error", "وضعیت محصول تغییری نکرد"));
	};
	const removeProduct = async (id: string) => {
		await apiRequests
			.delete(`/products/${id}`)
			.then((res) => {
				setProducts((prev) => prev.filter((p) => p.id !== id));
				Alert("success", "محصول با موفقیت حذف شد");
			})
			.catch((res) => {
				Alert("error", "محصول حذف نشد");
			});
	};
	const upload = async (file: any) => {
		const upload_preset = "user_images";
		const cloud_name = "dt0lzjiwt";
		const api_key = "695583444611436";

		if (file.name === undefined) {
			return false;
		}

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", upload_preset);
		formData.append("api_key", api_key);

		try {
			const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
				method: "POST",
				body: formData,
			});

			const data = await response.json();

			if (data.secure_url) {
				return data.secure_url;
			}
		} catch (error) {
			Alert("error", error);
		}
	};
	const editProduct = async (id: string, title: string, description: string, image1: File | string | undefined, image2: File | string | undefined,show:boolean) => {

		let uploadedImages = [
			{ image1, primary: true },
			{ image2, primary: false },
		];
		if (image1 instanceof File) {
			const url1 = await upload(image1);
			uploadedImages[0].image1 = url1;	
		}
		if (image2 instanceof File) {
			const url2 = await upload(image2);
			uploadedImages[1].image2 = url2;
		}
		const data = {
			id,
			title,
			description,
			show,
			images: uploadedImages,
		};
		await apiRequests
			.put(`/products/${id}`,data)
			.then((res) => {
				setProducts((prev) => prev.map(p => p.id === id ? data : p));
				Alert("success", "محصول با موفقیت ویرایش شد");
			})
			.catch((res) => {
				Alert("error", "محصول ویرایش نشد");
			});
	};

	const table = useReactTable({
		data: products,
		columns: columns(toggleShow, removeProduct, editProduct),
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
