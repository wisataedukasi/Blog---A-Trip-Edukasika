"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Instagram,
  Users,
  Award,
  Heart,
  Palette,
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ModeToggle } from "@/components/mode-toggle"

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
          file: { url: "//images.ctfassets.net/your_space_id/your_asset_id/your_asset_hash/pottery-class-3.jpg" }, // Placeholder URL
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
          file: { url: "//images.ctfassets.net/your_space_id/your_asset_id/your_asset_hash/pottery-class-4.jpg" }, // Placeholder URL
          description: "Anak-anak dengan gerabah",
        },
      },
      description: "Bagaimana kegiatan membuat gerabah dapat mengembangkan kreativitas dan motorik anak.",
      content: "Ini adalah konten lengkap dari artikel blog ketiga.",
    },
  },
]

export default function ATripEdukasikaClient() {
  const [formData, setFormData] = useState({
    nama: "",
    asal: "",
    jumlah: "",
    tanggal: "",
    whatsapp: "",
  })
  const [loading, setLoading] = useState(true)
  const [latestBlogPosts, setLatestBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // Simulate data fetching
    setLatestBlogPosts(staticBlogPosts.slice(0, 3)) // Get latest 3 posts
    setLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Halo! Saya ingin booking A Trip Edukasika:
Nama: ${formData.nama}
Asal: ${formData.asal}
Jumlah Peserta: ${formData.jumlah}
Tanggal: ${formData.tanggal}
WhatsApp: ${formData.whatsapp}`

    const whatsappUrl = `https://wa.me/6288980674734?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <Loader2 className="h-12 w-12 animate-spin text-[#FEA62D]" />
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      {/* Header with Dark Mode Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo-a-trip-edukasika.png"
              alt="A Trip Edukasika Logo"
              width={180} // Adjust width as needed
              height={40} // Adjust height as needed
              className="h-10 w-auto" // Tailwind classes for responsive height and auto width
            />
          </Link>
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FEA62D] to-[#FF8C00] min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm px-4 py-2">
                🏺 Wisata Edukasi Terpercaya
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Dari Tangan Pengrajin,
                <span className="block text-yellow-100">Menuju Hati Pecinta Seni</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Wisata edukasi gerabah interaktif dan menyenangkan untuk TK–SMA & umum di jantung budaya Kasongan,
                Yogyakarta!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-[#FEA62D] hover:bg-gray-100 font-semibold px-8 py-4 text-lg animate-pulse-slow" // Added pulse animation
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Booking Petualanganmu Sekarang!
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#FEA62D] font-semibold px-8 py-4 text-lg bg-transparent"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Lihat Video
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pottery-class-2.jpg"
                  alt="Anak-anak sedang belajar membuat gerabah"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-800">4.9/5</span>
                  <span className="text-gray-600 text-sm">(200+ review)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">Tentang Kami</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">
              Membentuk Inspirasi, Menjelajahi Tradisi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Di jantung budaya Kasongan, Yogyakarta, A Trip Edukasika hadir sebagai jembatan yang menghubungkan
              tradisi, edukasi, dan kreasi dalam satu perjalanan tak terlupakan. Kami mengajak Anda untuk menyelami
              dunia gerabah secara interaktif dan menyenangkan.
            </p>
          </div>

          <div className="animate-fade-in-up">
            {" "}
            {/* Applied fade-in-up animation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: BookOpen,
                  title: "Mengenal Sejarah & Filosofi",
                  description: "Pelajari sejarah dan filosofi gerabah khas Jogja dari ahlinya",
                },
                {
                  icon: Users,
                  title: "Tur Eksklusif Workshop",
                  description: "Kunjungi langsung workshop pengrajin lokal berpengalaman",
                },
                {
                  icon: Heart,
                  title: "Praktik Langsung",
                  description: "Rasakan sensasi membentuk gerabah dengan tangan sendiri",
                },
                {
                  icon: Palette,
                  title: "Kreativitas Tanpa Batas",
                  description: "Warnai dan hias gerabah sesuai dengan kreativitas Anda",
                },
                {
                  icon: Award,
                  title: "Karya Bisa Dibawa Pulang",
                  description: "Hasil karya Anda menjadi kenang-kenangan berharga",
                },
                {
                  icon: CheckCircle,
                  title: "Bimbingan Ahli",
                  description: "Dibimbing langsung oleh pengrajin gerabah berpengalaman",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#FEA62D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-[#FEA62D]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">
              Mengapa Petualangan Gerabah Terbaik Ada di Sini?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A Trip Edukasika bukan sekadar wisata, ini adalah pengalaman belajar yang utuh dan menyeluruh
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
            {" "}
            {/* Applied fade-in-up animation */}
            <div>
              <Image
                src="/images/pottery-class-7.jpg"
                alt="Suasana workshop gerabah"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Berpengalaman & Terpercaya",
                  description: "Sudah dipercaya puluhan sekolah, lembaga, dan instansi",
                },
                {
                  title: "Fasilitas Lengkap & Aman",
                  description: "Lokasi pelatihan nyaman dan aman untuk segala usia",
                },
                {
                  title: "Biaya Kompetitif, Paket Fleksibel",
                  description: "Tersedia berbagai pilihan paket sesuai kebutuhan",
                },
                {
                  title: "Belajar dari Pengrajin Lokal",
                  description: "Dibimbing langsung oleh ahli gerabah berpengalaman",
                },
                {
                  title: "Tumbuhkan Kreativitas",
                  description: "Asah keterampilan motorik, seni, dan rasa cinta warisan budaya",
                },
                {
                  title: "Interaktif dan Menyenangkan",
                  description: "Praktik langsung dari membentuk hingga menghias",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#FEA62D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50 mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">Program Kunjungan</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">
              Temukan Paket Edukasi Gerabah Pilihanmu!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Pengalaman Belajar Seru dan Edukatif untuk Semua Kalangan
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up">
            {" "}
            {/* Applied fade-in-up animation */}
            {/* Paket Keluarga */}
            <Card className="relative border-2 border-[#FEA62D] shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#FEA62D] text-white px-4 py-2 text-sm font-semibold">Best Deal</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-2">Paket Edukasi Keluarga</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Liburan Asik, Belajar Kreatif Bersama Keluarga!
                  </p>
                  <div className="text-4xl font-bold text-[#FEA62D] mb-2">Rp 150.000</div>
                  <div className="text-gray-500 dark:text-gray-400">per orang</div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "Tanah liat & alat lengkap",
                    "Alat Putar & Cetak",
                    "Cat dan kuas",
                    "Pendamping edukator",
                    "Pelatihan dasar gerabah mini",
                    "Souvenir hasil karya",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#FEA62D]" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-[#FEA62D] hover:bg-[#E8941A] text-white font-semibold py-3"
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Pilih Paket Ini
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            {/* Paket Pelajar */}
            <Card className="relative border-2 border-green-500 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">Terpopuler</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-2">Paket Pelajar / Rombongan</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Petualangan Edukasi Sekolah Paling Seru!</p>
                  <div className="text-4xl font-bold text-green-500 mb-2">Rp 45.000</div>
                  <div className="text-gray-500 dark:text-gray-400">per orang</div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "Tanah liat & alat putar",
                    "Pendamping edukator",
                    "Workshop interaktif",
                    "Tur ke workshop pengrajin",
                    "Pemandu kegiatan",
                    "Hasil karya bisa dibawa pulang",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3"
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Pilih Paket Ini
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            {/* Paket Interaktif */}
            <Card className="border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-2">
                    Paket Interaktif / Wawancara
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Gali Ilmu, Asah Karya: Khusus Komunitas & Team Building!
                  </p>
                  <div className="text-4xl font-bold text-blue-500 mb-2">Rp 75.000</div>
                  <div className="text-gray-500 dark:text-gray-400">per orang</div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "Tanah liat & alat lengkap",
                    "Alat Putar & Cetak",
                    "Pendamping edukator",
                    "Workshop tingkat lanjut",
                    "Diskusi budaya & ekonomi kreatif",
                    "Hasil karya bisa dibawa pulang",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3"
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Pilih Paket Ini
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">
              Momen-momen Seru di A Trip Edukasika
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Intip keseruan teman-teman kami saat berkreasi dan belajar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in-up">
            {" "}
            {/* Applied fade-in-up animation */}
            {[
              { src: "/images/pottery-class-1.jpg", alt: "Siswa belajar membuat gerabah" },
              { src: "/images/pottery-class-3.jpg", alt: "Workshop gerabah interaktif" },
              { src: "/images/pottery-class-4.jpg", alt: "Anak-anak berkreasi dengan tanah liat" },
              { src: "/images/pottery-class-5.jpg", alt: "Praktik menggunakan roda putar" },
              { src: "/images/pottery-class-6.jpg", alt: "Suasana workshop yang menyenangkan" },
              { src: "/images/pottery-class-7.jpg", alt: "Hasil karya peserta" },
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-[#FEA62D] hover:bg-[#E8941A] text-white font-semibold px-8 py-4">
              <Instagram className="mr-2 h-5 w-5" />
              Lihat Lebih Banyak di Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">
              Apa Kata Mereka yang Sudah Berpetualangan Bersama Kami?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Kisah inspiratif dari guru, orang tua, dan komunitas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up">
            {" "}
            {/* Applied fade-in-up animation */}
            {[
              {
                name: "Ibu Santi",
                role: "Orang Tua Murid",
                content:
                  "Pengalaman belajar gerabah di A Trip Edukasika benar-benar luar biasa! Anak-anak saya jadi lebih kreatif dan berani mencoba hal baru. Sangat direkomendasikan!",
                rating: 5,
              },
              {
                name: "Pak Budi",
                role: "Guru SD Merdeka",
                content:
                  "A Trip Edukasika berhasil menyajikan edukasi budaya yang menyenangkan. Murid-murid kami belajar banyak tentang gerabah sambil bersenang-senang. Guru-guru juga terinspirasi!",
                rating: 5,
              },
              {
                name: "Ibu Ida",
                role: "Ketua Komunitas Seni Jogja",
                content:
                  "Programnya sangat interaktif! Kami dari komunitas merasa lebih dekat dengan warisan budaya lokal dan terinspirasi untuk terus berkreasi.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FEA62D]/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#FEA62D]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-gray-50">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">Pertanyaan Umum</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">Sering Ditanyakan</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Temukan jawaban atas pertanyaan yang sering diajukan tentang A Trip Edukasika.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-in-up">
            {" "}
            {/* Applied fade-in-up animation */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-50 hover:no-underline">
                  Apa itu A Trip Edukasika?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-base">
                  A Trip Edukasika adalah program wisata edukasi interaktif yang mengajak peserta untuk belajar dan
                  berkreasi dengan gerabah di Kasongan, Yogyakarta. Kami menawarkan pengalaman langsung dalam membuat
                  karya seni dari tanah liat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-50 hover:no-underline">
                  Siapa saja yang bisa bergabung?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-base">
                  Program kami cocok untuk berbagai kalangan, mulai dari anak-anak TK, SD, SMP, SMA, mahasiswa,
                  keluarga, komunitas, hingga instansi yang ingin merasakan pengalaman edukasi budaya yang unik.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-50 hover:no-underline">
                  Apakah hasil karya bisa dibawa pulang?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-base">
                  Ya, semua hasil karya gerabah yang Anda buat selama workshop bisa dibawa pulang sebagai
                  kenang-kenangan. Untuk beberapa paket, hasil karya mungkin belum dibakar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-50 hover:no-underline">
                  Bagaimana cara booking?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-base">
                  Anda bisa mengisi formulir booking di bagian bawah halaman ini, atau langsung menghubungi kami via
                  WhatsApp di nomor yang tertera. Tim kami akan segera membantu Anda.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-50 hover:no-underline">
                  Apakah ada diskon untuk rombongan besar?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-base">
                  Tentu! Kami memiliki paket khusus dengan harga kompetitif untuk rombongan besar (sekolah, komunitas,
                  instansi). Silakan hubungi kami untuk informasi lebih lanjut dan penawaran terbaik.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">Blog Kami</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">Artikel Terbaru</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Baca kisah inspiratif, tips, dan berita terbaru seputar dunia gerabah dan edukasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {" "}
            {/* Applied fade-in-up animation */}
            {latestBlogPosts.map((post) => (
              <Card key={post.sys.id} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <Image
                  src={
                    post.fields.featuredImage?.fields.file?.url
                      ? `https:${post.fields.featuredImage.fields.file.url}`
                      : "/placeholder.svg?height=200&width=300"
                  }
                  alt={post.fields.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-2">{post.fields.title}</h3>
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
            <Link href="/blog" passHref>
              <Button size="lg" className="bg-[#FEA62D] hover:bg-[#E8941A] text-white font-semibold px-8 py-4">
                Lihat Semua Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">
                Wujudkan Petualangan Edukasimu Sekarang!
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Isi formulir di bawah ini untuk booking jadwal kunjungan Anda. Tim kami akan segera menghubungi.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-in-up">
              {" "}
              {/* Applied fade-in-up animation */}
              <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nama Lengkap
                      </label>
                      <Input
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        placeholder="Siapa nama Anda?"
                        required
                        className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Asal Sekolah/Komunitas/Individu
                      </label>
                      <Input
                        name="asal"
                        value={formData.asal}
                        onChange={handleInputChange}
                        placeholder="Dari mana Anda berasal?"
                        required
                        className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Jumlah Peserta
                      </label>
                      <Input
                        name="jumlah"
                        value={formData.jumlah}
                        onChange={handleInputChange}
                        placeholder="Contoh: 30 orang"
                        required
                        className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Tanggal Kunjungan Pilihan
                      </label>
                      <Input
                        name="tanggal"
                        type="date"
                        value={formData.tanggal}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nomor WhatsApp Aktif
                      </label>
                      <Input
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Contoh: 081234567890"
                        required
                        className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#FEA62D] hover:bg-[#E8941A] text-white font-semibold py-4"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Kirim Permintaan Booking
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-4">Kontak Langsung</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-[#FEA62D]" />
                        <div>
                          <div className="font-medium text-gray-800 dark:text-gray-50">WhatsApp CS Lidya</div>
                          <div className="text-gray-600 dark:text-gray-300">088980674734</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#FEA62D] mt-1" />
                        <div>
                          <div className="font-medium text-gray-800 dark:text-gray-50">Lokasi</div>
                          <div className="text-gray-600 dark:text-gray-300">
                            Kawasan Wisata Seni Gerabah Kasongan
                            <br />
                            Jl. Raya Kasongan Sentanan RT.06, Kajen, Bangunjiwo,
                            <br />
                            Kec. Kasihan, Kabupaten Bantul, DIY 55184
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-[#FEA62D]/5 dark:bg-[#FEA62D]/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-4">
                      Mengapa Booking Sekarang?
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Jadwal terbatas, booking lebih awal lebih baik",
                        "Konsultasi gratis untuk menentukan paket terbaik",
                        "Fleksibilitas reschedule jika ada perubahan",
                        "Garansi kepuasan 100%",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-[#FEA62D]" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section id="lokasi" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">Lokasi Kami</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">Temukan Kami di Peta</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Kunjungi workshop kami di jantung Desa Wisata Gerabah Kasongan, Yogyakarta.
            </p>
          </div>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
            {" "}
            {/* Applied fade-in-up animation */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0000000000005!2d110.3456789!3d-7.854321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTEnMzcuMSJTIDExMMKwMjAnNDQuNCJF!5e0!3m2!1sen!2sid!4v1678901234567!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi A Trip Edukasika"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#FEA62D] mb-4">A Trip Edukasika</h3>
              <p className="text-gray-300 mb-4">
                Wisata edukasi gerabah terpercaya di Kasongan, Yogyakarta. Menghubungkan tradisi dengan edukasi modern.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-300 hover:text-[#FEA62D] transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navigasi Cepat</h4>
              <div className="space-y-2">
                <Link href="#about" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  Tentang Kami
                </Link>
                <Link href="#programs" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  Program
                </Link>
                <Link href="#gallery" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  Galeri
                </Link>
                <Link href="#faq" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  FAQ
                </Link>
                <Link href="#blog" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  Blog
                </Link>
                <Link href="#booking" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  Booking
                </Link>
                <Link href="#lokasi" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  Lokasi
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#FEA62D]" />
                  <span className="text-gray-300">088980674734</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#FEA62D] mt-1" />
                  <span className="text-gray-300 text-sm">Kawasan Wisata Seni Gerabah Kasongan, Bantul, DIY</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Lainnya</h4>
              <div className="space-y-2">
                <Link href="/blog" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  Blog Kami
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  Katalog Produk Gerabah
                </Link>
                <Link href="/kebijakan-privasi" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  Kebijakan Privasi
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 A Trip Edukasika. Hak Cipta Dilindungi Undang-Undang.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
