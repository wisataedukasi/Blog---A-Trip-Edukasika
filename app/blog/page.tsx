import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Placeholder for blog post type and data
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

// Static placeholder data for blog posts
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

export const metadata = {
  title: "Blog - A Trip Edukasika",
  description: "Baca artikel dan berita terbaru seputar dunia gerabah dan edukasi dari A Trip Edukasika.",
}

export default async function BlogPage() {
  const blogPosts: BlogPost[] = staticBlogPosts // Use static data

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">Blog</Badge>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">Artikel & Berita Terbaru</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Temukan inspirasi, pengetahuan, dan kisah menarik seputar dunia gerabah dan edukasi budaya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.sys.id} className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <Image
                src={post.fields.featuredImage?.fields.file?.url || "/placeholder.svg?height=200&width=300"}
                alt={post.fields.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-2">{post.fields.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {new Date(post.fields.publishDate).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.fields.description}</p>
                <Link href={`/blog/${post.fields.slug}`} className="text-[#FEA62D] hover:underline flex items-center">
                  Baca Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" passHref>
            <Button
              size="lg"
              variant="outline"
              className="border-[#FEA62D] text-[#FEA62D] hover:bg-[#FEA62D]/10 font-semibold px-8 py-4 bg-transparent"
            >
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
