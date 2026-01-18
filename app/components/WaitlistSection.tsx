'use client';

import { motion } from 'framer-motion';
import { WaitlistForm } from './WaitlistForm';

export function WaitlistSection() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 glass bg-[#a855f7]/10 text-[#a855f7]">
                        🎁 Acceso Anticipado
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Lanzamiento Próximo
                    </h2>
                    <p className="text-xl text-gray-400">
                        Estamos finalizando los últimos detalles. Únete a la lista de espera y obtén <strong className="text-[#00ff88]">3 meses gratis</strong> cuando lancemos.
                    </p>
                </motion.div>

                <WaitlistForm />

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <p className="text-sm text-gray-500 mb-4">
                        Ya se unieron emprendedores de:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        <span>🇨🇴 Colombia</span>
                        <span>🇲🇽 México</span>
                        <span>🇦🇷 Argentina</span>
                        <span>🇨🇱 Chile</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
