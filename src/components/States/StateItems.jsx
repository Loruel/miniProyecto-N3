export default function StateItems({ data: { photo, superHost, type, rating, title, beds } }) {



    return (
        <li className="stateItem">
            <figure>
                <img src={photo} alt="" />
            </figure>
            <div className="divOld">

                {superHost === true && (
                    <h4 className="super">
                        SUPER HOST
                    </h4>)
                }

                <h4 className="type">{type} . {`${beds} beds`}</h4>
                <img className="star" src="../public/starr.svg" alt="" />
                <h4 className="rating">{rating}</h4>
            </div>
            <div className="divTitle">
                <h3>{title}</h3>
            </div>
        </li>
    )
}
