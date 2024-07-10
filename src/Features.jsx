import React from 'react';
import SectionContainer from './SectionContainer';
import SaveTime from "./assets/savetime.png"
import Risk from "./assets/risks.png";
import SaveMoney from "./assets/saveMoney.png";



const featuresList = [
    {
        position: "right",
        image: SaveTime,
        title: "Save time",
        subtitle: "by having everyting in one platform.",
        description: "Streamline workflows and automate manual tasks throughout contract lifecycle in a systematic, rule-based environment.",
        url: "#"
    },
    {
        position: "left",
        image: SaveMoney,
        title: "Save money",
        subtitle: "by focusing on more value-add things",
        description: "Have more time for increasing revenue or delivering savings and getting the maximum of the agreed contracts.",
        url: "#"
    },
    {
        position: "right",
        image: Risk,
        title: "Mitigate risks",
        subtitle: "by tracking your obilgations",
        description: "Get notified on any important milestone, track compliance and analyze performance with advanced reporting and AI-powered analytics.",
        url: "#"
    }
]


const Features = () => {
    return (
        <section className='sm:mx-10 mt-16  '>

            {
                featuresList.map((feature, key) => (
                    <div className='my-20 flex flex-col w-full '>
                        <SectionContainer position={feature.position} image={feature.image} title={feature.title} subtitle={feature.subtitle} description={feature.description} url={feature.url} />

                    </div>

                ))
            }


        </section>
    )
}

export default Features
