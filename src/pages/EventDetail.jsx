import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft, Calendar, Clock, MapPin, CheckCircle2,
    Star, Sparkles, Users, Zap, ChevronRight, Play, ExternalLink, Rocket
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import AutoPlayGallery from '../components/events/AutoPlayGallery';

/* ─── Scroll-reveal wrapper ─────────────────────────────────────────────────── */
function Reveal({ children, className = '', delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ─── Section label ─────────────────────────────────────────────────────────── */
function SectionLabel({ children }) {
    return (
        <span className="inline-flex items-center gap-1.5 bg-[#e8f5e9] text-[#1e8449] text-xs font-extrabold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-[#2ecc71]/20">
            {children}
        </span>
    );
}

/* ─── Bullet section card ───────────────────────────────────────────────────── */
const SECTION_STYLES = {
    green: {
        wrap: 'bg-gradient-to-br from-[#f0faf4] to-white border-[#2ecc71]/25',
        icon: 'bg-[#1e8449] text-white',
        label: 'bg-[#e8f5e9] text-[#1e8449]',
        dot: 'text-[#2ecc71]',
        title: 'text-[#1e8449]',
    },
    gold: {
        wrap: 'bg-gradient-to-br from-[#fffbee] to-white border-[#d4af37]/25',
        icon: 'bg-[#d4af37] text-white',
        label: 'bg-[#fff8dc] text-[#b8960e]',
        dot: 'text-[#d4af37]',
        title: 'text-[#9a7a00]',
    },
    forest: {
        wrap: 'bg-gradient-to-br from-[#f0f7f4] to-white border-[#1e8449]/20',
        icon: 'bg-[#051910] text-[#d4af37]',
        label: 'bg-[#e0ede7] text-[#051910]',
        dot: 'text-[#051910]',
        title: 'text-[#051910]',
    },
};

function BulletCard({ title, icon: Icon, accent = 'green', items = [] }) {
    const s = SECTION_STYLES[accent];
    return (
        <div className={`rounded-2xl p-8 border shadow-sm ${s.wrap}`}>
            <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${s.icon}`}>
                    <Icon className="w-5 h-5" />
                </div>
                <h3 className={`font-extrabold text-lg ${s.title}`}>{title}</h3>
            </div>
            <ul className="space-y-3">
                {items.map((item, i) => {
                    // Bold everything before the first colon if it exists
                    const colonIdx = item.indexOf(':');
                    const strong = colonIdx > 0 ? item.slice(0, colonIdx) : null;
                    const rest = colonIdx > 0 ? item.slice(colonIdx + 1).trim() : item;
                    return (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className="flex items-start gap-3"
                        >
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${s.dot}`} />
                            <span className="text-[#374151] text-sm leading-relaxed">
                                {strong ? <><strong className="text-[#051910]">{strong}:</strong> {rest}</> : rest}
                            </span>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
}

/* ─── YouTube ID helper ─────────────────────────────────────────────────────── */
function getYouTubeId(url) {
    if (!url) return null;
    const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
    return m ? m[1] : null;
}

/* ──────────────────────────────────────────────────────────────────────────── */
export default function EventDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { cmsData } = useCMS();
    const event = cmsData.events.find((e) => e.id === id);

    if (!event) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
                <p className="text-2xl font-bold text-[#051910]">Event not found</p>
                <Link to="/events" className="flex items-center gap-2 text-[#1e8449] hover:underline font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back to Events
                </Link>
            </div>
        );
    }

    const ytId = getYouTubeId(event.videoUrl);
    const gallery = event.gallery?.filter(Boolean).length ? event.gallery.filter(Boolean) : event.image ? [event.image] : [];

    return (
        <div className="min-h-screen bg-white">

            {/* ══ HERO BANNER ════════════════════════════════════════════════ */}
            <div className="relative h-[62vh] min-h-[440px] overflow-hidden">
                <motion.img
                    src={gallery[0] || event.image || '/hero-bg.jpg'}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                    onError={(e) => { e.target.src = '/hero-bg.jpg'; }}
                />
                {/* Layered overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#051910]/75 via-[#051910]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-30" />

                {/* Back pill */}
                <div className="absolute top-7 left-6 z-10">
                    <button onClick={() => navigate(-1)}
                        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#051910] border border-white/60 hover:bg-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition-all hover:shadow-md">
                        <ArrowLeft className="w-4 h-4" /> Back to Events
                    </button>
                </div>

                {/* Hero text */}
                <div className="absolute bottom-0 left-0 right-0 pb-12 px-6 max-w-5xl mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}>
                        {/* Badges row */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-[#2ecc71] text-white text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                                {event.type}
                            </span>
                            {event.featured && (
                                <span className="bg-[#d4af37] text-white text-xs font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                                    <Star className="w-3 h-3 fill-white" /> Featured Event
                                </span>
                            )}
                        </div>
                        {event.tagline && (
                            <p className="text-[#d4af37] text-sm font-bold uppercase tracking-[0.15em] mb-3 drop-shadow">{event.tagline}</p>
                        )}
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl drop-shadow-lg">
                            {event.title}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* ══ META STRIP ══════════════════════════════════════════════════ */}
            <div className="border-b border-gray-100 bg-white">
                <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6">
                    {event.date && (
                        <div className="flex items-center gap-2.5 text-sm text-[#374151]">
                            <div className="w-8 h-8 rounded-lg bg-[#e8f5e9] flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-[#1e8449]" />
                            </div>
                            <span className="font-semibold">{event.date}</span>
                        </div>
                    )}
                    {event.time && (
                        <div className="flex items-center gap-2.5 text-sm text-[#374151]">
                            <div className="w-8 h-8 rounded-lg bg-[#fff8dc] flex items-center justify-center">
                                <Clock className="w-4 h-4 text-[#d4af37]" />
                            </div>
                            <span className="font-semibold">{event.time}</span>
                        </div>
                    )}
                    {event.location && (
                        <div className="flex items-center gap-2.5 text-sm text-[#374151]">
                            <div className="w-8 h-8 rounded-lg bg-[#e0ede7] flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-[#051910]" />
                            </div>
                            <span className="font-semibold">{event.location}</span>
                        </div>
                    )}
                    {/* CTA in strip */}
                    <div className="ml-auto hidden md:block">
                        <a href={event.ctaUrl || '#'} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gradient-to-r from-[#1e8449] to-[#2ecc71] text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:shadow-lg hover:shadow-[#2ecc71]/25 hover:scale-105 transition-all duration-300">
                            {event.action || 'Register Now'} <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* ══ MAIN CONTENT ════════════════════════════════════════════════ */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-[1fr_320px] gap-14">

                    {/* ── LEFT ────────────────────────────────────────────── */}
                    <div className="space-y-14">

                        {/* Description */}
                        <Reveal>
                            <p className="text-[#374151] text-lg leading-relaxed font-medium">
                                {event.description}
                            </p>
                        </Reveal>

                        {/* Gallery */}
                        {gallery.length > 0 && (
                            <Reveal delay={0.05}>
                                <div className="flex items-center gap-3 mb-5">
                                    <SectionLabel><Sparkles className="w-3.5 h-3.5" /> Gallery</SectionLabel>
                                </div>
                                <AutoPlayGallery images={gallery} interval={3500} />
                            </Reveal>
                        )}

                        {/* Video */}
                        {ytId && (
                            <Reveal delay={0.05}>
                                <div className="flex items-center gap-3 mb-5">
                                    <SectionLabel><Play className="w-3.5 h-3.5" /> Event Preview</SectionLabel>
                                </div>
                                <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100 shadow-lg">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${ytId}?rel=0`}
                                        title="Event Video"
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </Reveal>
                        )}

                        {/* What You'll Get */}
                        {event.whatYouGet?.length > 0 && (
                            <Reveal delay={0.08}>
                                <div className="flex items-center gap-3 mb-5">
                                    <SectionLabel><CheckCircle2 className="w-3.5 h-3.5" /> What You'll Get</SectionLabel>
                                </div>
                                <BulletCard
                                    title="What You'll Get"
                                    icon={CheckCircle2}
                                    accent="green"
                                    items={event.whatYouGet}
                                />
                            </Reveal>
                        )}

                        {/* Program Highlights */}
                        {event.highlights?.length > 0 && (
                            <Reveal delay={0.1}>
                                <div className="flex items-center gap-3 mb-5">
                                    <SectionLabel><Zap className="w-3.5 h-3.5" /> Program Highlights</SectionLabel>
                                </div>
                                <BulletCard
                                    title="Program Highlights"
                                    icon={Zap}
                                    accent="gold"
                                    items={event.highlights}
                                />
                            </Reveal>
                        )}

                        {/* Who Should Join */}
                        {event.whoShouldJoin?.length > 0 && (
                            <Reveal delay={0.12}>
                                <div className="flex items-center gap-3 mb-5">
                                    <SectionLabel><Users className="w-3.5 h-3.5" /> Who Should Join</SectionLabel>
                                </div>
                                <BulletCard
                                    title="Who Should Join"
                                    icon={Users}
                                    accent="forest"
                                    items={event.whoShouldJoin}
                                />
                            </Reveal>
                        )}

                        {/* Big CTA Banner */}
                        <Reveal delay={0.14}>
                            <div className="relative rounded-3xl overflow-hidden">
                                {/* Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#051910] via-[#0d3321] to-[#1e8449]" />
                                <div className="absolute inset-0 opacity-10"
                                    style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #2ecc71 0%, transparent 60%)' }} />
                                {/* Decorative ring */}
                                <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border-2 border-white/5" />
                                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border border-white/5" />

                                <div className="relative z-10 px-10 py-12 text-center">
                                    <div className="text-4xl mb-4">🚀</div>
                                    <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-3">Don't Miss Out!</h3>
                                    <p className="text-white/70 text-base mb-2 max-w-lg mx-auto">
                                        Join us and turn your dreams into reality. Let's build success together!
                                    </p>
                                    <p className="text-[#d4af37] font-semibold mb-8 text-sm">
                                        Get Started Today! Sign up now and take the first step towards your goals.
                                    </p>
                                    <a
                                        href={event.ctaUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f0c832] text-[#051910] font-extrabold px-10 py-4 rounded-2xl text-base hover:shadow-2xl hover:shadow-[#d4af37]/30 hover:scale-105 transition-all duration-300 shadow-lg"
                                    >
                                        <Rocket className="w-5 h-5" />
                                        {event.action || 'Register Now'} — Secure Your Spot
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                    </div>

                    {/* ── RIGHT STICKY SIDEBAR ────────────────────────────── */}
                    <div>
                        <div className="sticky top-6 space-y-4">

                            {/* Event card */}
                            <Reveal>
                                <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                                    {/* Image */}
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={event.image || gallery[0]}
                                            alt={event.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            onError={(e) => { e.target.src = '/hero-bg.jpg'; }}
                                        />
                                    </div>

                                    <div className="p-6 space-y-5">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="text-[#051910] font-bold text-base leading-snug">{event.title}</h3>
                                            {event.featured && <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37] shrink-0 mt-0.5" />}
                                        </div>

                                        {/* Details */}
                                        <div className="space-y-3">
                                            {event.date && (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-[#e8f5e9] flex items-center justify-center shrink-0">
                                                        <Calendar className="w-3.5 h-3.5 text-[#1e8449]" />
                                                    </div>
                                                    <span className="text-[#374151] text-sm font-medium">{event.date}</span>
                                                </div>
                                            )}
                                            {event.time && (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-[#fff8dc] flex items-center justify-center shrink-0">
                                                        <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                                                    </div>
                                                    <span className="text-[#374151] text-sm font-medium">{event.time}</span>
                                                </div>
                                            )}
                                            {event.location && (
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-[#e0ede7] flex items-center justify-center shrink-0 mt-0.5">
                                                        <MapPin className="w-3.5 h-3.5 text-[#051910]" />
                                                    </div>
                                                    <span className="text-[#374151] text-sm font-medium leading-relaxed">{event.location}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Type badge */}
                                        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                                            <span className="bg-[#e8f5e9] text-[#1e8449] text-xs font-bold px-3 py-1 rounded-full">{event.type}</span>
                                            <span className="text-gray-400 text-xs">
                                                {event.location?.toLowerCase().includes('virtual') || event.location?.toLowerCase().includes('online') ? '🌐 Online' : '📍 In-Person'}
                                            </span>
                                        </div>

                                        {/* CTA Button */}
                                        <a
                                            href={event.ctaUrl || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#1e8449] to-[#2ecc71] text-white font-extrabold py-3.5 rounded-xl text-sm hover:shadow-lg hover:shadow-[#2ecc71]/25 hover:scale-[1.02] transition-all duration-300 shadow-sm"
                                        >
                                            {event.action || 'Register Now'} <ExternalLink className="w-3.5 h-3.5" />
                                        </a>

                                        <p className="text-gray-400 text-xs text-center">Free to attend · Community members priority</p>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Back link */}
                            <Link to="/events"
                                className="flex items-center justify-center gap-2 text-gray-400 hover:text-[#1e8449] text-sm py-2 transition-colors font-medium">
                                <ArrowLeft className="w-3.5 h-3.5" /> All Events
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
