// Placeholder for blog post type and data
export interface BlogPost {
  sys: {
    id: string
  }
  fields: {
    titleKey: string // Key for translation
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
    descriptionKey: string // Key for translation
    content: string // Simplified for placeholder
  }
}

// Static placeholder data for blog posts
export const staticBlogPosts: BlogPost[] = [
  {
    sys: { id: "1" },
    fields: {
      titleKey: "blog_post_1_title",
      slug: "mengenal-gerabah-kasongan",
      publishDate: "2024-07-15T10:00:00Z",
      featuredImage: {
        fields: {
          file: { url: "/images/pottery-class-1.jpg" },
          description: "Gerabah Kasongan",
        },
      },
      descriptionKey: "blog_post_1_description",
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
      titleKey: "blog_post_2_title",
      slug: "tips-membuat-gerabah",
      publishDate: "2024-07-10T10:00:00Z",
      featuredImage: {
        fields: {
          file: { url: "/images/pottery-class-3.jpg" },
          description: "Membuat gerabah",
        },
      },
      descriptionKey: "blog_post_2_description",
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
      titleKey: "blog_post_3_title",
      slug: "manfaat-edukasi-gerabah",
      publishDate: "2024-07-05T10:00:00Z",
      featuredImage: {
        fields: {
          file: { url: "/images/pottery-class-4.jpg" },
          description: "Anak-anak dengan gerabah",
        },
      },
      descriptionKey: "blog_post_3_description",
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
      titleKey: "blog_post_4_title",
      slug: "desa-wisata-kasongan",
      publishDate: "2024-06-28T10:00:00Z",
      featuredImage: {
        fields: {
          file: { url: "/images/pottery-class-5.jpg" },
          description: "Desa Kasongan",
        },
      },
      descriptionKey: "blog_post_4_description",
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

export interface Testimonial {
  nameKey: string
  roleKey: string
  contentKey: string
  rating: number
}

export const testimonialsData: Testimonial[] = [
  {
    nameKey: "testimonial_1_name",
    roleKey: "testimonial_1_role",
    contentKey: "testimonial_1_content",
    rating: 5,
  },
  {
    nameKey: "testimonial_2_name",
    roleKey: "testimonial_2_role",
    contentKey: "testimonial_2_content",
    rating: 5,
  },
  {
    nameKey: "testimonial_3_name",
    roleKey: "testimonial_3_role",
    contentKey: "testimonial_3_content",
    rating: 5,
  },
  {
    nameKey: "testimonial_4_name",
    roleKey: "testimonial_4_role",
    contentKey: "testimonial_4_content",
    rating: 4,
  },
  {
    nameKey: "testimonial_5_name",
    roleKey: "testimonial_5_role",
    contentKey: "testimonial_5_content",
    rating: 5,
  },
]
