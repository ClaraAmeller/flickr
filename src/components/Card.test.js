import Card from "./Card";

describe("<Card />", () => {
	const wrapper = mount(
		<Card imgId="1" src="https://www.flickr.com/cat.jpg" userId="1" username="clara" caption="This is my cat John">
			<Image />
		</Card>
	);

	it("renders <Image /> with an image linked to the original post", () => {
		const imageWrapper = wrapper.find("Image");
		const href = imageWrapper.find("a").props().href;
		const src = imageWrapper.find("img").props().src;

		expect(href).toEqual("https://www.flickr.com/photos/1/1");
		expect(src).toEqual("https://www.flickr.com/cat.jpg");

	});

	it("renders username and caption", () => {
		expect(wrapper.find(".username").text()).toEqual("clara");
		expect(wrapper.find(".caption").text()).toEqual("This is my cat John");
	});
});
