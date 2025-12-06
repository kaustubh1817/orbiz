export default function Whoweare() {
    return (
        <main className="min-h-screen">
            <div className="container-padding section-block-padding">
                <p className="fl1 flex justify-center">Providing Valuable Solution:</p>
                <p className="fl1 flex justify-center pb-8">Accelerating Growth Swiftly</p>
                <div className="w-full max-w-[950px] mx-auto px-4 text-center space-y-1 md:space-y-2">
                    <p className="fl8 ">
                        At Orbiz, we pride ourselves on delivering high-quality service to every client.
                        Our goal is to exceed your expectations and provide
                    </p>

                    <p className="fl8 ">
                        you with the best possible experience. We stay up-to-date with the latest technological
                        advancements to ensure that our clients
                    </p>

                    <p className="fl8">
                        have access to the most cutting-edge solutions available.
                    </p>
                </div>

            </div>
            < div className="">
                <p className="fl1 flex justify-center">Our Strengths</p>
            </div>



            <div className="w-full flex flex-col container-padding ">

                <div className="bg-[#FFFFFF] p-8 md:p-12 flex flex-col md:flex-row-reverse gap-12">

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/images/Who_1.png"
                            alt="Platform Strategy"
                            className="w-[55%] object-contain " />

                    </div>
                    <div className="w-full md:w-1/2 flex flex-col bg-[#F5F5F5] p-[50px]">
                        <p className="fl2  mb-4">Accelerate</p>

                        <p className="fl8 flex justify-center md:mb-12">
                            In the realm of software business, our commitment is to accelerate your growth journey by
                            offering a comprehensive suite of best practices, tailored solutions, and a dynamic workforce.
                            This holistic approach ensures that your business not only expands in the market but also attains
                            its goals swiftly and with heightened efficacy.
                        </p>

                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col container-padding  ">

                <div className="bg-[#FFFFFF] p-8 md:p-12 flex flex-col md:flex-row gap-12">

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/images/Who_2.png"
                            alt="Platform Strategy"
                            className="w-[55%] object-contain " />

                    </div>
                    <div className="w-full md:w-1/2 flex flex-col bg-[#F5F5F5] p-[50px]">
                        <p className="fl2  mb-4">Transform</p>

                        <p className="fl8 flex justify-center md:mb-12">
                            As seasoned practitioners in transformation, we specialize in rejuvenating legacy products,
                            seamlessly transitioning them to new-age technologies. Our focus is on providing enhanced
                            security measures and upscaling to industry standards, addressing each unique challenge
                            your business may encounter.
                        </p>

                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col container-padding section-block-bottom ">

                <div className="bg-[#FFFFFF] p-8 md:p-12 flex flex-col md:flex-row-reverse gap-12 ">

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/images/Who_3.png"
                            alt="Platform Strategy"
                            className="w-[55%] object-contain " />

                    </div>
                    <div className="w-full md:w-1/2 flex flex-col bg-[#F5F5F5] p-[50px]">
                        <p className="fl2  mb-4">Innovate</p>

                        <p className="fl8 flex justify-center md:mb-12">
                            At the core of our mission is a passion for innovation, driven by a team of highly skilled
                            professionals. We excel in translating ideas into successful executions, guaranteeing success
                            for your endeavors. Partner with us, and let innovation be the propulsive force that transforms
                            your aspirations into tangible reality, ensuring your software business remains at the
                            forefront of industry evolution.
                        </p>

                    </div>
                </div>
            </div>


            <div className="bg-[#F5F5F5] container-padding section-block-bottom">
                <p className="fl1 flex justify-center py-12">Leadership Team</p>
                <div className="w-full flex justify-center">
                    <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-20  px-6">


                        <div className="bg-white p-8  flex flex-col items-center text-center">
                            <img
                                src="/images/leader_1.jpg"
                                alt="leader 1"
                                className="w-40 h-40 rounded-full object-cover mb-6"
                            />

                            <p className="fl8">CEO and Founder</p>
                            <h3 className="fl2 mb-4">
                                Meena Sivan
                            </h3>

                            <p className="fl8 flex justify-center md:px-[120px]">
                                Business & Technology Management executive with entrepreneurial
                                background and global business management. Passionate about building
                                high performing product and engineering teams and delivering outcome
                                through cross-geographical and functional collaboration.
                            </p>
                        </div>


                        <div className="bg-[#ffffff] p-8  flex flex-col items-center text-center">
                            <img
                                src="/images/leader_2.jpg"
                                alt="leader 2"
                                className="w-40 h-40 rounded-full object-cover mb-6"
                            />

                            <p className="fl8">Director</p>
                            <h3 className="fl2 mb-4">
                                Suma Pillai
                            </h3>

                            <p className="fl8 flex justify-center md:px-[120px]">
                                A dedicated and results-driven professional with 18+ years of
                                expertise spanning Finance & Accounts, Human Resource Management,
                                General Administration, Operations, Import/Export, Statutory
                                Compliance, Auditing, Legal Affairs, and Liaison & Coordination.
                            </p>
                        </div>

                    </div>
                </div>


            </div>

        </main >
    );
}

