import React from "react";
import {Link} from "react-router-dom";


const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Monitoring urban Sprawl using geospatial techniques in Kajiado North Sub-County",
            desc: "Urbanization, the movement of people from rural to urban settings, has been a meteoric rise in Kenya, and most African Countries since Independence. This has been largely attributed to the quest of a better life by the...",
            img: "https://photos.app.goo.gl/7Fdeho5QurJ13eL29",
        },
        {
            id: 2,
            title: "A GIS perspective on gender based violence",
            desc: "Gender bases violence is one of the world's most pervasive human rights violation. Defined as any harmful act perpetuated against a persons will and based on socially ascribed gender differences between males and females",
            img: "https://photos.app.goo.gl/7Fdeho5QurJ13eL29",
        },
        {
            id: 3,
            title: "Spatial Epidemiology of Malaria",
            desc: "Malaria is an endemic disease which is affected by demographic, socio-economic and environmental factors. These factors as shown in the Malaria Indicator Surveycontribute immensely to the prevalence of Malaria inthe Lake region. This article explores the spatial distributionof Malaria inthe endemic regions",
            img: "https://photos.app.goo.gl/7Fdeho5QurJ13eL29",
        },
        {
            id: 4,
            title: "Monitoring Effects of Urbanization on Land Surface Tempereature",
            desc: "The main aim of these project is to determine the effects urbanization has on land surface temperature which will be broken down into first mapping the Land Use Land Cover Changes in the area and secondly determining the Land Surface Tempereature",
            img: "https://photos.app.goo.gl/7Fdeho5QurJ13eL29",
        },
    ];
    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="IMG" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Home