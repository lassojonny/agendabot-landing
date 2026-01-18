'use client';

import { motion } from 'framer-motion';
import { Clock, PhoneOff, MessageSquareX, TrendingDown } from 'lucide-react';

export function Problem() {
    const problems = [
        {
            icon: Clock,
            title: 'Pierdes Tiempo',
            description: 'Contestando "¿Tienes espacio mañana?" todo el día, interrumpiendo tu trabajo.',
        },
        {
            icon: PhoneOff,
            title: 'Clientes Perdidos',
            description: 'Si no respondes rápido, tus clientes se van con la competencia.',
        },
        {
            icon: MessageSquareX,
            title: 'Desorganización',
            description: 'Mensajes perdidos, citas olvidadas, y clientes que no llegan.',
        },
        {
            icon: TrendingDown,
            title: 'Crecimiento Limitado',
            description: 'No puedes crecer si dependes de responder cada mensaje manualmente.',
        },
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        ¿Te suena{' '}
                        <span className="text-red-500">familiar</span>?
                    </h2>
                    <p className="text-xl text-gray-400">
                        Deja de interrumpir tu trabajo para contestar WhatsApps
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass rounded-2xl p-6 hover:border-red-500/30 transition-all cursor-pointer"
                        >
                            <div className="mb-4 p-3 bg-red-500/10 rounded-xl w-fit">
                                <problem.icon className="text-red-500" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
