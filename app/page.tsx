import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, SlideInLeft, SlideInRight, ScaleIn } from "@/components/animations"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Secure today{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Prosper tomorrow
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Empowering Individuals and Businesses to Achieve Financial Freedom through expert solutions, trusted
                partnerships, and innovative financial services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-gradient hover:opacity-90 text-white">
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Discover Our Services</Link>
                </Button>
              </div>
            </SlideInLeft>
            <SlideInRight delay={200} className="relative">
              <Image
                src="/professional-business-team-handshake-financial-gro.jpg"
                alt="Professional financial consultation"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Introduction/Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="relative">
              <Image
                src="/modern-office-consultation-professional-meeting-fi.jpg"
                alt="Professional office consultation"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </FadeIn>
            <SlideInRight delay={300} className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Expert Financial Solutions for Your Success
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                FTA Financial Company Ltd is committed to providing expert financial solutions for businesses and
                individuals, helping them unlock financial potential and drive success through innovative services and
                strategic partnerships.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Tailored Solutions</h3>
                    <p className="text-muted-foreground">
                      Customized financial services designed to meet your unique needs and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Expert Guidance</h3>
                    <p className="text-muted-foreground">
                      Professional advice from experienced financial specialists and industry experts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Track record of helping clients achieve their financial objectives and growth targets.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-brand-gradient hover:opacity-90 text-white">
                <Link href="/services">
                  Discover Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScaleIn className="max-w-4xl mx-auto space-y-8">
            <div className="relative">
              <Image
                src="/financial-security-growth-abstract-icons-shield-up.jpg"
                alt="Financial security and growth"
                width={300}
                height={200}
                className="mx-auto rounded-lg"
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Secure Today, Prosper Tomorrow
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our motto reflects our commitment to building financial security for today while creating sustainable
              prosperity for the future. We believe in empowering our clients with the tools, knowledge, and support
              they need to achieve lasting financial success.
            </p>
            <Button asChild size="lg" className="bg-brand-gradient hover:opacity-90 text-white">
              <Link href="/services">
                Explore How We Can Help <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScaleIn>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We offer a variety of financial services tailored to meet the needs of businesses and individuals, helping
              you achieve your financial goals with confidence.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Business & Personal Loans</h3>
                  <p className="text-muted-foreground">
                    Flexible loan solutions designed to support your business growth or personal financial needs with
                    competitive rates and terms.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Group Loans</h3>
                  <p className="text-muted-foreground">
                    Collaborative financing solutions for groups and cooperatives, enabling collective financial growth
                    and shared prosperity.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-border h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">LPO Finance & Syndication</h3>
                  <p className="text-muted-foreground">
                    Specialized financing for Local Purchase Orders and loan syndication services to support large-scale
                    business operations.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={400} className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Trusted Partnerships</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              We proudly partner with leading financial organizations to offer comprehensive services and ensure the
              highest standards of financial excellence.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScaleIn delay={100}>
              <Card className="text-center p-8 border-border h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">CRC Credit Bureau</h3>
                  <p className="text-muted-foreground">
                    Strategic partnership for comprehensive credit reporting and risk assessment services.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={200}>
              <Card className="text-center p-8 border-border h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">First Central Credit Bureau</h3>
                  <p className="text-muted-foreground">
                    Collaboration for enhanced credit information services and financial data analytics.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={300}>
              <Card className="text-center p-8 border-border h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Credit Registry</h3>
                  <p className="text-muted-foreground">
                    Partnership for comprehensive credit registry services and financial inclusion initiatives.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
