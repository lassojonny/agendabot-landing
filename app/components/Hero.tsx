'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Smartphone, TrendingUp } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left z-10"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 glass"
                        style={{ background: 'rgba(0, 255, 136, 0.1)', color: '#00ff88' }}
                    >
                        ✨ Sin apps. Sin complicaciones.
                    </motion.span>

                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Automatiza tus citas por{' '}
                        <span className="bg-gradient-to-r from-[#00ff88] to-[#a855f7] bg-clip-text text-transparent">
                            WhatsApp
                        </span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-gray-400 mb-8 leading-relaxed">
                        Tu asistente virtual que trabaja <strong className="text-[#00ff88]">24/7</strong>. <br />
                        Ideal para barberías, spas, consultorios y emprendedores.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black font-semibold rounded-lg shadow-xl shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50 transition-all"
                        >
                            🚀 Únete a la Lista
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 glass rounded-lg font-medium hover:bg-white/5 transition-all"
                        >
                            Ver Demo 📹
                        </motion.button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-12">
                        {[
                            { value: '24/7', label: 'Disponible' },
                            { value: '0%', label: 'Apps Necesarias' },
                            { value: '95%', label: 'Reducción Inasistencias' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-[#00ff88]">{stat.value}</div>
                                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                >
                    <div className="relative mx-auto w-[300px] h-[600px] bg-[#171717] rounded-[3rem] p-4 shadow-2xl border border-gray-700">
                        {/* Phone Screen */}
                        <div className="w-full h-full bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden flex flex-col">
                            {/* WhatsApp Header */}
                            <div className="bg-[#075e54] p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                                <div>
                                    <div className="text-white font-semibold text-sm">Tu Negocio</div>
                                    <div className="text-xs text-green-200">en línea</div>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                                <ChatBubble type="received" delay={1}>
                                    ¡Hola! 👋 ¿En qué puedo ayudarte?
                                </ChatBubble>
                                <ChatBubble type="sent" delay={1.5}>
                                    Quiero agendar una cita
                                </ChatBubble>
                                <ChatBubble type="received" delay={2}>
                                    ¡Perfecto! Aquí está tu link: tunegocio.com/agendar 📅
                                </ChatBubble>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 2.5 }}
                                    className="glass rounded-lg p-3 flex items-center gap-2 border border-[#00ff88]/30"
                                >
                                    <CheckCircle className="text-[#00ff88]" size={20} />
                                    <span className="text-xs text-gray-300">✅ Cita Confirmada</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Icons */}
                    <FloatingIcon icon={Clock} delay={1} position="top-left" />
                    <FloatingIcon icon={Smartphone} delay={1.3} position="top-right" />
                    <FloatingIcon icon={TrendingUp} delay={1.6} position="bottom-right" />
                </motion.div>
            </div>
        </section>
    );
}

// Chat bubble component
function ChatBubble({ children, type, delay }: { children: React.ReactNode; type: 'sent' | 'received'; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: type === 'sent' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className={`flex ${type === 'sent' ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`px-3 py-2 rounded-lg max-w-[70%] ${type === 'sent' ? 'bg-[#075e54] text-white' : 'bg-[#262626] text-gray-200'
                    }`}
            >
                <p className="text-xs">{children}</p>
            </div>
        </motion.div>
    );
}

// Floating icon component
function FloatingIcon({ icon: Icon, delay, position }: { icon: any; delay: number; position: string }) {
    const positions = {
        'top-left': '-top-8 -left-8',
        'top-right': '-top-8 -right-8',
        'bottom-right': '-bottom-8 -right-8',
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, type: 'spring' }}
            className={`absolute ${positions[position as keyof typeof positions]} glass p-3 rounded-full`}
        >
            <Icon className="text-[#00ff88]" size={24} />
        </motion.div>
    );
}
