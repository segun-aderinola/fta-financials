import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Calendar, Shield, ArrowRight } from "lucide-react";
import { FadeIn, SlideInLeft, SlideInRight, ScaleIn } from "@/components/animations";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-bounce"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Get in Touch with Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Financial Experts
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to take your business to the next level? Our team of financial specialists is here to help you find
                the perfect funding solution tailored to your unique needs.
              </p>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/hero-section-img-new.png"
                  alt="Professional consultation team"
                  className="relative rounded-3xl group-hover:scale-105 transition-transform duration-500 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              {/* Contact Details */}
              <SlideInRight delay={200}>
                <div className="group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=200&fit=crop&crop=center"
                      alt="Professional office building"
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-white">Contact Information</h2>
                      <p className="text-blue-100 text-sm sm:text-base">Multiple ways to reach our team</p>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {[
                      {
                        icon: <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />,
                        title: "Office Address",
                        content: "No. 1 Olugbesan Close\noff Allen Avenue\nIkeja Lagos",
                        color: "bg-blue-100 text-blue-600"
                      },
                      {
                        icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />,
                        title: "Phone Numbers",
                        content: "07070650444",
                        color: "bg-green-100 text-green-600"
                      },
                      {
                        icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />,
                        title: "Email Address",
                        content: "ftafinancials@gmail.com",
                        color: "bg-purple-100 text-purple-600"
                      },
                      {
                        icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5" />,
                        title: "Business Hours",
                        content: "Monday - Friday: 8:00 AM - 6:00 PM WAT\nSaturday: 9:00 AM - 2:00 PM WAT\nSunday: Closed",
                        color: "bg-orange-100 text-orange-600"
                      }
                    ].map((item, index) => (
                      <div key={item.title} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 group transition-all duration-300">
                        <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${item.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm whitespace-pre-line leading-relaxed break-words">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SlideInRight>

              {/* Quick Actions */}
              <FadeIn delay={400}>
                <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Actions</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { icon: <Calendar className="h-4 w-4" />, text: "Schedule a Consultation", color: "hover:bg-blue-50 hover:text-blue-600" },
                      { icon: <MessageSquare className="h-4 w-4" />, text: "Live Chat Support", color: "hover:bg-green-50 hover:text-green-600" },
                      { icon: <Users className="h-4 w-4" />, text: "Request a Callback", color: "hover:bg-purple-50 hover:text-purple-600" }
                    ].map((action, index) => (
                      <button key={action.text} className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 ${action.color} transition-all duration-300 flex items-center gap-3 font-medium text-sm sm:text-base`}>
                        {action.icon}
                        <span className="truncate">{action.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form or Additional Content */}
            <div className="space-y-6 lg:space-y-8">
              <SlideInLeft delay={300}>
                <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                    Ready to discuss your financial needs? We're here to help you achieve your business goals with tailored financial solutions.
                  </p>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      {
                        title: "Business Loans",
                        description: "Flexible financing solutions for business growth and expansion",
                        icon: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
                      },
                      {
                        title: "Financial Advisory",
                        description: "Expert guidance for strategic financial planning and investment",
                        icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                      },
                      {
                        title: "Investment Services",
                        description: "Comprehensive investment solutions tailored to your needs",
                        icon: <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                      }
                    ].map((service, index) => (
                      <div key={service.title} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300">
                        <div className="text-blue-600 mt-1">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{service.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Start Your Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </SlideInLeft>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <ScaleIn className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
          </ScaleIn>

          <FadeIn delay={200}>
       <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.395180315744695!3d6.525037695193902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc692ba70defeb33!2sAllen%20Ave%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1642678901234!5m2!1sen!2sng"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                  title="FTA Financial Company Office Location"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">FTA Financial Company Ltd</h4>
                    </div>
                    <p className="text-sm text-gray-600">No. 1 Olugbesan Close, off Allen Avenue, Ikeja Lagos</p>
                  </div>
                </div>
              </div>
          </FadeIn>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8  relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        
        {/* <div className="relative max-w-4xl mx-auto text-center">
          <ScaleIn>
            <h2 className="text-4xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              For urgent funding needs or time-sensitive opportunities, contact our emergency hotline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Emergency: +234 707 065 0444
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                24/7 Online Application
              </button>
            </div>
          </ScaleIn>
        </div> */}
      </section>
      
      <Footer />
    </div>
  );
}