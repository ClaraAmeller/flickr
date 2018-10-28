import Gallery from "./Gallery";

jest.mock("../api/search");

it("fetches posts from api", done => {
	const wrapper = shallow(<Gallery />);

	setTimeout(() => {
		wrapper.update();

		const state = wrapper.instance().state;
		expect(state.photos.length).toEqual(1);
		expect(wrapper.find("Card").length).toEqual(1);

		done();
	})
});
