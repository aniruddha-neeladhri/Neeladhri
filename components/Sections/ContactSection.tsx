"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { contactImages, contactBorderColor } from "@/lib/constants/Contact";
import { LocationIcon, PhoneIcon, EmailIcon } from "@/lib/constants/ContactIcons";

const PHONE     = "+91 080 26772477";
const EMAIL     = "info@needladri.com";
const BORDER_W  = 2;
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

function MessageField({ isLuxury, inputClass }: { isLuxury: boolean; inputClass: string }) {
  const [message, setMessage] = useState("");
  const textareaRef           = useRef<HTMLTextAreaElement>(null);
  const wrapRef               = useRef<HTMLDivElement>(null);
  const canvasRef             = useRef<HTMLCanvasElement>(null);
  const rafRef                = useRef<number>(0);
  const progress              = useRef(0);
  const active                = useRef(false);

  const borderColor = isLuxury ? "#F79440" : "#ffffff";
  const glowColor   = isLuxury ? "#F79440" : "#ffffff";
  const remaining   = MAX_CHARS - message.length;
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
    setMessage(val);
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
          value={message}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Message"
          rows={3}
          className={`${inputClass} resize-none block overflow-hidden min-h-[80px]`}
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

export default function ContactSection() {
  const { theme } = useTheme();
  const isLuxury  = theme === "luxury";
  const images    = contactImages(theme);
  const iconColor = isLuxury ? "#F79440" : "white";

  const inputClass = "w-full bg-[#7E7669A6] border-0 px-4 py-3 text-white placeholder:text-white focus:outline-none";

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      <Image src={images.background} alt="Contact Background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between py-10 md:py-14 px-4 sm:px-8 lg:px-16">

        {/* ROW 1 — Heading */}
        <div className="max-w-[1400px] mx-auto w-full text-center lg:text-left">
          <Typography variant="display-xl" className="text-white font-light">
            Get in Touch
          </Typography>
        </div>

        {/* ROW 2 — Paragraph */}
        <div className="max-w-[1400px] mx-auto w-full mt-4 text-center lg:text-left">
          <Typography variant="body-xl" className="text-white leading-relaxed font-normal">
            Whether you're designing a home, a commercial space, or sourcing high-quality tiles.
            <br className="hidden md:block" />
            Needladri Ceramics is here to support your vision with precision and style.
          </Typography>
        </div>

        {/* ROW 3 — Contact info */}
        <div className="max-w-[1400px] mx-auto w-full mt-5">

          {/* MOBILE */}
          <div className="flex flex-col gap-4 md:hidden w-full items-center">
            <div className="flex items-start gap-3 w-full max-w-xs">
              <LocationIcon iconColor={iconColor} />
              <Typography variant="body-sm" className="text-white leading-relaxed">
                Skanda Mansion, JSS Circle<br />
                748/41, Kanakapura Rd, 7th Block, Jayanagar<br />
                Bangalore, Karnataka 560070, India
              </Typography>
            </div>
            <div className="flex items-center gap-3 w-full max-w-xs">
              <PhoneIcon iconColor={iconColor} />
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                <Typography variant="body-sm" className="text-white hover:text-neutral-300 transition">{PHONE}</Typography>
              </a>
            </div>
            <div className="flex items-center gap-3 w-full max-w-xs">
              <EmailIcon iconColor={iconColor} />
              <a href={`mailto:${EMAIL}`}>
                <Typography variant="body-sm" className="text-white hover:text-neutral-300 transition">{EMAIL}</Typography>
              </a>
            </div>
          </div>

          {/* TABLET + DESKTOP */}
          <div className="hidden md:flex flex-row gap-16 lg:gap-24 justify-center lg:justify-start items-start">
            <div className="flex items-start gap-3">
              <LocationIcon iconColor={iconColor} />
              <Typography variant="body-lg" className="text-white leading-relaxed">
                Skanda Mansion, JSS Circle<br />
                748/41, Kanakapura Rd, 7th Block, Jayanagar<br />
                Bangalore, Karnataka 560070, India
              </Typography>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <PhoneIcon iconColor={iconColor} />
                <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                  <Typography variant="body-lg" className="text-white hover:text-neutral-300 transition">{PHONE}</Typography>
                </a>
              </div>
              <div className="flex items-start gap-3">
                <EmailIcon iconColor={iconColor} />
                <a href={`mailto:${EMAIL}`}>
                  <Typography variant="body-lg" className="text-white hover:text-neutral-300 transition">{EMAIL}</Typography>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 4 — Form left | Image right */}
        <div className="max-w-[1400px] mx-auto w-full mt-6 flex flex-col lg:flex-row items-center gap-5 lg:gap-6">

          <div className="w-full lg:w-[48%] flex flex-col gap-4 items-center lg:items-start">
            <Typography variant="body-xl" className="text-white/90 text-center lg:text-left w-full">
              Have a question about our service?<br />
              We're here to help, contact us today.
            </Typography>

            <form className="space-y-4 w-full max-w-lg mx-auto lg:mx-0">

              <GlowField isLuxury={isLuxury}>
                {({ onFocus, onBlur }) => (
                  <input type="text" placeholder="Your Name"
                    className={inputClass} onFocus={onFocus} onBlur={onBlur} />
                )}
              </GlowField>

              <GlowField isLuxury={isLuxury}>
                {({ onFocus, onBlur }) => (
                  <input type="email" placeholder="Your Email"
                    className={inputClass} onFocus={onFocus} onBlur={onBlur} />
                )}
              </GlowField>

              <GlowField isLuxury={isLuxury}>
                {({ onFocus, onBlur }) => (
                  <input type="tel" placeholder="Phone Number"
                    className={inputClass} onFocus={onFocus} onBlur={onBlur} />
                )}
              </GlowField>

              <MessageField isLuxury={isLuxury} inputClass={inputClass} />

            </form>
          </div>

          <div className="w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none lg:w-[52%] relative h-[400px] sm:h-[440px] md:h-[440px] lg:h-[540px]">
            <Image src={images.contactImage} alt="Modern Bathroom Interior" fill className="object-contain" />
          </div>

        </div>

        {/* ROW 5 — Send button */}
        <div className="flex justify-center mt-6">
          <button className={`px-10 py-3 border-4 ${isLuxury ? "border-[#F79440]" : "border-[#7E7669]"} bg-gray-200/70 text-black rounded-full cursor-pointer`}>
            Send Your Message
          </button>
        </div>

      </div>
    </section>
  );
}