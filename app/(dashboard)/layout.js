"use client";

import { useState } from "react";
import Sidebar from "@/components/(dashboard)/Sidebar";
import { AuthProvider } from "@/context/AuthContext"; // ✅ wrap CMS pages with auth

export default function CMSLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="flex min-h-screen ">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main
              className={`transition-all duration-300 p-6 overflow-y-auto ${
                isCollapsed ? "ml-20" : "ml-4"
              } w-full`}
            >
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
