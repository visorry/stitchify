import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
}) => (
  <span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-navy-600 to-emerald-600 ${className}`}
  >
    {children}
  </span>
);

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <section className="min-h-screen flex items-center justify-center relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className={`inline-block p-4 rounded-2xl bg-gradient-to-r from-navy-600 to-emerald-600 mb-8`}
              >
                <Heart className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                Craft Your Story
              </h2>
              <p className="text-2xl text-gray-600 dark:text-gray-300">
                Where Creativity Meets Community
              </p>
            </div>
            <div className="relative h-96">
              {/* Placeholder for section-specific interactive content */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-200 to-emerald-200 dark:from-navy-900 dark:to-emerald-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-h-screen flex items-center justify-center relative py-16 md:py-24 bg-gradient-to-br from-navy-100 to-emerald-100 dark:from-navy-950 dark:to-emerald-950">
        <div className="max-w-7xl px-6 sm:px-12 lg:px-16 text-center w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 md:mb-12 leading-tight">
            <GradientText>Join Our Creative Community</GradientText>
          </h2>
          <div className="flex justify-center">
            <Button className="h-16 sm:h-20 px-6 sm:px-10 md:px-12 text-lg sm:text-xl md:text-2xl bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center">
              Start Creating Today
              <ArrowRight className="ml-3 h-6 sm:h-8 w-6 sm:w-8" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
