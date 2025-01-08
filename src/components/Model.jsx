import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelView from "./ModelView";
import { useState } from "react";
import { yellowImg } from "../utils";

const Model = () => {
    const [Size, setSize] = useState('small');
    const [model, setModel] = useState({
        title:'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
    })

// camera control for the model view

    useGSAP(() => {
        gsap.to('#heading', { y: 0, opacity: 1 })
    },[]);
  return (
    <section className="common-padding">
        <div className="screen-max-width">
          <h1 id="heading" className="section-heading">
            Take a closer look.
          </h1>

          <div className="flex flex-col item-center my-5">
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                <ModelView />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Model