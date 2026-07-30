"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { contactImages, contactCarouselImages } from "@/lib/constants/Contact";
import { LocationIcon, PhoneIcon, EmailIcon } from "@/lib/constants/ContactIcons";

const PHONE     = "+91 80267 72477";
const EMAIL     = "hello@neeladhri.com";
const CAROUSEL_INTERVAL_MS = 3000;
const CAROUSEL_ACTIVE_DOT = "#F79440";
const BORDER_W  = 1.5;
const GLOW_LEN  = 0.22;
const SPEED     = 0.003;
const MAX_CHARS = 500;

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function drawCanvas(
  canvas: HTMLCanvasElement,
  isActive: boolean,
  progressVal: number,
  borderColor: string,
  glowColor: string
) {
  const ctx   = canvas.getContext("2d")!;
  const W     = canvas.width;
  const H     = canvas.height;
  const perim = 2 * (W + H);

  ctx.clearRect(0, 0, W, H);

  if (!isActive) {
    ctx.strokeStyle = borderColor;
    ctx.lineWidth   = BORDER_W;
    ctx.strokeRect(1, 1, W - 2, H - 2);
    return;
  }

  const { r, g, b } = hexToRgb(glowColor);
  for (let i = 0; i <= 90; i++) {
    const t     = i / 90;
    const alpha = Math.sin(t * Math.PI);
    const pos   = ((progressVal + t * GLOW_LEN) % 1 + 1) % 1;
    const dist  = pos * perim;

    let x: number, y: number;
    if      (dist < W)           { x = dist;                 y = 0;                       }
    else if (dist < W + H)       { x = W;                    y = dist - W;                }
    else if (dist < 2 * W + H)   { x = W - (dist - W - H);  y = H;                       }
    else                          { x = 0;                    y = H - (dist - 2 * W - H); }

    ctx.beginPath();
    ctx.arc(x, y, BORDER_W * 0.8, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.95})`;
    ctx.fill();
  }
}

function useGlow(isLuxury: boolean) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef   = useRef<HTMLDivElement>(null);
  const rafRef    = useRef<number>(0);
  const progress  = useRef(0);
  const active    = useRef(false);

  const borderColor = isLuxury ? "#F79440" : "#ffffff";
  const glowColor   = isLuxury ? "#F79440" : "#ffffff";

  const draw = useCallback(() => {
    if (canvasRef.current)
      drawCanvas(canvasRef.current, active.current, progress.current, borderColor, glowColor);
  }, [borderColor, glowColor]);

  const tick = useCallback(() => {
    if (!active.current) { draw(); return; }
    progress.current = (progress.current + SPEED) % 1;
    draw();
    rafRef.current = requestAnimationFrame(tick);
  }, [draw]);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap   = wrapRef.current;
    if (!canvas || !wrap) return;
    canvas.width  = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
    draw();
  }, [draw]);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [resize]);

  const onFocus = useCallback(() => {
    active.current = true;
    resize();
    rafRef.current = requestAnimationFrame(tick);
  }, [tick, resize]);

  const onBlur = useCallback(() => {
    active.current = false;
    draw();
  }, [draw]);

  return { canvasRef, wrapRef, onFocus, onBlur };
}

function GlowField({
  isLuxury,
  children,
}: {
  isLuxury: boolean;
  children: (handlers: { onFocus: () => void; onBlur: () => void }) => React.ReactNode;
}) {
  const { canvasRef, wrapRef, onFocus, onBlur } = useGlow(isLuxury);
  return (
    <div ref={wrapRef} className="relative w-full block">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
      {children({ onFocus, onBlur })}
    </div>
  );
}

type MessageFieldProps = {
  inputClass: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

function LuxuryMessageField({ inputClass, value, onChange, disabled }: MessageFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const remaining = MAX_CHARS - value.length;
  const isNearLimit = remaining <= 20;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length > MAX_CHARS) return;
    onChange(val);
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = `${ta.scrollHeight}px`;
    }
  };

  return (
    <div className="w-full">
      <textarea
        ref={textareaRef}
        name="message"
        value={value}
        onChange={handleChange}
        placeholder="Message"
        rows={3}
        disabled={disabled}
        required
        className={`${inputClass} resize-none block overflow-hidden min-h-[120px]`}
        style={{ height: "auto" }}
      />
      <div className="flex justify-end mt-1 pr-1">
        <span
          className={`text-xs transition-colors duration-200 ${
            isNearLimit ? "text-red-400" : "text-white/50"
          }`}
        >
          {remaining} / {MAX_CHARS}
        </span>
      </div>
    </div>
  );
}

function PremiumMessageField({ inputClass, value, onChange, disabled }: MessageFieldProps) {
  const textareaRef           = useRef<HTMLTextAreaElement>(null);
  const wrapRef               = useRef<HTMLDivElement>(null);
  const canvasRef             = useRef<HTMLCanvasElement>(null);
  const rafRef                = useRef<number>(0);
  const progress              = useRef(0);
  const active                = useRef(false);

  const borderColor = "#ffffff";
  const glowColor   = "#ffffff";
  const remaining   = MAX_CHARS - value.length;
  const isNearLimit = remaining <= 20;

  const draw = useCallback(() => {
    if (canvasRef.current)
      drawCanvas(canvasRef.current, active.current, progress.current, borderColor, glowColor);
  }, [borderColor, glowColor]);

  const tick = useCallback(() => {
    if (!active.current) { draw(); return; }
    progress.current = (progress.current + SPEED) % 1;
    draw();
    rafRef.current = requestAnimationFrame(tick);
  }, [draw]);

  const syncCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap   = wrapRef.current;
    if (!canvas || !wrap) return;
    canvas.width  = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
    draw();
  }, [draw]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length > MAX_CHARS) return;
    onChange(val);
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = `${ta.scrollHeight}px`;
    }
    requestAnimationFrame(syncCanvas);
  };

  useEffect(() => {
    syncCanvas();
    window.addEventListener("resize", syncCanvas);
    return () => {
      window.removeEventListener("resize", syncCanvas);
      cancelAnimationFrame(rafRef.current);
    };
  }, [syncCanvas]);

  const onFocus = () => {
    active.current = true;
    syncCanvas();
    rafRef.current = requestAnimationFrame(tick);
  };

  const onBlur = () => {
    active.current = false;
    draw();
  };

  return (
    <div className="w-full">
      <div ref={wrapRef} className="relative w-full block">
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
        <textarea
          ref={textareaRef}
          name="message"
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Message"
          rows={3}
          disabled={disabled}
          required
          className={`${inputClass} resize-none block overflow-hidden min-h-[120px]`}
          style={{ height: "auto" }}
        />
      </div>
      <div className="flex justify-end mt-1 pr-1">
        <span className={`text-xs transition-colors duration-200 ${isNearLimit ? "text-red-400" : "text-white/50"}`}>
          {remaining} / {MAX_CHARS}
        </span>
      </div>
    </div>
  );
}

const DOT_NAV_GAP_PX = 4;
const DOT_NAV_HEIGHT_PX = 8;

function getContainedImageHeight(
  containerWidth: number,
  maxImageHeight: number,
  naturalWidth: number,
  naturalHeight: number
) {
  if (containerWidth <= 0 || maxImageHeight <= 0 || naturalWidth <= 0 || naturalHeight <= 0) {
    return maxImageHeight;
  }

  const scale = Math.min(containerWidth / naturalWidth, maxImageHeight / naturalHeight);
  return naturalHeight * scale;
}

function ContactImageCarousel({
  images,
  imageFit = "contain",
}: {
  images: string[];
  imageFit?: "contain" | "cover";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageBoxHeight, setImageBoxHeight] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const dimensionsRef = useRef<Map<number, { w: number; h: number }>>(new Map());
  const slideCount = images.length;
  const showDots = slideCount > 1;

  const recalculateImageHeight = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;

    const containerWidth = root.clientWidth;
    const totalHeight = root.clientHeight;
    const reservedForDots = showDots ? DOT_NAV_HEIGHT_PX + DOT_NAV_GAP_PX : 0;
    const maxImageHeight = Math.max(0, totalHeight - reservedForDots);

    if (imageFit === "cover" || maxImageHeight === 0) {
      setImageBoxHeight(maxImageHeight);
      return;
    }

    const dims = dimensionsRef.current.get(activeIndex);
    if (!dims) {
      setImageBoxHeight(maxImageHeight);
      return;
    }

    setImageBoxHeight(
      getContainedImageHeight(containerWidth, maxImageHeight, dims.w, dims.h)
    );
  }, [activeIndex, imageFit, showDots]);

  useEffect(() => {
    if (slideCount <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [slideCount]);

  useEffect(() => {
    recalculateImageHeight();
    const root = rootRef.current;
    if (!root) return;

    const observer = new ResizeObserver(recalculateImageHeight);
    observer.observe(root);
    window.addEventListener("resize", recalculateImageHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", recalculateImageHeight);
    };
  }, [recalculateImageHeight]);

  const handleImageLoad = useCallback(
    (index: number, naturalWidth: number, naturalHeight: number) => {
      dimensionsRef.current.set(index, { w: naturalWidth, h: naturalHeight });
      if (index === activeIndex) recalculateImageHeight();
    },
    [activeIndex, recalculateImageHeight]
  );

  if (slideCount === 0) return null;

  return (
    <div ref={rootRef} className="flex h-full w-full flex-col items-center justify-start" aria-live="polite" aria-atomic="true">
      <div
        className="relative w-full shrink-0 overflow-hidden"
        style={{ height: imageBoxHeight ?? "100%" }}
      >
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Contact showcase"
              fill
              priority={i === 0}
              className={imageFit === "cover" ? "object-cover" : "object-contain"}
              sizes="(max-width: 1024px) 100vw, 52vw"
              onLoadingComplete={(img) =>
                handleImageLoad(i, img.naturalWidth, img.naturalHeight)
              }
            />
          </div>
        ))}
      </div>

      {showDots && (
        <div
          className="flex shrink-0 items-center justify-center gap-2"
          style={{ marginTop: DOT_NAV_GAP_PX, height: DOT_NAV_HEIGHT_PX }}
        >
          {images.map((src, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={`dot-${src}-${i}`}
                type="button"
                aria-label={`Show image ${i + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? "w-7" : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                style={isActive ? { backgroundColor: CAROUSEL_ACTIVE_DOT } : undefined}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ContactSection() {
  const { theme } = useTheme();
  const isLuxury  = theme === "luxury";
  const images    = contactImages(theme);
  const carouselImages = contactCarouselImages(theme);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send your message. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage("Thank you! Your message has been sent.");
      resetForm();
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    }
  };

  const isSending = status === "sending";

  const premiumInputClass =
    "w-full min-h-[52px] bg-transparent border-0 px-4 py-4 text-white placeholder:text-white/80 focus:outline-none font-poppins font-normal disabled:opacity-60";

  const luxuryInputClass =
    "w-full min-h-[48px] sm:min-h-[56px] bg-[#E5E1DC] border-0 px-4 sm:px-5 py-3.5 sm:py-4 !text-black !caret-black placeholder:!text-black focus:outline-none font-normal font-cormorant-garamond disabled:opacity-60";

  const statusClass =
    status === "success"
      ? "text-emerald-300"
      : status === "error"
        ? "text-red-300"
        : "text-white/70";

  if (isLuxury) {
    return (
      <section className="relative w-full overflow-hidden">

        <div className="relative z-10 w-full flex items-center py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            <div className="w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[440px] lg:h-[540px] shrink-0">
              <ContactImageCarousel images={carouselImages} imageFit="contain" />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 sm:gap-8 lg:pl-4 xl:pl-8">
              <div className="space-y-1.5 sm:space-y-2 text-center lg:text-left">
                <Typography variant="h1" className="!text-white font-normal font-cormorant-garamond leading-snug">
                  Have a question about our service?
                </Typography>
                <Typography variant="h1" className="!text-white font-normal font-cormorant-garamond leading-snug">
                  We&apos;re here to help, contact us today.
                </Typography>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 w-full max-w-xl mx-auto lg:mx-0">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className={luxuryInputClass}
                  required
                  disabled={isSending}
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className={luxuryInputClass}
                  required
                  disabled={isSending}
                />
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className={luxuryInputClass}
                  disabled={isSending}
                />
                <LuxuryMessageField
                  inputClass={luxuryInputClass}
                  value={message}
                  onChange={setMessage}
                  disabled={isSending}
                />

                {statusMessage && (
                  <p className={`text-sm font-cormorant-garamond ${statusClass}`} role="status">
                    {statusMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto mt-1 sm:mt-2 px-8 sm:px-12 py-3 sm:py-3.5 bg-transparent border border-[#D3B898] text-white cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Typography variant="h3" className="!text-white font-light font-cormorant-garamond font-normal">
                    {isSending ? "Sending..." : "Send Your Message"}
                  </Typography>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const iconColor = "white";

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      <Image src={images.background} alt="Contact Background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/75" aria-hidden />

      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between pt-10 md:py-14 px-4 sm:px-8 lg:px-16">

        {/* ROW 1 — Heading */}
        <div className="max-w-[1400px] mx-auto w-full text-center lg:text-left">
          <Typography variant="display-xl" className="text-white font-semibold font-poppins">
            Get in Touch
          </Typography>
        </div>

        {/* ROW 2 — Paragraph */}
        <div className="max-w-[1400px] mx-auto w-full mt-4 text-center lg:text-left">
          <Typography variant="body-xl" className="text-white leading-relaxed font-normal font-poppins">
            Whether you're designing a home, a commercial space, or sourcing high-quality tiles,
            <br className="hidden md:block" />
            Neeladhri Ceramics is here to support your vision with precision and style.
          </Typography>
        </div>

        {/* ROW 3 — Contact info */}
        <div className="max-w-[1400px] mx-auto w-full mt-5">

          {/* MOBILE */}
          <div className="flex flex-col gap-4 md:hidden w-full items-center">
            <div className="flex items-start gap-3 w-full max-w-xs">
              <LocationIcon iconColor={iconColor} />
              <Typography variant="body-sm" className="text-white leading-relaxed font-normal font-poppins">
                Skanda Mansion, JSS Circle<br />
                748/41, Kanakapura Rd, 7th Block, Jayanagar<br />
                Bangalore, Karnataka 560070, India
              </Typography>
            </div>
            <div className="flex items-center gap-3 w-full max-w-xs">
              <PhoneIcon iconColor={iconColor} />
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                <Typography variant="body-sm" className="text-white hover:text-neutral-300 transition font-normal font-poppins">{PHONE}</Typography>
              </a>
            </div>
            <div className="flex items-center gap-3 w-full max-w-xs">
              <EmailIcon iconColor={iconColor} />
              <a href={`mailto:${EMAIL}`}>
                <Typography variant="body-sm" className="text-white hover:text-neutral-300 transition font-normal font-poppins">{EMAIL}</Typography>
              </a>
            </div>
          </div>

          {/* TABLET + DESKTOP */}
          <div className="hidden md:flex flex-row gap-16 lg:gap-24 justify-center lg:justify-start items-start">
            <div className="flex items-start gap-3">
              <LocationIcon iconColor={iconColor} />
              <Typography variant="body-lg" className="text-white leading-relaxed font-normal font-poppins">
                Skanda Mansion, JSS Circle<br />
                748/41, Kanakapura Rd, 7th Block, Jayanagar<br />
                Bangalore, Karnataka 560070, India
              </Typography>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <PhoneIcon iconColor={iconColor} />
                <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                  <Typography variant="body-lg" className="text-white hover:text-neutral-300 transition font-normal font-poppins">{PHONE}</Typography>
                </a>
              </div>
              <div className="flex items-start gap-3">
                <EmailIcon iconColor={iconColor} />
                <a href={`mailto:${EMAIL}`}>
                  <Typography variant="body-lg" className="text-white hover:text-neutral-300 transition font-normal font-poppins">{EMAIL}</Typography>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 4 — Form left | Image right */}
        <div className="max-w-[1400px] mx-auto w-full mt-6 flex flex-col lg:flex-row items-center gap-5 lg:gap-6">

          <div className="w-full lg:w-[48%] flex flex-col gap-4 items-center lg:items-start">
            <Typography variant="body-xl" className="text-white text-center lg:text-left w-full font-semibold font-poppins">
              Have a question about our service?<br />
              We're here to help, contact us today.
            </Typography>

            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg mx-auto lg:mx-0">

              <GlowField isLuxury={false}>
                {({ onFocus, onBlur }) => (
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className={premiumInputClass}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required
                    disabled={isSending}
                  />
                )}
              </GlowField>

              <GlowField isLuxury={false}>
                {({ onFocus, onBlur }) => (
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className={premiumInputClass}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required
                    disabled={isSending}
                  />
                )}
              </GlowField>

              <GlowField isLuxury={false}>
                {({ onFocus, onBlur }) => (
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className={premiumInputClass}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    disabled={isSending}
                  />
                )}
              </GlowField>

              <PremiumMessageField
                inputClass={premiumInputClass}
                value={message}
                onChange={setMessage}
                disabled={isSending}
              />

              {statusMessage && (
                <p className={`text-sm font-poppins ${statusClass}`} role="status">
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full mt-2 px-10 py-3 bg-[#555555] text-white cursor-pointer font-montserrat font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Send Your Message"}
              </button>
            </form>
          </div>

          <div className="w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none lg:w-[52%] relative h-[400px] sm:h-[440px] md:h-[440px] lg:h-[540px]">
            <ContactImageCarousel images={carouselImages} />
          </div>

        </div>

      </div>
    </section>
  );
}