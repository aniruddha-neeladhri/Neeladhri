"use client";

import {
  MagneticButton,
  MorphingGradientButton,
  SpotlightButton,
  BorderGradientButton,
  ParticleButton,
  SplitTextButton,
  WaveButton,
  HolographicButton,
  NeonButton,
  GlassButton,
  DotFillButton,
  ScrambleButton,
  CursorFillButton,
  BorderDrawButton,
  StaggerLiftButton,
  TickerButton,
  SplitWipeButton,
  ArrowTrailButton,
  TypewriterEraseButton,
  InkBleedButton,
  ThreadButton,
  GlitchButton,
} from "@/lib/ui";

export default function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Premium Button Collection
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Magnetic Button */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. Magnetic Button</h3>
            <p className="text-gray-600 text-sm mb-4">
              Follows cursor movement on hover
            </p>
            <div className="flex justify-center">
              <MagneticButton>Hover Me</MagneticButton>
            </div>
          </div>

          {/* 2. Morphing Gradient Button */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. Morphing Gradient</h3>
            <p className="text-gray-600 text-sm mb-4">
              Fluid morphing gradient animation
            </p>
            <div className="flex justify-center">
              <MorphingGradientButton>Morphing</MorphingGradientButton>
            </div>
          </div>

          {/* 3. Spotlight Button */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">3. Spotlight</h3>
            <p className="text-gray-600 text-sm mb-4">
              Light follows cursor movement
            </p>
            <div className="flex justify-center">
              <SpotlightButton>Spotlight</SpotlightButton>
            </div>
          </div>

          {/* 4. Border Gradient Button */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">4. Border Gradient</h3>
            <p className="text-gray-600 text-sm mb-4">
              Running gradient border on hover
            </p>
            <div className="flex justify-center">
              <BorderGradientButton>Gradient Border</BorderGradientButton>
            </div>
          </div>

          {/* 5. Particle Button */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">5. Particle</h3>
            <p className="text-gray-600 text-sm mb-4">
              Particle explosion on hover
            </p>
            <div className="flex justify-center">
              <ParticleButton>Particles</ParticleButton>
            </div>
          </div>

          {/* 6. Split Text Button */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">6. Split Text</h3>
            <p className="text-gray-600 text-sm mb-4">
              Text splits and animates on hover
            </p>
            <div className="flex justify-center">
              <SplitTextButton>Split Text</SplitTextButton>
            </div>
          </div>

          {/* 7. Wave Button */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">7. Wave</h3>
            <p className="text-gray-600 text-sm mb-4">
              Wave animation on hover
            </p>
            <div className="flex justify-center">
              <WaveButton>Wave Effect</WaveButton>
            </div>
          </div>

          {/* 8. Holographic Button */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">8. Holographic</h3>
            <p className="text-gray-600 text-sm mb-4">
              Holographic shimmer effect
            </p>
            <div className="flex justify-center">
              <HolographicButton>Holographic</HolographicButton>
            </div>
          </div>

          {/* 9. Neon Button */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">9. Neon</h3>
            <p className="text-gray-400 text-sm mb-4">
              Light rays from borders on hover
            </p>
            <div className="flex justify-center">
              <NeonButton>Neon Glow</NeonButton>
            </div>
          </div>

          {/* 10. Glass Button */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-4 text-white relative z-10">10. Glass Morphism</h3>
            <p className="text-white/80 text-sm mb-4 relative z-10">
              Glass effect with backdrop blur
            </p>
            <div className="flex justify-center relative z-10">
              <GlassButton>Glass Effect</GlassButton>
            </div>
          </div>

          {/* 11. Dot Fill Button */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">11. Dot Fill</h3>
            <p className="text-gray-600 text-sm mb-4">
              Dot expands to fill button on hover
            </p>
            <div className="flex justify-center">
              <DotFillButton>Contact Us</DotFillButton>
            </div>
          </div>
        </div>
        <div className="mt-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 12. Scramble Button */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">12. Scramble Text</h3>
              <p className="text-gray-600 text-sm mb-4">
                Characters randomize then resolve on hover
              </p>
              <div className="flex justify-center">
                <ScrambleButton>Explore Work</ScrambleButton>
              </div>
            </div>

            {/* 13. Cursor Fill Button */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">13. Cursor Fill</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fill erupts from wherever mouse enters
              </p>
              <div className="flex justify-center">
                <CursorFillButton>Request a call back</CursorFillButton>
              </div>
            </div>

            {/* 14. Border Draw Button */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">14. Border Draw</h3>
              <p className="text-gray-600 text-sm mb-4">
                SVG stroke draws itself on hover
              </p>
              <div className="flex justify-center">
                <BorderDrawButton>Say Hello</BorderDrawButton>
              </div>
            </div>

            {/* 15. Stagger Lift Button */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">15. Stagger Lift</h3>
              <p className="text-gray-600 text-sm mb-4">
                Each letter bounces with spring stagger
              </p>
              <div className="flex justify-center">
                <StaggerLiftButton>Our Services</StaggerLiftButton>
              </div>
            </div>

            {/* 16. Ticker Button */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">16. Ticker Marquee</h3>
              <p className="text-gray-600 text-sm mb-4">
                Text becomes a scrolling ticker on hover
              </p>
              <div className="flex justify-center">
                <TickerButton>Available for Work</TickerButton>
              </div>
            </div>

            {/* 17. Split Wipe Button */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">17. Split Wipe</h3>
              <p className="text-gray-600 text-sm mb-4">
                Two halves slam in from opposite sides
              </p>
              <div className="flex justify-center">
                <SplitWipeButton>Case Studies</SplitWipeButton>
              </div>
            </div>

            {/* 18. Arrow Trail Button */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">18. Arrow Trail</h3>
              <p className="text-gray-600 text-sm mb-4">
                Arrow slides in, underline stretches
              </p>
              <div className="flex justify-center">
                <ArrowTrailButton>Read More</ArrowTrailButton>
              </div>
            </div>

            {/* 19. Typewriter Erase Button */}
            <div className="bg-black p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">19. Typewriter Erase</h3>
              <p className="text-gray-400 text-sm mb-4">
                Text erases char-by-char then retypes new
              </p>
              <div className="flex justify-center">
                <TypewriterEraseButton hoverText="Let's Build →">See The Work</TypewriterEraseButton>
              </div>
            </div>




            {/* 20. Ink Bleed Button */}
            <div className="bg-stone-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">20. Ink Bleed</h3>
              <p className="text-gray-600 text-sm mb-4">
                Dark ink bleeds from corner like a stain
              </p>
              <div className="flex justify-center">
                <InkBleedButton>Our Manifesto</InkBleedButton>
              </div>
            </div>

            {/* 21. Thread Button */}
            <div className="bg-white p-6 rounded-xl shadow-lg"> 
              <h3 className="text-xl font-semibold mb-4">21. Thread Unravel</h3>
              <p className="text-gray-600 text-sm mb-4">
                Underline splits into scattered threads
              </p>
              <div className="flex justify-center">
                <ThreadButton>Explore Studio</ThreadButton>
              </div>
            </div>

            {/* 22. Glitch Button */}
            <div className="bg-black p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">22. Glitch RGB</h3>
              <p className="text-gray-400 text-sm mb-4">
                RGB channels split and flicker on hover
              </p>
              <div className="flex justify-center">
                <GlitchButton>ENTER SITE</GlitchButton>
              </div>
            </div>
          </div>
        </div>

        {/* Variants & Sizes Showcase */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Variants & Sizes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Size Variants</h3>
              <div className="flex flex-wrap items-center gap-4">
                <MorphingGradientButton size="sm">Small</MorphingGradientButton>
                <MorphingGradientButton size="md">Medium</MorphingGradientButton>
                <MorphingGradientButton size="lg">Large</MorphingGradientButton>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Style Variants</h3>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton variant="default">Default</MagneticButton>
                <MagneticButton variant="outline">Outline</MagneticButton>
                <MagneticButton variant="ghost">Ghost</MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
