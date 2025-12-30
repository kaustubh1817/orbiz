import Company_registration from "../../components/company_registration/Company_registration"

export const metadata = {
    title: 'Company Registration | Orbiz',
    description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
    openGraph: {
        title: 'Company Registration | Orbiz',
        description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
        url: 'https://orbiz-sigma.vercel.app/company_registration',
        siteName: 'Orbiz',
        images: [
            {
                url: '/images/service9.png',
                width: 1200,
                height: 630,
                alt: 'Company Registration | Orbiz',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Company Registration | Orbiz',
        description: 'At Orbiz, we pride ourselves on delivering high-quality service to every client. Our goal is to exceed your expectations and provide you with the best possible experience.',
        images: ['/images/service9.png'],
    },
}

export default function company_registration(){
        return(
                <>
                <Company_registration />
                </>
        )
}