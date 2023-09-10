import { motion } from "framer-motion"
import { facebook, instagram, linkedin, location, mail, phoneCall, pinterest, twitter, youtube } from "../assets/icons"
import { education, oculus, outdoor, selfcare, simulation, techsBg, unity, unrealEngine, vive } from "../assets/images/indedx"



export const headerVars = {

    headerDesktopStyles: {
        container: 'hidden md:flex items-center gap-5 lg:gap-[60px] xl:gap-[140px]',
        links: 'flex gap-3 lg:gap-[25px] xl:gap-[41px]',
        btns: 'flex gap-2 lg:gap-[25px] xl:gap-[38px]'
    },

    headerMobileStyles: {
        container: 'absolute left-0 top-[99px] w-[100vw] h-[100dvh]  bg-[#302C42] z-[50] flex flex-col gap-[40px] md:hidden',
        links: 'flex flex-col items-center gap-[30px]',
        btns: 'flex flex-col items-center gap-[15px]'
    },
    headerLinks: [
        {id: 1, href: '#about', title: 'ABOUT'},
        {id: 2, href: '#services', title: 'SERVICES'},
        {id: 3, href: '#technologies', title: 'TECHNOLOGIES'},
        {id: 4, href: '#howTo', title: 'HOW TO'},
    ],
    headerBtns: [
        { 
            title: 'CONTACT', 
            btnStyles: ' border-2 border-white rounded-[40px] overflow-hidden hover:border-[#302C42] hover:bg-gradient-to-tr hover:from-[#C0B7E8] to-[#8176AF]',
            pStyles: 'text-[12px] text-white font-bold py-[13px] px-[36px] w-full h-full',
            motion: '-100%', 
        },
        { 
            title: 'JOIN HYDRA', 
            btnStyles: ' border-2 border-[transparent] rounded-[40px] overflow-hidden', 
            pStyles: 'headerBtnGradient text-[12px] text-[#343045] font-bold py-[13px] px-[38px]',
            motion: '100%',
        }
    ]
}


export const heroLinks = [
    {
        id: 1,
        title: 'Pay Us a Visit',
        subtitle: 'Union St, Seattle, WA 98101, United States',
        img: location,
        styles: {
            container: 'flex justify-center gap-[15px] my-[25px] py-[25px]',
            title: 'font-bold text-[24px] text-white',
            subtitle: 'text-white text-[14px]'
        }
    },
    {
        id: 2,
        title: 'Give Us a Call',
        subtitle: '(110) 1111-1010',
        img: phoneCall,
        styles: {
            container: 'flex justify-center gap-[15px] my-[25px] py-[25px]',
            title: 'font-bold text-[24px] text-white',
            subtitle: 'text-white text-[14px]'
        }
    },
    {   
        id: 3,
        title: 'Send Us a Message',
        subtitle: 'Contact@HydraVTech.com',
        img: mail,
        styles: {
            container: 'flex justify-center gap-[15px] my-[25px] py-[25px] ',
            title: 'font-bold text-[24px] text-white',
            subtitle: 'text-white text-[14px]'
        }
    }
]


export const heroHead = {
    title: 'INTRODUCTION',
    subtitle: 'TO HYDRA VR',
    text: 'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amtellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urporttitor rhoncus vitae.',
    arrowGapStyles: 'flex gap-[30px] items-center'
}

export const whyBuildHead = {
    title: 'WHY BUILD',
    subtitle: 'WITH HYDRA?',
    text: 'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amtellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urporttitor rhoncus vitae.',
    arrowGapStyles: 'flex gap-[16px] items-center'
}


export const whyBuildCards = [
    {
        id: 1,
        img: simulation,
        label: 'SIMULATION',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW'
    },
    {
        id: 2,
        img: education,
        label: 'EDUCATION',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW'
    },
    {
        id: 3,
        img: selfcare,
        label: 'SELF-CARE',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW'
    },
    {
        id: 4,
        img: outdoor,
        label: 'OUTDOOR',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW'
    }
]

//282

export const technologies = {
    title: 'TECHNOLOGIES & HARDWARE',
    subtitle: 'USED BY HYDRA VR.',
    sectionBg: techsBg,
    techList: [
        {
            id: 1,
            title: 'unreal engine',
            img: unrealEngine,
            styles: 'pt-[42px] pb-[40px]',
        },
        {
            id: 2,
            title: 'unity',
            img: unity,
            styles: 'h-[256px] max-w-[200px] object-contain',
        },
        {
            id: 3,
            title: 'oculus',
            img: oculus,
            styles: 'h-[256px] max-w-[200px] object-contain',
        },
        {
            id: 4,
            title: 'vive',
            img: vive,
            styles: 'h-[256px] max-w-[200px] object-contain',
        }
    ]
}


export const howWeBuildSection = {
    sectionHead: {
        title: 'HOW WE BUILD',
        subtitle: 'WITH HYDRA VR?',
        text: 'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amtellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urporttitor rhoncus vitae.',
        arrowGapStyles: 'flex gap-[16px] items-center'
    },
    sectionCircles: [
        {
            id: 1,
            number: '01',
            label: '3D Conception & Design'
        },
        {   
            id: 2,
            number: '02',
            label: 'Interaction Design'
        },
        {
            id: 3,
            number: '03',
            label: 'VR World User Testing'
        },
        {
            id: 4,
            number: '04',
            label: 'Hydra VR Deploy'
        },
    ]
}


export const footerConsts = {
    footerLinkGroup1: [
        {
            id: 1,
            title: 'ABOUT',
            href: '#about'
        },
        {
            id: 2,
            title: 'SERVICES',
            href: '#services'
        },
        {
            id: 3,
            title: 'TECHNOLOGIES',
            href: '#technologies'
        },
        {
            id: 4,
            title: 'HOW TO',
            href: '#howTo'
        },
        {
            id: 5,
            title: 'JOIN HYDRA',
            href: '#joinHydra'
        },
    ],
    footerLinkGroup2: [
        {
            id: 1,
            title: 'F.A.Q',
            href: '/'
        },
        {
            id: 2,
            title: 'SITEMAP',
            href: '/'
        },
        {
            id: 3,
            title: 'CONDITIONS',
            href: '/'
        },
        {
            id: 4,
            title: 'LICENSES',
            href: '/'
        },
    ],
    socialMedias: [
        {
            id: 1,
            title: 'facebook',
            href: '/',
            img: facebook
        },
        {
            id: 2,
            title: 'twitter',
            href: '/',
            img: twitter
        },
        {
            id: 3,
            title: 'linkedin',
            href: '/',
            img: linkedin
        },
        {
            id: 4,
            title: 'youtube',
            href: '/',
            img: youtube
        },
        {
            id: 5,
            title: 'instagram',
            href: '/',
            img: instagram
        },
        {
            id: 6,
            title: 'pinterest',
            href: '/',
            img: pinterest
        },
    ]
}


// export const headerLinks = [
//     {href: '/about', title: 'ABOUT'},
//     {href: '/services', title: 'SERVICES'},
//     {href: '/technologies', title: 'TECHNOLOGIES'},
//     {href: '/how-to', title: 'HOW TO'},
// ]

// export const headerBtns = [
//     { title: 'CONTACT', styles: '' },
//     { title: 'JOIN HYDRA', styles: '' },
// ]
