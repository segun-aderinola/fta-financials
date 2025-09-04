import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Calendar, Shield } from "lucide-react"
import { FadeIn, SlideInLeft, SlideInRight, ScaleIn } from "@/components/animations"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Get in Touch with Our Financial Experts
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
            Ready to take your business to the next level? Our team of financial specialists is here to help you find
            the perfect funding solution tailored to your unique needs.
          </p>
        </FadeIn>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SlideInLeft>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your Company Ltd." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business-loans">Business Loans</SelectItem>
                          <SelectItem value="invoice-factoring">Invoice Factoring</SelectItem>
                          <SelectItem value="equipment-financing">Equipment Financing</SelectItem>
                          <SelectItem value="working-capital">Working Capital Solutions</SelectItem>
                          <SelectItem value="trade-finance">Trade Finance</SelectItem>
                          <SelectItem value="merchant-services">Merchant Services</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fundingAmount">Funding Amount Needed</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select amount range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                          <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                          <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your business and funding needs..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </SlideInLeft>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <SlideInRight delay={200}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                    <CardDescription>Multiple ways to reach our team of financial experts.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Office Address</h3>
                        <p className="text-gray-600">
                          123 Financial District
                          <br />
                          Suite 456
                          <br />
                          New York, NY 10004
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone Numbers</h3>
                        <p className="text-gray-600">
                          Main: (555) 123-4567
                          <br />
                          Toll-Free: 1-800-FTA-FUND
                          <br />
                          Fax: (555) 123-4568
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email Addresses</h3>
                        <p className="text-gray-600">
                          General: info@ftafinancial.com
                          <br />
                          Sales: sales@ftafinancial.com
                          <br />
                          Support: support@ftafinancial.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 6:00 PM EST
                          <br />
                          Saturday: 9:00 AM - 2:00 PM EST
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SlideInRight>

              {/* Quick Actions */}
              <FadeIn delay={400}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule a Consultation
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Live Chat Support
                    </Button>
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Request a Callback
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScaleIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of the Financial District, our office is easily accessible by public transportation.
            </p>
          </ScaleIn>

          <FadeIn delay={200}>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be embedded here</p>
                <p className="text-sm text-gray-500 mt-2">123 Financial District, Suite 456, New York, NY 10004</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SlideInLeft>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Your Information is Secure</h3>
                    <p className="text-gray-600 text-sm">
                      All communications are encrypted and your personal information is protected according to industry
                      standards. We never share your data with third parties without your explicit consent. Our team
                      follows strict confidentiality protocols to ensure your business information remains secure.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideInLeft>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-blue-600">
        <ScaleIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-blue-100 mb-8">
            For urgent funding needs or time-sensitive opportunities, contact our emergency hotline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Phone className="h-4 w-4 mr-2" />
              Emergency Hotline: (555) 911-FUND
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              24/7 Online Application
            </Button>
          </div>
        </ScaleIn>
      </section>
      <Footer />
    </div>
  )
}
