'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
    const plans = [
        {
            name: 'Emprendedor',
            price: 'Gratis',
            subtitle: 'Para comenzar',
            features: [
                'Link personalizado básico',
                'Hasta 50 citas/mes',
                'Calendario simple',
                'Soporte por email',
            ],
            cta: 'Empezar Gratis',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$50.000',
            subtitle: 'COP/mes',
            features: [
                'Todo en Emprendedor +',
                'Citas ilimitadas',
                'Recordatorios automáticos por WhatsApp',
                'Base de datos de clientes',
                'Estadísticas y reportes',
                'Personalización avanzada',
                'Soporte prioritario',
            ],
            cta: 'Empezar Prueba de 14 días',
            popular: true,
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
                        Precios <span className="text-[#00ff88]">Transparentes</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Comienza gratis. Crece cuando estés listo.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -8 }}
                            className={`glass rounded-3xl p-8 relative ${plan.popular ? 'border-2 border-[#00ff88]' : ''
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                        <Sparkles size={14} /> Más Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="mb-2">
                                    <span className="text-5xl font-bold text-[#00ff88]">{plan.price}</span>
                                </div>
                                <p className="text-gray-500">{plan.subtitle}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="text-[#00ff88] flex-shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                                className={`w-full py-4 rounded-lg font-bold transition-all ${plan.popular
                                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black shadow-xl shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50'
                                    : 'glass hover:bg-white/5'
                                    }`}
                            >
                                {plan.cta}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 mb-4">Confían en nosotros:</p>
                    <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
                        {['Barberías', 'Spas', 'Consultorios', 'Emprendedores'].map((type, i) => (
                            <div key={i} className="text-lg font-semibold">
                                {type}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
