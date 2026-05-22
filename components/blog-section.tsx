import { ArrowUpRight, ArrowRight, FileEdit } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const articles = [
  {
    title: "Savings by age: Rules to know how much you should save",
    category: "Guides",
    date: "Jan 30, 2026",
    image: "/images/card-marble.png",
  },
  {
    title: "Banking is now available on your wrist: watchOS app is out!",
    category: "Updates",
    date: "Jan 30, 2026",
    image: "/images/watch-hand.png",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ADA996] to-[#F2F2F2] rounded-full mb-6">
            <FileEdit className="w-4 h-4 text-black" />
            <span className="text-xs text-black uppercase tracking-widest">Blog</span>
          </div>
          <h2 className="font-sans text-5xl font-normal mb-6">News & articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest updates, insightful articles, and expert opinions on banking trends, financial
            planning, and market information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="group cursor-pointer border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="bg-card rounded-2xl overflow-hidden border border-border mb-4 aspect-[4/3] relative">
                  <Image
                    src={article.image || "/public/images/watch-hand.png"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-foreground mb-3 group-hover:text-primary transition-colors text-lg font-medium">
                  {article.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 border border-border rounded-full text-xs text-foreground">
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="rounded-full pl-6 pr-2 py-6 group hover:bg-foreground hover:text-background transition-colors duration-300">
            <span className="text-sm uppercase tracking-wide mr-2">
              Browse all articles
            </span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center relative">
              <ArrowRight className="w-4 h-4 absolute transition-opacity duration-300 group-hover:opacity-0" />
              <ArrowUpRight className="w-4 h-4 absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
