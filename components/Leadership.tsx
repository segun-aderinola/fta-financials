import Link from "next/link";
import { FadeIn } from "./animations";

export default function Leadership() {

    // All executives in desired order
    const executives = [
      {
        name: "Mr. Olusola Arowojolu",
        position: "Chairman",
        image: "/olushola.jpeg",
        slug: "olusola_arowojolu",
        bio: "Seasoned finance transformation leader with 20+ years global experience in IFRS implementation and enterprise systems.",
      },
      {
        name: "Dr. Mayowa Adeyemo",
        position: "Managing Director/CEO",
        image: "/mayowa.png",
        slug: "mayowa_adeyemo",
        bio: "Visionary leader with over two decades of experience in banking and financial management, driving innovation and sustainable growth.",
      },
      {
        name: "Ms. Philadelphia Samuel",
        position: "Executive Director",
        image: "/philadephia.jpeg",
        slug: "", // Empty slug means non-clickable
        bio: "Strategic executive with extensive experience in financial operations and corporate governance, driving organizational growth and operational excellence.",
      },
      {
        name: "Mr. Fayemiwo Ojo Omobola",
        position: "Advisory Board Member",
        image: "/fayemiwo.png",
        slug: "fayemiwo_ojo_omobola",
        bio: "Seasoned financial services executive with over 20 years of leadership experience in banking and corporate governance.",
      },
      {
        name: "Mrs. Motunrayo Fasakin",
        position: "Advisory Board Member",
        image: "/tunrayo.jpeg",
        slug: "motunrayo_fasakin",
        bio: "Accomplished Registered Nurse and healthcare strategist with expertise in healthcare economics and financial optimization.",
      },
      {
        name: "Mr. Omogoke Desmond",
        position: "Advisory Board Member",
        image: "/desmond_omogoke.png",
        slug: "omogoke_desmond",
        bio: "A seasoned professional with 25 years of experience in labor relations and human resources management, has joined FTA Financial Company Ltd as a member of the board in advisory capacity.",
      },
      {
        name: "Barrister Ogungbemi Nelson Muyiwa",
        position: "Legal Adviser",
        image: "/nelson.jpeg",
        slug: "nelson_ogungbemi",
        bio: "Seasoned legal practitioner with over a decade of experience in litigation, corporate law, and regulatory compliance.",
      },
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center space-y-6 mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Executive Leadership</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals committed to driving growth and innovation in financial services.
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-8"></div>
            </FadeIn>

            {/* Leadership Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {executives.map((executive, index) => {
                // Check if executive is clickable (has slug)
                const isClickable = executive.slug && executive.slug.trim() !== "";
                
                const cardContent = (
                  <>
                    {/* Image Container */}
                    <div className={`relative mb-4 overflow-hidden bg-gray-200 aspect-[4/5] ${isClickable ? 'group-hover:shadow-xl' : ''} transition-all duration-300`}>
                      <img
                        src={executive.image}
                        alt={executive.name}
                        className={`w-full h-full object-cover object-top rounded-lg ${isClickable ? 'group-hover:scale-105' : ''} transition-transform duration-300`}
                      />
                      
                      {/* Clickable Indicator - Only for clickable executives */}
                      {isClickable && (
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                          <svg 
                            className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Name and Title */}
                    <div className="text-left">
                      <h3 className={`text-lg font-bold text-gray-900 mb-1 ${isClickable ? 'group-hover:text-blue-600' : ''} transition-colors`}>
                        {executive.name}
                      </h3>
                      <p className="text-md text-gray-600 font-medium">{executive.position}</p>
                    </div>
                  </>
                );

                // Return clickable or non-clickable version
                if (isClickable) {
                  return (
                    <Link
                      key={index}
                      href={`/leadership/${executive.slug}`}
                      className="group cursor-pointer transition-all duration-300 opacity-100 translate-y-0"
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      {cardContent}
                    </Link>
                  );
                } else {
                  return (
                    <div 
                      key={index}
                      className="transition-all duration-300 opacity-100 translate-y-0"
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      {cardContent}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
    )
}