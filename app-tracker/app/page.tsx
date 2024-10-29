"use client";
import React from "react";

import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	return (
		<div>
			<h1>LBA Tracker App</h1>
			<button
				onClick={() => router.push("/repositories")}
				style={{
					backgroundColor: "black",
					padding: 20,
					color: "white",
					borderRadius: 20,
				}}
			>
				See Repositories
			</button>
		</div>
	);
}
