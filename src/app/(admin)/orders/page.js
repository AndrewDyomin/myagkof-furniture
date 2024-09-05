'use client'

import clsx from "clsx";
import { useTranslation } from "react-i18next";

export default function Orders() {
    const { t } = useTranslation()
    return (
        <>
            <h2 className={clsx('text-2xl text-center')}>{t('my orders')}</h2>
            <p>this page is still under construction</p>
        </>
    )
}