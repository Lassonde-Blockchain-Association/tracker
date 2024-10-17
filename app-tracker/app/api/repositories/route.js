export async function GET(request) {
	const githubApiToken = process.env.GITHUB_API_TOKEN;
	const githubApiUrl = process.env.GITHUB_API_URL;


	try {
		// Fetch repositories from GitHub API
		const response = await axios({
			method: 'get',
			url: `${GITHUB_API_URL}/orgs/Lassonde-Blockchain-Association/repos`,
			headers: {
				'Accept': 'application/vnd.github+json',
				'Authorization': `Bearer ${GITHUB_API_TOKEN}`,
				'X-Github-Api-Version': '2022-11-28'
			}
		});

		// List repositories
		const repos = response.data;
		
		// Return the repositories in the response
		return new Response(JSON.stringify(repos), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		// Handle any errors
		console.error('Error fetching repositories:', error.message);
		return new Response('Failed to fetch repositories', { status: 500 });
	}

}

// Path: app-tracker/app/api/repositories/route.js
// /api/repositories/contributors/:reponame
