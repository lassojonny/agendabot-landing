# Guía de Deployment - Vercel

## 🚀 Despliegue Rápido (5 minutos)

### Opción 1: Deployment desde GitHub (Recomendado)

1. **Sube el código a GitHub:**
   ```bash
   cd c:/Users/Jonny/.gemini/antigravity/playground/emerald-lagoon/whatsapp-appt-landing
   git init
   git add .
   git commit -m "Initial commit: AgendaBot landing page"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/agendabot-landing.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es Next.js
   - Click en "Deploy"

3. **¡Listo!** Tu sitio estará en: `https://tu-proyecto.vercel.app`

---

### Opción 2: Deployment con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde la carpeta del proyecto
cd c:/Users/Jonny/.gemini/antigravity/playground/emerald-lagoon/whatsapp-appt-landing

# Deploy
vercel

# Seguir las instrucciones:
# - Login con GitHub/Email
# - Confirm project settings
# - Deploy!
```

---

## 🌐 Configurar Dominio Personalizado

### En Vercel Dashboard:
1. Ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio (ej: `agendabot.co`)
4. Configura los DNS según las instrucciones

### Dominios económicos para LatAm:
- **Namecheap**: ~$8-12 USD/año
- **GoDaddy**: ~$10-15 USD/año
- **.co** (Colombia): ~$15-20 USD/año

---

## 📊 Próximo Paso: Conectar Formulario a Google Sheets

### Setup Rápido (Sin Backend):

1. **Crear Google Form conectado a Sheets:**
   - Crea un Google Form con campos: Nombre, Email, Tipo de Negocio
   - Conecta a Google Sheets
   - Usa el "pre-filled link" para mantener el diseño

2. **O usar un servicio tercero:**
   - **FormSubmit.co** (Gratis): Emails directo a tu inbox
   - **Tally.so** (Gratis): Forms bonitos + Google Sheets
   - **Airtable** (Gratis): Base de datos + Forms

### Ejemplo con FormSubmit (5 min):

```tsx
// En WaitlistForm.tsx, reemplaza handleSubmit:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('https://formsubmit.co/TU-EMAIL@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        businessType,
      }),
    });

    if (response.ok) {
      setStatus('success');
      // ... resto del código
    }
  } catch (error) {
    setStatus('error');
  }
};
```

---

## ✅ Checklist Post-Deployment

- [ ] Verificar que el sitio carga correctamente
- [ ] Probar el formulario de waitlist
- [ ] Verificar que los emails lleguen
- [ ] Conectar Google Analytics (opcional)
- [ ] Configurar dominio personalizado
- [ ] Compartir link en redes sociales
- [ ] Empezar a recolectar leads

---

## 📈 Siguiente: Estrategia de Difusión

Una vez deployado, necesitas tráfico. Sugerencias:

### Gratis (Orgánico):
1. Grupos de WhatsApp de emprendedores locales
2. Facebook Groups de barberías/spas
3. LinkedIn (post sobre automatización)
4. Reddit (r/entrepreneur, r/smallbusiness)
5. Amigos/familia con negocios

### De Pago (Opcional):
1. Facebook Ads ($5-10 USD/día) targeting barberías en tu ciudad
2. Google Ads en "sistema de citas whatsapp"

---

## 🎯 Meta: 50 Registros en 7 Días

Si logras esto, tienes validación para construir el producto completo.

**¿Necesitas ayuda con algún paso?** Avísame y te guío.
