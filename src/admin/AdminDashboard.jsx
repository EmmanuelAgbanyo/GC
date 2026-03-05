import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, Quote, Star, ArrowRight, Globe, Edit3 } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

const StatCard = ({ icon: Icon, label, value, color, to }) => (
    <motion.div whileHover={{ y: -4 }} className="bg-[#0f1f13] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
            <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
            <p className="text-4xl font-bold text-white">{value}</p>
            <p className="text-white/40 text-sm mt-1">{label}</p>
        </div>
        <Link to={to} className="flex items-center gap-1 text-xs text-white/30 hover:text-[#2ecc71] transition-colors mt-auto">
            Manage <ArrowRight className="w-3 h-3" />
        </Link>
    </motion.div>
);

const QuickLink = ({ to, icon: Icon, label, description }) => (
    <Link to={to}>
        <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all group"
        >
            <div className="w-10 h-10 rounded-lg bg-[#1e8449]/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#2ecc71]" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium">{label}</p>
                <p className="text-white/30 text-xs mt-0.5 truncate">{description}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#2ecc71] transition-colors shrink-0" />
        </motion.div>
    </Link>
);

export default function AdminDashboard() {
    const { cmsData } = useCMS();

    const stats = [
        { icon: Calendar, label: 'Upcoming Events', value: cmsData.events.length, color: 'bg-blue-500/20', to: '/admin/events' },
        { icon: Users, label: 'Featured Speakers', value: cmsData.speakers.length, color: 'bg-purple-500/20', to: '/admin/speakers' },
        { icon: Quote, label: 'Testimonials', value: cmsData.testimonials.length, color: 'bg-[#d4af37]/20', to: '/admin/testimonials' },
        { icon: Star, label: 'Member Benefits', value: cmsData.membership.benefits.length, color: 'bg-[#1e8449]/20', to: '/admin/membership' },
    ];

    return (
        <div className="space-y-8 max-w-6xl">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <p className="text-white/40 text-sm mt-1">
                    Welcome back — manage your site content from here.
                </p>
            </div>

            {/* Live Banner */}
            <div className="flex items-center gap-3 bg-[#1e8449]/10 border border-[#2ecc71]/20 rounded-xl px-5 py-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] animate-pulse shrink-0" />
                <p className="text-[#2ecc71] text-sm font-medium">
                    Site is live — changes you make here update immediately on the frontend
                </p>
                <a href="/" target="_blank" rel="noopener noreferrer" className="ml-auto flex items-center gap-1.5 text-[#2ecc71]/60 hover:text-[#2ecc71] text-xs transition-colors">
                    <Globe className="w-3.5 h-3.5" /> View Site
                </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((s) => <StatCard key={s.label} {...s} />)}
            </div>

            {/* Quick Actions */}
            <div className="grid lg:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Quick Edit</h2>
                    <div className="space-y-2">
                        <QuickLink to="/admin/hero" icon={Edit3} label="Edit Hero Section" description="Headline, subtext, CTA buttons" />
                        <QuickLink to="/admin/events" icon={Calendar} label="Manage Events" description={`${cmsData.events.length} events currently listed`} />
                        <QuickLink to="/admin/speakers" icon={Users} label="Manage Speakers" description={`${cmsData.speakers.length} speakers featured`} />
                        <QuickLink to="/admin/testimonials" icon={Quote} label="Manage Testimonials" description={`${cmsData.testimonials.length} testimonials displayed`} />
                        <QuickLink to="/admin/membership" icon={Star} label="Membership Benefits" description="Edit benefit cards" />
                        <QuickLink to="/admin/settings" icon={Globe} label="Site Settings" description="WhatsApp link, social media, password" />
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Content Summary</h2>
                    <div className="bg-[#0f1f13] border border-white/5 rounded-2xl p-6 space-y-4">
                        <div>
                            <p className="text-xs text-white/30 uppercase tracking-wider mb-2">Hero Headline</p>
                            <p className="text-white font-medium text-sm">{cmsData.hero.headline} <span className="text-[#d4af37]">{cmsData.hero.headlineAccent}</span></p>
                        </div>
                        <div className="h-px bg-white/5" />
                        <div>
                            <p className="text-xs text-white/30 uppercase tracking-wider mb-2">WhatsApp Join Link</p>
                            <p className="text-white/60 text-sm font-mono truncate">{cmsData.settings.whatsappLink}</p>
                        </div>
                        <div className="h-px bg-white/5" />
                        <div>
                            <p className="text-xs text-white/30 uppercase tracking-wider mb-2">Upcoming Events</p>
                            {cmsData.events.slice(0, 3).map((evt) => (
                                <p key={evt.id} className="text-white/60 text-sm py-0.5 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] shrink-0" />
                                    <span className="truncate">{evt.title}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
