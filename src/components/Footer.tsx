import { Github, Twitter, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-1 items-center justify-center gap-4 md:justify-start">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} Your Company. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-1 items-center justify-center gap-4 md:justify-center">
          <nav className="flex gap-4">
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-center gap-4 md:justify-end">
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:itayekk1@gmail.com">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon">
            <Github className="h-4 w-4" />
            <span className="sr-only">Github</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer