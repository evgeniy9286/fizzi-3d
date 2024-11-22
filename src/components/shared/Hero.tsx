"use client"

import React from 'react'
import { Button, Heading, Paragraph } from '../ui'
import { Bounded } from './Bouned'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextSplitter } from './TextSplitter'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type HeroProps = object

export function Hero({ }: HeroProps) {
  
  useGSAP(() => {
    const introTl = gsap.timeline()
    introTl
      .set(".hero", { opacity: 1 })
      .from(".hero-header", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        // delay: 0.3,
        stagger: 1,
      })
      .from(
        ".hero-subhead",
        {
          opacity: 0,
          y: 30,
        },
        "+=.8",
      )
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from(".hero-button", {
        opacity: 0,
        y: 10,
      });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: false,  
      }
    })
    scrollTl
      .fromTo(
        "body",
        {
          backgroundColor: "#FDE047",
        },
        {
          backgroundColor: "#D9F990",
          overwrite: "auto",
        },
        1,
      )
      .from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".text-side-body", {
        y: 20,
        opacity: 0,
      });
})

  return (
    <Bounded className="hero opacity-0">
      <div className="grid">
        <div className="grid h-screen place-items-center text-center">
          <div className="grid auto-rows-min place-items-center">
            <Heading variant="hero-heading">
              <span className="hero-header">Live</span>
              <span className="hero-header">Gutsy</span>
            </Heading>
            <div className="hero-subhead">
              <Heading variant="hero-subheading">{"Soda Perfected"}</Heading>
            </div>
            <div className="hero-body">
              <Paragraph variant="hero-body">
                {"3-5g sugar, 9g fiber, 5 delicious flavors"}
              </Paragraph>
            </div>
            <div className="hero-button">
              <Button>
                <Paragraph variant="button-text">{"Shop Now"}</Paragraph>
              </Button>
            </div>
          </div>
        </div>
        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image height={500} width={500} alt="image" src="/all-cans.png" />
          <div className="grid grid-cols-1">
            <div className="text-side-heading">
              <Heading variant="text-side-subheading">
                <TextSplitter
                  text="Try All Five Flavors"
                  className="split-char"
                />
              </Heading>
            </div>
            <div className="text-side-body">
              <Paragraph variant="md">
                {
                  "Our soda is made width real fruit juice and a touch of cane sugar. We never use atrificial sweeteners or high fructose corn syrup. Try all live flavors and find your favorite!"
                }
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
