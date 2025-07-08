"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Loader from "@/components/Loader";

// Toolbar Button
const ToolbarButton = ({ onClick, isActive, label }) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-1 px-2 rounded border ${isActive ? "bg-black text-white" : "bg-white text-black"}`}
  >
    {label}
  </button>
);

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState({ title: "", description: "", content: "", image: "" });
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const editor = useEditor({
    extensions: [StarterKit, Link, TextAlign.configure({ types: ["heading", "paragraph"] })],
    content: "",
    onCreate: async ({ editor }) => {
      try {
        const res = await axios.get(`/api/${id}`);
        const caseStudy = res.data.caseStudy;
        console.log("Fetched case study:", caseStudy);
        setData(caseStudy);
        editor.commands.setContent(caseStudy.content || "");
      } catch (error) {
        console.error(error);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    },
    onUpdate({ editor }) {
      setData((prev) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    try {
      const res = await axios.post("/api/upload", formData);
      setData((prev) => ({ ...prev, image: res.data.url }));
    } catch (err) {
      console.error(err);
      setError("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.patch(`/api/update-case`, { ...data, id });
      router.push("/portal");
      alert("Case study updated successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to update case study");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="flex flex-col h-screen justify-center items-center"><Loader /></div>

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Update Case Study</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter case study title"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleInputChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter a short description"
            rows="3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Content</label>
          <div className="flex gap-2 mb-3 flex-wrap">
            <ToolbarButton onClick={() => editor?.chain().focus().toggleBold().run()} isActive={editor?.isActive("bold")} label="Bold" />
            <ToolbarButton onClick={() => editor?.chain().focus().toggleItalic().run()} isActive={editor?.isActive("italic")} label="Italic" />
            <ToolbarButton onClick={() => editor?.chain().focus().toggleBulletList().run()} isActive={editor?.isActive("bulletList")} label="Bullets" />
            <ToolbarButton onClick={() => editor?.chain().focus().toggleBlockquote().run()} isActive={editor?.isActive("blockquote")} label="Quote" />
            <ToolbarButton onClick={() => editor?.chain().focus().setTextAlign("left").run()} isActive={editor?.isActive({ textAlign: "left" })} label="Left" />
            <ToolbarButton onClick={() => editor?.chain().focus().setTextAlign("center").run()} isActive={editor?.isActive({ textAlign: "center" })} label="Center" />
            <ToolbarButton onClick={() => editor?.chain().focus().setTextAlign("right").run()} isActive={editor?.isActive({ textAlign: "right" })} label="Right" />
            <ToolbarButton
              onClick={() => {
                const url = prompt("Enter URL");
                if (url) editor?.chain().focus().toggleLink({ href: url }).run();
              }}
              isActive={editor?.isActive("link")}
              label="Link"
            />
          </div>
          <div className="border rounded bg-white p-3 min-h-[200px]">
            <EditorContent editor={editor} />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">Upload Image</label>
          <input type="file" onChange={handleFileUpload} className="block" />
          {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
          {data.image && (
            <div className="mt-2">
              <img src={data.image} alt="Uploaded preview" className="h-32 rounded" />
            </div>
          )}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Page;
