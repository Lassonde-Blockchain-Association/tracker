export async function GET(request) {
	return new Response(
		JSON.stringify({
			message: "Hello from the API /api/repositories/contributors/[repo]",
		}),
		{
			headers: { "Content-Type": "application/json" },
		}
	);
}
