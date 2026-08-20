"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

// Base button props interface - exclude conflicting props with Framer Motion
export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onTransitionEnd"
> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

// 1. Magnetic Button - Follows cursor on hover
export const MagneticButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantClasses = {
      default: "bg-black text-white hover:bg-gray-900",
      outline: "border-2 border-black text-black hover:bg-black hover:text-white",
      ghost: "text-black hover:bg-gray-100",
    };

    return (
      <motion.button
        ref={buttonRef}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium transition-colors duration-300",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// 2. Morphing Gradient Button - Fluid morphing gradient effect
export const MorphingGradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium text-white",
          sizeClasses[size],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #667eea, #764ba2)",
              "linear-gradient(135deg, #f093fb, #f5576c)",
              "linear-gradient(225deg, #4facfe, #00f2fe)",
              "linear-gradient(315deg, #43e97b, #38f9d7)",
              "linear-gradient(45deg, #667eea, #764ba2)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
MorphingGradientButton.displayName = "MorphingGradientButton";

// 3. Spotlight Button - Light follows cursor
export const SpotlightButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const [spotlight, setSpotlight] = React.useState({ x: 50, y: 50 });

    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlight({ x, y });
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantClasses = {
      default: "bg-gray-900 text-white",
      outline: "border-2 border-gray-900 text-gray-900 bg-white",
      ghost: "text-gray-900 bg-transparent",
    };

    return (
      <motion.button
        ref={buttonRef}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.3), transparent)`,
          }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
SpotlightButton.displayName = "SpotlightButton";

// 4. Border Gradient Button - Running gradient border on hover
export const BorderGradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative rounded-lg font-medium bg-white text-black overflow-hidden",
          sizeClasses[size],
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #ff6b6b)",
            backgroundSize: "200% 200%",
            padding: "2px",
          }}
          animate={isHovered ? {
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          } : {
            backgroundPosition: "0% 0%",
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "linear",
          }}
        />
        <div className="absolute inset-[2px] bg-white rounded-md z-0" />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
BorderGradientButton.displayName = "BorderGradientButton";

// 5. Particle Button - Particles on hover
export const ParticleButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [particles, setParticles] = React.useState<Array<{ id: number; x: number; y: number }>>([]);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);

    const handleMouseEnter = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      setParticles(newParticles);
    };

    const handleMouseLeave = () => {
      setTimeout(() => setParticles([]), 600);
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantClasses = {
      default: "bg-gradient-to-r from-violet-600 to-purple-600 text-white",
      outline: "border-2 border-violet-600 text-violet-600",
      ghost: "text-violet-600",
    };

    return (
      <motion.button
        ref={buttonRef}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, -60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [1, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        ))}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
ParticleButton.displayName = "ParticleButton";

// 6. Split Text Button - Text splits on hover
export const SplitTextButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const text = typeof children === "string" ? children : "Button";
    
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantClasses = {
      default: "bg-black text-white",
      outline: "border-2 border-black text-black",
      ghost: "text-black",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <span className="relative z-10 inline-block">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              animate={{
                y: isHovered ? [-2, 2, -2] : 0,
                rotateX: isHovered ? [0, 90, 0] : 0,
              }}
              transition={{
                delay: i * 0.02,
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </motion.button>
    );
  }
);
SplitTextButton.displayName = "SplitTextButton";

// 7. Wave Button - Wave animation effect
export const WaveButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantClasses = {
      default: "bg-gradient-to-r from-teal-500 to-cyan-500 text-white",
      outline: "border-2 border-teal-500 text-teal-500",
      ghost: "text-teal-500",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {isHovered && (
          <>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 left-0 w-full bg-white/30"
                initial={{ height: "0%", opacity: 0.6 }}
                animate={{
                  height: ["0%", "100%", "0%"],
                  opacity: [0.6, 0.3, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                }}
              />
            ))}
          </>
        )}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
WaveButton.displayName = "WaveButton";

// 8. Holographic Button - Holographic shimmer effect
export const HolographicButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium text-white",
          sizeClasses[size],
          "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
HolographicButton.displayName = "HolographicButton";

// 9. Neon Button - Light rays from back/borders on hover
export const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative rounded-lg font-medium text-cyan-400 border-2",
          sizeClasses[size],
          "border-cyan-400 bg-transparent",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          boxShadow: isHovered
            ? "0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff"
            : "0 0 0px transparent",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          boxShadow: { duration: 0.3 },
        }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
NeonButton.displayName = "NeonButton";

// 10. Glass Morphism Button - Glass effect with backdrop blur
export const GlassButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative rounded-lg font-medium text-white",
          "bg-white/10 backdrop-blur-md border border-white/20",
          "shadow-lg shadow-black/20",
          sizeClasses[size],
          className
        )}
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
GlassButton.displayName = "GlassButton";

// 11. Minimal to Elaborate Button - Transforms from simple to complex
export const TransformButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium",
          sizeClasses[size],
          "bg-gray-100 text-gray-800",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovered
              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              : "transparent",
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
        <motion.span
          className="relative z-10 block"
          animate={{
            color: isHovered ? "#ffffff" : "#1f2937",
          }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.span>
      </motion.button>
    );
  }
);
TransformButton.displayName = "TransformButton";

// 12. Flip Reveal Button - Flips to reveal different content
export const FlipRevealButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { hoverText?: string }
>(({ className, children, hoverText = "Click Me", variant = "default", size = "md", ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-lg font-medium text-white",
        sizeClasses[size],
        "bg-black",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
      style={{ perspective: "1000px" }}
      {...props}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          rotateY: isHovered ? 180 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {hoverText}
        </motion.div>
      </motion.div>
    </motion.button>
  );
});
FlipRevealButton.displayName = "FlipRevealButton";

// 13. Expand Content Button - Expands to reveal more content
export const ExpandButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { expandedText?: string }
>(({ className, children, expandedText = "→ Explore More", variant = "default", size = "md", ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-lg font-medium text-white",
        sizeClasses[size],
        "bg-gradient-to-r from-blue-600 to-indigo-600",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
      animate={{
        width: isHovered ? "auto" : "auto",
        paddingRight: isHovered ? "3rem" : "1.5rem",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      {...props}
    >
      <span className="relative z-10 whitespace-nowrap">{children}</span>
      <motion.span
        className="absolute right-0 top-0 h-full flex items-center pr-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -20,
        }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {expandedText}
      </motion.span>
    </motion.button>
  );
});
ExpandButton.displayName = "ExpandButton";

// 14. Shape Morph Button - Changes shape entirely
export const ShapeMorphButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-visible font-medium text-white",
          sizeClasses[size],
          "bg-gradient-to-r from-emerald-500 to-teal-600",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        animate={{
          borderRadius: isHovered ? "50px" : "8px",
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        {...props}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovered
              ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              : "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.span
          className="relative z-10"
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.span>
      </motion.button>
    );
  }
);
ShapeMorphButton.displayName = "ShapeMorphButton";

// 15. Color Inversion Button - Dramatic color inversion
export const InvertButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium",
          sizeClasses[size],
          "bg-white text-black border-2 border-black",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundColor: isHovered ? "#000000" : "#ffffff",
          color: isHovered ? "#ffffff" : "#000000",
        }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ scale: 0, borderRadius: "50%" }}
          animate={{
            scale: isHovered ? 2 : 0,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
InvertButton.displayName = "InvertButton";

// 16. Reveal Hidden Button - Reveals hidden decorative elements
export const RevealButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium text-white",
          sizeClasses[size],
          "bg-gray-800",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {/* Hidden decorative elements */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: "4px",
              height: "4px",
              background: "#8b5cf6",
              borderRadius: "50%",
              top: `${20 + i * 20}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? [1, 1.5, 1] : 0,
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              repeat: isHovered ? Infinity : 0,
              repeatDelay: 1,
            }}
          />
        ))}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"
          animate={{
            x: isHovered ? "0%" : "-100%",
          }}
          transition={{ duration: 0.4 }}
        />
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);
RevealButton.displayName = "RevealButton";

// 17. Slide Transform Button - Slides to reveal new design
export const SlideTransformButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg font-medium",
          sizeClasses[size],
          "bg-gradient-to-r from-orange-500 to-red-500 text-white",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
          animate={{
            x: isHovered ? "0%" : "100%",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            x: isHovered ? "-100%" : "0%",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            x: isHovered ? "0%" : "100%",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <span className="relative z-10">✨ Magic ✨</span>
        </motion.div>
      </motion.button>
    );
  }
);
SlideTransformButton.displayName = "SlideTransformButton";

// 18. Dot Fill Button - Dot expands to fill button on hover
export const DotFillButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    dotColor?: string;
    fillColor?: string;
    initialBgColor?: string;
    initialTextColor?: string;
    textOnFill?: string;
    borderColor?: string;
  }
>(
  (
    {
      className,
      children = "Contact Us",
      dotColor = "#f97316",
      fillColor = "#f97316",
      initialBgColor = "#ffffff",
      initialTextColor = "#1e293b",
      textOnFill = "#ffffff",
      borderColor,
      variant = "default",
      size = "md",
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const dotRef = React.useRef<HTMLDivElement>(null);
    const [dotOrigin, setDotOrigin] = React.useState("calc(100% - 20px) 50%");

    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);

    React.useEffect(() => {
      const updateOrigin = () => {
        if (!buttonRef.current || !dotRef.current) return;
        const btnRect = buttonRef.current.getBoundingClientRect();
        const dotRect = dotRef.current.getBoundingClientRect();
        const x = dotRect.left - btnRect.left + dotRect.width / 2;
        const y = dotRect.top - btnRect.top + dotRect.height / 2;
        setDotOrigin(`${x}px ${y}px`);
      };
      updateOrigin();
      window.addEventListener("resize", updateOrigin);
      return () => window.removeEventListener("resize", updateOrigin);
    }, []);

    const sizeClasses = {
      sm: { padding: "10px 18px", fontSize: "13px" },
      md: { padding: "14px 24px", fontSize: "15px" },
      lg: { padding: "18px 32px", fontSize: "17px" },
    };

    const sizeStyle = sizeClasses[size];
    const border = borderColor ?? dotColor;

    const clipPath = isHovered
      ? `circle(200% at ${dotOrigin})`
      : `circle(0px at ${dotOrigin})`;
    const clipTransition = "clip-path 0.9s cubic-bezier(0.6, 0, 0.8, 1)";

    return (
      <button
        ref={buttonRef}
        className={cn("relative overflow-hidden rounded-full font-semibold inline-flex items-center gap-3 border-2 cursor-pointer outline-none select-none", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: sizeStyle.padding,
          fontSize: sizeStyle.fontSize,
          fontWeight: 600,
          letterSpacing: "0.01em",
          border: `2px solid ${border}`,
          backgroundColor: initialBgColor,
          ...props.style,
        }}
        {...props}
      >
        {/* Fill layer */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: fillColor,
            clipPath,
            transition: clipTransition,
            zIndex: 0,
          }}
        />

        {/* Base text layer — original color */}   
        <span
          style={{
            position: "relative",
            zIndex: 1,
            whiteSpace: "nowrap",
            color: initialTextColor,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            pointerEvents: "none",
          }}
        >
          {children}
          <span
            ref={dotRef}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              flexShrink: 0,
              backgroundColor: dotColor,
              display: "inline-block",
            }}
          />
        </span>

        {/* Top text layer — fill color, clipped to SAME circle as fill */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            padding: sizeStyle.padding,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: textOnFill,
            fontWeight: 600,
            fontSize: sizeStyle.fontSize,
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
            clipPath,
            transition: clipTransition,
            zIndex: 2,
            pointerEvents: "none",
            boxSizing: "border-box",
          }}
        >
          {children}
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              flexShrink: 0,
              backgroundColor: textOnFill,
              display: "inline-block",
            }}
          />
        </span>
      </button>
    );
  }
);
DotFillButton.displayName = "DotFillButton";

// 19. Scramble Button - Text scrambles on hover
export const ScrambleButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [display, setDisplay] = React.useState(children);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const rafRef = React.useRef<number | null>(null);

    const scramble = () => {
      const original = String(children);
      let iteration = 0;
      const total = original.length * 3;
      const run = () => {
        setDisplay(
          original
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration / 3) return original[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        iteration++;
        if (iteration < total) {
          rafRef.current = requestAnimationFrame(run);
        } else {
          setDisplay(original);
        }
      };
      rafRef.current = requestAnimationFrame(run);
    };

    React.useEffect(() => {
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, []);

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "border border-gray-300 font-mono font-bold tracking-widest uppercase cursor-pointer rounded-none min-w-[200px] transition-colors duration-200",
          sizeClasses[size],
          className
        )}
        onMouseEnter={scramble}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "#111";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "none";
          e.currentTarget.style.color = "#111";
          setDisplay(children);
        }}
        style={{ background: "none", color: "#111" }}
        {...props}
      >
        {display}
      </button>
    );
  }
);
ScrambleButton.displayName = "ScrambleButton";

// 20. Cursor Fill Button - Fill expands from cursor position
export const CursorFillButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { fillColor?: string; textColor?: string; textOnFill?: string }
>(
  (
    {
      className,
      children = "Request a call back",
      fillColor = "#0057ff",
      textColor = "#0057ff",
      textOnFill = "#fff",
      variant = "default",
      size = "md",
      ...props
    },
    ref
  ) => {
    const [hovered, setHovered] = React.useState(false);
    const [origin, setOrigin] = React.useState("50% 50%");
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);

    const onEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      const r = buttonRef.current.getBoundingClientRect();
      setOrigin(`${e.clientX - r.left}px ${e.clientY - r.top}px`);
      setHovered(true);
    };

    const onLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      const r = buttonRef.current.getBoundingClientRect();
      setOrigin(`${e.clientX - r.left}px ${e.clientY - r.top}px`);
      setHovered(false);
    };

    const clip = hovered ? `circle(200% at ${origin})` : `circle(0px at ${origin})`;
    const t = "clip-path 0.7s cubic-bezier(0.6,0,0.8,1)";

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={buttonRef}
        className={cn(
          "relative overflow-hidden border rounded cursor-pointer font-semibold tracking-wide",
          sizeClasses[size],
          className
        )}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{
          border: `1.5px solid ${fillColor}`,
          background: "transparent",
          fontSize: "14px",
        }}
        {...props}
      >
        <span
          style={{
            position: "absolute",
            inset: 0,
            background: fillColor,
            clipPath: clip,
            transition: t,
          }}
        />
        <span
          style={{
            position: "relative",
            zIndex: 1,
            color: textColor,
            pointerEvents: "none",
          }}
        >
          {children}
        </span>
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: textOnFill,
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "0.04em",
            clipPath: clip,
            transition: t,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          {children}
        </span>
      </button>
    );
  }
);
CursorFillButton.displayName = "CursorFillButton";

// 21. Border Draw Button - SVG border draws on hover
export const BorderDrawButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [hovered, setHovered] = React.useState(false);

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative bg-transparent border-none cursor-pointer font-mono font-bold tracking-widest uppercase",
          sizeClasses[size],
          className
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ color: "#111" }}
        {...props}
      >
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
        >
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="3"
            fill="none"
            stroke="#111"
            strokeWidth="1.5"
            strokeDasharray="600"
            strokeDashoffset={hovered ? 0 : 600}
            style={{
              transition: "stroke-dashoffset 0.7s cubic-bezier(0.76, 0, 0.24, 1)",
            }}
          />
        </svg>
        {children}
      </button>
    );
  }
);
BorderDrawButton.displayName = "BorderDrawButton";

// 22. Stagger Lift Button - Letters lift with stagger
export const StaggerLiftButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [hovered, setHovered] = React.useState(false);
    const letters = String(children).split("");

    return (
      <button
        ref={ref}
        className={cn(
          "bg-transparent border-none cursor-pointer font-serif italic text-xl font-normal tracking-wide flex gap-0 overflow-hidden relative",
          className
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ color: "#111", padding: "14px 8px" }}
        {...props}
      >
        {letters.map((l, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              transform: hovered ? "translateY(-3px)" : "translateY(0)",
              transition: `transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.03}s, color 0.3s ease ${i * 0.03}s`,
              color: hovered ? "#0057ff" : "#111",
            }}
          >
            {l === " " ? "\u00A0" : l}
          </span>
        ))}
        <span
          style={{
            position: "absolute",
            bottom: 8,
            left: 8,
            right: 8,
            height: "1.5px",
            background: "#0057ff",
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        />
      </button>
    );
  }
);
StaggerLiftButton.displayName = "StaggerLiftButton";

// 23. Ticker Button - Text becomes scrolling ticker
export const TickerButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [hovered, setHovered] = React.useState(false);
    const text = `${children} · ${children} · ${children} · `;

    return (
      <>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        <button
          ref={ref}
          className={cn(
            "relative overflow-hidden bg-gray-100 border border-gray-300 rounded-full cursor-pointer flex items-center",
            className
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            padding: "12px 0",
            width: 220,
          }}
          {...props}
        >
          <span
            style={{
              display: "block",
              whiteSpace: "nowrap",
              fontFamily: "'Courier New', monospace",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#333",
              animation: hovered ? "marquee 3s linear infinite" : "none",
              width: hovered ? "auto" : "100%",
              textAlign: hovered ? "left" : "center",
            }}
          >
            {hovered ? text + text : children}
          </span>
        </button>
      </>
    );
  }
);
TickerButton.displayName = "TickerButton";

// 24. Split Wipe Button - Two halves wipe in
export const SplitWipeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [hovered, setHovered] = React.useState(false);

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-transparent border rounded cursor-pointer font-semibold tracking-wide",
          sizeClasses[size],
          className
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          border: "1.5px solid #111",
          color: hovered ? "#fff" : "#111",
          transition: "color 0.01s ease",
        }}
        {...props}
      >
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            background: "#111",
            transform: hovered ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
            zIndex: 0,
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            background: "#111",
            transform: hovered ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
            zIndex: 0,
          }}
        />
        <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      </button>
    );
  }
);
SplitWipeButton.displayName = "SplitWipeButton";

// 25. Arrow Trail Button - Arrow slides in with underline
export const ArrowTrailButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [hovered, setHovered] = React.useState(false);

    return (
      <button
        ref={ref}
        className={cn(
          "bg-transparent border-none cursor-pointer font-semibold flex items-center gap-0 overflow-hidden relative",
          className
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "12px 0",
          fontSize: "15px",
          color: "#111",
        }}
        {...props}
      >
        <span
          style={{
            transform: hovered ? "translateX(8px)" : "translateX(0)",
            transition: "transform 0.35s cubic-bezier(0.34,1.2,0.64,1)",
            display: "inline-block",
          }}
        >
          {children}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginLeft: 8,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-16px)",
            transition: "opacity 0.3s ease 0.05s, transform 0.35s cubic-bezier(0.34,1.2,0.64,1) 0.05s",
            fontSize: "16px",
          }}
        >
          →
        </span>
        <span
          style={{
            position: "absolute",
            bottom: 6,
            left: 0,
            height: "1px",
            width: "100%",
            background: "#111",
            transform: hovered ? "scaleX(1)" : "scaleX(0.3)",
            transformOrigin: "left",
            opacity: hovered ? 1 : 0.2,
            transition: "transform 0.4s cubic-bezier(0.76,0,0.24,1), opacity 0.3s ease",
          }}
        />
      </button>
    );
  }
);
ArrowTrailButton.displayName = "ArrowTrailButton";

// 26. Typewriter Erase Button - Text erases and retypes
export const TypewriterEraseButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { hoverText?: string }
>(
  (
    {
      className,
      children = "See The Work",
      hoverText = "Let's Build →",
      variant = "default",
      size = "md",
      ...props
    },
    ref
  ) => {
    const [display, setDisplay] = React.useState(String(children));
    const [isTyping, setIsTyping] = React.useState(false);
    const timerRef = React.useRef<NodeJS.Timeout | null>(null);

    const animate = () => {
      if (isTyping) return;
      setIsTyping(true);
      const original = String(children);
      const target = hoverText;
      let step = 0;
      const totalErase = original.length;

      const run = () => {
        if (step <= totalErase) {
          setDisplay(original.slice(0, totalErase - step) + (step % 2 === 0 ? "█" : ""));
          step++;
          timerRef.current = setTimeout(run, 40);
        } else {
          let typeStep = 0;
          const type = () => {
            setDisplay(target.slice(0, typeStep) + "█");
            typeStep++;
            if (typeStep <= target.length) {
              timerRef.current = setTimeout(type, 50);
            } else {
              setDisplay(target);
              setIsTyping(false);
            }
          };
          timerRef.current = setTimeout(type, 80);
        }
      };
      run();
    };

    const reset = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setDisplay(String(children));
      setIsTyping(false);
    };

    React.useEffect(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);

    return (
      <button
        ref={ref}
        className={cn(
          "bg-black border-none cursor-pointer font-mono font-bold tracking-widest uppercase rounded min-w-[200px] text-left",
          className
        )}
        onMouseEnter={animate}
        onMouseLeave={reset}
        style={{
          padding: "14px 28px",
          fontSize: "13px",
          color: "#00ff88",
        }}
        {...props}
      >
        {display}
      </button>
    );
  }
);
TypewriterEraseButton.displayName = "TypewriterEraseButton";

// 27. Ink Bleed Button - Dark ink bleeds from corner
export const InkBleedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [hovered, setHovered] = React.useState(false);

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden border rounded cursor-pointer font-serif italic tracking-wide",
          sizeClasses[size],
          className
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#faf9f6",
          border: "1px solid #ccc",
          color: hovered ? "#fff" : "#222",
          transition: "color 0.5s ease 0.1s",
        }}
        {...props}
      >
        <span
          style={{
            position: "absolute",
            top: "-60%",
            left: "-60%",
            width: "220%",
            height: "220%",
            background: "radial-gradient(ellipse at 0% 0%, #1a1a1a 0%, #111 40%, transparent 70%)",
            borderRadius: "50%",
            transform: hovered ? "scale(1)" : "scale(0)",
            transformOrigin: "0% 0%",
            transition: "transform 0.7s cubic-bezier(0.6,0,0.8,1)",
          }}
        />
        <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      </button>
    );
  }
);
InkBleedButton.displayName = "InkBleedButton";

// 28. Thread Button - Underline splits into threads
export const ThreadButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [hovered, setHovered] = React.useState(false);
    const threads = [0, 1, 2, 3, 4];

    return (
      <button
        ref={ref}
        className={cn(
          "bg-transparent border-none cursor-pointer font-semibold relative inline-block",
          className
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "12px 4px",
          fontSize: "16px",
          color: "#111",
        }}
        {...props}
      >
        {children}
        <span
          style={{
            position: "absolute",
            bottom: 6,
            left: 4,
            right: 4,
            height: "1.5px",
            background: hovered ? "transparent" : "#111",
            transition: "background 0.1s ease 0.1s",
          }}
        />
        {threads.map((i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              bottom: 6,
              left: `${4 + i * 20}%`,
              width: hovered ? `${6 + Math.sin(i) * 4}%` : "20%",
              height: "1.5px",
              background: "#111",
              transform: hovered
                ? `translateY(${(i % 2 === 0 ? 1 : -1) * (4 + i * 2)}px) rotate(${(i - 2) * 8}deg)`
                : "translateY(0) rotate(0deg)",
              transformOrigin: "left center",
              transition: `transform 0.4s cubic-bezier(0.34,1.3,0.64,1) ${i * 0.05}s, width 0.3s ease ${i * 0.03}s, opacity 0.3s ease`,
              opacity: hovered ? 0 : 1,
            }}
          />
        ))}
      </button>
    );
  }
);
ThreadButton.displayName = "ThreadButton";

// 29. Glitch Button - RGB glitch effect
export const GlitchButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", ...props }, ref) => {
    const [hovered, setHovered] = React.useState(false);

    return (
      <>
        <style>{`
          @keyframes glitch-r {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(-4px, 1px); }
            75% { transform: translate(3px, -1px); }
          }
          @keyframes glitch-b {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(3px, 1px); }
            66% { transform: translate(-3px, -1px); }
          }
        `}</style>
        <button
          ref={ref}
          className={cn(
            "bg-black border border-gray-700 rounded cursor-pointer relative overflow-hidden font-mono font-bold tracking-widest uppercase min-w-[180px]",
            className
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            padding: "14px 32px",
            fontSize: "13px",
            color: "#fff",
          }}
          {...props}
        >
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ff0040",
              mixBlendMode: "screen",
              animation: hovered ? "glitch-r 0.15s infinite" : "none",
              fontFamily: "'Courier New', monospace",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.2em",
            }}
          >
            {children}
          </span>
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0040ff",
              mixBlendMode: "screen",
              animation: hovered ? "glitch-b 0.2s infinite" : "none",
              fontFamily: "'Courier New', monospace",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.2em",
            }}
          >
            {children}
          </span>
          <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
        </button>
      </>
    );
  }
);
GlitchButton.displayName = "GlitchButton";
