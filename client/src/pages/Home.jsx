import React from 'react'

function Link(props) {
    return null;
}

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Monitoring urban Sprawl using geospatial techniques in Kajiado North Sub-County",
            desc: "Urbanization, the movement of people from rural to urban settings, has been a meteoric rise in Kenya, and most African Countries since Independence. This has been largely attributed to the quest of a better life by the general populace. With urbanization comess problems that relates to both the physical space and societal issues. One such Issue that tends to aris...",
            img: "",
        },
        {
            id: 2,
            title: "A GIS perspective on gender based violence",
            desc: "Gender bases violence is one of the world's most pervasive human rights violation. Defined as any harmful act perpetuated against a persons will and based on socially ascribed gender differences between males and females",
            img: "",
        },
        {
            id: 3,
            title: "Spatial Epidemiology of Malaria",
            desc: "Malaria is an endemic disease which is affected by demographic, socio-economic and environmental factors. These factors as shown in the Malaria Indicator Surveycontribute immensely to the prevalence of Malaria inthe Lake region. This article explores the spatial distributionof Malaria inthe endemic regions",
            img: "",
        },
        {
            id: 4,
            title: "Monitoring Effects of Urbanization on Land Surface Tempereature",
            desc: "The main aim of these project is to determine the effects urbanization has on land surface temperature which will be broken down into first mapping the Land Use Land Cover Changes in the area and secondly determining the Land Surface Tempereature",
            img: "",
        },
    ];
    return (
        <div className='home'>
<div className="posts">
    {posts.map(post=>(
            <div className="post" key={post.id}>
                <div className="img">
                    <img src={post.img} alt=""  />
                </div>
                <div className="content">
                    <Link to={`/post/${post.id}`}>
                        <h1>{post.title}</h1>
                        <p>{post.desc}</p>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        ))}
</div>
        </div>
    )
}

export default Home