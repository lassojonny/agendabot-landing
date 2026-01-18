'use client';

import { MessageCircle, Mail, Instagram, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-gray-800 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <MessageCircle className="text-[#00ff88]" size={28} />
                            <span className="text-xl font-bold">AgendaBot</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Automatiza tus citas por WhatsApp. Simple, rápido, efectivo.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-semibold mb-4">Producto</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-[#00ff88] transition-colors">Características</a></li>
                            <li><a href="#" className="hover:text-[#00ff88] transition-colors">Precios</a></li>
                            <li><a href="#" className="hover:text-[#00ff88] transition-colors">Demo</a></li>
                            <li><a href="#" className="hover:text-[#00ff88] transition-colors">Casos de Uso</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4">Empresa</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-[#00ff88] transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-[#00ff88] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[#00ff88] transition-colors">Contacto</a></li>
                            <li><a href="#" className="hover:text-[#00ff88] transition-colors">Política de Privacidad</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contacto</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:hola@agendabot.com"
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00ff88] transition-colors"
                            >
                                <Mail size={16} />
                                hola@agendabot.com
                            </a>
                            <div className="flex gap-3 mt-4">
                                <a href="#" className="p-2 glass rounded-lg hover:bg-white/5 transition-colors">
                                    <Instagram size={20} className="text-gray-400 hover:text-[#00ff88]" />
                                </a>
                                <a href="#" className="p-2 glass rounded-lg hover:bg-white/5 transition-colors">
                                    <Twitter size={20} className="text-gray-400 hover:text-[#00ff88]" />
                                </a>
                                <a href="#" className="p-2 glass rounded-lg hover:bg-white/5 transition-colors">
                                    <MessageCircle size={20} className="text-gray-400 hover:text-[#00ff88]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © 2026 AgendaBot. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-[#00ff88] transition-colors">Términos</a>
                        <a href="#" className="hover:text-[#00ff88] transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-[#00ff88] transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
