export default function Whoweare() {
    return (
        <main className="min-h-screen">
            <div className="container-padding section-block-padding">
                <p className="fl1 flex justify-center">Partner with us, and let Innovation</p>
                <p className="fl1 flex justify-center"> be the Propulsive force</p>
            </div>



            <div className="w-full flex flex-col container-padding section-block-bottom ">

                <div className="bg-[#FFFFFF] p-8 md:p-12 flex flex-col md:flex-row-reverse gap-12">

                    <div className="w-full md:w-[35%] flex justify-center">
                        <img
                            src="/images/service_2.png"
                            alt="Platform Strategy"
                            className="w-[70%] object-contain " />

                    </div>
                    <div className="w-full md:w-[65%] flex flex-col">
                        <p className="fl2 mb-4">Cloud Scaling</p>
                        <div className="w-full h-[1px] bg-[#1A2B6D4D] mb-6"></div>
                        <p className="fl8 mb-12">
                            Ensure your business is equipped to scale effortlessly in the cloud with our Cloud Scaling services at Orbiz.
                            We understand the dynamic nature of today's digital landscape and offer tailored solutions to optimize your cloud
                            infrastructure for scalability and performance. Whether you're experiencing rapid growth, seasonal fluctuations, or
                            evolving business needs, our expert team utilizes the latest cloud technologies to design and implement scalable
                            architectures that align with your specific requirements. From auto-scaling configurations and load balancing to
                            resource optimization, we empower your applications to seamlessly adapt to varying workloads. Our approach combines
                            cost efficiency with reliability, ensuring that your cloud resources align with demand in real-time. Trust Orbiz to
                            unlock the full potential of cloud scaling, enabling your organization to thrive in a flexible and responsive digital
                            environment. Partner with us to harness the power of the cloud, ensuring your infrastructure scales seamlessly to meet
                            the demands of your evolving business landscape.
                        </p>
                        <button
                            className="fl7 w-[150px] h-[48px] mt-8 flex items-center justify-center border border-[#1A2B6D80]  text-[#1A2B6D] gap-2">
                            Connect
                            <img src='icons\arrow1.svg' className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>


        </main >
    );
}

