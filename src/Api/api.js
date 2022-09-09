const zipcodes = `https://api.zippopotam.us/`;

async function getFetch(apiUrl) {
	const response = await fetch(apiUrl, {
		method: 'GET',
	});
	const data = response.json();
	return data;
}

export { getFetch }