import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { CalendarIcon, ArrowRightIcon } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Business Development in 2024",
    date: "January 25, 2024",
    excerpt: "Exploring emerging trends and strategies in business development for the modern era.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop"
  },
  {
    title: "Building Strategic Partnerships That Last",
    date: "January 20, 2024",
    excerpt: "Key insights into creating and maintaining valuable business partnerships.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=800&auto=format&fit=crop"
   
  }, 
  {
    title: "Digital Transformation in Business Development",
    date: "January 15, 2024",
    excerpt: "How technology is reshaping the landscape of business development.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=800&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing my thoughts and experiences in business development, strategy, and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group">
                  Read More 
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
