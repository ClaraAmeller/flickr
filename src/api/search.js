export default async (api_key, tags, perPage, extras) => {
	const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&format=json&nojsoncallback=1&tags=${tags}&extras=${extras}&per_page=${perPage}`);
	const data = await response.json();
	return data.photos.photo;
}