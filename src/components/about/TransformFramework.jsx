import React, { useState } from 'react';
import { Compass, Zap, Anchor, Briefcase, Users, User, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

const TransformFramework = () => {

    // START: Sub-component data
    const introPoints = [
        {
            icon: <Compass size={32} className="text-[#2ecc71]" />,
            title: "Why Frameworks Matter",
            desc: "Frameworks provide a shared language and structure. They turn chaos into clarity and vague ideas into actionable plans."
        },
        {
            icon: <Zap size={32} className="text-gold" />,
            title: "Bridging Theory & Practice",
            desc: "We don't just talk about concepts. TRANSFORM™ takes high-level strategy and breaks it down into daily execution."
        },
        {
            icon: <Anchor size={32} className="text-[#2ecc71]" />,
            title: "Personal & Professional",
            desc: "Whether you're managing a team or managing your own career, the principles of diagnosis, alignment, and scale apply universally."
        }
    ];

    const modelSteps = [
        { letter: "T", title: "Test & Diagnose", desc: "Identify all voices & inclusive input. Assess the current state." },
        { letter: "R", title: "Rally Leadership", desc: "Foster collaborative buy-in. When we move, we move together." },
        { letter: "A", title: "Align Strategy", desc: "Determine core tasks that hit business goals and metrics." },
        { letter: "N", title: "New Brand Position", desc: "Redefine market presence. Create a narrative that resonates." },
        { letter: "S", title: "Start Pilots", desc: "Launch small scaled experiments. Fail fast, learn faster." },
        { letter: "F", title: "Forge Digital Exp.", desc: "Leverage technology to amplify, not override human efficiency." },
        { letter: "O", title: "Organize for Change", desc: "Establish charter for stakeholders, executors and facilitators." },
        { letter: "R", title: "Report & Measure", desc: "Track KPIs and outcomes to gauge progress accurately." },
        { letter: "M", title: "Maintain & Scale", desc: "Reevaluate, optimize, and expand your impact zone." },
    ];

    const applications = [
        {
            icon: <Briefcase size={24} />,
            title: "In Career Growth",
            desc: "Navigate pivots, plan promotions, and structure professional development."
        },
        {
            icon: <Users size={24} />,
            title: "In Leadership",
            desc: "Diagnose friction points and rally your people around a shared vision."
        },
        {
            icon: <User size={24} />,
            title: "Personal Development",
            desc: "Build your personal brand niche and align habits with your goals."
        },
        {
            icon: <Building2 size={24} />,
            title: "In Organizations",
            desc: "Drive systemic change initiatives and restructure for efficiency."
        }
    ];

    const [activeStep, setActiveStep] = useState(null);

    return (
        <section className="bg-white">

            {/* HERO / INTRO PART */}
            <div className="bg-[#051910] text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2ecc71]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <p className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                        The Methodology
                    </p>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecc71] via-teal-400 to-[#2ecc71] bg-300% animate-gradient">TRANSFORM</span> Framework&trade;
                    </h2>
                    <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-16 font-light">
                        Position yourself as a strategic thinker while giving your team a practical roadmap. We bridge the gap between high-level theory and boots-on-the-ground practice.
                    </p>

                    {/* What Is Cards */}
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {introPoints.map((point, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2ecc71]/10 group">
                                <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10">
                                    {point.icon}
                                </div>
                                <h3 className="font-bold text-xl text-white mb-3 group-hover:text-[#2ecc71] transition-colors">{point.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* THE MODEL PART - 3x3 Grid of Glassmorphism */}
            <div className="py-24 px-6 bg-[#0a2e21] relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2ecc71]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-white mb-4">The 9-Step Roadmap</h3>
                        <p className="text-white/60 text-lg">A sequential guide to systemic growth.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {modelSteps.map((step, index) => (
                            <div
                                key={index}
                                className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl group hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,204,113,0.15)] overflow-hidden"
                                onMouseEnter={() => setActiveStep(index)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/0 via-[#2ecc71]/0 to-[#2ecc71]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 group-hover:from-[#2ecc71] group-hover:to-[#2ecc17]/20 transition-all duration-500">
                                            {step.letter}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 ${activeStep === index ? 'bg-[#2ecc71] border-[#2ecc71] text-[#051910]' : 'text-white/20'}`}>
                                            <ArrowRight size={14} className={`transform transition-transform duration-300 ${activeStep === index ? '-rotate-45' : 'rotate-0'}`} />
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#2ecc71] transition-colors">{step.title}</h4>
                                        <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* APPLICATION PART */}
            <div className="py-24 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#051910] mb-2">Real-World Application</h3>
                            <p className="text-gray-500">From solo entrepreneurs to corporate executives.</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-[#2ecc71] font-bold hover:text-[#27ae60] transition-colors">
                            View Case Studies <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {applications.map((app, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#2ecc71]/30 hover:shadow-xl transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-[#f0f9f4] text-[#2ecc71] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#2ecc71] group-hover:text-white">
                                    {app.icon}
                                </div>
                                <h4 className="font-bold text-lg text-[#051910] mb-3 group-hover:text-[#2ecc71] transition-colors">{app.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{app.desc}</p>
                                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="w-0 h-full bg-[#2ecc71] group-hover:w-full transition-all duration-700 ease-out"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TransformFramework;
