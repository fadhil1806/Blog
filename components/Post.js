import { useRouter } from "next/router";
import posts from "./DataPost";

export default function Post() {

    function pagination(url) {
        window.location.href = '/post/' + url;
    }

    // Handler untuk klik gambar
    const handleClick = (id) => {
        return () => pagination(id);
    };

    return (
        <div className="bg-white py-1 sm:py-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <img
                                src={post.img}
                                onClick={handleClick(post.id)}
                                className="h-[400px] w-full object-cover max-h-[300px] rounded-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                                alt="Post image"
                            />
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={'/post/' + post.id}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
