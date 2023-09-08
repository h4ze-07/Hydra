import { facebook, instagram, linkedin, location, mail, phoneCall, pinterest, twitter, youtube } from "../assets/icons"
import { education, oculus, outdoor, selfcare, simulation, techsBg, unity, unrealEngine, vive } from "../assets/images/indedx"



export const headerVars = {
    headerLinks: [
        {href: '#about', title: 'ABOUT'},
        {href: '#services', title: 'SERVICES'},
        {href: '#technologies', title: 'TECHNOLOGIES'},
        {href: '#howTo', title: 'HOW TO'},
    ],
    headerBtns: [
        { 
            title: 'CONTACT', 
            btnStyles: ' border-2 border-white rounded-[40px] overflow-hidden',
            pStyles: 'text-[12px] text-white font-bold py-[13px] px-[36px]' 
        },
        { 
            title: 'JOIN HYDRA', 
            btnStyles: ' border-2 border-[transparent] rounded-[40px] overflow-hidden', 
            pStyles: 'headerBtnGradient text-[12px] text-[#343045] font-bold py-[13px] px-[38px]'},
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
        img: simulation,
        label: 'SIMULATION',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW'
    },
    {
        img: education,
        label: 'EDUCATION',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW'
    },
    {
        img: selfcare,
        label: 'SELF-CARE',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW'
    },
    {
        img: outdoor,
        label: 'OUTDOOR',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
        btnText: 'TRY IT NOW'
    }
]


export const technologies = {
    title: 'TECHNOLOGIES & HARDWARE',
    subtitle: 'USED BY HYDRA VR.',
    sectionBg: techsBg,
    techList: [
        {
            id: 1,
            title: 'unreal engine',
            img: unrealEngine,
            styles: '',
        },
        {
            id: 2,
            title: 'unity',
            img: unity,
            styles: '',
        },
        {
            id: 3,
            title: 'oculus',
            img: oculus,
            styles: '',
        },
        {
            id: 4,
            title: 'vive',
            img: vive,
            styles: '',
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
            number: '01',
            label: '3D Conception & Design'
        },
        {
            number: '02',
            label: 'Interaction Design'
        },
        {
            number: '03',
            label: 'VR World User Testing'
        },
        {
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
