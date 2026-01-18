'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Por ahora, simulamos el envío
            // Más adelante conectaremos con Google Sheets o API
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Guardar en localStorage temporalmente
            const leads = JSON.parse(localStorage.getItem('waitlist') || '[]');
            leads.push({
                email,
                name,
                businessType,
                timestamp: new Date().toISOString(),
            });
            localStorage.setItem('waitlist', JSON.stringify(leads));

            setStatus('success');
            setMessage('¡Genial! Te avisaremos cuando estemos listos 🎉');
            setEmail('');
            setName('');
            setBusinessType('');

            // Reset después de 5 segundos
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        } catch (error) {
            setStatus('error');
            setMessage('Algo salió mal. Por favor intenta de nuevo.');
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 text-center"
            >
                <CheckCircle2 className="mx-auto mb-4 text-[#00ff88]" size={48} />
                <h3 className="text-2xl font-bold mb-2">¡Estás en la lista! 🎉</h3>
                <p className="text-gray-400">{message}</p>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-6"
        >
            <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">
                    Únete a la <span className="text-[#00ff88]">Lista de Espera</span>
                </h3>
                <p className="text-gray-400">
                    Sé de los primeros en probar AgendaBot gratis
                </p>
            </div>

            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-[#171717] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
                        placeholder="Tu nombre"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-[#171717] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
                        placeholder="tu@email.com"
                    />
                </div>

                <div>
                    <label htmlFor="business" className="block text-sm font-medium mb-2">
                        Tipo de Negocio
                    </label>
                    <select
                        id="business"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-[#171717] border border-gray-700 rounded-lg focus:outline-none focus:border-[#00ff88] transition-colors"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="barberia">Barbería</option>
                        <option value="spa">Spa / Estética</option>
                        <option value="consultorio">Consultorio Médico</option>
                        <option value="gym">Gimnasio</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black font-bold rounded-lg shadow-xl shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        Enviando...
                    </>
                ) : (
                    <>
                        <Send size={20} />
                        Unirme Gratis
                    </>
                )}
            </motion.button>

            {status === 'error' && (
                <p className="text-red-500 text-sm text-center">{message}</p>
            )}

            <p className="text-xs text-gray-500 text-center">
                No spam. Te avisaremos solo cuando lancemos. 🚀
            </p>
        </motion.form>
    );
}
