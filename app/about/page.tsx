import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Eye, Target, Users, Award, Lock, FileCheck, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FadeIn, SlideInLeft, SlideInRight, ScaleIn } from "@/components/animations"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  FTA Financial Company Ltd
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                At FTA Financial Company Ltd, we believe that strong financial partnerships build a brighter future. Our
                goal is to offer clients tailored financial solutions that meet their unique needs and help them achieve
                long-term success.
              </p>
            </SlideInLeft>
            <SlideInRight delay={200} className="relative">
              <Image
                src="/professional-team-trust-expertise-financial-servi.jpg"
                alt="Professional team representing trust and expertise"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn delay={100}>
              <Card className="p-8 border-border h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    To be the leading financial services provider in Nigeria and across Africa, recognized for our
                    innovative solutions, exceptional customer service, and unwavering commitment to empowering
                    individuals and businesses to achieve financial independence and sustainable growth.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="p-8 border-border h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    To provide comprehensive, accessible, and innovative financial solutions that empower our clients to
                    secure their financial future. We are committed to building lasting relationships based on trust,
                    transparency, and mutual success while contributing to the economic development of our communities.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <ScaleIn delay={300} className="mt-12 text-center">
            <Image
              src="/inspirational-growth-ambition-city-skyline-upward-a.jpg"
              alt="Inspirational image reflecting ambition and growth"
              width={800}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
            />
          </ScaleIn>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Leadership Team</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our experienced leadership team brings decades of combined expertise in financial services, risk
              management, and business development.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScaleIn delay={100}>
              <Card className="text-center p-6 border-border h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Chief Executive Officer</h3>
                    <p className="text-muted-foreground mt-2">
                      Strategic leadership and vision for company growth, with over 15 years of experience in financial
                      services and business development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={200}>
              <Card className="text-center p-6 border-border h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Chief Risk Officer</h3>
                    <p className="text-muted-foreground mt-2">
                      Oversees risk management strategies and compliance frameworks, ensuring the highest standards of
                      financial security and regulatory adherence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={300}>
              <Card className="text-center p-6 border-border h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Chief Financial Officer</h3>
                    <p className="text-muted-foreground mt-2">
                      Manages financial operations and strategic planning, with expertise in corporate finance and
                      investment management across multiple markets.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Compliance and Data Protection Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Compliance, Data Protection & Risk Management
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-4xl mx-auto">
              We maintain the highest standards of regulatory compliance, data protection, and risk management to ensure
              the security and privacy of our clients' information and investments.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <SlideInLeft delay={100}>
                <Card className="p-6 border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Lock className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">GDPR Compliance</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Full compliance with General Data Protection Regulation (GDPR) standards, ensuring the highest
                      level of data privacy and protection for all client information and transactions.
                    </p>
                  </CardContent>
                </Card>
              </SlideInLeft>

              <SlideInLeft delay={200}>
                <Card className="p-6 border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FileCheck className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">KYC & AML Procedures</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Comprehensive Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures in accordance
                      with international standards and local regulatory requirements.
                    </p>
                  </CardContent>
                </Card>
              </SlideInLeft>

              <SlideInLeft delay={300}>
                <Card className="p-6 border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Risk Assessment</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Advanced risk assessment frameworks and continuous monitoring systems to identify, evaluate, and
                      mitigate potential financial and operational risks.
                    </p>
                  </CardContent>
                </Card>
              </SlideInLeft>
            </div>

            <SlideInRight delay={200} className="space-y-6">
              <Image
                src="/security-compliance-legal-data-protection-icons-g.jpg"
                alt="Security, compliance, and data protection icons"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />

              <Card className="p-6 bg-primary/5 border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Security Commitment</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our commitment to security extends beyond compliance. We employ state-of-the-art encryption,
                    multi-factor authentication, and regular security audits to protect your financial data and ensure
                    the integrity of all transactions.
                  </p>
                  <div className="pt-4">
                    <Button asChild className="bg-brand-gradient hover:opacity-90 text-white">
                      <Link href="/contact">Learn More About Our Security</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <ScaleIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Ready to Partner with Us?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Join thousands of satisfied clients who trust FTA Financial Company Ltd for their financial needs. Let's
            build your financial future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-gradient hover:opacity-90 text-white">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </ScaleIn>
      </section>

      <Footer />
    </div>
  )
}
