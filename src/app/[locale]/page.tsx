"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
    const t = useTranslations('homePage');

    return (
        <>
            <div className="flex flex-col gap-20 pt-10 lg:flex-row lg:items-center lg:gap-20 h-full md:p-10 md:pb-[10%]">
                <div className="relative ml-[10%] mr-auto md:w-1/3">
                    <div className="relative mx-auto aspect-[3/4] w-[300px] overflow-hidden rounded-3xl shadow-lg shadow-rose-600 dark:shadow-sky-400 rounded-2xl">
                        <Image
                            src="/accueil/Mauritius_loic.jpg?height=400&width=300"
                            alt="Portrait photo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Second superimposed image */}
                    <div className="absolute -bottom-40 -right-30 md:-right-10 aspect-[3/4] w-[280px] overflow-hidden rounded-3xl shadow-lg shadow-rose-600 dark:shadow-sky-400 rounded-2xl">
                        <Image src="/accueil/Mauritius_loic2.jpg?height=300&width=400" alt="Secondary photo" fill className="object-cover" />
                    </div>
                </div>
                
                <div className='flex flex-col gap-5 p-5 pb-30 lg:w-2/3 mt-[40%] lg:mt-0 lg:pb-0'>
                    <motion.h1 
                        className='font-title title-color text-4xl lg:text-6xl font-bold lg:font-medium'
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {t('title')}
                    </motion.h1>
                    {/* Separtor Line */}
                    <motion.div 
                        className='flex h-[5px] w-[80px] bg-color-reverse rounded-md'
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    ></motion.div>
                    <motion.h2 
                        className='font-title subtitle-color text-2xl lg:text-4xl'
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {t('subtitle')}
                    </motion.h2>
                    
                    <motion.div 
                        className='flex flex-col gap-2 mt-10'
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h3 className='font-text text-color text-lg lg:text-xl'>
                            {t('descriptionTitle')}
                        </h3>
                        <p className='font-text text-color text-sm md:text-base'>
                            {t('description')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
        
    );
}
