"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMenu, FiX, FiLogOut, FiFolder, FiUsers, FiUser } from "react-icons/fi";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      router.push("/signin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navItems = [
    { label: "Case Studies", href: "/portal", icon: <FiFolder size={20} /> },
    { label: "Users", href: "/users", icon: <FiUsers size={20} /> },
    { label: "Profile", href: "/profile", icon: <FiUser size={20} /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen ${
        isCollapsed ? "w-20" : "w-64"
      } bg-white border-r border-gray-200 shadow-md flex flex-col p-4 z-50 transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        {!isCollapsed && <span className="font-bold text-xl">CMS</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          {isCollapsed ? <FiMenu size={22} /> : <FiX size={22} />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 text-black text-base hover:font-semibold hover:translate-x-1 transition-transform"
          >
            {item.icon}
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-900 transition"
      >
        <FiLogOut size={18} />
        {!isCollapsed && <span>Logout</span>}
      </button>
    </div>
  );
};

export default Sidebar;
