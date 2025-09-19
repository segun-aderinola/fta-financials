// import { Button } from "@/components/ui/button";
// import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";
// import {
//   Shield,
//   Eye,
//   Target,
//   Users,
//   Award,
//   Lock,
//   FileCheck,
//   AlertTriangle,
//   ArrowRight,
//   CheckCircle,
//   Star,
//   MapPin,
//   Mail,
//   Phone,
//   Briefcase,
//   GraduationCap,
//   TrendingUp,
// } from "lucide-react";
// import Link from "next/link";
// import {
//   FadeIn,
//   SlideInLeft,
//   SlideInRight,
//   ScaleIn,
// } from "@/components/animations";

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
//         <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-bounce"></div>
        
//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <FadeIn className="text-center lg:text-left">
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
//                 About{" "}
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   FTA Financial Company Ltd
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                 At FTA Financial Company Ltd, we believe that strong financial partnerships build a brighter future. Our
//                 goal is to offer clients tailored financial solutions that meet their unique needs and help them achieve
//                 long-term success.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
//                 <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-6 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                   <Link href="/services" className="flex items-center gap-3">
//                     Our Services
//                     <ArrowRight className="w-5 h-5" />
//                   </Link>
//                 </Button>
//                 <Button variant="outline" className="border-2 border-blue-600 text-blue-600 px-10 py-6 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
//                   <Link href="/contact">
//                     Contact Us
//                   </Link>
//                 </Button>
//               </div>
//             </FadeIn>
            
//             <SlideInRight delay={200}>
//               <div className="relative group">
//                 <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <img
//                   src="/man-holding-phone-removebg-preview.png"
//                   alt="Professional team representing trust and expertise"
//                   className="relative rounded-3xl group-hover:scale-105 transition-transform duration-500 w-full object-cover"
//                 />
//               </div>
//             </SlideInRight>
//           </div>
//         </div>
//       </section>

//       {/* Vision and Mission Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <FadeIn className="text-center space-y-6 mb-20">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Vision & Mission</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our vision and mission guide everything we do, ensuring we deliver exceptional value to our clients.
//             </p>
//           </FadeIn>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             <SlideInLeft delay={100}>
//               <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
//                 <div className="relative">
//                   <img
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&crop=center"
//                     alt="Vision - Future perspective"
//                     className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute top-6 right-6">
//                     <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
//                       <Eye className="h-8 w-8" />
//                     </div>
//                   </div>
//                   <div className="absolute bottom-6 left-6">
//                     <h3 className="text-3xl font-bold text-white mb-2">Our Vision</h3>
//                   </div>
//                 </div>
                
//                 <div className="p-8 space-y-4">
//                   <p className="text-gray-600 leading-relaxed text-lg">
//                     To be the leading financial services provider in Nigeria and across Africa, recognized for our
//                     innovative solutions, exceptional customer service, and unwavering commitment to empowering
//                     individuals and businesses to achieve financial independence and sustainable growth.
//                   </p>
//                 </div>
//               </div>
//             </SlideInLeft>

//             <SlideInRight delay={200}>
//               <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
//                 <div className="relative">
//                   <img
//                     src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=300&fit=crop&crop=center"
//                     alt="Mission - Our purpose"
//                     className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute top-6 right-6">
//                     <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-purple-600 shadow-lg">
//                       <Target className="h-8 w-8" />
//                     </div>
//                   </div>
//                   <div className="absolute bottom-6 left-6">
//                     <h3 className="text-3xl font-bold text-white mb-2">Our Mission</h3>
//                   </div>
//                 </div>
                
//                 <div className="p-8 space-y-4">
//                   <p className="text-gray-600 leading-relaxed text-lg">
//                     To provide comprehensive, accessible, and innovative financial solutions that empower our clients to
//                     secure their financial future. We are committed to building lasting relationships based on trust,
//                     transparency, and mutual success while contributing to the economic development of our communities.
//                   </p>
//                 </div>
//               </div>
//             </SlideInRight>
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team Section */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <FadeIn className="text-center space-y-6 mb-20">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Leadership Team</h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               Meet our distinguished leadership team with decades of combined expertise in financial services, banking, 
//               risk management, and strategic business development.
//             </p>
//           </FadeIn>

//           {/* Executive Leadership */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
//             <ScaleIn delay={100}>
//               <div className="group rounded-3xl shadow-xl transition-all duration-500 overflow-hidden hover:scale-105">
//                 <div className="relative">
//                   <img
//                     src="/mayowa.png"
//                     alt="Dr. Mayowa Adeyemo"
//                     className="w-full h-80 bg-black object-contain transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                   <div className="absolute bottom-6 left-6 right-6 text-white">
//                     <h3 className="text-2xl font-bold mb-2">Dr. Mayowa Adeyemo</h3>
//                     <p className="text-blue-200 font-semibold text-lg">Managing Director/CEO</p>
//                   </div>
//                 </div>
                
//                 <div className="p-8 space-y-6">
//                   <p className="text-gray-600 leading-relaxed">
//                     Visionary leader with over 20 years in banking and financial management. Former Regional Head at 
//                     Polaris Bank Ltd, expert in strategic partnerships, SME development, and financial inclusion.
//                   </p>
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3 text-sm text-gray-700">
//                       <GraduationCap className="w-4 h-4 text-blue-600" />
//                       <span>PhD Management Science, MBA, BSc Economics</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-sm text-gray-700">
//                       <Briefcase className="w-4 h-4 text-blue-600" />
//                       <span>Associate Member: CIBN, NIM, CIFCN</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-sm text-gray-700">
//                       <Award className="w-4 h-4 text-blue-600" />
//                       <span>Lagos Business School Alumni (SMP 82)</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </ScaleIn>

//             <ScaleIn delay={200}>
//               <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
//                 <div className="relative">
//                   <img
//                     src="/olushola.jpeg"
//                     alt="Olusola Arowojolu"
//                     className="w-full h-80 bg-black object-contain transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                   <div className="absolute bottom-6 left-6 right-6 text-white">
//                     <h3 className="text-2xl font-bold mb-2">Olusola Arowojolu</h3>
//                     <p className="text-purple-200 font-semibold text-lg">Chairman</p>
//                   </div>
//                 </div>
                
//                 <div className="p-8 space-y-6">
//                   <p className="text-gray-600 leading-relaxed">
//                     Seasoned finance transformation leader with 20+ years global experience in IFRS implementation. 
//                     Former consultant for FTSE 100 companies including Fujitsu, BT Group, and Vodafone.
//                   </p>
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3 text-sm text-gray-700">
//                       <GraduationCap className="w-4 h-4 text-purple-600" />
//                       <span>MSc Professional Accountancy (UCL), ACCA Fellow</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-sm text-gray-700">
//                       <Briefcase className="w-4 h-4 text-purple-600" />
//                       <span>ICAN Qualified, Oxford Brookes BSc</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-sm text-gray-700">
//                       <TrendingUp className="w-4 h-4 text-purple-600" />
//                       <span>Enterprise Systems & IFRS Expert</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </ScaleIn>
//           </div>

//           {/* Advisory Board and Executive Directors */}
//           <FadeIn delay={300}>
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Advisory Board & Executive Team</h3>
//               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                 Our advisory board and executive team provide strategic guidance and operational excellence.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <SlideInLeft delay={100}>
//                 <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105">
//                   <div className="relative">
//                     <img
//                       src="/fayemiwo.png"
//                       alt="Fayemiwo Ojo Omobola"
//                       className="w-full h-56 object-contain bg-black transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
//                     <div className="absolute bottom-4 left-4 right-4 text-white">
//                       <h4 className="font-bold text-lg">Fayemiwo Ojo Omobola</h4>
//                       <p className="text-green-200 text-sm">Member, Advisory Board</p>
//                     </div>
//                   </div>
                  
//                   <div className="p-6 space-y-4">
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Seasoned financial services executive with over 20 years at Polaris Bank Ltd. Expert in 
//                       operational excellence, business development, and regulatory compliance.
//                     </p>
//                     <div className="pt-2 border-t border-gray-100">
//                       <p className="text-xs text-green-600 font-medium">MBA, BSc Business Administration</p>
//                     </div>
//                   </div>
//                 </div>
//               </SlideInLeft>

//               <ScaleIn delay={200}>
//                 <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105">
//                   <div className="relative">
//                     <img
//                       src="/philadephia.jpeg"
//                       alt="Philadelphia Samuel"
//                       className="w-full h-56 object-contain transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
//                     <div className="absolute bottom-4 left-4 right-4 text-white">
//                       <h4 className="font-bold text-lg">Philadelphia Samuel</h4>
//                       <p className="text-indigo-200 text-sm">Executive Director</p>
//                     </div>
//                   </div>
                  
//                   <div className="p-6 space-y-4">
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Strategic executive with extensive experience in financial operations and corporate governance, 
//                       driving organizational growth and operational excellence.
//                     </p>
//                     <div className="pt-2 border-t border-gray-100">
//                       <p className="text-xs text-indigo-600 font-medium">Professional Certifications in Finance</p>
//                     </div>
//                   </div>
//                 </div>
//               </ScaleIn>

//               <SlideInRight delay={300}>
//                 <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105">
//                   <div className="relative">
//                     <img
//                       src="/tunrayo.jpeg"
//                       alt="Tunrayo Fasakin"
//                       className="w-full h-56 object-cover transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                     <div className="absolute bottom-4 left-4 right-4 text-white">
//                       <h4 className="font-bold text-lg">Tunrayo Fasakin</h4>
//                       <p className="text-pink-200 text-sm">Member, Advisory Board</p>
//                     </div>
//                   </div>
                  
//                   <div className="p-6 space-y-4">
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Advisory board member bringing valuable insights in strategic planning and business development 
//                       to guide company growth and market expansion.
//                     </p>
//                     <div className="pt-2 border-t border-gray-100">
//                       <p className="text-xs text-pink-600 font-medium">Strategic Business Expertise</p>
//                     </div>
//                   </div>
//                 </div>
//               </SlideInRight>
//             </div>
//           </FadeIn>
//         </div>
//       </section>

//       {/* Company Information Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <FadeIn className="text-center space-y-6 mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Contact Information</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Get in touch with FTA Financial Company Ltd for all your financial service needs.
//             </p>
//           </FadeIn>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <SlideInLeft delay={100}>
//               <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
//                 <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <MapPin className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Address</h3>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   No. 1 Olugbesan Close, off Allen Avenue, Ikeja Lagos
//                 </p>
//               </div>
//             </SlideInLeft>

//             <ScaleIn delay={200}>
//               <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
//                 <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Mail className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Email</h3>
//                 <p className="text-gray-700 text-lg">ftafinancials@gmail.com</p>
//               </div>
//             </ScaleIn>

//             <SlideInRight delay={300}>
//               <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
//                 <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Phone className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone</h3>
//                 <p className="text-gray-700 text-lg">07070650444</p>
//               </div>
//             </SlideInRight>
//           </div>
//         </div>
//       </section>

//       {/* Compliance and Data Protection Section */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-float"></div>
//         <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-lg animate-float-delayed"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <FadeIn className="text-center space-y-6 mb-20">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
//               Compliance, Data Protection & Risk Management
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               We maintain the highest standards of regulatory compliance, data protection, and risk management to ensure
//               the security and privacy of our clients' information and investments.
//             </p>
//           </FadeIn>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               {[
//                 {
//                   icon: <Lock className="h-8 w-16" />,
//                   title: "GDPR Compliance",
//                   description: "Full compliance with General Data Protection Regulation (GDPR) standards, ensuring the highest level of data privacy and protection for all client information and transactions.",
//                   color: "from-blue-500 to-blue-600"
//                 },
//                 {
//                   icon: <FileCheck className="h-8 w-16" />,
//                   title: "KYC & AML Procedures",
//                   description: "Comprehensive Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures in accordance with international standards and local regulatory requirements.",
//                   color: "from-purple-500 to-purple-600"
//                 },
//                 {
//                   icon: <AlertTriangle className="h-8 w-16" />,
//                   title: "Risk Assessment",
//                   description: "Advanced risk assessment frameworks and continuous monitoring systems to identify, evaluate, and mitigate potential financial and operational risks.",
//                   color: "from-green-500 to-green-600"
//                 }
//               ].map((item, index) => (
//                 <SlideInLeft key={item.title} delay={100 * (index + 1)}>
//                   <div className="flex items-start gap-6 p-8 rounded-3xl hover:bg-white/80 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                     <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
//                       {item.icon}
//                     </div>
//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed text-lg">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </SlideInLeft>
//               ))}
//             </div>

//             <SlideInRight delay={200}>
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
//                 <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group-hover:shadow-3xl transition-shadow duration-500">
//                   <img
//                     src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=500&fit=crop&crop=center"
//                     alt="Security, compliance, and data protection"
//                     className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   <div className="absolute bottom-8 left-8 right-8">
//                     <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
//                       <div className="flex items-center gap-4 mb-3">
//                         <Shield className="h-8 w-8 text-blue-600" />
//                         <h4 className="font-bold text-gray-900 text-xl">Security Commitment</h4>
//                       </div>
//                       <p className="text-gray-600">
//                         State-of-the-art encryption and multi-factor authentication
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SlideInRight>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Shield,
  Eye,
  Target,
  Users,
  Award,
  Lock,
  FileCheck,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Scale,
  Heart,
} from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
} from "@/components/animations";
import Leadership from "@/components/Leadership";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-bounce"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <FadeIn className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FTA Financial Company Ltd
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                At FTA Financial Company Ltd, we believe that strong financial partnerships build a brighter future. Our
                goal is to offer clients tailored financial solutions that meet their unique needs and help them achieve
                long-term success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 lg:px-10 py-4 lg:py-6 rounded-xl font-semibold text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <Link href="/services" className="flex items-center gap-3">
                    Our Services
                    <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 px-6 lg:px-10 py-4 lg:py-6 rounded-xl font-semibold text-base lg:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </FadeIn>
            
            <SlideInRight delay={200}>
              <div className="relative group mt-8 lg:mt-0">
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

      {/* Vision and Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center space-y-6 mb-12 lg:mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Vision & Mission</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Our vision and mission guide everything we do, ensuring we deliver exceptional value to our clients.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <SlideInLeft delay={100}>
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&crop=center"
                    alt="Vision - Future perspective"
                    className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 lg:top-6 right-4 lg:right-6">
                    <div className="w-12 lg:w-16 h-12 lg:h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
                      <Eye className="h-6 lg:h-8 w-6 lg:w-8" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Our Vision</h3>
                  </div>
                </div>
                
                <div className="p-6 lg:p-8 space-y-4">
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                    To be the leading financial services provider in Nigeria and across Africa, recognized for our
                    innovative solutions, exceptional customer service, and unwavering commitment to empowering
                    individuals and businesses to achieve financial independence and sustainable growth.
                  </p>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight delay={200}>
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=300&fit=crop&crop=center"
                    alt="Mission - Our purpose"
                    className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 lg:top-6 right-4 lg:right-6">
                    <div className="w-12 lg:w-16 h-12 lg:h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-purple-600 shadow-lg">
                      <Target className="h-6 lg:h-8 w-6 lg:w-8" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Our Mission</h3>
                  </div>
                </div>
                
                <div className="p-6 lg:p-8 space-y-4">
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                    To provide comprehensive, accessible, and innovative financial solutions that empower our clients to
                    secure their financial future. We are committed to building lasting relationships based on trust,
                    transparency, and mutual success while contributing to the economic development of our communities.
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
        <Leadership />

      {/* Company Information Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center space-y-6 mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Contact Information</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with FTA Financial Company Ltd for all your financial service needs.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <SlideInLeft delay={100}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 lg:p-8 text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 lg:w-10 h-8 lg:h-10" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Address</h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  No. 1 Olugbesan Close, off Allen Avenue, Ikeja Lagos
                </p>
              </div>
            </SlideInLeft>

            <ScaleIn delay={200}>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 lg:p-8 text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 lg:w-10 h-8 lg:h-10" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-700 text-base lg:text-lg break-all">ftafinancials@gmail.com</p>
              </div>
            </ScaleIn>

            <SlideInRight delay={300}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 lg:p-8 text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 lg:w-10 h-8 lg:h-10" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Phone</h3>
                <p className="text-gray-700 text-base lg:text-lg">07070650444</p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Compliance and Data Protection Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-lg animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center space-y-6 mb-12 lg:mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Compliance, Data Protection & Risk Management
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              We maintain the highest standards of regulatory compliance, data protection, and risk management to ensure
              the security and privacy of our clients' information and investments.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              {[
                {
                  icon: <Lock className="h-6 lg:h-8 w-6 lg:w-8" />,
                  title: "GDPR Compliance",
                  description: "Full compliance with General Data Protection Regulation (GDPR) standards, ensuring the highest level of data privacy and protection for all client information and transactions.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: <FileCheck className="h-6 lg:h-8 w-6 lg:w-8" />,
                  title: "KYC & AML Procedures",
                  description: "Comprehensive Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures in accordance with international standards and local regulatory requirements.",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: <AlertTriangle className="h-6 lg:h-8 w-6 lg:w-8" />,
                  title: "Risk Assessment",
                  description: "Advanced risk assessment frameworks and continuous monitoring systems to identify, evaluate, and mitigate potential financial and operational risks.",
                  color: "from-green-500 to-green-600"
                }
              ].map((item, index) => (
                <SlideInLeft key={item.title} delay={100 * (index + 1)}>
                  <div className="flex items-start gap-4 lg:gap-6 p-6 lg:p-8 rounded-3xl hover:bg-white/80 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className={`w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="space-y-2 lg:space-y-3 min-w-0">
                      <h3 className="text-lg lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SlideInLeft>
              ))}
            </div>

            <SlideInRight delay={200}>
              <div className="relative group mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group-hover:shadow-3xl transition-shadow duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=500&fit=crop&crop=center"
                    alt="Security, compliance, and data protection"
                    className="w-full h-64 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 lg:p-6">
                      <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-3">
                        <Shield className="h-6 lg:h-8 w-6 lg:w-8 text-blue-600" />
                        <h4 className="font-bold text-gray-900 text-lg lg:text-xl">Security Commitment</h4>
                      </div>
                      <p className="text-gray-600 text-sm lg:text-base">
                        State-of-the-art encryption and multi-factor authentication
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}