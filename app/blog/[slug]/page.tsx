import { staticBlogPosts } from "@/lib/blog-data" // Import centralized data
import BlogPostClientPage from "./BlogPostClientPage"

export async function generateStaticParams() {
  return staticBlogPosts.map((post) => ({
    slug: post.fields.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = staticBlogPosts.find((p) => p.fields.slug === params.slug)
  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
      description: "Artikel yang Anda cari tidak ditemukan.",
    }
  }
  return {
    title: `${post.fields.titleKey} - A Trip Edukasika Blog`, // Use key for metadata title
    description: post.fields.descriptionKey, // Use key for metadata description
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClientPage params={params} />
}
