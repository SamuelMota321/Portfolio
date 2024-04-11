export const TechCard = ( { tech , styles} ) => {
    return (
        <li className={styles.card}>
            <img src={tech.icon} alt={tech.name} />
            <h3 className="title sm">{tech.name}</h3>
        </li>
    )
}