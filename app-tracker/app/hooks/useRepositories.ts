import { useEffect, useState } from "react";

// Define the structure of a Repository
interface Repository {
	name: string;
	description?: string;
	url: string;
}

interface UseRepositoriesResult {
	repositories: Repository[];
	loading: boolean;
	error: string | null;
}

export function useRepositories(): UseRepositoriesResult {
	const [repositories, setRepositories] = useState<Repository[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRepositories = async () => {
			try {
				const response = await fetch("/api/repositories");
				if (!response.ok) throw new Error("Failed to fetch repositories");
				const data: Repository[] = await response.json();
				setRepositories(data);
			} catch (err) {
				console.error("Error fetching data:", err);
				setError((err as Error).message);
			} finally {
				setLoading(false);
			}
		};

		fetchRepositories();
	}, []);

	return { repositories, loading, error };
}
