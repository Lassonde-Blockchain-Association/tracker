"use client";
import "./repositories.css";
import "../spinner.css";
import { useRepositories } from "../hooks/useRepositories";

function Repositories() {
	const { repositories, loading } = useRepositories();

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
							View Contributors
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default Repositories;
