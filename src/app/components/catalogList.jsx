import clsx from "clsx"

export default function CatalogList ({ array }) {

    console.log(array[0])

    return (
        <>
            <ul className={clsx('flex gap-8 flex-wrap')}>
                {array.map((item) => (
                    <li key={item._id}>
                        <p>{item.name}</p>
                        <p>{item.price},00₴</p>
                    </li>
                ))}
            </ul>
        </>
        
    )
}