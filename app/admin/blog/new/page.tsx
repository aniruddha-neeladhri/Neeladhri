"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Typography from "@/lib/Typography";
import { useTheme } from "@/lib/contexts/ThemeContext";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

// Each detected heading carries its level so we can label it in the UI
type DetectedHeading = { text: string; level: 1 | 2 };

export default function AddBlogPage() {
  const { theme } = useTheme();
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [generatedJson, setGeneratedJson] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // Section images state — keyed by heading text
  const [detectedHeadings, setDetectedHeadings] = useState<DetectedHeading[]>([]);
  const [sectionImages, setSectionImages] = useState<Record<string, string>>({});
  const [h2DetectMsg, setH2DetectMsg] = useState("");

  const editorRef = useRef<any>(null);

  const textColor = theme === "luxury" ? "#FFFFFF" : "#000000";
  const borderColor = theme === "luxury" ? "border-white/20" : "border-black/20";
  const inputBg = theme === "luxury" ? "bg-white/5" : "bg-black/5";

  // Parse H1 and H2 headings from TinyMCE content, preserving document order
  const handleDetectH2s = () => {
    if (!editorRef.current) {
      setH2DetectMsg("Editor not ready yet.");
      return;
    }
    const html = editorRef.current.getContent();
    if (!html.trim()) {
      setH2DetectMsg("Editor is empty. Write some content first.");
      return;
    }

    // Match h1 and h2 tags in document order
    const matches = [
      ...html.matchAll(/<h([12])[^>]*>(.*?)<\/h[12]>/gi),
    ];

    const headings: DetectedHeading[] = matches.map((m) => ({
      level: parseInt(m[1], 10) as 1 | 2,
      text: m[2].replace(/<[^>]+>/g, "").replace(/&[a-z]+;/gi, " ").trim(),
    }));

    if (headings.length === 0) {
      setH2DetectMsg("No H1 or H2 headings found in content.");
      return;
    }

    // Preserve any image values already set for unchanged heading texts
    const updated: Record<string, string> = {};
    headings.forEach(({ text }) => {
      updated[text] = sectionImages[text] || "";
    });

    setDetectedHeadings(headings);
    setSectionImages(updated);
    setH2DetectMsg(
      `Found ${headings.length} heading${headings.length > 1 ? "s" : ""} (H1/H2).`
    );
  };

  const handleSectionImageChange = (headingText: string, value: string) => {
    setSectionImages((prev) => ({ ...prev, [headingText]: value }));
  };

  const handleGenerate = async () => {
    if (editorRef.current) {
      setIsSaving(true);
      setSaveMessage("");
      try {
        const htmlContent = editorRef.current.getContent();

        const finalTitle = title || "New Blog Post";

        // Only include section images that have a value
        const filteredSectionImages = Object.fromEntries(
          Object.entries(sectionImages).filter(([, v]) => v.trim())
        );

        const newPost = {
          id: Math.floor(Math.random() * 10000), // Random ID for now
          slug: slug || finalTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
          title: finalTitle,
          metaTitle: metaTitle.trim(),
          metaDescription: metaDescription.trim(),
          image: image || "/Blog/Blog1.webp",
          ...(Object.keys(filteredSectionImages).length > 0 && {
            sectionImages: filteredSectionImages,
          }),
          htmlContent: htmlContent,
          content: [] // Empty array for backwards compatibility with the type if needed
        };

        const res = await fetch('/api/admin/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPost)
        });

        if (res.ok) {
          setSaveMessage("Success! Blog post saved.");
          setGeneratedJson(JSON.stringify(newPost, null, 2));
        } else {
          setSaveMessage("Failed to save post.");
        }
      } catch (err) {
        setSaveMessage("Error saving post.");
        console.error(err);
      } finally {
        setIsSaving(false);
      }
    }
  };

  return (
    <div className={`min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 ${theme === "luxury" ? "bg-black" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <Typography variant="display-xl" style={{ color: textColor }}>
          Add New Blog Post
        </Typography>

        {/* ── Basic fields ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label style={{ color: textColor }} className="font-medium">Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`p-3 rounded-lg border ${borderColor} ${inputBg} outline-none focus:border-amber-500 transition-colors`}
              style={{ color: textColor }}
              placeholder="e.g., Designing a Modern Bathroom"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label style={{ color: textColor }} className="font-medium">Slug (URL Path)</label>
            <input 
              type="text" 
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className={`p-3 rounded-lg border ${borderColor} ${inputBg} outline-none focus:border-amber-500 transition-colors`}
              style={{ color: textColor }}
              placeholder="e.g., designing-a-modern-bathroom (auto-generated if empty)"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label style={{ color: textColor }} className="font-medium">Meta Title (SEO)</label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className={`p-3 rounded-lg border ${borderColor} ${inputBg} outline-none focus:border-amber-500 transition-colors`}
              style={{ color: textColor }}
              placeholder="e.g., Designing a Modern Bathroom: Tips & Trends"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label style={{ color: textColor }} className="font-medium">Meta Description (SEO)</label>
            <textarea
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              rows={3}
              className={`p-3 rounded-lg border ${borderColor} ${inputBg} outline-none focus:border-amber-500 transition-colors resize-y`}
              style={{ color: textColor }}
              placeholder="e.g., Explore modern bathroom design ideas, layouts, and materials..."
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label style={{ color: textColor }} className="font-medium">Cover Image URL</label>
            <input 
              type="text" 
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className={`p-3 rounded-lg border ${borderColor} ${inputBg} outline-none focus:border-amber-500 transition-colors`}
              style={{ color: textColor }}
              placeholder="e.g., /Blog/Blog1.webp"
            />
          </div>
        </div>

        {/* ── TinyMCE editor ── */}
        <div className="flex flex-col gap-2 mt-4">
          <label style={{ color: textColor }} className="font-medium">Content</label>
          <div className={`border ${borderColor} rounded-lg overflow-hidden`}>
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue="<p>Start writing your blog post here...</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                skin: theme === "luxury" ? "oxide-dark" : "oxide",
                content_css: theme === "luxury" ? "dark" : "default"
              }}
            />
          </div>
        </div>

        {/* ── Section Images ── */}
        <div className={`flex flex-col gap-4 mt-2 p-6 rounded-xl border ${borderColor} ${inputBg}`}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <Typography variant="h3" style={{ color: textColor }}>
                Section Images{" "}
                <span className="text-sm font-normal opacity-60">
                  (one per H1 / H2 heading)
                </span>
              </Typography>
              <p style={{ color: textColor }} className="text-sm opacity-60 mt-0.5">
                Write your content above, then click the button to detect H1 and H2
                headings and assign an image to each.
              </p>
            </div>
            <button
              type="button"
              onClick={handleDetectH2s}
              className="shrink-0 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Detect H1 / H2 sections from content
            </button>
          </div>

          {h2DetectMsg && (
            <p
              className={`text-sm font-medium ${
                detectedHeadings.length > 0 ? "text-green-500" : "text-amber-500"
              }`}
            >
              {h2DetectMsg}
            </p>
          )}

          {detectedHeadings.length === 0 && !h2DetectMsg && (
            <p style={{ color: textColor }} className="text-sm opacity-40 italic">
              No sections detected yet. Write content with H1 or H2 headings and click
              the button above.
            </p>
          )}

          {detectedHeadings.length > 0 && (
            <div className="flex flex-col gap-4">
              {detectedHeadings.map(({ text, level }, idx) => (
                <div key={`${level}-${text}`} className="flex flex-col gap-1.5">
                  <label style={{ color: textColor }} className="flex items-center gap-2 text-sm font-medium">
                    {/* Badge: amber for H1, dark amber for H2 */}
                    <span
                      className={`inline-flex items-center justify-center w-8 h-6 rounded-full text-white text-xs font-bold shrink-0 ${
                        level === 1 ? "bg-amber-500" : "bg-amber-700"
                      }`}
                    >
                      H{level}
                    </span>
                    <span className="font-mono truncate opacity-80">{text}</span>
                  </label>
                  <input
                    type="text"
                    value={sectionImages[text] || ""}
                    onChange={(e) => handleSectionImageChange(text, e.target.value)}
                    className={`p-2.5 rounded-lg border ${borderColor} ${inputBg} outline-none focus:border-amber-500 transition-colors text-sm`}
                    style={{ color: textColor }}
                    placeholder={`/Blog/section-${idx + 1}.webp`}
                  />
                  {sectionImages[text]?.trim() && (
                    <p style={{ color: textColor }} className="text-xs opacity-50 ml-10">
                      ✓ Image set:{" "}
                      <code className="bg-white/10 px-1 rounded">
                        {sectionImages[text]}
                      </code>
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Save button ── */}
        <div className="flex justify-end mt-2">
          <button 
            onClick={handleGenerate}
            disabled={isSaving}
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSaving ? "Saving…" : "Generate JSON Output"}
          </button>
        </div>

        {saveMessage && (
          <p
            className={`text-sm font-medium ${
              saveMessage.startsWith("Success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {saveMessage}
          </p>
        )}

        {generatedJson && (
          <div className="mt-8 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4">
            <Typography variant="h3" style={{ color: textColor }}>
              Generated JSON
            </Typography>
            <p style={{ color: textColor }} className="opacity-70">
              Copy this JSON object and add it to the <code>BLOG_POSTS</code> array in <code>lib/constants/blogs.ts</code>.
            </p>
            <div className="relative">
              <pre className={`p-6 rounded-lg overflow-x-auto border ${borderColor} bg-[#1e1e1e] text-green-400 text-sm font-mono`}>
                <code>{generatedJson}</code>
              </pre>
              <button 
                onClick={() => navigator.clipboard.writeText(generatedJson)}
                className="absolute top-4 right-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors text-sm"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}