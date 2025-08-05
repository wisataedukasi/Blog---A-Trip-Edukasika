"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/language-context" // Import useLanguage
import { staticBlogPosts } from "@/lib/blog-data" // Import centralized data
import { useMemo } from "react"

export default function BlogPostClientPage({ params }: { params: { slug: string } }) {
  const { t } = useLanguage() // Use the translation hook
  const post = useMemo(() => staticBlogPosts.find((p) => p.fields.slug === params.slug), [params.slug])

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-4">{t("article_not_found_title")}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{t("article_not_found_description")}</p>
          <Link href="/blog" className="text-[#FEA62D] hover:underline flex items-center justify-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t("back_to_blog")}
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

  const contentHtml = post.fields.content

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Link href="/blog" className="text-[#FEA62D] hover:underline flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t("back_to_blog")}
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-4">{t(post.fields.titleKey)}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{formattedDate}</p>

        {post.fields.featuredImage && post.fields.featuredImage.fields.file && (
          <Image
            src={post.fields.featuredImage.fields.file.url || "/placeholder.svg"}
            alt={t(post.fields.titleKey)}
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
