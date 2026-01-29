import React from 'react';

const TransformModel = () => {
    const steps = [
        { letter: "T", title: "Test & Diagnose", desc: "Identify all voices and ensure inclusive input from diverse vantage points. Assess the current state before moving forward." },
        { letter: "R", title: "Rally Leadership", desc: "Foster collaborative buy-in. Ensure pivotal stakeholders are aligned. When we move, we move together." },
        { letter: "A", title: "Align Strategy", desc: "Determine core tasks that hit the business goals and metrics. Connect activity directly to outcomes." },
        { letter: "N", title: "New Brand Position", desc: "Redefine how you show up in the market. Create a narrative that resonates with your new direction." },
        { letter: "S", title: "Start Pilots", desc: "Launch small scaled experiments to validate your value prop. Fail fast, learn faster." },
        { letter: "F", title: "Forge Digital Experience", desc: "Leverage technology to amplify, not override human efficiency. Build platforms that serve people." },
        { letter: "O", title: "Organize for Change", desc: "Establish your charter for full stakeholders, executors and facilitators. Structure for success." },
        { letter: "R", title: "Report & Measure", desc: "Track KPIs and qualitative outcomes to gauge progress accurately. Data tells the story." },
        { letter: "M", title: "Maintain & Scale", desc: "Reevaluate what works, optimize the process, and expand your impact zone systematically." },
    ];

    return (
        <section className="bg-forest-green py-24 px-6 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
                        The 9-Step Roadmap
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">The Model</h2>
                </div>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="group flex flex-col md:flex-row items-stretch bg-[#0a2e21]/50 border border-white/10 rounded-xl overflow-hidden hover:bg-[#0a2e21] transition-colors duration-300">

                            {/* Letter Block */}
                            <div className="md:w-32 bg-white/5 flex items-center justify-center p-6 md:p-0 group-hover:bg-[#2ecc71] transition-colors duration-300">
                                <span className="text-6xl md:text-7xl font-black text-white/20 group-hover:text-[#051910]">{step.letter}</span>
                            </div>

                            {/* Content Block */}
                            <div className="p-8 flex-1 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#2ecc71] transition-colors">{step.title}</h3>
                                <p className="text-white/60 text-lg leading-relaxed group-hover:text-white/80 transition-colors">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TransformModel;
