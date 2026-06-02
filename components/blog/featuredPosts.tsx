import { getFeaturedPosts } from "@/sanity/queries";
import Link from "next/link";
import dayjs from "dayjs";
import Container from "../Container";
import { image } from "@/sanity/image";
import Image from "next/image";

// Define proper image asset type
interface ImageAsset {
  _ref?: string;
  _type?: string;
  url?: string;
}

// Define blog post type with proper nested structure
interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  mainImage?: {
    alt?: string;
    asset: ImageAsset;
  };
  author?: {
    name: string;
    image?: {
      asset: ImageAsset;
    };
  };
}

export const FeaturedPosts = async () => {
  const featuredPosts: BlogPost[] = await getFeaturedPosts(3);

  if (!featuredPosts || featuredPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 bg-gradient-to-t from-gray-200 pb-14">
      <Container>
        <h2 className="text-2xl font-semibold tracking-wide">
          My Featured Blog
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5 group"
            >
              <div className="overflow-hidden rounded-2xl relative aspect-[3/2]">
                {post.mainImage && (
                  <Image
                    alt={post.mainImage.alt || ""}
                    src={image(post.mainImage).size(1170, 780).url()}
                    fill
                    className="rounded-2xl object-cover group-hover:scale-110 duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {dayjs(post.publishedAt).format("dddd, MMMM D, YYYY")}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {post?.excerpt}
                </div>

                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <Image
                        alt={post.author.name}
                        src={image(post.author.image).size(64, 64).url()}
                        width={24}
                        height={24}
                        className="aspect-square rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm/5 text-gray-700">
                      {post.author.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
