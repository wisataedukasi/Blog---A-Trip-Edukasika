"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel, { type EmblaCarouselType } from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Star, Users } from "lucide-react"
import { useLanguage } from "./language-context" // Import useLanguage
import type { Testimonial } from "@/lib/blog-data" // Import Testimonial type

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

// Adjust this factor to control the strength of the parallax effect
const TWEEN_FACTOR = 1.2

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const { t } = useLanguage() // Use the translation hook
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [tweenValues, setTweenValues] = useState<number[]>([])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const newTweenValues: number[] = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diff = scrollSnap - scrollProgress
      if (engine.options.loop && engine.loop) {
        diff = engine.loop.getDistance(diff)
      }
      return diff * -1 * TWEEN_FACTOR
    })
    setTweenValues(newTweenValues)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    onScroll()

    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("scroll", onScroll)
    emblaApi.on("reInit", onScroll)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
      emblaApi.off("scroll", onScroll)
      emblaApi.off("reInit", onScroll)
    }
  }, [emblaApi, onInit, onSelect, onScroll])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex -ml-4">
          {" "}
          {/* Adjust margin to compensate for slide padding */}
          {testimonials.map((testimonial, index) => (
            <div
              className="embla__slide flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-4" // Responsive slide width
              key={index}
            >
              <div
                className="embla__slide__inner w-full h-full"
                style={{
                  transform:
                    tweenValues.length && tweenValues[index] !== undefined
                      ? `translateX(${tweenValues[index] * 10}px)` // Apply parallax to inner content
                      : "translateX(0px)",
                }}
              >
                <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 h-full flex flex-col">
                  <CardContent className="p-6 flex-grow">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic flex-grow">
                      "{t(testimonial.contentKey)}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-12 h-12 bg-[#FEA62D]/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-[#FEA62D]" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-gray-50">{t(testimonial.nameKey)}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{t(testimonial.roleKey)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots flex justify-center mt-8 gap-2">
        {scrollSnaps.map((_, index) => (
          <Button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`h-3 w-3 rounded-full p-0 ${
              index === selectedIndex ? "bg-[#FEA62D]" : "bg-gray-300 dark:bg-gray-700"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-0 -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md"
        aria-label="Previous testimonial"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <Button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md"
        aria-label="Next testimonial"
      >
        <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
