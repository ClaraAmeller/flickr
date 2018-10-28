const fakeData = [{
	id: 1,
	url_m: "https://www.flickr.com/cat.jpg",
	owner: 1,
	description: {
		_content: "This is my cat John"
	}
}];

export default async () => {
	return await new Promise(resolve => {
		resolve(fakeData);
	});
}