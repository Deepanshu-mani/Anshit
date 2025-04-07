"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import productImages from "./data"

// Convert productImages object into array format with categories
const productCategories = {
  "Bed & Bath": ["Bedsheet", "Towel"],
  "Facial & Hair": ["FacialTissue", "HeadBand", "CuttingCape"],
  Treatment: ["Panty", "WaxingStrip", "SpaWrap"],
}

const products = Object.entries(productImages).map(([name, details]) => ({
  id: name,
  name: name.replace(/([A-Z])/g, " $1").trim(), // Format name
  images: details.images,
  size: details.size,
  gsm: details.gsm,
  colour: details.colour,
  usage: details.usage,
  category: Object.entries(productCategories).find(([_, products]) => products.includes(name))?.[0] || "Other",
}))

export default function ProfessionalProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)
  const modalRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const selectedProductData = selectedProduct ? products.find((p) => p.id === selectedProduct) : null

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId)
    setActiveImageIndex(0)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"

    // Small delay before resetting selected product to allow animation to complete
    setTimeout(() => {
      setSelectedProduct(null)
    }, 300)
  }, [])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isModalOpen) return

      if (event.key === "Escape") {
        closeModal()
      } else if (event.key === "ArrowRight" && selectedProductData) {
        setActiveImageIndex((prev) => (prev + 1) % selectedProductData.images.length)
      } else if (event.key === "ArrowLeft" && selectedProductData) {
        setActiveImageIndex((prev) => (prev === 0 ? selectedProductData.images.length - 1 : prev - 1))
      }
    },
    [isModalOpen, closeModal, selectedProductData],
  )

  // Handle clicks outside the modal
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal()
      }
    },
    [closeModal],
  )

  // Set up event listeners
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("mousedown", handleOutsideClick)
    } else {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isModalOpen, handleKeyDown, handleOutsideClick])

  // Image autoplay
  useEffect(() => {
    if (isModalOpen && selectedProductData && selectedProductData.images.length > 1) {
      // Clear any existing interval
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }

      // Set new interval
      autoplayRef.current = setInterval(() => {
        setActiveImageIndex((prev) => (prev + 1) % selectedProductData.images.length)
      }, 4000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }
  }, [isModalOpen, selectedProductData, activeImageIndex])

  // Get unique categories
  const categories = ["all", ...new Set(products.map((p) => p.category))]

  return (
    <section className="relative py-6 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 lg:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">Our Products </h2>
          <p className="text-sm lg:text-xl text-gray-600 max-w-5xl">
            Browse our comprehensive range of premium disposable products designed for professional salon and spa
            environments.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-10">
          <div className="border-b pb-2 overflow-x-auto">
            <TabsList className="bg-transparent h-auto p-0 mb-[-1px] w-auto inline-flex">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={cn(
                    "py-3 px-5 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent",
                    "text-gray-600 data-[state=active]:text-gray-900 font-medium whitespace-nowrap",
                  )}
                >
                  {category === "all" ? "All Products" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              {isLoading ? (
                // Loading skeleton - updated to 2 columns on mobile
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 animate-pulse"
                    >
                      <div className="aspect-square bg-gray-200" />
                      <div className="p-4">
                        <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Product grid - updated to 2 columns on mobile
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group"
                      onClick={() => handleProductClick(product.id)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="aspect-square relative bg-gray-50 p-4 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <Image
                            src={product.images[0] || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                            priority={product.id === products[0].id}
                          />
                        </div>

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Badge variant="secondary" className="bg-white shadow-sm">
                            View Details
                          </Badge>
                        </div>
                      </div>

                      <div className="p-4">
                        {/* Product name section - removed color badge completely */}
                        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>

                        {/* Product details - removed color information */}
                        <p className="text-gray-500 text-sm mt-1">Size: {product.size}</p>
                        <p className="text-gray-500 text-sm mt-0.5">GSM: {product.gsm}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {filteredProducts.length === 0 && !isLoading && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found in this category.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProductData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-[40vh] md:h-auto bg-gray-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedProductData.id}-${activeImageIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center p-6"
                  >
                    <Image
                      src={selectedProductData.images[activeImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProductData.name} - Image ${activeImageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Image Navigation */}
                {selectedProductData.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveImageIndex((prev) => (prev === 0 ? selectedProductData.images.length - 1 : prev - 1))
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveImageIndex((prev) => (prev + 1) % selectedProductData.images.length)
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                      {selectedProductData.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveImageIndex(index)
                          }}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            activeImageIndex === index ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400",
                          )}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    closeModal()
                  }}
                  className="absolute top-4 right-4 bg-white/90 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                  aria-label="Close product details"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-semibold text-gray-900">{selectedProductData.name}</h3>
                    <Badge className="bg-primary/10 text-primary border-0">{selectedProductData.category}</Badge>
                  </div>

                  <p className="text-gray-500 text-sm">
                    Product ID: {selectedProductData.id}-{Math.floor(Math.random() * 1000)}
                  </p>
                </div>

                {/* Changed default tab to specifications */}
                <Tabs defaultValue="specifications" className="mb-8">
                  <TabsList className="w-full bg-gray-50 p-1">
                    {/* Reordered tabs - specifications first, details second */}
                    <TabsTrigger value="specifications" className="flex-1">
                      Specifications
                    </TabsTrigger>
                    <TabsTrigger value="details" className="flex-1">
                      Details
                    </TabsTrigger>
                  </TabsList>

                  {/* Specifications tab content */}
                  <TabsContent value="specifications" className="pt-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="text-sm font-medium text-gray-700">Size</div>
                        <div className="text-sm text-gray-900">{selectedProductData.size}</div>

                        <div className="text-sm font-medium text-gray-700">GSM</div>
                        <div className="text-sm text-gray-900">{selectedProductData.gsm}</div>

                        <div className="text-sm font-medium text-gray-700">Color</div>
                        <div className="text-sm text-gray-900">{selectedProductData.colour}</div>

                        <div className="text-sm font-medium text-gray-700">Material</div>
                        <div className="text-sm text-gray-900">Premium Disposable</div>

                        <div className="text-sm font-medium text-gray-700">Packaging</div>
                        <div className="text-sm text-gray-900">Bulk Quantity Available</div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Details tab content */}
                  <TabsContent value="details" className="pt-4">
                    <p className="text-gray-700 mb-4">{selectedProductData.usage}</p>

                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                      <li>Premium quality materials</li>
                      <li>Professional-grade durability</li>
                      <li>Hygienic and disposable</li>
                      <li>Consistent performance</li>
                    </ul>

                    <h4 className="text-sm font-medium text-gray-900 mb-2">Applications</h4>
                    <p className="text-gray-700">
                      Ideal for professional salons, spas, and wellness centers. Suitable for commercial and high-volume
                      usage.
                    </p>
                  </TabsContent>
                </Tabs>

                <Separator className="my-6" />

                <div className="space-y-4">
            

                  <div className="flex">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href="mailto:office@ajantacorporateindustry.com">
                        <Mail size={16} className="mr-2" />
                        Contact Sales
                      </a>
                    </Button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Need assistance?</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Our product specialists are available to help with your inquiries.
                    </p>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-gray-500" />
                      <span className="text-sm font-medium">
                        <a href="tel:+918630980579" className="hover:underline">
                          +91 86309 80579
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

