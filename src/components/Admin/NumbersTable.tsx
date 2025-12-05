"use client";

import * as React from "react";
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MdOutlineCancel } from "react-icons/md";
import apiRequests from "@/services/config";
import Alert from "@/lib/Alert";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FiEdit } from "react-icons/fi";
import { Label } from "@/components/ui/label";

export const dynamic = "force-dynamic";

export type Numbers = {
	id: string;
	number: string;
	platform: string;
	show: boolean;
};

export const columns = (removeNumber: (id: string) => void, editNumber: (id: string, number: string, platform: string, show: boolean) => void, toggleShow: (id: string, show: boolean) => void): ColumnDef<Numbers>[] => [
	{
		accessorKey: "id",
		header: "شناسه",
		cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
	},
	{
		accessorKey: "number",
		header: "شماره",
		cell: ({ row }) => <div className="capitalize text-lg">{row.getValue("number")}</div>,
	},
	{
		accessorKey: "platform",
		header: "پلتفرم",
		cell: ({ row }) => {
			const platform = row.original.platform;
			return (
				<div className="flex items-center gap-2">
					<div className="text-3xl">{platform === "whatsapp" ? <FaWhatsapp className="text-green-500" /> : platform === "telegram" ? <FaTelegram className="text-sky-500" /> : <FaInstagram className="text-pink-500" />}</div>
					<div className="text-lg">{platform}</div>
				</div>
			);
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const numbers = row.original;
			const [number, setNumber] = React.useState(numbers.number);
			const [platform, setPlatform] = React.useState(numbers.platform);

			return (
				<div className="flex gap-3">
					{/* show / hide */}
					<div onClick={() => toggleShow(numbers.id, numbers.show)} className="p-1.5 text-white bg-sky-500 max-w-max rounded-md cursor-pointer">
						{numbers.show ? <AiOutlineEye className="size-5" /> : <AiOutlineEyeInvisible className="size-5 text-red-300" />}
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
									<DialogTitle className="font-dana">ویرایش شماره</DialogTitle>
								</DialogHeader>
								<div className="grid gap-4">
									<div className="grid gap-3">
										<Label htmlFor="name-1" className="font-dana">
											شماره
										</Label>
										<Input value={number} onChange={(e) => setNumber(e.target.value)} id="name-1" name="name" required />
									</div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="outline" className="flex items-center gap-2 h-12">
												{platform === "whatsapp" ? <FaWhatsapp className="text-green-500 text-2xl size-6" /> : platform === "telegram" ? <FaTelegram className="text-sky-500 text-2xl size-6" /> : <FaInstagram className="text-pink-500 text-2xl size-6" />}
												<span className="font-medium">{platform}</span>
												<ChevronDownIcon />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="center" className="w-[200px]">
											<DropdownMenuGroup>
												<DropdownMenuItem className="p-1" onClick={() => setPlatform("whatsapp")}>
													<a href="#" className="flex items-center gap-2">
														<FaWhatsapp className="text-green-500 text-2xl" />
														<span>WhatsApp</span>
													</a>
												</DropdownMenuItem>
												<DropdownMenuItem className="p-1" onClick={() => setPlatform("telegram")}>
													<a href="#" className="flex items-center gap-2">
														<FaTelegram className="text-sky-500 text-2xl" />
														<span>Telegram</span>
													</a>
												</DropdownMenuItem>
												<DropdownMenuItem className="p-1" onClick={() => setPlatform("instagram")}>
													<a href="#" className="flex items-center gap-2">
														<FaInstagram className="text-pink-500 text-2xl" />
														<span>Instagram</span>
													</a>
												</DropdownMenuItem>
											</DropdownMenuGroup>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
								<DialogFooter>
									<DialogClose asChild>
										<Button className="font-dana" variant="outline">
											بستن
										</Button>
									</DialogClose>
									<Button className="font-dana" type="submit" onClick={() => editNumber(numbers.id, number, platform, numbers.show)}>
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
									<DialogTitle className="font-dana text-right my-5">شماره حذف شود ؟</DialogTitle>
								</DialogHeader>
								<DialogFooter className="dir-rtl">
									<DialogClose asChild onClick={() => removeNumber(numbers.id)}>
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

export function NumbersTable({ data }: { data: Numbers[] }) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const [numbers, setNumbers] = React.useState(data);

	const removeNumber = async (id: string) => {
		await apiRequests
			.delete(`/numbers/${id}`)
			.then((res) => {
				setNumbers((prev) => prev.filter((p) => p.id !== id));
				Alert("success", "شماره با موفقیت حذف شد");
			})
			.catch((res) => {
				Alert("error", "شماره حذف نشد");
			});
	};

	const editNumber = async (id: string, number: string, platform: string, show: boolean) => {
		const data = {
			id,
			number,
			platform,
			show,
		};

		await apiRequests
			.put(`/numbers/${id}`, data)
			.then((res) => {
				setNumbers((prev) => prev.map((p) => (p.id === id ? data : p)));
				Alert("success", "شماره با موفقیت ویرایش شد");
			})
			.catch((res) => {
				Alert("error", "شماره ویرایش نشد");
			});
	};
	const toggleShow = async (id: string, show: boolean) => {
		await apiRequests
			.patch(`/numbers/${id}`, { show: !show })
			.then((res) => {
				setNumbers((prev) => prev.map((p) => (p.id === id ? { ...p, show: !show } : p)));
				Alert("success", show ? "شماره پنهان شد" : "شماره نمایش داده شد");
			})
			.catch((res) => Alert("error", "شماره محصول تغییری نکرد"));
	};

	const table = useReactTable({
		data: numbers,
		columns: columns(removeNumber, editNumber, toggleShow),
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
		<div className="w-full mt-10">
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
		</div>
	);
}
function ChevronDownIcon() {
	return (
		<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="m6 9 6 6 6-6" />
		</svg>
	);
}