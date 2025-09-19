import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, Mail, ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { notFound } from "next/navigation"

// Leaders data
const leadersData = {
  mayowa_adeyemo: {
    name: "Dr. Mayowa Adeyemo",
    position: "Managing Director/CEO",
    image: "/mayowa.png",
    biography: [
      "Dr. Mayowa Adeyemo is a visionary leader and accomplished financial services executive, currently serving as the Managing Director and Chief Executive Officer of FTA Financial Company Ltd, where he oversees strategic direction, corporate governance, and operational excellence across the organization. With over two decades of experience in banking and financial management, he has earned a reputation for driving innovation, building high-performance teams, and delivering sustainable growth.",
      "Prior to becoming the Managing Director of FTA Financial Company, he held several senior leadership roles at Polaris Bank Ltd, including Regional Head for Lagos and South West Public Sector, and Business Development Manager across multiple branches. His tenure at Polaris Bank was marked by consistent performance in revenue growth and strategic partnerships.",
      "He is a pragmatic and results-driven executive with deep expertise in sales and marketing strategy, public-private partnerships, SME development, and financial inclusion. His ability to foster relationships with high-net-worth clients, government agencies, and corporate entities has positioned him as a trusted advisor and business strategist within the industry.",
      "Dr. Adeyemo is an alumnus of the Lagos Business School (SMP 82) and has completed extensive professional training in financial strategy, governance, and leadership. He is an Associate Member of the Chartered Institute of Bankers of Nigeria, the Nigerian Institute of Management, and the Chartered Institute of Finance and Control of Nigeria."
    ],
    education: [
      "PhD in Management Science - Federal University of Technology, Akure (2024)",
      "M.Tech in Project Management",
      "MBA in Business Administration",
      "BSc in Economics"
    ],
    experience: [
      "Managing Director/CEO - FTA Financial Company Ltd",
      "Regional Head - Polaris Bank Ltd (Lagos & South West Public Sector)",
      "Business Development Manager - Polaris Bank Ltd"
    ],
    certifications: [
      "Lagos Business School Alumni (SMP 82)",
      "Associate Member - CIBN",
      "Associate Member - NIM",
      "Associate Member - CIFCN"
    ]
  },
  olusola_arowojolu: {
    name: "Olusola Arowojolu",
    position: "Chairman",
    image: "/olushola.jpeg",
    biography: [
      "Olusola Arowojolu is a seasoned finance transformation leader and a qualified accountant with over 20 years of global experience in IFRS implementation, enterprise systems architecture, and financial systems integration. He combines deep technical expertise with strategic insight, having successfully led IFRS compliance programs across various sectors, including finance, telecommunications, retail, insurance, and technology.",
      "With a proven track record in managing multi-million-dollar programs for FTSE 100 and Fortune 500 companies, Olusola delivers strategic value through system implementations, IFRS transitions, and financial process optimisation. He has demonstrated expertise in developing scalable financial models, optimising systems architecture, and driving comprehensive digital finance transformation.",
      "His leadership has influenced enterprise-wide implementations at multinational organisations, including Fujitsu, DXC Technology, Tesco, BT Group, Vodafone, Cisco, ARM, Admiral Group, and CVC Capital Partners, where he worked as a consultant.",
      "Recognised for his ability to bridge finance and technology, Olusola effectively translates complex regulatory requirements into scalable, compliant solutions. His strategic mindset and hands-on approach make him a trusted partner in driving enterprise-wide transformation."
    ],
    education: [
      "MSc in Professional Accountancy - University College London",
      "BSc in Applied Accounting - Oxford Brookes University"
    ],
    experience: [
      "Chairman - FTA Financial Company Ltd",
      "Senior Consultant - FTSE 100 Companies (Fujitsu, BT Group, Vodafone)",
      "IFRS Implementation Specialist - Fortune 500 Companies"
    ],
    certifications: [
      "ACCA Fellow Member",
      "ICAN Qualified (2005)",
      "Diploma in International Financial Reporting (DipIFR)",
      "Project Management Certificate - University of Oxford"
    ]
  },
  fayemiwo_ojo_omobola: {
    name: "Fayemiwo Ojo Omobola",
    position: "Advisory Board Member",
    image: "/fayemiwo.png",
    biography: [
      "Fayemiwo Ojo Omobola is a seasoned financial services executive and currently a member of the Advisory Board at FTA Financial Company Ltd, bringing over two decades of leadership experience in banking, corporate governance, and strategic business development. His career, rooted in operational excellence, business development and regulatory compliance, spans key roles at Polaris Bank Ltd until his retirement in August 2025.",
      "With a strong academic foundation—including a BSc in Business Administration from the University of Ado-Ekiti and an MBA from the Federal University of Technology, Akure—Fayemiwo has consistently demonstrated a commitment to professional growth and institutional impact. His tenure at Polaris Bank seen him lead high-performing teams, manage multi-billion-naira portfolios, and drive branch expansion through innovative customer engagement and asset management strategies.",
      "As a member of the board of Director at FTA Financial Company Ltd, Fayemiwo contributes deep industry insight, risk oversight, and strategic direction to board-level decisions. His governance acumen is reinforced by professional affiliations with the Chartered Institute of Bankers of Nigeria, the Nigerian Institute of Management, and the Chartered Institute of Finance and Control of Nigeria.",
      "He is widely respected for his ethical leadership, ability to navigate complex regulatory environments, and dedication to financial inclusion and SME empowerment. His extensive training in credit analysis, risk infrastructure, and project management positions him as a forward-thinking leader capable of guiding financial institutions through dynamic market conditions."
    ],
    education: [
      "MBA - Federal University of Technology, Akure",
      "BSc in Business Administration - University of Ado-Ekiti"
    ],
    experience: [
      "Advisory Board Member - FTA Financial Company Ltd",
      "Senior Executive - Polaris Bank Ltd (Retired August 2025)",
      "Team Leader - Multi-billion Naira Portfolios"
    ],
    certifications: [
      "Member - Chartered Institute of Bankers of Nigeria",
      "Member - Nigerian Institute of Management",
      "Member - Chartered Institute of Finance and Control of Nigeria"
    ]
  },
  motunrayo_fasakin: {
    name: "Motunrayo Fasakin",
    position: "Advisory Board Member",
    image: "/tunrayo.jpeg",
    biography: [
      "Motunrayo Fasakin is a highly accomplished Registered Nurse and healthcare strategist with over eighteen years of clinical and case management experience, complemented by a strong and growing proficiency in finance and financial management. Her career reflects a rare blend of compassionate patient care and analytical financial insight—positioning her as a forward-thinking leader in the evolving intersection of healthcare delivery and fiscal responsibility.",
      "Currently serving as a Senior Case Manager and Compassion Support Coordinator at United Healthcare, Tunrayo not only leads care coordination and clinical assessments but also applies financial principles to optimize resource allocation, reduce unnecessary costs, and improve long-term patient outcomes. Her ability to interpret healthcare economics, manage utilization, and align care plans with financial goals has made her a trusted advisor within multidisciplinary teams.",
      "Tunrayo's interest in finance extends beyond operational efficiency. She is deeply engaged in personal finance, healthcare budgeting, and strategic planning, with a focus on empowering patients and families through financial literacy and informed decision-making. Her approach integrates SMART goal-setting with cost-conscious care models, ensuring that both clinical and financial needs are met with precision and empathy.",
      "Motunrayo Fasakin is not only a healthcare provider—she is a systems thinker, a financial steward, and a compassionate advocate. Her unique skill set enables her to navigate complex clinical environments while driving sustainable, patient-centered solutions that honor both health and financial well-being."
    ],
    education: [
      "Master of Science in Nursing (In Progress) - Psychiatric Mental Health Nurse Practitioner, Wilkes University, Pennsylvania (Expected 2026)",
      "Bachelor of Science in Nursing"
    ],
    experience: [
      "Advisory Board Member - FTA Financial Company Ltd",
      "Senior Case Manager & Compassion Support Coordinator - United Healthcare",
      "Healthcare Strategist - 18+ Years Clinical Experience"
    ],
    certifications: [
      "Case Management Certification (CCM)",
      "Basic Life Support (BLS)",
      "Advanced Cardiovascular Life Support (ACLS)",
      "Registered Nurse"
    ]
  },
  nelson_ogungbemi: {
    name: "Barrister Ogungbemi Nelson Muyiwa",
    position: "Legal Adviser",
    image: "/nelson.png",
    biography: [
      "Barrister Ogungbemi Nelson Muyiwa is a seasoned legal practitioner with over a decade of experience in litigation, corporate law, and regulatory compliance. As Principal Partner at Nelson M. Ogungbemi & Co., he has successfully represented clients in high-stakes cases, including class actions and white-collar criminal defense, earning a reputation for strategic thinking and legal precision.",
      "In his role as Legal Adviser to FTA Financial Company Ltd, a firm committed to empowering individuals and businesses through innovative financial solutions, Barrister Ogungbemi brings a unique blend of legal insight and financial literacy. His deep understanding of financial management, contract law, and risk mitigation positions him to guide the company through regulatory landscapes, ensure compliance with Central Bank of Nigeria (CBN) standards, and support the development of secure, transparent financial products.",
      "His proficiency in financial analysis and legal structuring enables him to advise on matters ranging from loan syndication and credit partnerships to corporate governance and dispute resolution. With a forward-looking approach, he aims to strengthen FTA Financial's legal framework while enhancing its operational resilience and investor confidence.",
      "Barrister Ogungbemi's appointment reflects FTA Financial's commitment to excellence, integrity, and sustainable growth. His legal stewardship will be instrumental in aligning the company's strategic goals with Nigeria's financial regulations and global best practices."
    ],
    education: [
      "Bachelor of Laws (LL.B)"
    ],
    experience: [
      "Legal Adviser - FTA Financial Company Ltd",
      "Principal Partner - Nelson M. Ogungbemi & Co.",
      "Corporate Law Practitioner - 10+ Years Experience"
    ],
    certifications: [
      "Called to Nigerian Bar",
      "Corporate Law Specialist",
      "Financial Regulation Expert"
    ]
  },
    philadephia_samuel: {
    name: "Philadelphia Samuel",
    position: "Executive Director",
    image: "/philadephia.jpeg",
    biography: [
      "Strategic executive with extensive experience in financial operations and corporate governance, driving organizational growth and operational excellence.",
    ],
    education: [
      "Bachelor of Laws (LL.B)"
    ],
    experience: [
      "Executive Director - FTA Financial Company Ltd",
    ],
    certifications: [
      "Professional Certifications in Finance",
    ]
  }
}

export default function LeaderPage({ params }: { params: { slug: string } }) {
  const leader = leadersData[params.slug as keyof typeof leadersData]

  if (!leader) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-8">
        {/* Hero Section */}
        <section className="bg-black text-white pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-1 lg:order-1">
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-2 lg:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{leader.name}</h1>
                <p className="text-xl md:text-2xl mb-6 opacity-90">{leader.position}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
                {leader.biography.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Education */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Education</h3>
                  </div>
                  <ul className="space-y-4">
                    {leader.education.map((edu, index) => (
                      <li key={index} className="text-gray-700 pl-4 border-l-2 border-blue-100">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                  </div>
                  <ul className="space-y-4">
                    {leader.experience.map((exp, index) => (
                      <li key={index} className="text-gray-700 pl-4 border-l-2 border-green-100">
                        {exp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
                  </div>
                  <div className="space-y-3">
                    {leader.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="inline-block text-sm font-medium px-3 py-2 rounded-full bg-purple-100 text-purple-800 mr-2 mb-2"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}