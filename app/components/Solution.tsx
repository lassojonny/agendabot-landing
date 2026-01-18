'use client';

import { motion } from 'framer-motion';
import { Link2, Bell, Smartphone, BarChart } from 'lucide-react';

export function Solution() {
    const features = [
        {
            icon: Link2,
            title: 'Link Personalizado',
            description: 'Tu propio link: tunegocio.com/agendar',
            highlight: 'Sin apps',
        },
        {
            icon: Bell,
            title: 'Recordatorios Automáticos',
            description: 'Reduce 95% de inasistencias con recordatorios por WhatsApp',
            highlight: '24/7',
        },
        {
            icon: Smartphone,
            title: 'Todo en el Navegador',
            description: 'Tus clientes agendan desde cualquier celular, sin descargas',
            highlight: 'Fácil',
        },
        {
            icon: BarChart,
            title: 'Base de Datos de Clientes',
            description: 'Historial, estadísticas y seguimiento automático',
            highlight: 'Pro',
        },
    ];

    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        La <span className="bg-gradient-to-r from-[#00ff88] to-[#a855f7] bg-clip-text text-transparent">Solución</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Automatiza, ahorra tiempo, y nunca pierdas un cliente
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ scale: 1.02 }}
                            className="glass rounded-2xl p-8 hover:border-[#00ff88]/50 transition-all group cursor-pointer relative overflow-hidden"
                        >
                            {/* Gradient background on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-[#a855f7]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-[#00ff88]/10 rounded-xl">
                                        <feature.icon className="text-[#00ff88]" size={32} />
                                    </div>
                                    <span className="px-3 py-1 bg-[#a855f7]/20 text-[#a855f7] text-xs font-semibold rounded-full">
                                        {feature.highlight}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="glass rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-[#a855f7]/10 to-[#00ff88]/10" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">
                                ¿Listo para automatizar tu negocio?
                            </h3>
                            <p className="text-gray-400 mb-6 text-lg">
                                Únete a cientos de emprendedores que ya están ahorrando tiempo
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black font-bold rounded-lg shadow-xl shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50 transition-all"
                            >
                                Empezar Ahora - Gratis 🚀
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
