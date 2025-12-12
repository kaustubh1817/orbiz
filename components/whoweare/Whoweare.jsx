import BackToTop from "@/components/BackToTop";
const leaders = [
  {
    id: 1,
    name: "Meena Sivan",
    role: "CEO and Founder",
    image: "/images/leader_1.jpg",
    desc: `Business & Technology Management executive with entrepreneurial 
    background and global business management. Passionate about
    building high performing product and engineering teams and 
    delivering outcome through cross-geographical and functional 
    collaboration.`,
  },
  {
    id: 2,
    name: "Suma Pillai",
    role: "Director",
    image: "/images/leader_2.jpg",
    desc: `A dedicated and results-driven professional with 18+ years of 
    expertise spanning Finance & Accounts, Human Resource Management,
    General Administration, Operations, Import/Export, Statutory
    Compliance, Auditing, Legal Affairs, and Liaison & Coordination.`,
  },
];

export default function Whoweare() {
  return (
    <main className="min-h-screen section-block-top">
      <div className="container-padding">
        <p className="fl1 text-center mx-auto title-content-gap md:w-1/2 w-full">
          Providing Valuable Solution: Accelerating Growth Swiftly
        </p>
        <p className="fl4 md:w-[75%] w-full mx-auto text-justify ">
          At Orbiz, we pride ourselves on delivering high-quality service to
          every client. Our goal is to exceed your expectations and provide you
          with the best possible experience. We stay up-to-date with the latest
          technological advancements to ensure that our clients have access to
          the most cutting-edge solutions available.
        </p>
      </div>
      <div className="section-block-top container-padding">
        <div className="w-full h-[1px] bg-[#1A2B6D4D]"></div>
        <p className="fl1 flex justify-center  py-5 md:py-10 3xl:py-16">Our Strengths</p>
      </div>
      <div className="w-full flex flex-col section-block-bottom container-padding">
        <div className="bg-[#FFFFFF] flex flex-col md:flex-row-reverse gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/who_1.png"
              alt="Platform Strategy"
              className="w-[55%] object-contain "
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col bg-[#F5F5F5] p-[50px]">
            <p className="fl2  mb-4">Accelerate</p>

            <p className="fl4 flex justify-center text-justify md:mb-12">
              In the realm of software business, our commitment is to accelerate
              your growth journey by offering a comprehensive suite of best
              practices, tailored solutions, and a dynamic workforce. This
              holistic approach ensures that your business not only expands in
              the market but also attains its goals swiftly and with heightened
              efficacy.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col section-block-bottom container-padding">
        <div className="bg-[#FFFFFF] flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/who_2.png"
              alt="Platform Strategy"
              className="w-[55%] object-contain "
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col bg-[#F5F5F5] p-[50px]">
            <p className="fl2  mb-4">Transform</p>

            <p className="fl4 flex justify-center text-justify md:mb-12">
              As seasoned practitioners in transformation, we specialize in
              rejuvenating legacy products, seamlessly transitioning them to
              new-age technologies. Our focus is on providing enhanced security
              measures and upscaling to industry standards, addressing each
              unique challenge your business may encounter.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col section-block-bottom container-padding">
        <div className="bg-[#FFFFFF] flex flex-col md:flex-row-reverse gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/who_3.png"
              alt="Platform Strategy"
              className="w-[55%] object-contain "
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col bg-[#F5F5F5] p-[50px]">
            <p className="fl2  mb-4">Innovate</p>

            <p className="fl4 flex justify-center text-justify md:mb-12">
              At the core of our mission is a passion for innovation, driven by
              a team of highly skilled professionals. We excel in translating
              ideas into successful executions, guaranteeing success for your
              endeavors. Partner with us, and let innovation be the propulsive
              force that transforms your aspirations into tangible reality,
              ensuring your software business remains at the forefront of
              industry evolution.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] relative mt-6 py-10 section-block-bottom ">
        <p className="fl1 flex justify-center mb-10 ">
          Leadership Team
        </p>

        <div className="w-full flex justify-center container-padding">
          <div className="grid md:w-full grid-cols-1 md:grid-cols-2 gap-10 md:gap-20"
          >
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="bg-white p-6 rounded-[2px] w-[90%] flex flex-col mx-auto gap-6"
              >
                <div className="flex gap-6 md:gap-10 items-center  justify-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-25 h-25 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h3 className="fl2">{leader.name}</h3>
                    <p className="fl4">{leader.role}</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#1A2B6D4D]"></div>
                <p className="fl6 text-justify">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <img
            src="\images\top3.png"
            alt="comma"
            className="absolute -top-8 sm:-top-9  md:-top-15 right-0 w-20 h-18 md:w-24 md:h-20 lg:w-40 lg:h-30"
          ></img>
        </div>
      </div>

      <BackToTop />
    </main>
  );
}
