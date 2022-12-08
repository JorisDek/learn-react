const MonType = (type) => {

    return (
        <div className={`mon-type ${type.type.name}`}>
            {type.type.name}
        </div>
    )
}

export default MonType