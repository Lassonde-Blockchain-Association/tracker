export async function GET(request) {
	const githubApiToken = process.env.GITHUB_API_TOKEN;
	const githubApiUrl = process.env.GITHUB_API_URL;

	return new Response(
		JSON.stringify({ message: "Hello from the API /api/repositories" }),
		{
			headers: { "Content-Type": "application/json" },
		}
	);
}

// Path: app-tracker/app/api/repositories/route.js
// /api/repositories/contributors/:reponame
