import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, Camera, Crown, ArrowRight, BookOpen, Calendar, User } from "lucide-react"

export default function MeganFoxMagazine() {
  const articles = [
    {
      id: 1,
      title: "The Evolution of an Icon",
      subtitle: "From Transformers to Cultural Phenomenon",
      image: "/images/megan-1.jpeg",
      category: "COVER STORY",
      readTime: "8 min read",
      excerpt:
        "An intimate look at Megan Fox's journey through Hollywood's ever-changing landscape, exploring her impact on fashion, film, and popular culture.",
    },
    {
      id: 2,
      title: "Behind the Lens",
      subtitle: "Editorial Photography Mastery",
      image: "/images/megan-2.jpeg",
      category: "PHOTOGRAPHY",
      readTime: "5 min read",
      excerpt:
        "Discover the artistry behind the most captivating editorial shoots, where fashion meets fine art in stunning visual narratives.",
    },
    {
      id: 3,
      title: "Fashion Forward",
      subtitle: "Red Carpet Revolution",
      image: "/images/megan-4.jpeg",
      category: "STYLE",
      readTime: "6 min read",
      excerpt:
        "Exploring the bold fashion choices that have redefined red carpet elegance and influenced a generation of style enthusiasts.",
    },
    {
      id: 4,
      title: "Gothic Glamour",
      subtitle: "Dark Romance Aesthetic",
      image: "/images/megan-6.jpeg",
      category: "EDITORIAL",
      readTime: "7 min read",
      excerpt:
        "A deep dive into the gothic luxury aesthetic that has become synonymous with modern sophistication and timeless allure.",
    },
  ]

  const galleryImages = [
    { src: "/images/megan-3.jpeg", caption: "Haute Couture Excellence" },
    { src: "/images/megan-5.jpeg", caption: "Runway Royalty" },
    { src: "/images/megan-7.jpeg", caption: "Street Style Icon" },
    { src: "/images/megan-8.jpeg", caption: "Editorial Elegance" },
    { src: "/images/megan-9.jpeg", caption: "Winter Sophistication" },
    { src: "/images/megan-10.jpeg", caption: "Metropolitan Muse" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-4 left-4 right-4 z-50 bg-background/80 backdrop-blur-xl border border-border/30 rounded-2xl shadow-2xl transition-all duration-500 hover:bg-background/90 hover:shadow-3xl hover:scale-[1.02] hover:border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-sans font-bold text-primary hover:scale-110 hover:rotate-1 transition-all duration-500 cursor-pointer relative group">
                MEGAN FOX
                <span className="absolute -inset-2 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
              </h1>
              <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a
                  href="#cover"
                  className="hover:text-primary transition-all duration-500 hover:scale-110 relative group px-3 py-2 rounded-lg hover:bg-primary/5"
                >
                  COVER
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full rounded-full"></span>
                </a>
                <a
                  href="#contents"
                  className="hover:text-primary transition-all duration-500 hover:scale-110 relative group px-3 py-2 rounded-lg hover:bg-primary/5"
                >
                  CONTENTS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full rounded-full"></span>
                </a>
                <a
                  href="#articles"
                  className="hover:text-primary transition-all duration-500 hover:scale-110 relative group px-3 py-2 rounded-lg hover:bg-primary/5"
                >
                  ARTICLES
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full rounded-full"></span>
                </a>
                <a
                  href="#gallery"
                  className="hover:text-primary transition-all duration-500 hover:scale-110 relative group px-3 py-2 rounded-lg hover:bg-primary/5"
                >
                  GALLERY
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full rounded-full"></span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground animate-pulse bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1 rounded-full">
                ISSUE 01 • 2025
              </span>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-primary/25 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <BookOpen className="w-4 h-4 mr-2 transition-transform duration-500 group-hover:rotate-12" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="cover" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.05),transparent_50%)] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up">
            <div className="relative magazine-shadow rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-1000 hover:shadow-4xl hover:shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-1000 z-10"></div>
              <img
                src="/images/megan-1.jpeg"
                alt="Megan Fox Magazine Cover"
                className="w-full h-[700px] object-cover object-[center_20%] group-hover:scale-115 transition-all duration-1500 filter group-hover:brightness-110 group-hover:contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/50 transition-all duration-700" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent animate-pulse rounded-full" />
                    <span className="text-sm font-medium tracking-wider bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                      EXCLUSIVE INTERVIEW
                    </span>
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-sans font-bold leading-tight hover:text-primary transition-all duration-500 hover:scale-105 cursor-default">
                    <span className="inline-block hover:rotate-1 transition-transform duration-300">TIMELESS</span>
                    <br />
                    <span className="inline-block hover:-rotate-1 transition-transform duration-300">ELEGANCE</span>
                  </h2>
                  <p className="text-xl opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-105 hover:text-accent">
                    The evolution of a modern icon
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-8">
              <div className="flex items-center gap-4 hover:gap-6 transition-all duration-500 group">
                <Calendar className="w-6 h-6 text-primary animate-bounce group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-all duration-500 hover:scale-110">
                  JANUARY 2025 • ISSUE 01
                </span>
              </div>

              <h1 className="text-7xl lg:text-8xl font-sans font-bold leading-none hover:scale-105 transition-all duration-700 cursor-default">
                <span className="block text-foreground hover:text-primary transition-all duration-500 hover:rotate-1 inline-block">
                  MEGAN FOX
                </span>
                <span className="block text-primary hover:text-accent transition-all duration-500 hover:-rotate-1 inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  MAGAZINE
                </span>
              </h1>

              <p className="text-2xl text-muted-foreground leading-relaxed max-w-lg hover:text-foreground transition-all duration-500 hover:scale-105">
                A sophisticated digital publication celebrating beauty, fashion, and cultural influence through
                innovative editorial design.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground px-10 py-5 rounded-full magazine-hover hover:scale-115 hover:shadow-3xl hover:shadow-primary/30 transition-all duration-500 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative">Read Magazine</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-500 relative" />
              </Button>

              <div className="flex items-center gap-4 hover:gap-6 transition-all duration-500 hover:scale-110 group">
                <User className="w-6 h-6 text-muted-foreground hover:text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                <span className="text-sm text-muted-foreground hover:text-foreground transition-all duration-500 font-medium">
                  50K+ Readers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contents" className="py-24 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-sans font-bold mb-6 hover:scale-105 transition-all duration-700 cursor-default">
              <span className="text-foreground hover:rotate-1 inline-block transition-transform duration-500">
                TABLE OF
              </span>
              <span className="text-primary hover:-rotate-1 inline-block transition-transform duration-500 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}
                CONTENTS
              </span>
            </h2>
            <div className="magazine-divider w-32 mx-auto hover:w-64 transition-all duration-700 bg-gradient-to-r from-primary to-accent h-1 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <Card
                key={article.id}
                className="magazine-hover magazine-shadow bg-card/80 backdrop-blur-sm border-border/30 overflow-hidden hover:scale-110 hover:shadow-3xl hover:shadow-primary/20 transition-all duration-700 group hover:bg-card/90 hover:border-primary/30 hover:-rotate-1"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"></div>
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover object-[center_25%] transition-all duration-1000 group-hover:scale-130 group-hover:rotate-3 filter group-hover:brightness-110"
                  />
                  <div className="absolute top-4 left-4 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 text-xs font-bold rounded-full hover:scale-115 transition-all duration-500 shadow-lg">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </div>

                <div className="p-6 space-y-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-lg"></div>
                  <div className="space-y-3 relative z-10">
                    <h3 className="text-xl font-sans font-bold text-card-foreground leading-tight group-hover:text-primary transition-all duration-500 hover:scale-105">
                      {article.title}
                    </h3>
                    <p className="text-sm text-primary font-medium group-hover:text-accent transition-all duration-500 hover:scale-105">
                      {article.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground transition-all duration-500 relative z-10">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border group-hover:border-primary/50 transition-all duration-500 relative z-10">
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-all duration-500 font-medium">
                      {article.readTime}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-primary hover:text-primary/80 hover:scale-115 hover:bg-primary/10 transition-all duration-500 rounded-full group/btn relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></span>
                      <span className="relative">Read More</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Spread */}
      <section id="articles" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Article Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 hover:gap-6 transition-all duration-300">
                  <span className="bg-accent text-accent-foreground px-4 py-2 text-sm font-bold rounded-full hover:scale-110 transition-transform duration-300">
                    COVER STORY
                  </span>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    8 MIN READ
                  </span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-sans font-bold leading-tight hover:text-primary transition-colors duration-500">
                  The Evolution of an Icon
                </h2>

                <p className="text-xl text-primary font-medium hover:text-accent transition-colors duration-300">
                  From Transformers to Cultural Phenomenon
                </p>
              </div>
            </div>

            {/* Article Images */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative magazine-shadow rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500">
                <img
                  src="/images/megan-3.jpeg"
                  alt="Editorial Portrait"
                  className="w-full h-96 object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm bg-black/50 backdrop-blur-sm rounded px-3 py-2 hover:bg-black/70 transition-colors duration-300">
                    Editorial portrait showcasing timeless elegance
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="magazine-shadow rounded-lg overflow-hidden group hover:scale-105 transition-all duration-500">
                  <img
                    src="/images/megan-5.jpeg"
                    alt="Behind the scenes"
                    className="w-full h-48 object-cover object-[center_25%] group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                </div>
                <div className="magazine-shadow rounded-lg overflow-hidden group hover:scale-105 transition-all duration-500">
                  <img
                    src="/images/megan-8.jpeg"
                    alt="Fashion moment"
                    className="w-full h-48 object-cover object-[center_25%] group-hover:scale-110 group-hover:-rotate-1 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4 bg-gradient-to-br from-muted/10 via-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-sans font-bold mb-6 hover:scale-105 transition-all duration-700 cursor-default">
              <span className="text-foreground hover:rotate-1 inline-block transition-transform duration-500">
                EDITORIAL
              </span>
              <span className="text-primary hover:-rotate-1 inline-block transition-transform duration-500 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}
                GALLERY
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-all duration-500 hover:scale-105">
              A curated collection of editorial photography celebrating beauty, fashion, and artistic expression
            </p>
            <div className="magazine-divider w-32 mx-auto mt-8 hover:w-64 transition-all duration-700 bg-gradient-to-r from-primary to-accent h-1 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group magazine-hover magazine-shadow rounded-3xl overflow-hidden bg-card/80 backdrop-blur-sm hover:scale-110 hover:shadow-3xl hover:shadow-primary/20 transition-all duration-700 hover:bg-card/90 hover:-rotate-1 border border-border/30 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"></div>
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.caption}
                    className="w-full h-80 object-cover object-[center_25%] transition-all duration-1000 group-hover:scale-130 group-hover:rotate-2 filter group-hover:brightness-110 group-hover:contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center justify-between text-white">
                      <h3 className="font-sans font-bold hover:text-primary transition-all duration-500 hover:scale-110 text-lg">
                        {image.caption}
                      </h3>
                      <Camera className="w-6 h-6 hover:scale-150 hover:rotate-12 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 px-4 border-t border-border hover:border-primary/50 transition-all duration-700 bg-gradient-to-br from-muted/10 to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-sans font-bold text-primary hover:scale-110 hover:rotate-1 transition-all duration-500 cursor-default bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MEGAN FOX MAGAZINE
              </h3>
              <p className="text-muted-foreground hover:text-foreground transition-all duration-500 hover:scale-105 text-lg leading-relaxed">
                A digital publication celebrating beauty, fashion, and cultural influence through innovative editorial
                design.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-6">
                <Heart className="w-8 h-8 text-primary fill-current hover:scale-150 hover:animate-pulse transition-all duration-500 hover:rotate-12" />
                <Star className="w-8 h-8 text-accent fill-current hover:scale-150 hover:rotate-45 transition-all duration-500" />
                <Crown className="w-8 h-8 text-secondary fill-current hover:scale-150 hover:-rotate-12 transition-all duration-500" />
              </div>
              <p className="text-sm text-muted-foreground hover:text-foreground transition-all duration-500 hover:scale-110 font-medium">
                Crafted with passion and admiration
              </p>
            </div>

            <div className="text-right space-y-6">
              <p className="text-sm text-muted-foreground hover:text-foreground transition-all duration-500 hover:scale-110 font-medium">
                ISSUE 01 • JANUARY 2025
              </p>
              <Button
                variant="outline"
                className="rounded-full bg-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-primary-foreground hover:scale-115 hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 group relative overflow-hidden border-2 hover:border-transparent"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <BookOpen className="w-4 h-4 mr-2 hover:rotate-12 transition-transform duration-500 relative" />
                <span className="relative">Next Issue</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
