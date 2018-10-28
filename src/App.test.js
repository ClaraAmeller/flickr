import App from "./App";

it("renders without crashing", () => {
	const wrapper = shallow(<App />);
	const title = <h1> Hello, Flickr! </h1>;
	expect(wrapper.contains(title)).toEqual(true);
});