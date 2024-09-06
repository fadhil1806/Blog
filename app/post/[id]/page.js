'use client'; // Pastikan 'use client' ada di awal file untuk mengizinkan penggunaan hooks
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'; // Menggunakan useRouter dari next/navigation
import Image from 'next/image';

import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import posts from '@/components/DataPost';

export default function SinglePagePost() {
    const router = useRouter();
    const params = useParams();
    const data = posts.filter(post => post.id == params.id);
    if (data.length === 0) {
        router.push('/404')
        return null
    }

    const post = data[0];
    return (
        <>
            <Navbar />
            <div className='mx-auto max-w-7xl px-7 lg:px-8'>
                <div>
                    <h1 className="font-bold text-3xl">{post.title}</h1>
                    <div className="flex items-center gap-x-5 text-xs">
                        <div className="relative mt-2 flex items-center gap-x-4">
                            <Image
                                alt="Author Image"
                                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="h-10 w-10 rounded-full bg-gray-50"
                                width={40} // Specify the width of the image
                                height={40} // Specify the height of the image
                            />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <a>
                                        <span className="absolute inset-0" />
                                        {post.author.name}
                                    </a>
                                </p>
                                <p className="text-gray-600">{post.author.role}</p>
                            </div>
                        </div>
                        <time className="text-gray-500 text-sm">{post.date}</time>
                    </div>
                </div>
                <div>
                    <Image
                        className="w-full max-h-[650px] object-cover rounded-lg shadow-lg mt-2"
                        src={post.img}
                        alt="Post Image"
                        width={1200} // Adjust width according to your design
                        height={650} // Adjust height according to your design
                    />
                </div>
            </div>
            <div className='mx-auto max-w-7xl px-7 lg:px-8 mt-7'>
                <article className='max-w-4xl mx-auto'>
                    <div className='text-md'>
                        Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don&apos;t plan and prepare adequately. In this blog article, we&apos;ll explore tips and tricks for a memorable journey and how to make the most of your travels.
                        One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
                    </div>
                    <div className='mt-3'>
                        <h2 className='font-semibold text-xl mb-3'>Plan Your Itinerary</h2>
                        <p>
                            While it&apos;s essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
                            Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
                        </p>
                    </div>
                    <div className='mt-3'>
                        <h2 className='font-semibold text-xl mb-3'>Pack Lightly and Smartly</h2>
                        <p>
                            Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.
                        </p>
                    </div>
                    <div className='mt-3'>
                        <h2 className='font-semibold text-xl mb-3'>Stay Safe and Healthy</h2>
                        <p>
                            Traveling can expose you to new environments and potential health risks, so it&apos;s crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It&apos;s also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.
                        </p>
                    </div>
                </article>
            </div>
            <Footer />
        </>
    );
}
