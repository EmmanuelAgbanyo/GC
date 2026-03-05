import React, { useState } from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard, Calendar, Users, Quote, Image, Star,
    Settings, LogOut, Menu, X, ChevronRight, Globe
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';

const navItems = [
    { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
    { to: '/admin/hero', label: 'Hero Section', icon: Image },
    { to: '/admin/events', label: 'Events', icon: Calendar },
    { to: '/admin/speakers', label: 'Speakers', icon: Users },
    { to: '/admin/testimonials', label: 'Testimonials', icon: Quote },
    { to: '/admin/membership', label: 'Membership', icon: Star },
    { to: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout() {
    const { logout, cmsData } = useCMS();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="px-6 py-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2ecc71] to-[#1e8449] flex items-center justify-center shadow-lg">
                        <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm leading-tight">GC Admin</p>
                        <p className="text-white/30 text-xs">Content Manager</p>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {navItems.map(({ to, label, icon: Icon, exact }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={exact}
                        onClick={() => setSidebarOpen(false)}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${isActive
                                ? 'bg-gradient-to-r from-[#1e8449]/80 to-[#1e8449]/40 text-white shadow-lg border border-[#2ecc71]/20'
                                : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#2ecc71]' : 'group-hover:text-white/80'}`} />
                                <span className="flex-1">{label}</span>
                                {isActive && <ChevronRight className="w-3 h-3 text-[#2ecc71]" />}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* View Site + Logout */}
            <div className="px-3 py-4 border-t border-white/10 space-y-1">
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/40 hover:text-white hover:bg-white/5 transition-all"
                >
                    <Globe className="w-4 h-4" />
                    View Live Site
                </a>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/10 transition-all"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#080f0a] flex">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-64 bg-[#0a150d] border-r border-white/5 flex-col shrink-0 fixed inset-y-0 left-0 z-30">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSidebarOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed inset-y-0 left-0 w-64 bg-[#0a150d] border-r border-white/5 z-50 lg:hidden"
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
                {/* Top bar */}
                <header className="h-14 bg-[#0a150d]/80 backdrop-blur-xl border-b border-white/5 flex items-center px-4 gap-4 sticky top-0 z-20">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-white/40 hover:text-white transition-colors"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <div className="flex-1" />
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
                        <span className="text-white/40 text-xs">Site Live</span>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
