import { location, mail, phoneCall } from "../assets/icons"
import { education, oculus, outdoor, selfcare, simulation, techsBg, unity, unrealEngine, vive } from "../assets/images/indedx"



export const headerVars = {
    headerLinks: [
        {href: '/about', title: 'ABOUT'},
        {href: '/services', title: 'SERVICES'},
        {href: '/technologies', title: 'TECHNOLOGIES'},
        {href: '/how-to', title: 'HOW TO'},
    ],
    headerBtns: [
        { title: 'CONTACT', styles: '' },
        { title: 'JOIN HYDRA', styles: '' },
    ]
}

export const heroLinks = [
    {
        id: 1,
        title: 'Pay Us a Visit',
        subtitle: 'Union St, Seattle, WA 98101, United States',
        img: location,
        styles: {
            container: 'flex justify-center gap-[15px] my-[25px] py-[25px] pl-[53px] pr-[43px] border-r border-[#C0B7E833]',
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
            container: 'flex justify-center gap-[15px] my-[25px] py-[25px] pl-[50px] pr-[60px] border-r border-[#C0B7E833]',
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
            container: 'flex justify-center gap-[15px] my-[25px] py-[25px] pl-[55px]',
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
