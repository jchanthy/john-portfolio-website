import Image from 'next/image';

export default function Hero() {
    return (
        <section className="text-center py-20 bg-gray-50">
            <Image
                src="/images/avatar.jpg"
                alt="My Avatar"
                width={150}
                height={150}
                className="rounded-full mx-auto"
            />
            <h1 className="mt-5 text-4xl font-bold">Hi, I'm [Your Name]</h1>
            <p className="mt-3 text-gray-600">Web Developer | Designer | Tech Enthusiast</p>
        </section>
    );
}
