import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SearchSection } from "@/components/search-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SearchSection />
        <FeaturedProperties />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}