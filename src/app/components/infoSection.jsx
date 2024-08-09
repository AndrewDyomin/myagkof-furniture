import Image from "next/image";
import SoftCouch from "../../../public/images/soft-couch.jpg"
import Woman from "../../../public/images/woman-interior.webp"
import clsx from "clsx";

export default function InfoSection() {
  return (
    <div className={clsx('flex flex-row mt-5')}>
      <div className={clsx('p-5 border-r-solid border-r-2 border-neutral-400')}>
        <h3 className={clsx('text-2xl font-light')}>Затишна вишуканість</h3>
        <p className={clsx('mt-3 mb-3')}>Місія нашої компанії полягає в створенні та постачанні високоякісних меблів, що надають комфорт, стиль та естетичну насолоду нашим клієнтам. Ми прагнемо створювати інноваційні та функціональні рішення, які відповідають сучасним вимогам життя та виражають унікальний характер кожного клієнта</p>
        <Image 
            src={SoftCouch} 
            alt="Soft couch" 
        />
      </div>
      <div className={clsx('p-5')}>
        <Image 
            src={Woman} 
            alt="Soft couch" 
        />
        <h3 className={clsx('text-2xl font-light mt-5')}>Користь для клієнтів</h3>
        <p className={clsx('mt-3')}>Bиробництво меблів, які надають високий рівень комфорту і естетично відповідають потребам клієнтів. М&apos;які меблі створюють затишне середовище вдома чи в офісі, дозволяють споживачам відпочивати та розслаблятися. Наша продукція відіграє важливу роль у визначенні стилю та дизайну приміщення. Вона може бути як функціональним елементом, так і декоративним акцентом, додаючи естетичну цінність інтер&apos;єру.</p>
      </div>
    </div>
  );
}
