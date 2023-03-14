import React from 'react'
import Edit from 'client/src/img/edit.png'
import Delete from 'client/src/img/delete.png'
import {Link} from 'react-router-dom'
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://www.pexels.com/photo/woman-looking-at-a-dreamcatcher-6908071/" alt="IMG" />
                <div className="user">
                    <img src="https://www.pexels.com/photo/cocker-spaniel-in-a-hat-15771462/" alt="USER"/>
                    <div className="info>">
                        <span>Vincent</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt=""/>
                    </div>
                </div>
                <h1>Monitoring urban Sprawl using geospatial techniques in Kajiado North Sub-County</h1>
                <p>AR coupled with close range photogrammetry is an amazing technology that superimposes digital components over physical objects. Close-range photogrammetry is based on the gathering of photos to build accurate measurements and, eventually, three-dimensional photo-realistic models. Augmented reality is an interactive experience that mixes the real world and computer-generated material. These contents may comprise a variety of sensory modalities, such as olfactory, haptic, somatosensory, visual, and aural. One of their prominent use cases is navigation and location assistance. AR allows companies to superimpose specific digital objects, specifically pictures over real world objects. One of the most effective AR applications is in navigation.
                    AR can be used for inner city navigation. Through this technology you can easily identify and navigate through places such as shopping malls, museums and parks.  AR facilitates path logistics along with visual orientation for effective navigation. AR applications can highlight and superimpose directions on what your camera sees, along with instruction points for easy readability.
                    AR can also be used in finding routes in case of an emergency. Augmented reduces  cognitive overload, a situation where the mind is ‘bombarded with information’. It is more effective in case of catastrophe since it uses optimization modes for efficient steering.
                    AR in conjunction with close range imaging can also be used for measuring speed. An AR application can monitor the speed of your vehicle relative to other vehicles and advise accordingly on things like turns and passes. This improves performance and enhances driver safety.

                    Examples/Practical Situations applying AR and Close Range Photogrammetry
                    Navigation applications that implement AR use several inputs such as the user’s location via GPS, initial camera measurement, and object location. They also track object movement. Sensors collect this information and connect it to IMUs of the objects in motion. The data is used to design and overlay components relative to the real-time movement of the user.
                    Many companies have started using AR to improve their navigation services. Some of the examples are
                </p>
            </div>
            <Menu />
        </div>
    )
}

export default Single