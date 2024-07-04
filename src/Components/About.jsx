import Navigation from "./Navigation"
const About = () => {
    return (
        <>
        <Navigation></Navigation>
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-green-600 text-3xl font-semibold mb-6">About Us</h1>
                <div className="mb-6">
                    <p className="text-lg text-gray-700 mb-4">
                        At Nature Farm, we are passionate about sustainable agriculture. We specialize in both organic and inorganic cultivation practices, striving to provide high-quality produce while respecting the environment.
                    </p>
                    <p className="text-lg text-gray-700">
                        Our commitment to organic farming involves using natural fertilizers and pesticides, promoting soil health and biodiversity. Simultaneously, our inorganic cultivation methods ensure efficiency and yield, meeting diverse market demands.
                    </p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
                    <p className="text-lg text-gray-700">
                        To deliver fresh, nutritious, and sustainably grown crops to our community while embracing innovation and eco-friendly practices in agriculture.
                    </p>
                </div>
            </div>
        </>
    )
}
export default About