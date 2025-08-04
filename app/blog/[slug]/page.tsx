import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

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
          file: { url: "//images.ctfassets.net/your_space_id/your_asset_id/your_asset_hash/pottery-class-1.jpg" }, // Placeholder URL
          description: "Gerabah Kasongan",
        },
      },
      description: "Pelajari sejarah dan keunikan gerabah dari Desa Kasongan, Yogyakarta.",
      content: `
        <p>Desa Kasongan di Yogyakarta terkenal sebagai pusat kerajinan gerabah. Sejarahnya panjang, berawal dari tradisi turun-temurun yang diwariskan dari generasi ke generasi.</p>
        <p>Gerabah Kasongan memiliki ciri khas tersendiri, baik dari segi bentuk, motif, maupun teknik pembuatannya. Setiap karya mencerminkan kekayaan budaya lokal.</p>
        <h2>Proses Pembuatan Gerabah</h2>
        <p>Proses pembuatan gerabah di Kasongan melibatkan beberapa tahapan:</p>
        <ul>
          <li>Pengambilan dan pengolahan tanah liat</li>
          <li>Pembentukan (dengan tangan atau roda putar)</li>
          <li>Pengeringan</li>
          <li>Pembakaran</li>
          <li>Pewarnaan dan finishing</li>
        </ul>
        <img src="/images/pottery-class-2.jpg" alt="Proses pembuatan gerabah" />
        <p>Setiap tahapan dilakukan dengan cermat untuk menghasilkan gerabah berkualitas tinggi.</p>
        <h3>Filosofi di Balik Gerabah</h3>
        <p>Tidak hanya sekadar benda fungsional atau hiasan, gerabah Kasongan juga menyimpan filosofi mendalam tentang kehidupan, kesabaran, dan kreativitas. Ini adalah warisan yang patut dilestarikan.</p>
      `,
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
          file: { url: "//images.ctfassets.net/your_space_id/your_asset_id/your_asset_hash/pottery-class-3.jpg" }, // Placeholder URL
          description: "Membuat gerabah",
        },
      },
      description: "Panduan langkah demi langkah untuk memulai hobi membuat gerabah di rumah.",
      content: `
        <p>Membuat gerabah di rumah bisa menjadi hobi yang menyenangkan dan terapeutik. Berikut adalah beberapa tips untuk memulai:</p>
        <h2>Alat dan Bahan yang Dibutuhkan</h2>
        <ul>
          <li>Tanah liat khusus kerajinan</li>
          <li>Alat pembentuk (pisau, kawat pemotong, spons)</li>
          <li>Meja putar mini (opsional)</li>
          <li>Air</li>
          <li>Kuas dan cat akrilik (untuk finishing)</li>
        </ul>
        <h3>Langkah-langkah Dasar</h3>
        <p>1. Siapkan tanah liat: Pastikan tanah liat Anda lembab dan mudah dibentuk.</p>
        <p>2. Bentuk objek: Gunakan teknik pinch, coil, atau slab untuk membentuk objek yang Anda inginkan.</p>
        <img src="/images/pottery-class-6.jpg" alt="Membentuk gerabah" />
        <p>3. Keringkan: Biarkan objek mengering secara perlahan di tempat teduh. Proses ini bisa memakan waktu beberapa hari.</p>
        <p>4. Bakar (opsional): Jika Anda memiliki kiln, Anda bisa membakar gerabah untuk membuatnya lebih kuat. Jika tidak, Anda bisa menggunakan cat akrilik untuk finishing.</p>
        <p>5. Hias: Setelah kering atau dibakar, Anda bisa menghias gerabah Anda dengan cat atau glasir.</p>
      `,
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
          file: { url: "//images.ctfassets.net/your_space_id/your_asset_id/your_asset_hash/pottery-class-4.jpg" }, // Placeholder URL
          description: "Anak-anak dengan gerabah",
        },
      },
      description: "Bagaimana kegiatan membuat gerabah dapat mengembangkan kreativitas dan motorik anak.",
      content: `
        <p>Edukasi gerabah menawarkan berbagai manfaat bagi perkembangan anak, baik dari segi kognitif maupun motorik.</p>
        <h2>Pengembangan Keterampilan</h2>
        <ul>
          <li><strong>Kreativitas:</strong> Anak-anak bebas mengekspresikan ide mereka melalui bentuk dan warna.</li>
          <li><strong>Motorik Halus:</strong> Membentuk tanah liat melatih koordinasi tangan dan mata serta kekuatan jari.</li>
          <li><strong>Kesabaran:</strong> Proses pengeringan dan pembakaran mengajarkan anak tentang pentingnya kesabaran.</li>
          <li><strong>Pemecahan Masalah:</strong> Anak belajar mengatasi tantangan saat membentuk objek.</li>
        </ul>
        <img src="/images/pottery-class-5.jpg" alt="Anak-anak belajar gerabah" />
        <h3>Belajar Budaya</h3>
        <p>Selain keterampilan praktis, edukasi gerabah juga memperkenalkan anak pada warisan budaya lokal. Mereka belajar tentang sejarah dan nilai-nilai di balik seni tradisional ini.</p>
        <p>A Trip Edukasika berkomitmen untuk menyediakan pengalaman belajar yang menyenangkan dan mendidik bagi anak-anak.</p>
      `,
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
          file: { url: "//images.ctfassets.net/your_space_id/your_asset_id/your_asset_hash/pottery-class-5.jpg" }, // Placeholder URL
          description: "Desa Kasongan",
        },
      },
      description: "Jelajahi keindahan dan kekayaan budaya Desa Wisata Gerabah Kasongan.",
      content: `
        <p>Desa Kasongan, yang terletak di Bantul, Yogyakarta, adalah destinasi wajib bagi pecinta seni dan budaya. Desa ini telah lama dikenal sebagai sentra kerajinan gerabah terbesar di Yogyakarta.</p>
        <h2>Sejarah dan Perkembangan</h2>
        <p>Sejarah Kasongan sebagai pusat gerabah berawal dari legenda dan terus berkembang hingga menjadi desa wisata yang ramai dikunjungi. Para pengrajin di sini mewarisi keahlian dari leluhur mereka.</p>
        <img src="/images/pottery-class-7.jpg" alt="Pemandangan Desa Kasongan" />
        <h3>Apa yang Bisa Ditemukan di Kasongan?</h3>
        <ul>
          <li>Berbagai macam produk gerabah, dari hiasan hingga peralatan rumah tangga.</li>
          <li>Workshop tempat Anda bisa melihat langsung proses pembuatan gerabah.</li>
          <li>Galeri seni yang memamerkan karya-karya unik.</li>
          <li>Pengalaman interaktif membuat gerabah sendiri.</li>
        </ul>
        <p>Kunjungan ke Kasongan tidak hanya menawarkan kesempatan untuk membeli oleh-oleh, tetapi juga pengalaman edukasi yang mendalam tentang seni gerabah tradisional.</p>
      `,
    },
  },
]

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
    title: `${post.fields.title} - A Trip Edukasika Blog`,
    description: post.fields.description,
  }
}

// Options for rendering rich text to HTML (simplified as content is now static HTML string)
// This function is no longer needed for rich-text-html-renderer, but kept for structure
const renderHtmlContent = (htmlString: string) => {
  return htmlString
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = staticBlogPosts.find((p) => p.fields.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-4">Artikel Tidak Ditemukan</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Maaf, artikel yang Anda cari tidak ditemukan.</p>
          <Link href="/blog" className="text-[#FEA62D] hover:underline flex items-center justify-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Blog
          </Link>
        </div>
      </div>
    )
  }

  const formattedDate = new Date(post.fields.publishDate).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Use the static HTML content directly
  const contentHtml = post.fields.content

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Link href="/blog" className="text-[#FEA62D] hover:underline flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-4">{post.fields.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{formattedDate}</p>

        {post.fields.featuredImage && post.fields.featuredImage.fields.file && (
          <Image
            src={
              post.fields.featuredImage.fields.file.url.replace(
                "//images.ctfassets.net/your_space_id/your_asset_id/your_asset_hash",
                "",
              ) || "/placeholder.svg"
            } // Adjust path for local images
            alt={post.fields.featuredImage.fields.description || post.fields.title}
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow-lg mb-8"
          />
        )}

        <div
          className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  )
}
