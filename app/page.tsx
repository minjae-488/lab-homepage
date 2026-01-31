export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <section className="text-center">
                    <h1 className="text-5xl font-bold text-primary-700 mb-6">
                        Welcome to Our Research Lab
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Advancing the frontiers of knowledge through innovative research and collaboration
                    </p>
                </section>

                <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-primary-600 mb-4">Our Research</h2>
                        <p className="text-gray-600">
                            Explore our cutting-edge research projects and publications
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-primary-600 mb-4">Our Team</h2>
                        <p className="text-gray-600">
                            Meet our dedicated researchers and collaborators
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-primary-600 mb-4">Publications</h2>
                        <p className="text-gray-600">
                            Browse our latest papers and academic contributions
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
