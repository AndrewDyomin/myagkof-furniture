import clsx from "clsx";
import Image from "next/image";
import swipiCorner from "../../../public/images/swipi-corner.jpg";
import swipi from "../../../public/images/swipi.jpg"
import faynee from "../../../public/images/faynee.jpg"
import fayneeMini from "../../../public/images/faynee-mini.jpg"

export default function Bestsellers () {
    return (
        <div className={clsx('py-5')}>
            <h2 className={clsx('text-3xl font-light text-center')}>Bestsellers</h2>
            <ul className={clsx('flex mt-10')}>
                <li className={clsx('w-1/4')}>
                    <div>
                        <Image 
                            src={swipiCorner}
                            alt='Corner sofa Swipi'
                        />
                        <p className={clsx('mt-5 text-center underline underline-offset-8')}>Swipi Corner</p>
                    </div>
                </li>
                <li className={clsx('w-1/4 ml-7')}>
                    <div>
                        <Image 
                            src={faynee}
                            alt='Faynee linear sofa'
                            />
                        <p className={clsx('mt-5 text-center underline underline-offset-8')}>Faynee XL</p>
                    </div>
                </li>
                <li className={clsx('w-1/4 ml-7')}>
                    <div>
                        <Image 
                            src={swipi}
                            alt='Swipi linear sofa'
                            />
                        <p className={clsx('mt-5 text-center underline underline-offset-8')}>Swipi</p>
                    </div>
                </li>
                <li className={clsx('w-1/4 ml-7')}>
                    <div>
                        <Image 
                            src={fayneeMini}
                            alt='Faynee mini linear sofa'
                            />
                        <p className={clsx('mt-5 text-center underline underline-offset-8')}>Faynee mini</p>
                    </div>
                </li>
            </ul>
            
        </div>
    )
}