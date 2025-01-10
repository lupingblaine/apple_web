import gsap from "gsap"

export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger:{
            trigger:target,
            triggerActions: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollProps,
        }
    })
}


export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'Power2.inOut'
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps, 
            ease: 'power2.inOut'
        },
        '<'
    )

    timeline.to(
        secondTarget,
        {
            ...animationProps, 
            ease: 'power2.inOut'
        },
        '<'
    )
}