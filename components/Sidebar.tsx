"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Video, BarChart3, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "My Videos", href: "/videos", icon: Video },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg hover:bg-purple-600/20 transition-colors"
                style={{ background: '#1a1a2e', color: '#e4e4e7' }}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 flex flex-col z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
                style={{ background: '#16162a', borderRight: '1px solid #2d2d44' }}
            >
                {/* Logo */}
                <div className="p-6" style={{ borderBottom: '1px solid #2d2d44' }}>
                    <h1 className="text-2xl font-bold flex items-center gap-2" style={{ color: '#e4e4e7' }}>
                        <Video className="text-purple-500" size={28} />
                        CTO Demo Video
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
                                        style={{
                                            background: isActive ? '#8b5cf6' : 'transparent',
                                            color: isActive ? '#ffffff' : '#94a3b8',
                                            boxShadow: isActive ? '0 0 20px rgba(139, 92, 246, 0.5)' : 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = '#1a1a2e';
                                                e.currentTarget.style.color = '#ffffff';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.color = '#94a3b8';
                                            }
                                        }}
                                    >
                                        <item.icon size={20} />
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="p-4" style={{ borderTop: '1px solid #2d2d44' }}>
                    <p className="text-xs text-center" style={{ color: '#64748b' }}>
                        © 2024 CTO Demo Video
                    </p>
                </div>
            </aside>
        </>
    );
}
