"use client";
import { useEffect, useState } from "react";
import "./repositories.css";
import "../spinner.css";

function Repositories() {
	const [repositories, setRepositories] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/repositories")
			.then((response) => response.json())
			.then((data) => {
				setRepositories(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	return (
		<div className="repositories-container">
			<h1>Repositories</h1>
			{loading && <div className="spinner" />}
			<div className="repositories-list">
				{repositories.map((repository, index) => (
					<div key={index} className="repository-card">
						<h2>{repository.name}</h2>
						<p>
							Description:{" "}
							{repository.description || "No description provided."}
						</p>
						<a href={repository.url} target="_blank" rel="noopener noreferrer">
							View Repository
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default Repositories;
