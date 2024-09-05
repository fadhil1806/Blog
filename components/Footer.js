import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";

export default function Footer() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10 mb-3 border-t ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 mt-5">
                <div className="">
                    <h2 className="font-bold text-xl">About</h2>
                    <p style={{ textAlign: 'justify', letterSpacing: '1px' }} className="font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <p className="mt-2"><span className="font-bold">Email: </span>info@gmail.com</p>
                    <p className="mt-2"><span className="font-bold">Phone: </span>62+ 895 1121 1112</p>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Quick Link</h2>
                    <ul>
                        {["Home", "Blog", "Single Post", "Pages", "Contact"].map((menuItem, index) => (
                            <li key={index}>
                                <a className="font-medium font-sans cursor-pointer hover:text-blue-500">{menuItem}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="">
                        <h2 className="text-sans font-bold text-xl">Weekly Newsletter</h2>
                        <p>Get blog articles and offers via email</p>
                        <div className="mt-2 gap-2 grid">
                            <div class="relative flex items-center">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    class="w-full p-2 pl-6 pr-12 text-gray-700 border border-blue-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                                />
                                <div class="absolute right-4">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                            </div>
                            <button className="bg-blue-500 p-2 text-white rounded-sm w-full">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 border-t">
                <div className="mt-4 flex gap-4">
                    <div>
                        <Logo />
                    </div>
                    <ul className="flex gap-5">
                        {['Terms of Use', 'Privacy Policy', 'Cookie Policy'].map((menu, index) => (
                            <li key={index} className="text-black">
                                <a className="font-medium font-sans cursor-pointer hover:text-blue-600">{menu}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}