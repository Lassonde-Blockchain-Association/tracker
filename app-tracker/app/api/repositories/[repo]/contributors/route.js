import axios from "axios";

//Async function to handle the GET request
export async function GET(request, { params }){
	//Get the Github API token and URL from environment variables
	const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;
	const GITHUB_API_URL = process.env.GITHUB_API_URL;

	//Extract the repository name from the dynamic params
	const repoName = params.repo; // 'params.repo' gives us the repo passed in the URL

	// Add the console.log statement here to debug
    console.log('Fetching contributors for repo:', repoName);

	try{
		//Make a GET request to GitHub API to fetch contributors of the selected repo
		const response = await axios({
			method: 'get',
			url: `${GITHUB_API_URL}/repos/Lassonde-Blockchain-Association/${repoName}/contributors`,
			headers: {
				'Accept': 'application/vnd.github+json',
				'Authorization': `Bearer ${GITHUB_API_TOKEN}`,
				'X-Github-Api-Version': '2022-11-28'
			}
		});

		//Store the list of contributors from the API responseu
		const contributors = response.data;

		//Return the contributors in the response
		return new Response(JSON.stringify(contributors),{
			header: {'Content-Type': 'application/json'}
		});
	}catch(error){
		//Log and handle anyerrors that occur during the API call
		console.error('Error fetching contributors: ', error.message);

		//Return a 500 status if the API request fails
		return new Response('Failed to fetch contributors',{status:500});
	}
}
