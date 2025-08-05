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
    contentKey: string // New: Key for content translation
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
      contentKey: "blog_post_1_content", // Point to the translation key
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
      contentKey: "blog_post_2_content", // Point to the translation key
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
      contentKey: "blog_post_3_content", // Point to the translation key
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
      contentKey: "blog_post_4_content", // Point to the translation key
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
