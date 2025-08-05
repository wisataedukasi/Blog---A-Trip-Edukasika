"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-context" // Import useLanguage
import { staticBlogPosts, type BlogPost } from "@/lib/blog-data" // Import centralized data

export default function BlogClientPage() {
  const { t } = useLanguage() // Use the translation hook
  const blogPosts: BlogPost[] = staticBlogPosts // Use static data

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#FEA62D]/10 text-[#FEA62D] border-[#FEA62D]/20 mb-4">{t("blog_badge")}</Badge>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-6">{t("blog_heading")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("blog_intro")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.sys.id} className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <Image
                src={post.fields.featuredImage?.fields.file?.url || "/placeholder.svg?height=200&width=300"}
                alt={t(post.fields.titleKey)}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-2">
                  {t(post.fields.titleKey)}
                </h2>
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
          <Link href="/" passHref>
            <Button
              size="lg"
              variant="outline"
              className="border-[#FEA62D] text-[#FEA62D] hover:bg-[#FEA62D]/10 font-semibold px-8 py-4 bg-transparent"
            >
              {t("back_to_home")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
