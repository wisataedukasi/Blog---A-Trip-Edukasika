import type { MetadataRoute } from "next"
import { staticBlogPosts } from "@/lib/blog-data" // Import centralized data

// Placeholder for blog post type and data (copied from app/blog/page.tsx for consistency)
interface BlogPost {
  sys: {
    id: string
  }
  fields: {
    title: string
    slug: string
    publishDate: string
    featuredImage?: {
      fields: {
        file: {
          url: string
        }
        description?: string
      }
    }
    description: string
    content: string // Simplified for placeholder
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wisataedukasika.space"
  const currentDate = new Date().toISOString().split("T")[0] + "T00:00:00+00:00" // Current date for lastmod

  const blogPosts = staticBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.fields.slug}`,
    lastModified: new Date(post.fields.publishDate).toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/kebijakan-privasi`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ]
}
