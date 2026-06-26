import React from "react";
import { cn } from "../lib/utils";
import { FONT_FAMILY_CLASSES } from "./fonts";

export interface TypographyProps {
  children: React.ReactNode;
  variant?:
  | "display-3xl"
  | "display-2xl"
  | "display-xl"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-xl"
  | "body-lg"
  | "body-sm"
  | "caption"
  | "overline";
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles = {
  "display-3xl": "text-[30px] sm:text-[35px] md:text-[40px] lg:text-[65px] font-medium",
  "display-2xl": "text-[28px] sm:text-[32px] md:text-[35px] lg:text-[38px] font-medium",
  "display-xl": "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium",

  h1: "text-[22px] sm:text-[23px] md:text-[24px] lg:text-[25px] font-medium",
  h2: "text-[20px] sm:text-[21px] md:text-[22px] lg:text-[25px] font-medium",
  h3: "text-[18px] sm:text-[19px] md:text-[19px] lg:text-[20px] font-medium",
  h4: "text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-medium",

  "body-xl": "text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-normal",
  "body-lg": "text-[14px] sm:text-[14px] md:text-[15px] lg:text-[15px] font-normal",
  "body-sm": "text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] font-normal",

  caption: "text-[11px] sm:text-[11px] md:text-[12px] lg:text-[12px] font-medium uppercase tracking-wider",
  overline: "text-[10px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-medium uppercase tracking-widest",
};

function resolveFontFamily(variant: TypographyProps["variant"], className?: string): string {
  if (FONT_FAMILY_CLASSES.some((fontClass) => className?.includes(fontClass))) {
    return "";
  }

  const isLightWeight =
    className?.includes("font-thin") ||
    className?.includes("font-extralight") ||
    className?.includes("font-light");

  if (variant?.startsWith("display") || variant === "h1" || variant === "h2") {
    return "font-cormorant";
  }

  if (variant === "h3" || variant === "h4" || variant === "caption" || variant === "overline") {
    return "font-montserrat";
  }

  return isLightWeight ? "font-poppins-light" : "font-poppins";
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body-lg",
  className,
  style,
}) => {
  const baseStyles = "text-black";
  const variantClass = variantStyles[variant];

  const hasFontWeightOverride =
    className?.includes("font-thin") ||
    className?.includes("font-extralight") ||
    className?.includes("font-light") ||
    className?.includes("font-normal") ||
    className?.includes("font-medium") ||
    className?.includes("font-semibold") ||
    className?.includes("font-bold") ||
    className?.includes("font-extrabold") ||
    className?.includes("font-black");

  let finalVariantClass = variantClass;
  if (hasFontWeightOverride && variantClass) {
    finalVariantClass = variantClass
      .split(/\s+/)
      .filter((cls) => {
        if (FONT_FAMILY_CLASSES.includes(cls as (typeof FONT_FAMILY_CLASSES)[number])) {
          return true;
        }
        if (cls.startsWith("font-") && !FONT_FAMILY_CLASSES.includes(cls as never)) {
          return false;
        }
        return true;
      })
      .join(" ")
      .trim();
  }

  const fontFamilyClass = resolveFontFamily(variant, className);

  const getTag = () => {
    if (
      variant === "display-3xl" ||
      variant === "display-2xl" ||
      variant === "display-xl" ||
      variant === "h1" ||
      variant === "h2" ||
      variant === "h3" ||
      variant === "h4"
    ) {
      return variant === "display-3xl" || variant === "display-2xl" || variant === "display-xl"
        ? "h1"
        : variant;
    }
    return variant === "caption" || variant === "overline" ? "span" : "p";
  };

  const elementProps: Record<string, unknown> = {
    className: cn(baseStyles, finalVariantClass, fontFamilyClass, className),
  };

  if (style || className?.includes("normal-case")) {
    elementProps.style = {
      ...style,
      ...(className?.includes("normal-case") && { textTransform: "none" }),
    };
  }

  return React.createElement(getTag(), elementProps, children);
};

export default Typography;
