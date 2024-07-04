import Navigation from "./Navigation";
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
        <Navigation></Navigation>
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-green-600 text-3xl font-semibold mb-6">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-medium mb-2">Your Name</label>
                        <input type="text" id="name" name="name" className="border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-medium mb-2">Your Email</label>
                        <input type="email" id="email" name="email" className="border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-lg font-medium mb-2">Message</label>
                        <textarea id="message" name="message" rows="4" className="border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
                    </div>
                    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">Submit</button>
                </form>
            </div>
        </>);
};

export default Contact