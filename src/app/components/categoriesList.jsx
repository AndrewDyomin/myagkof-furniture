
export default function CategoriesList ({ array }) {
    return (
        <>
            <ul>
                {array.map((item) => (
                    <li key={item._id}>
                        <p>{item.name}</p> {/* to do ItemCard */}
                    </li>
                ))}
            </ul>
        </>
        
    )
}