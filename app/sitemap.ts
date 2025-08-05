import type { MetadataRoute } from "next"

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

// Static placeholder data for blog posts (copied from app/blog/page.tsx for consistency)
const staticBlogPosts: BlogPost[] = [
  {
    sys: { id: "1" },
    fields: {
      title: "Mengenal Lebih Dekat Gerabah Kasongan",
      slug: "mengenal-gerabah-kasongan",
      publishDate: "2024-07-15T10:00:00Z",
      featuredImage: {
        fields: {
          file: { url: "/images/pottery-class-1.jpg" },
          description: "Gerabah Kasongan",
        },
      },
      description: "Pelajari sejarah dan keunikan gerabah dari Desa Kasongan, Yogyakarta.",
      content: "Ini adalah konten lengkap dari artikel blog pertama.",
    },
  },
  {
    sys: { id: "2" },
    fields: {
      title: "Tips Membuat Gerabah Sendiri di Rumah",
      slug: "tips-membuat-gerabah",
      publishDate: "2024-07-10T10:00:00Z",
      featuredImage: {
        fields: {
          file: { url: "/images/pottery-class-3.jpg" },
          description: "Membuat gerabah",
        },
      },
      description: "Panduan langkah demi langkah untuk memulai hobi membuat gerabah di rumah.",
      content: "Ini adalah konten lengkap dari artikel blog kedua.",
    },
  },
  {
    sys: { id: "3" },
    fields: {
      title: "Manfaat Edukasi Gerabah untuk Anak",
      slug: "manfaat-edukasi-gerabah",
      publishDate: "2024-07-05T10:00:00Z",
      featuredImage: {
        fields: {
          file: { url: "/images/pottery-class-4.jpg" },
          description: "Anak-anak dengan gerabah",
        },
      },
      description: "Bagaimana kegiatan membuat gerabah dapat mengembangkan kreativitas dan motorik anak.",
      content: "Ini adalah konten lengkap dari artikel blog ketiga.",
    },
  },
  {
    sys: { id: "4" },
    fields: {
      title: "Desa Wisata Kasongan: Pusat Kerajinan Gerabah",
      slug: "desa-wisata-kasongan",
      publishDate: "2024-06-28T10:00:00Z",
      featuredImage: {
        fields: {
          file: { url: "/images/pottery-class-5.jpg" },
          description: "Desa Kasongan",
        },
      },
      description: "Jelajahi keindahan dan kekayaan budaya Desa Wisata Gerabah Kasongan.",
      content: "Ini adalah konten lengkap dari artikel blog keempat.",
    },
  },
]

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
    // Add other static pages here if needed
    // {
    //   url: `${baseUrl}/tentang-kami`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    // {
    //   url: `${baseUrl}/kontak`,
    //   lastModified: currentDate,
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
    ...blogPosts,
  ]
}
