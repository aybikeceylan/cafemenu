import React from 'react'


const Main = ({ data }) => {
    const { name, title, price, category, url } = data
    console.log(data);
    return (
        <div className="menu">
            <div className="image"><img src={url} alt="" /></div>
            <div className="description">
                <div className="top">
                    <p className="name">{name}</p>
                    <p className="price">{price}$</p>
                </div>
                <div className="category">{category}</div>
                <div className="title">{title}</div>
            </div>
        </div>
    )
}

export default Main