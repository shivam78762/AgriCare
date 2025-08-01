// app/blogs/[slug]/page.jsx
import InnerBanner from "@/app/components/Banner";
import blogPosts from "@/app/components/BlogPosts";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaEye,
  FaCommentDots,
  FaCalendarAlt,
  FaLongArrowAltRight,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

// Generate static paths
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({ params }) {
  const { slug } = params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold text-red-500">Blog Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <InnerBanner title="Reviving Deserts" />
      <div className="container mx-auto px-5 lg:px-28 py-20">
        <div className="flex flex-wrap  -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            {/* Blog Content */}
            <Image
              src={post.image}
              width={800}
              height={400}
              alt={post.title}
              className="rounded-lg mb-6"
            />

            <div className="details__content space-y-6">
              <h2 className="text-lg lg:text-3xl font-bold leading-snug">
                {post.title}
              </h2>

              <ul className="flex flex-wrap gap-4 text-sm text-gray-600">
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

              <p className="text-lg text-justify">
                {post.excerpt} {post.description}
              </p>

              <p className="text-lg text-justify">{post.para2}</p>

              <blockquote className="bg-green-50 border-l-4 border-green-700 p-6 italic rounded shadow-md">
                <footer className="font-semibold text-[#2d7372] mb-2">
                  Conclusion -
                </footer>
                {post.para3}
              </blockquote>
            </div>
            {/* Related Posts */}
            <div className="related__post my-12">
              <h4 className="text-2xl font-bold mb-6">Related Posts</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((p) => p.slug !== slug)
                  .slice(0, 2)
                  .map((post, i) => (
                    <div
                      key={post.slug}
                      className="related-post-wrap bg-white shadow hover:shadow-2xl border border-[#eee] hover:border-[#2d7372] rounded-lg overflow-hidden"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="w-full h-[250px]"
                      />
                      <div className="p-3 lg:p-6">
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
                        <p className="text-gray-600  text-justify mb-4">{post.excerpt}</p>
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

            <div className="comment-form mt-10">
              <h3 className="text-2xl font-bold mb-6">Leave a Reply</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border px-4 py-2 w-full rounded"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border px-4 py-2 w-full rounded"
                  />
                  <input
                    type="text"
                    placeholder="Your Website"
                    className="border px-4 py-2 w-full rounded"
                  />
                </div>
                <textarea
                  placeholder="Your Comment"
                  className="border px-4 py-2 w-full rounded h-32"
                />
                <button
                  type="submit"
                  className="bg-[#2d7372] text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4 mt-12 lg:mt-0 ">
            <div className="space-y-10 sticky top-24">
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
                    className="bg-[#2d7372] text-white px-4 hover:bg-green-700"
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* Follow Us */}
              <div className="bg-white rounded-lg shadow p-5">
                <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4 text-xl text-gray-500">
                  <a href="#" className="hover:text-[#2d7372] transition">
                    <FaTwitter />
                  </a>
                  <a href="#" className="hover:text-[#2d7372] transition">
                    <FaWhatsapp />
                  </a>
                  <a href="#" className="hover:text-[#2d7372] transition">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-[#2d7372] transition">
                    <FaInstagram />
                  </a>
                  <a href="#" className="hover:text-[#0A66C2] transition">
                    <FaLinkedin />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
