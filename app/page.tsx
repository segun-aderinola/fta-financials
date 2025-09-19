import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Star,
  Award,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
} from "@/components/animations";
import Leadership from "@/components/Leadership";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Keep as is */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl pt-10 md:pt-2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance capitalize">
                Secure today{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Prosper tomorrow
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Empowering Individuals and Businesses to Achieve Financial
                Freedom through expert solutions, trusted partnerships, and
                innovative financial services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className=" hover:opacity-90 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:bg-primary hover:text-white transition-all duration-300">
                  <Link href="/services">Discover Our Services</Link>
                </Button>
              </div>
            </SlideInLeft>
            <SlideInRight delay={200}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/man-holding-phone-removebg-preview.png"
                  alt="Professional team representing trust and expertise"
                  className="relative rounded-3xl group-hover:scale-105 transition-transform duration-500 w-full object-cover"
                />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Introduction/Overview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group-hover:shadow-3xl transition-shadow duration-500">
                <Image
                  src="/launching-startup.jpg"
                  alt="Professional office consultation"
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Expert Consultation</h4>
                    <p className="text-sm text-gray-600">Trusted by 1000+ businesses</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <SlideInRight delay={300} className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-balance">
                  Expert Financial Solutions for Your Success
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                FTA Financial Company Ltd is committed to providing expert
                financial solutions for businesses and individuals, helping them
                unlock financial potential and drive success through innovative
                services and strategic partnerships.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Tailored Solutions",
                    desc: "Customized financial services designed to meet your unique needs and goals.",
                    icon: <Target className="h-5 w-5" />
                  },
                  {
                    title: "Expert Guidance",
                    desc: "Professional advice from experienced financial specialists and industry experts.",
                    icon: <Award className="h-5 w-5" />
                  },
                  {
                    title: "Proven Results",
                    desc: "Track record of helping clients achieve their financial objectives and growth targets.",
                    icon: <Star className="h-5 w-5" />
                  },
                ].map((item, index) => (
                  <FadeIn key={item.title} delay={400 + index * 100}>
                    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 group transition-all duration-300 hover:scale-105">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <ScaleIn delay={700}>
                <Button size="lg" className=" text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <Link href="/services" className="flex items-center gap-2">
                    Discover Our Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </ScaleIn>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-balance">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-gray-600 text-pretty max-w-3xl mx-auto">
              We offer a variety of financial services tailored to meet the
              needs of businesses and individuals, helping you achieve your
              financial goals with confidence.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Business & Personal Loans",
                description: "Flexible loan solutions designed to support your business growth or personal financial needs with competitive rates and terms.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&crop=center",
                stats: { rate: "8.5%", amount: "₦500M" }
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Group Loans",
                description: "Collaborative financing solutions for groups and cooperatives, enabling collective financial growth and shared prosperity.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop&crop=center",
                stats: { rate: "7.5%", amount: "Group" }
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "LPO Finance & Syndication",
                description: "Specialized financing for Local Purchase Orders and loan syndication services to support large-scale business operations.",
                image: "/calculator.jpg",
                stats: { rate: "90%", amount: "LPO Value" }
              },
            ].map((service, index) => (
              <FadeIn key={service.title} delay={100 * (index + 1)}>
                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400} className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-white transition-all duration-300">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <Leadership />

      {/* Partners Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/15 rounded-full blur-lg"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 text-balance">
              Trusted Partnerships
            </h2>
            <p className="text-xl text-gray-600 text-pretty max-w-3xl mx-auto">
              We proudly partner with leading financial organizations to offer
              comprehensive services and ensure the highest standards of
              financial excellence.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CRC Credit Bureau",
                description: "Strategic partnership for comprehensive credit reporting and risk assessment services.",
                icon: <Shield className="h-12 w-12" />,
                image: "/crc_logo.jpeg",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "First Central Credit Bureau",
                description: "Collaboration for enhanced credit information services and financial data analytics.",
                icon: <TrendingUp className="h-12 w-12" />,
                image: "/first_central_credit.png",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Credit Registry",
                description: "Partnership for comprehensive credit registry services and financial inclusion initiatives.",
                icon: <Users className="h-12 w-12" />,
                image: "/credit_registry.png",
                color: "from-green-500 to-green-600"
              },
            ].map((partner, index) => (
              <ScaleIn key={partner.title} delay={100 * (index + 1)}>
                <div className="group bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative">
                    <img
                      src={partner.image}
                      alt={partner.title}
                      className="w-full h-48 object-contain ransition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {partner.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}