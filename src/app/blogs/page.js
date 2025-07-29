"use client";

import Image from "next/image";
import Link from "next/link";
import blogPosts from "../components/BlogPosts";
import {
  FaEye,
  FaCommentDots,
  FaCalendarAlt,
  FaTwitter,
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
  FaWordpressSimple,
  FaLongArrowAltRight,
} from "react-icons/fa";
import InnerBanner from "../components/Banner";

export default function BlogSection() {
  return (
    <>
      <>
        <InnerBanner title="Blogs" />
        <section className="py-20">
          <div className="container mx-auto px-5 lg:px-28">
            <div className="flex flex-wrap -mx-4">
              {/* Blog Listing */}
              <div className="w-full lg:w-2/3 px-4">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="w-full h-[250px]"
                      />
                      <div className="p-6">
                        <ul className="flex flex-wrap gap-4 text-base text-gray-500 mb-3">
                          <li className="flex items-center gap-1">
                            <FaEye /> {post.views} Views
                          </li>
                          <li className="flex items-center gap-1">
                            <FaCommentDots /> {post.comments} Comments
                          </li>
                          <li className="flex items-center gap-1">
                            <FaCalendarAlt /> {post.date}
                          </li>
                        </ul>
                        <h2 className="text-xl font-bold mb-3">
                          <Link
                            href={`/blogs/${post.slug}`}
                            className="hover:text-green-700 transition duration-300"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4 text-justify">
                          {post.excerpt}
                        </p>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="inline-flex items-center text-green-700 hover:underline font-medium"
                        >
                          Read More <FaLongArrowAltRight className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-1/3 px-4 mt-12 lg:mt-0 space-y-10">
                {/* Search */}
                <div className="bg-white rounded-lg shadow p-5">
                  <h2 className="text-xl font-semibold mb-4">Search</h2>
                  <form className="flex border rounded overflow-hidden">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 hover:bg-green-700"
                    >
                      Search
                    </button>
                  </form>
                </div>

                {/* Follow Us */}
                <div className="bg-white rounded-lg shadow p-5">
                  <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                  <div className="flex space-x-4 text-xl text-gray-500">
                    <a href="#" className="hover:text-green-600 transition">
                      <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-green-600 transition">
                      <FaPinterestP />
                    </a>
                    <a href="#" className="hover:text-green-600 transition">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-green-600 transition">
                      <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-green-600 transition">
                      <FaWordpressSimple />
                    </a>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-lg shadow p-5">
                  <h2 className="text-xl font-semibold mb-4">Categories</h2>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Soil Food",
                      "Soil Food 4G-Plus",
                      "Agriphos",
                      "Ari Potash",
                      "Soil Food 5G-Plus",
                    ].map((cat, idx) => (
                      <li key={idx}>
                        <a href="#" className="hover:underline">
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-Action Box */}
                <div className="bg-[#f3f4f8] px-5 py-10 text-center mt-8 mb-8">
                  <h3 className="text-2xl md:text-3xl font-semibold relative pb-4 mb-6 inline-block">
                    If You Need Any Help Contact With Us
                    <span className="absolute left-1/2 bottom-0 w-[30px] h-[6px] bg-[#097562] rounded-[10px] transform -translate-x-1/2"></span>
                  </h3>
                  <br />
                  <a
                    href="tel:+971585405802"
                    title="Call now"
                    className="text-[#097562] text-2xl font-bold transition duration-300 hover:text-[#075f50]"
                  >
                    +971 585589552
                  </a>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-lg shadow p-5">
                  <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "User Experience Psychology And Performance Smashing",
                      "Monthly Web Development Up Cost Of JavaScript",
                      "There are many variation passages of like available.",
                    ].map((post, idx) => (
                      <li key={idx}>
                        <a href="#" className="block hover:underline">
                          {post}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
