'use client'

import Image from "next/image";
import SoftCouch from "../../../public/images/soft-couch.jpg"
import Woman from "../../../public/images/woman-interior.webp"
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function InfoSection() {
  const { t } = useTranslation()

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])
    
  if (!isClient) {
    return null
  }

  return (
    <div className={clsx(!isMobile && 'grid grid-cols-2', 'mt-10 mb-10')}>
      <div className={clsx(!isMobile && 'border-r-solid border-r-2 border-neutral-400 p-5')}>
        <h3 className={clsx('text-2xl font-light')}>{t('cozy sophistication')}</h3>
        <p className={clsx('mt-3 mb-3')}>
          {t('cozy sophistication block')}
        </p>
        <Image 
            src={SoftCouch} 
            alt="Soft couch" 
            style={{
                width: '100%',
                height: 'auto',
              }}
        />
      </div>
      <div className={clsx(!isMobile && 'p-5 max-w-1/2', isMobile && 'mt-10')}>
        <Image 
            src={Woman} 
            alt="Happy woman" 
            style={{
                width: '100%',
                height: 'auto',
              }}
        />
        <h3 className={clsx('text-2xl font-light mt-5')}>{t('benefits for customers')}</h3>
        <p className={clsx('mt-3')}>{t('benefits for customers block')}</p>
      </div>
    </div>
  );
}
