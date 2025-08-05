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
  CheckCircle,
  ArrowRight,
  Play,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ModeToggle } from "@/components/mode-toggle"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { useLanguage } from "@/components/language-context"
import { staticBlogPosts, testimonialsData } from "@/lib/blog-data"
import { LanguageSwitcher } from "@/components/language-switcher"

// Placeholder for blog post type (now imported from lib/blog-data)
type BlogPost = (typeof staticBlogPosts)[0]

export default function ATripEdukasikaClient() {
  const { t, isLoading } = useLanguage() // Use the translation hook and isLoading
  const [formData, setFormData] = useState({
    nama: "",
    asal: "",
    jumlah: "",
    tanggal: "",
    whatsapp: "",
  })
  const [latestBlogPosts, setLatestBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    // Simulate data fetching for blog posts (if not already handled by translation loading)
    setLatestBlogPosts(staticBlogPosts.slice(0, 3)) // Get latest 3 posts
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

  if (isLoading) {
    // Use isLoading from LanguageContext
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <Loader2 className="h-12 w-12 animate-spin text-[#FEA62D]" />
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      {/* Header with Dark Mode Toggle and Language Switcher */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo-a-trip-edukasika.png"
              alt="A Trip Edukasika Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax Background */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: 'url("/images/pottery-class-2.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center animate-fade-in-up">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm px-4 py-2">{t("hero_badge")}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("hero_heading_part1")}
            <span className="block text-yellow-100">{t("hero_heading_part2")}</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">{t("hero_intro")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#FEA62D] hover:bg-gray-100 font-semibold px-8 py-4 text-lg animate-pulse-slow"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Phone className="mr-2 h-5 w-5" />
              {t("hero_cta_booking")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#FEA62D] font-semibold px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("galeri-kegiatan")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="mr-2 h-5 w-5" />
              {t("hero_cta_documentation")}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">{t("about_badge")}</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("about_heading")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t("about_intro")}
            </p>
          </div>

          <div className="animate-fade-in-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: BookOpen,
                  titleKey: "feature_history_title",
                  descriptionKey: "feature_history_description",
                },
                {
                  icon: Users,
                  titleKey: "feature_workshop_title",
                  descriptionKey: "feature_workshop_description",
                },
                {
                  icon: Heart,
                  titleKey: "feature_practice_title",
                  descriptionKey: "feature_practice_description",
                },
                {
                  icon: Palette,
                  titleKey: "feature_creativity_title",
                  descriptionKey: "feature_creativity_description",
                },
                {
                  icon: Award,
                  titleKey: "feature_souvenir_title",
                  descriptionKey: "feature_souvenir_description",
                },
                {
                  icon: CheckCircle,
                  titleKey: "feature_guidance_title",
                  descriptionKey: "feature_guidance_description",
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
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-3">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{t(feature.descriptionKey)}</p>
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
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("why_choose_us_heading")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("why_choose_us_intro")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
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
                  titleKey: "benefit_experienced_title",
                  descriptionKey: "benefit_experienced_description",
                },
                {
                  titleKey: "benefit_facilities_title",
                  descriptionKey: "benefit_facilities_description",
                },
                {
                  titleKey: "benefit_cost_title",
                  descriptionKey: "benefit_cost_description",
                },
                {
                  titleKey: "benefit_local_craftsmen_title",
                  descriptionKey: "benefit_local_craftsmen_description",
                },
                {
                  titleKey: "benefit_creativity_title",
                  descriptionKey: "benefit_creativity_description",
                },
                {
                  titleKey: "benefit_interactive_title",
                  descriptionKey: "benefit_interactive_description",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#FEA62D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50 mb-1">{t(item.titleKey)}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t(item.descriptionKey)}</p>
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
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">{t("programs_badge")}</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("programs_heading")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("programs_intro")}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up">
            {/* Paket Keluarga */}
            <Card className="relative border-2 border-[#FEA62D] shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#FEA62D] text-white px-4 py-2 text-sm font-semibold">
                  {t("package_family_badge")}
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-2">
                    {t("package_family_title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t("package_family_description")}</p>
                  <div className="text-4xl font-bold text-[#FEA62D] mb-2">{t("package_family_price")}</div>
                  <div className="text-gray-500 dark:text-gray-400">{t("package_family_per_person")}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    t("package_family_feature1"),
                    t("package_family_feature2"),
                    t("package_family_feature3"),
                    t("package_family_feature4"),
                    t("package_family_feature5"),
                    t("package_family_feature6"),
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
                  {t("choose_package_button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            {/* Paket Pelajar */}
            <Card className="relative border-2 border-green-500 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                  {t("package_student_badge")}
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-2">
                    {t("package_student_title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t("package_student_description")}</p>
                  <div className="text-4xl font-bold text-green-500 mb-2">{t("package_student_price")}</div>
                  <div className="text-gray-500 dark:text-gray-400">{t("package_student_per_person")}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    t("package_student_feature1"),
                    t("package_student_feature2"),
                    t("package_student_feature3"),
                    t("package_student_feature4"),
                    t("package_student_feature5"),
                    t("package_student_feature6"),
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
                  {t("choose_package_button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            {/* Paket Interaktif */}
            <Card className="border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-2">
                    {t("package_interactive_title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{t("package_interactive_description")}</p>
                  <div className="text-4xl font-bold text-blue-500 mb-2">{t("package_interactive_price")}</div>
                  <div className="text-gray-500 dark:text-gray-400">{t("package_interactive_per_person")}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    t("package_interactive_feature1"),
                    t("package_interactive_feature2"),
                    t("package_interactive_feature3"),
                    t("package_interactive_feature4"),
                    t("package_interactive_feature5"),
                    t("package_interactive_feature6"),
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
                  {t("choose_package_button")}
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
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("gallery_heading")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("gallery_intro")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in-up">
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
              {t("gallery_instagram_button")}
            </Button>
          </div>
        </div>
      </section>

      {/* Galeri Kegiatan Belajar Membuat Gerabah Section */}
      <section id="galeri-kegiatan" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">
              {t("activity_gallery_badge")}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("activity_gallery_heading")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("activity_gallery_intro")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in-up">
            {[
              { src: "/images/pottery-class-1.jpg", alt: "Siswa belajar membuat gerabah dengan bimbingan" },
              { src: "/images/pottery-class-3.jpg", alt: "Anak-anak fokus membuat gerabah di workshop" },
              { src: "/images/pottery-class-4.jpg", alt: "Kelompok peserta berkreasi dengan tanah liat" },
              { src: "/images/pottery-class-5.jpg", alt: "Pengrajin menunjukkan cara menggunakan roda putar" },
              { src: "/images/pottery-class-6.jpg", alt: "Suasana ceria di kelas membuat gerabah" },
              { src: "/images/pottery-class-7.jpg", alt: "Hasil karya gerabah yang dibuat peserta" },
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
              {t("activity_gallery_more_button")}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("testimonials_heading")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("testimonials_intro")}</p>
          </div>

          {/* Testimonial Carousel */}
          <TestimonialCarousel testimonials={testimonialsData} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">{t("faq_badge")}</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("faq_heading")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("faq_intro")}</p>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-50 hover:no-underline">
                  {t("faq_q1")}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-base">
                  {t("faq_a1")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-50 hover:no-underline">
                  {t("faq_q2")}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-base">
                  {t("faq_a2")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-50 hover:no-underline">
                  {t("faq_q3")}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-base">
                  {t("faq_a3")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-50 hover:no-underline">
                  {t("faq_q4")}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-base">
                  {t("faq_a4")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 dark:text-gray-50 hover:no-underline">
                  {t("faq_q5")}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 text-base">
                  {t("faq_a5")}
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
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">{t("blog_badge")}</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("blog_heading")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("blog_intro")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {latestBlogPosts.map((post) => (
              <Card key={post.sys.id} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <Image
                  src={
                    post.fields.featuredImage?.fields.file?.url
                      ? post.fields.featuredImage.fields.file.url
                      : "/placeholder.svg?height=200&width=300"
                  }
                  alt={t(post.fields.titleKey)}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-2">
                    {t(post.fields.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {new Date(post.fields.publishDate).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{t(post.fields.descriptionKey)}</p>
                  <Link href={`/blog/${post.fields.slug}`} className="text-[#FEA62D] hover:underline flex items-center">
                    {t("blog_read_more")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" passHref>
              <Button size="lg" className="bg-[#FEA62D] hover:bg-[#E8941A] text-white font-semibold px-8 py-4">
                {t("blog_view_all")}
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
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("booking_heading")}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">{t("booking_intro")}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-in-up">
              <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t("form_name_label")}
                      </label>
                      <Input
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        placeholder={t("form_name_placeholder")}
                        required
                        className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t("form_origin_label")}
                      </label>
                      <Input
                        name="asal"
                        value={formData.asal}
                        onChange={handleInputChange}
                        placeholder={t("form_origin_placeholder")}
                        required
                        className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t("form_participants_label")}
                      </label>
                      <Input
                        name="jumlah"
                        value={formData.jumlah}
                        onChange={handleInputChange}
                        placeholder={t("form_participants_placeholder")}
                        required
                        className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t("form_date_label")}
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
                        {t("form_whatsapp_label")}
                      </label>
                      <Input
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder={t("form_whatsapp_placeholder")}
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
                      {t("form_submit_button")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-4">
                      {t("contact_heading")}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-[#FEA62D]" />
                        <div>
                          <div className="font-medium text-gray-800 dark:text-gray-50">{t("contact_whatsapp_cs")}</div>
                          <div className="text-gray-600 dark:text-gray-300">088980674734</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#FEA62D] mt-1" />
                        <div>
                          <div className="font-medium text-gray-800 dark:text-gray-50">
                            {t("contact_location_title")}
                          </div>
                          <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                            {t("contact_location_address")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-[#FEA62D]/5 dark:bg-[#FEA62D]/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-4">
                      {t("why_book_now_heading")}
                    </h3>
                    <div className="space-y-3">
                      {[
                        t("benefit_limited_slots"),
                        t("benefit_free_consultation"),
                        t("benefit_reschedule_flexibility"),
                        t("benefit_satisfaction_guarantee"),
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
            <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">{t("location_badge")}</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("location_heading")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("location_intro")}</p>
          </div>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0000000000005!2d110.3456789!3d-7.854321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5791a0a0a0a0%3A0x0!2sA%20Trip%20Edukasi%20-%20Wisata%20Edukasi%20Gerabah%20Kasongan!5e0!3m2!1sen!2sid!4v1678901234567!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("location_heading")}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/LOGO-FIX-01-PNG.png"
                alt="A Trip Edukasika Logo"
                width={200}
                height={50}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 mb-4">{t("footer_description")}</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-300 hover:text-[#FEA62D] transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t("footer_quick_nav")}</h4>
              <div className="space-y-2">
                <Link
                  href="#about"
                  className="block text-gray-300 hover:text-[#FEA62D] transition-colors"
                  aria-label={t("footer_about_us")}
                >
                  {t("footer_about_us")}
                </Link>
                <Link
                  href="#programs"
                  className="block text-gray-300 hover:text-[#FEA62D] transition-colors"
                  aria-label={t("footer_programs")}
                >
                  {t("footer_programs")}
                </Link>
                <Link
                  href="#gallery"
                  className="block text-gray-300 hover:text-[#FEA62D] transition-colors"
                  aria-label={t("footer_gallery")}
                >
                  {t("footer_gallery")}
                </Link>
                <Link
                  href="#faq"
                  className="block text-gray-300 hover:text-[#FEA62D] transition-colors"
                  aria-label={t("footer_faq")}
                >
                  {t("footer_faq")}
                </Link>
                <Link
                  href="#blog"
                  className="block text-gray-300 hover:text-[#FEA62D] transition-colors"
                  aria-label={t("footer_blog")}
                >
                  {t("footer_blog")}
                </Link>
                <Link
                  href="#booking"
                  className="block text-gray-300 hover:text-[#FEA62D] transition-colors"
                  aria-label={t("footer_booking")}
                >
                  {t("footer_booking")}
                </Link>
                <Link
                  href="#lokasi"
                  className="block text-gray-300 hover:text-[#FEA62D] transition-colors"
                  aria-label={t("footer_location")}
                >
                  {t("footer_location")}
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t("footer_contact")}</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#FEA62D]" />
                  <span className="text-gray-300">088980674734</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#FEA62D] mt-1" />
                  <span className="text-gray-300 text-sm">{t("contact_location_address")}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t("footer_other")}</h4>
              <div className="space-y-2">
                <Link href="/blog" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  {t("footer_blog")}
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  {t("footer_product_catalog")}
                </Link>
                <Link href="/kebijakan-privasi" className="block text-gray-300 hover:text-[#FEA62D] transition-colors">
                  {t("footer_privacy_policy")}
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">{t("footer_copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
