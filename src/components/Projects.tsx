import Image from 'next/image';

export default function Projects() {
    return (
        <section className="py-20 px-10 bg-gray-50">
            <h2 className="text-2xl font-bold mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="shadow-lg rounded-lg overflow-hidden">
                    <Image src="/images/project1.png" alt="Project" width={500} height={300} />
                    <div className="p-4">
                        <h3 className="font-bold text-xl">Project Title</h3>
                        <p className="mt-2 text-gray-600">Brief project description here.</p>
                    </div>
                </div>
                {/* Add more projects similarly */}
            </div>
        </section>
    );
}
