'use client'
import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react';
import { motion } from "motion/react"

import { SupportCard } from './support-card'

export const SupportSection = () => {
  return (
    <section className="relative pb-8 md:py-10 bg-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container flex flex-col items-center gap-12 relative">
        <h2
          className="font-sans text-balance text-center text-heading-xl text-gray-100"
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <SupportCard
              title='Personalize seu site'
              description='Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com a sua cara.'
              icon={<PaintbrushVertical className="h-6 w-6 text-white" />}
              className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400"
            />
          </motion.div>


          {/* Segundo Card */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <SupportCard
              title='Venda de qualquer loja'
              description='Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.'
              icon={<Store className="h-6 w-6 text-white" />}
              className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300"
            />
          </motion.div>

          {/* Terceiro Card */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <SupportCard
              title='Receba suporte amigável'
              description='Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.'
              icon={<Store className="h-6 w-6 text-white" />}
              className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};