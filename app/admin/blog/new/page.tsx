"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

type DetectedHeading = { text: string; level: 1 | 2 | 3 };

function parseHeadingsFromHtml(html: string): DetectedHeading[] {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const headings: DetectedHeading[] = [];

  doc.querySelectorAll("h1, h2, h3").forEach((el) => {
    const level = Number(el.tagName.charAt(1)) as 1 | 2 | 3;
    const text = (el.textContent || "")
      .replace(/\u00A0/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (text) {
      headings.push({ text, level });
    }
  });

  return headings;
}

async function uploadBlogImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  form.append("section", "blog");

  const res = await fetch("/api/uploads", { method: "POST", body: form });
  const data = (await res.json()) as { url?: string; error?: string };

  if (!res.ok || !data.url) {
    throw new Error(data.error || "Upload failed");
  }

  return data.url;
}

export default function AddBlogPage() {
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [generatedJson, setGeneratedJson] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const [detectedHeadings, setDetectedHeadings] = useState<DetectedHeading[]>([]);
  const [sectionImages, setSectionImages] = useState<Record<string, string>>({});
  const [h2DetectMsg, setH2DetectMsg] = useState("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingSection, setUploadingSection] = useState<string | null>(null);

  const editorRef = useRef<{ getContent: () => string } | null>(null);

  const handleCoverUpload = async (file: File | undefined) => {
    if (!file) return;
    setUploadingCover(true);
    setSaveMessage("");
    try {
      const url = await uploadBlogImage(file);
      setImage(url);
      setSaveMessage("Cover image uploaded.");
    } catch (err) {
      setSaveMessage(err instanceof Error ? err.message : "Cover upload failed.");
    } finally {
      setUploadingCover(false);
    }
  };

  const handleSectionUpload = async (headingText: string, file: File | undefined) => {
    if (!file) return;
    setUploadingSection(headingText);
    setSaveMessage("");
    try {
      const url = await uploadBlogImage(file);
      handleSectionImageChange(headingText, url);
      setSaveMessage(`Image uploaded for "${headingText}".`);
    } catch (err) {
      setSaveMessage(err instanceof Error ? err.message : "Section image upload failed.");
    } finally {
      setUploadingSection(null);
    }
  };

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

    const headings = parseHeadingsFromHtml(html);

    if (headings.length === 0) {
      setH2DetectMsg(
        "No H1, H2, or H3 headings found. Use the Blocks dropdown in the editor to add headings."
      );
      return;
    }

    const updated: Record<string, string> = {};
    headings.forEach(({ text }) => {
      updated[text] = sectionImages[text] || "";
    });

    setDetectedHeadings(headings);
    setSectionImages(updated);
    setH2DetectMsg(
      `Found ${headings.length} heading${headings.length > 1 ? "s" : ""} (H1/H2/H3).`
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

        let sectionImagesToSave = sectionImages;
        if (detectedHeadings.length === 0) {
          const headings = parseHeadingsFromHtml(htmlContent);
          if (headings.length > 0) {
            sectionImagesToSave = Object.fromEntries(
              headings.map(({ text }) => [text, sectionImages[text] || ""])
            );
            setDetectedHeadings(headings);
            setSectionImages(sectionImagesToSave);
          }
        }

        const filteredSectionImages = Object.fromEntries(
          Object.entries(sectionImagesToSave).filter(([, v]) => v.trim())
        );

        const newPost = {
          id: Math.floor(Math.random() * 10000),
          slug:
            slug ||
            finalTitle
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)+/g, ""),
          title: finalTitle,
          metaTitle: metaTitle.trim(),
          metaDescription: metaDescription.trim(),
          image: image || "/Blog/Blog11.webp",
          ...(Object.keys(filteredSectionImages).length > 0 && {
            sectionImages: filteredSectionImages,
          }),
          htmlContent,
          content: [],
        };

        const res = await fetch("/api/admin/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPost),
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
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-[rgba(245,240,232,0.98)]">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-forest">Add New Blog Post</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-forest">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 rounded-lg border border-forest bg-white outline-none focus:border-forest transition-colors text-gray-900"
              placeholder="e.g., Manual vs AI Call Automation"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-forest">Slug (URL Path)</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="p-3 rounded-lg border border-forest bg-white outline-none focus:border-forest transition-colors text-gray-900"
              placeholder="e.g., manual-vs-ai-call-automation (auto-generated if empty)"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-medium text-forest">Meta Title (SEO)</label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="p-3 rounded-lg border border-forest bg-white outline-none focus:border-forest transition-colors text-gray-900"
              placeholder="e.g., Manual vs AI Call Automation: Which Is Better for Business"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-medium text-forest">Meta Description (SEO)</label>
            <textarea
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              rows={3}
              className="p-3 rounded-lg border border-forest bg-white outline-none focus:border-forest transition-colors text-gray-900 resize-y"
              placeholder="e.g., Compare manual calling vs AI call automation for cost, efficiency, and ROI..."
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-medium text-forest">Cover Image URL</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="flex-1 p-3 rounded-lg border border-forest bg-white outline-none focus:border-forest transition-colors text-gray-900"
                placeholder="e.g., /Blog/Blog11.webp or upload below"
              />
              <label
                className={`shrink-0 inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-medium text-white transition-colors ${
                  uploadingCover
                    ? "bg-forest/60 cursor-wait"
                    : "bg-forest hover:bg-canyon cursor-pointer"
                }`}
              >
                {uploadingCover ? "Uploading…" : "Upload image"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  disabled={uploadingCover}
                  onChange={(e) => {
                    void handleCoverUpload(e.target.files?.[0]);
                    e.target.value = "";
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-medium text-forest">Content</label>
          <div className="border border-forest rounded-lg overflow-hidden">
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
              onInit={(_evt, editor) => {
                editorRef.current = editor;
              }}
              init={{
                height: 500,
                placeholder: "Start writing your blog post here...",
                menubar: false,
                plugins: [
                  "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
                  "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
                  "insertdatetime", "media", "table", "code", "help", "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                block_formats:
                  "Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-2 p-6 rounded-xl border border-forest bg-white/60">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-forest">
                Section Images{" "}
                <span className="text-sm font-normal text-gray-500">
                  (one per H1 / H2 / H3 heading)
                </span>
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Write your content above, then click the button to detect headings
                and assign an image to each section.
              </p>
            </div>
            <button
              type="button"
              onClick={handleDetectH2s}
              className="shrink-0 px-5 py-2.5 bg-forest hover:bg-canyon text-white text-sm font-medium rounded-lg transition-colors"
            >
              Detect sections from content
            </button>
          </div>

          {h2DetectMsg && (
            <p
              className={`text-sm font-medium ${
                detectedHeadings.length > 0 ? "text-green-700" : "text-amber-600"
              }`}
            >
              {h2DetectMsg}
            </p>
          )}

          {detectedHeadings.length === 0 && !h2DetectMsg && (
            <p className="text-sm text-gray-400 italic">
              No sections detected yet. Add headings via the Blocks menu in the editor,
              then click the button above.
            </p>
          )}

          {detectedHeadings.length > 0 && (
            <div className="flex flex-col gap-4">
              {detectedHeadings.map(({ text, level }, idx) => (
                <div key={`${level}-${text}`} className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-6 rounded-full text-white text-xs font-bold shrink-0 ${
                        level === 1
                          ? "bg-emerald-600"
                          : level === 2
                            ? "bg-forest"
                            : "bg-canyon"
                      }`}
                    >
                      H{level}
                    </span>
                    <span className="font-mono text-forest truncate">{text}</span>
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={sectionImages[text] || ""}
                      onChange={(e) => handleSectionImageChange(text, e.target.value)}
                      className="flex-1 p-2.5 rounded-lg border border-gray-300 bg-white outline-none focus:border-forest transition-colors text-gray-900 text-sm"
                      placeholder={`/Blog/section-${idx + 1}.webp`}
                    />
                    <label
                      className={`shrink-0 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-colors ${
                        uploadingSection === text
                          ? "bg-forest/60 cursor-wait"
                          : "bg-forest hover:bg-canyon cursor-pointer"
                      }`}
                    >
                      {uploadingSection === text ? "Uploading…" : "Upload"}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        disabled={uploadingSection === text}
                        onChange={(e) => {
                          void handleSectionUpload(text, e.target.files?.[0]);
                          e.target.value = "";
                        }}
                      />
                    </label>
                  </div>
                  {sectionImages[text]?.trim() && (
                    <p className="text-xs text-gray-400 ml-10">
                      Image set:{" "}
                      <code className="bg-gray-100 px-1 rounded">
                        {sectionImages[text]}
                      </code>
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end mt-2">
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isSaving}
            className="px-8 py-3 bg-forest hover:bg-canyon text-white rounded-lg font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSaving ? "Saving…" : "Save & generate JSON"}
          </button>
        </div>

        {saveMessage && (
          <p
            className={`text-sm font-medium ${
              saveMessage.startsWith("Success") ? "text-green-700" : "text-red-700"
            }`}
          >
            {saveMessage}
          </p>
        )}

        {generatedJson && (
          <div className="mt-8 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-forest">Generated JSON</h2>
            <p className="text-forest">
              Copy this JSON object and add it to the <code>BLOG_POSTS</code> array in{" "}
              <code>lib/constants/blogs.ts</code>.
            </p>
            <div className="relative">
              <pre className="p-6 rounded-lg overflow-x-auto border border-gray-300 bg-gray-900 text-green-400 text-sm font-mono">
                <code>{generatedJson}</code>
              </pre>
              <button
                type="button"
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
