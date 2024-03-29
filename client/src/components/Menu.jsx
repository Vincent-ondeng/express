import React from 'react'

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "Monitoring urban Sprawl using geospatial techniques in Kajiado North Sub-County",
            desc: "Urbanization, the movement of people from rural to urban settings, has been a meteoric rise in Kenya, and most African Countries since Independence. This has been largely attributed to the quest of a better life by the...",
            img: "https://www.pexels.com/photo/snow-wood-landscape-nature-15896384/",
        },
        {
            id: 2,
            title: "A GIS perspective on gender based violence",
            desc: "Gender bases violence is one of the world's most pervasive human rights violation. Defined as any harmful act perpetuated against a persons will and based on socially ascribed gender differences between males and females",
            img: "https://www.pexels.com/photo/grayscale-photo-of-a-bridge-9844318/",
        },
        {
            id: 3,
            title: "Spatial Epidemiology of Malaria",
            desc: "Malaria is an endemic disease which is affected by demographic, socio-economic and environmental factors. These factors as shown in the Malaria Indicator Surveycontribute immensely to the prevalence of Malaria inthe Lake region. This article explores the spatial distributionof Malaria inthe endemic regions",
            img: "https://www.pexels.com/photo/white-and-black-airplane-2253921/",
        },
        {
            id: 4,
            title: "Monitoring Effects of Urbanization on Land Surface Tempereature",
            desc: "The main aim of these project is to determine the effects urbanization has on land surface temperature which will be broken down into first mapping the Land Use Land Cover Changes in the area and secondly determining the Land Surface Tempereature",
            img: "https://www.pexels.com/photo/man-walking-on-a-path-in-the-mountains-15733527/",
        },
    ];
    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu