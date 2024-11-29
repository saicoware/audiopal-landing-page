import Hero from "../Hero";
import BenefitsSection from "../BenefitsSection/BenefitsSection.tsx";
import HowItWorksSection from "../HowItWorksSection/HowItWorksSection.tsx";
import PricingSection from "../PricingSection/PricingSection.tsx";
import FeaturesSection from "../FeaturesSection/FeaturesSection.tsx";
import TestimonialSection from "../TestimonialSection/TestimonialSection.tsx";
import FinalCta from "../FinalCta/FinalCta.tsx";

export default function LandingPage() {
  return (
    <div className="bg-gray-900">
      <main>
        {/* Hero section */}
        <Hero />

        {/* Feature section */}
        <BenefitsSection />

        {/* How it Works section */}
        <HowItWorksSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* Final CTA section */}
        <FinalCta />
      </main>

      {/* Footer */}
      <footer aria-labelledby="footer-heading" className="relative">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
          <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2024 Saicoware, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
