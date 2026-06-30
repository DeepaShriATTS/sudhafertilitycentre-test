import React from "react";
import Banner from "@/assets/branch/ambatur/hospital.webp";
import Button from "@/components/button/button";
import Tab1 from "@/assets/Home/tab1.webp";
import Tab2 from "@/assets/Home/tab2.webp";
import Tab3 from "@/assets/Home/tab3.webp";
import Tab4 from "@/assets/Home/tab4.webp";
import Tab5 from "@/assets/Home/tab5.webp";
import Icon1 from "@/assets/Home/tab1.svg";
import Icon2 from "@/assets/Home/tab2.svg";
import Icon3 from "@/assets/Home/tab3.svg";
import Icon4 from "@/assets/Home/tab4.svg";
import Icon5 from "@/assets/Home/tab5.svg";
import Buttonbottm from "@/components/button";
import BranchTabs from "@/components/ui/branchtab";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur } from "@/middleware/imagesroute";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
// const tabs = [
//   {
//     title: "All Branches",
//     label: "All Branches",
//     content: {
//       heading: "Sudha Fertility Centre Pvt Ltd",
//       description:
//         "410, Bharathiyar Rd, Siddhapudur, New Siddhapudur, Coimbatore, Tamil Nadu - 641044.",
//       image: Tab1,
//     },
//     icon: Icon4,
//   },
//   {
//     title: "Tamil Nadu",
//     label: "Tamil Nadu",
//     content: {
//       heading: "Tamil Nadu",
//       description:
//         "At Sudha Fertility Centre, we believe that fertility care should be both affordable and of the highest quality. We conduct free medical camps every month to make sure quality treatment reaches everyone. Free consultation and tests are provided at every camp. With affordable treatment costs, we make sure that your dream of parenthood is within reach. Every camp has helped countless people achieve their dreams easily with trusted experts. We cherish and support every parenthood journey. ",
//       image: Tab2,
//     },
//     icon: Icon2,
//   },

//   {
//     title: "Andra Pradesh",
//     label: "Andra Pradesh",
//     content: {
//       heading: "Andra Pradesh",
//       description:
//         "Sudha Fertility Centre has earned the trust of lakhs of families as South India's best fertility centre. We are happy and blessed to witness the parenthood stories of lakhs of parents. Each review and video we receive always remember our motto of helping couples in their parenthood journey. We are driven by the mission to help couples experience the happiness of parenthood, and dedicated to making it happen. We ensure every couple who visits us receives the best care and starts their journey of parenthood.",
//       image: Tab3,
//     },
//     icon: Icon3,
//   },
//   {
//     title: "Karnataka",
//     label: "Karnataka",
//     content: {
//       heading: "Karnataka",
//       description:
//         "As the leading fertility hospital in South India, Sudha Fertility Centre serves as a beacon of hope and brings happiness. With the best fertility doctors and world-class fertility treatments, Sudha Fertility Centre has a record of high success rate in helping parents achieve the dream of parenthood. With delivering lakhs of healthy babies, we are identified as a renowned IVF hospital in South India offering personalized solutions and treatments for couples trying for pregnancy. From young couples to older couples, we stand with them in every step of their parenthood journey.",
//       image: Tab4,
//     },
//     icon: Icon1,
//   },
//   {
//     title: "Puducherry",
//     label: "Puducherry",
//     content: {
//       heading: "Puducherry",
//       description:
//         "With a team of hundreds of experienced fertility experts, Sudha Fertility Centre offers comprehensive and specialized treatments tailored to your needs. Under the guidance of the fertility experts, Dr. S. Dhanabagyam and Dr. S. Pradeepa, our skilled IVF specialists and IUI doctors are dedicated to helping you through every step of your parenthood journey. Supported by the expertise and care of our fertility specialists, lakhs of happy parents have successfully welcomed healthy, beautiful babies into their families. ",
//       image: Tab5,
//     },
//     icon: Icon5,
//   },
//   {
//     title: "Telangana",
//     label: "Telangana",
//     content: {
//       heading: "Telangana",
//       description:
//         "With a team of hundreds of experienced fertility experts, Sudha Fertility Centre offers comprehensive and specialized treatments tailored to your needs. Under the guidance of the fertility experts, Dr. S. Dhanabagyam and Dr. S. Pradeepa, our skilled IVF specialists and IUI doctors are dedicated to helping you through every step of your parenthood journey. Supported by the expertise and care of our fertility specialists, lakhs of happy parents have successfully welcomed healthy, beautiful babies into their families. ",
//       image: Tab5,
//     },
//     icon: Icon5,
//   },
// ];

const tamilNaduBranches = [
  {
    name: "Coimbatore",
    address: "410, Bharathiyar Rd, Siddhapudur, New Siddhapudur, Coimbatore, Tamil Nadu - 641044.",
    branchLink: "/fertility-centre-in-coimbatore",
    link: "https://maps.app.goo.gl/FzY9JxNQMHxAPzzv9",
    phone: "99-5241-9307"
  },
  {
    name: "Tiruppur",
    address: "97/54, JG Nagar, 2nd Street, Maruthachalapuram Main Road, Tiruppur, Tamil Nadu - 641602.",
    branchLink: "/fertility-centre-in-tiruppur",
    link: "https://maps.app.goo.gl/PNEyJ7JycaDXbXMQ8",
    phone: "90-8716-7007"
  },
  {
    name: "Ambattur",
    address: "2nd floor, No: 119, Seven-star complex, Second Floor, Madras Thiruvallur High Rd, Ambattur, Chennai, Tamil Nadu - 600053.",
    branchLink: "/fertility-centre-in-ambattur",
    link: "https://maps.app.goo.gl/KkML4gvpF71Vvwuy7",
    phone: "73-0598-0454"
  },
  {
    name: "Chennai",
    address: "No.940, EVR Periyar Road, Poonamalli High Road, (Opp) Old Dasprakash Hotel, Purasaiwalkkam, Chennai, Tamil Nadu – 600084.",
    branchLink: "/fertility-centre-in-chennai",
    link: "https://maps.app.goo.gl/ooLkknzC2oPQDU7L9",
    phone: "63-8405-7007"
  },
  {
    name: "Dindigul",
    address: "64/77 - A, Municipal colony, Nehruji Nagar, Dindigul, Tamil Nadu - 624001.",
    branchLink: "/fertility-centre-in-dindigul",
    link: "https://maps.app.goo.gl/mF1fcEMt4XcDpc9F9",
    phone: "90-4726-6006"
  },
  {
    name: "Erode",
    address: "151, Perundurai Rd, Edayankattuvalasu, Erode, Tamil Nadu - 638001.",
    branchLink: "/fertility-centre-in-erode",
    link: "https://maps.app.goo.gl/qzbWafBboySy57k29",
    phone: "99-6556-7007"
  },
  // {
  //   name: "Karur",
  //   address: "Sri Rathna Hospital, C/O, North West Pradhakshanam Road, Near Thinnappa Theatre, Madavilagam, Karur, Tamil Nadu - 639002.",
  //   branchLink: "/fertility-centre-in-karur",
  //   link: "https://maps.app.goo.gl/MEfR1w4Xf7M5XmNL6",
  //   phone:"63-8477-7007"
  // },
  {
    name: "Krishnagiri",
    address: "C/O Uma Rani Hospitals, Complex No. 1/136A, Annai Sathya Nagar, Salem Rd, Near LIC Building, Krishnagiri, Tamil Nadu - 635001.",
    branchLink: "/fertility-centre-in-krishnagiri",
    link: "https://maps.app.goo.gl/cevJko2UJAEA7iZY6",
    phone: "90-8717-7007"
  },
  {
    name: "Madurai",
    address: "7A, Kalpalam road, Near Meenakshi college, Goripalayam, Madurai, Tamilnadu - 625002.",
    branchLink: "/fertility-centre-in-madurai",
    link: "https://maps.app.goo.gl/2S83qpF2nRqjFg4c7",
    phone: "63-8454-7007"
  },
  {
    name: "Nagercoil",
    address: "530, MS Rd, Vetturnimadam, Nagercoil, Tamil Nadu - 629004.",
    branchLink: "/fertility-centre-in-nagercoil",
    link: "https://maps.app.goo.gl/2ipMnKQrxtc8Hvca8",
    phone: "90-8752-4545"
  },
  {
    name: "Ramanathapuram",
    address: "68, Madurai - Rameswaram Hwy, Ramanathapuram, Tamil Nadu 623502",
    branchLink: "/fertility-centre-in-ramanathapuram",
    link: "https://maps.app.goo.gl/ucTyi5L2TBeWhwPT8",
    phone: "90-8731-4545"
  },
  {
    name: "Salem",
    address: "C1, 2nd floor, RV TOWERS, Vanchinathan Iyer Street, Swarnapuri, Salem, Tamil Nadu - 636004.",
    branchLink: "/fertility-centre-in-salem",
    link: "https://maps.app.goo.gl/we4guYa55j7MYKYw6",
    phone: "63-8403-7007"
  },
  {
    name: "Thanjavur",
    address: "10, Raja Nagar, New Bus Stand, Near HDFC Bank, Neelagiri Post, Thanjavur, Tamil Nadu - 613005.",
    branchLink: "/fertility-centre-in-thanjavur",
    link: "https://maps.app.goo.gl/bfKRAGHEHEjd17wy9",
    phone: "90-8725-7007"
  },
  {
    name: "Thoothukudi",
    address: "City Center, 39/1, Thevarpuram Rd, opp. to judge quarters, Pudugramam, Thoothukudi, Tamil Nadu 628003.",
    branchLink: "/fertility-centre-in-thoothukudi",
    link: "https://maps.app.goo.gl/EbrGpjnQPknvDP6TA",
    phone: "98-4287-5454"
  },
  {
    name: "Theni",
    address: "C/O Krishnammal Memorial Hospital, 293, Periyakulam Rd, Alli Nagaram, Theni, Tamil Nadu - 625531.",
    branchLink: "/fertility-centre-in-theni",
    link: "https://maps.app.goo.gl/wknsdGskXUsFi6dZ9",
    phone: "91-5067-4598"
  },
  {
    name: "Tirunelveli",
    address: "66-J, First Floor, Thiruvananthapuram Road West, New Bus Stand, Tirunelveli, Tamil Nadu - 627005.",
    branchLink: "/fertility-centre-in-tirunelveli",
    link: "https://maps.app.goo.gl/XVWJPyGSvN4NWmYAA",
    phone: "90-8791-4545"
  },
  {
    name: "Trichy",
    address: "Rangga Hotel, C/O, Williams Rd, Opposite to Femina Hotel, Cantonment, Tiruchirappalli, Tamil Nadu - 620001.",
    branchLink: "/fertility-centre-in-trichy",
    link: "https://maps.app.goo.gl/jP1sDSHqVXsXmdvK8",
    phone: "78-2593-7007"
  },

  {
    name: "Tiruvannamalai",
    address: "Third Floor, No.2, C/O. Ponni Hospital, Main Rd, Gandhinagar, Tiruvannamalai, Tamil Nadu 606601",
    branchLink: "/fertility-centre-in-tiruvannamalai",
    link: "https://maps.app.goo.gl/LUcDVC633fxJ3Ltw7",
    phone: "90-4796-6006"
  },
  {
    name: "Vellore",
    address: "24, 4th East Cross Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Katpadi, Vellore, Tamil Nadu - 632006.",
    branchLink: "/fertility-centre-in-vellore",
    link: "https://maps.app.goo.gl/4LUQPQSooBNAsaaD6",
    phone: "90-4796-6006"
  },
  {
    name: "Paramakudi",
    address: "Gandhiji Main Road, near Taluk Office, SPM Colony, Attupalam, Paramakudi, Tamil Nadu 623707",
    branchLink: "/fertility-centre-in-paramakudi",
    link: "https://maps.app.goo.gl/mF1fcEMt4XcDpc9F9",
    phone: "90-4796-6006"
  },
  {
    name: "Villupuram",
    address: "Viswalingam Layout, No:1, Thiru Vi Ka Street, Viluppuram, Tamil Nadu 605602",
    branchLink: "/fertility-centre-in-villupuram",
    link: "https://share.google/RtBPwq6Srm0vycAhE",
    phone: "90-4796-6006"
  },
  {
    name: "Tirupathur",
    address: "VKS Towers, Krishnagiri Road, near Hotel Hills, Tirupathur, Tamil Nadu 635601",
    branchLink: "/fertility-centre-in-tirupathur",
    link: "https://maps.app.goo.gl/mF1fcEMt4XcDpc9F9",
    phone: "90-4796-6006"
  },
  {
    name: "Tindivanam",
    address: "No 55/1 B, Tindivanam-Marakkanam Rd, opp. to Fire station, Tindivanam, Tamil Nadu 604001",
    branchLink: "/fertility-centre-in-tindivanam",
    link: "https://share.google/w8fxjpydGnMH3r4qZ",
    phone: "90-4796-6006"
  },

  // {
  //   name: "Sivagangai",
  //   address: "",
  //   branchLink: "",
  //   link: "",
  //    phone:"97-5178-6006"
  // },
  //  {
  //   name: "Perambalur",
  //   address: "",
  //   branchLink: "",
  //   link: "",
  //    phone:"99-4391-6006"
  // },
  //  {
  //   name: "Chidambaram ",
  //   address: "",
  //   branchLink: "",
  //   link: "",
  //    phone:"82-7011-7007"
  // },
  // {
  //   name: " Aruppukkottai ",
  //   address: "",
  //   branchLink: "",
  //   link: "",
  //    phone:"82-7013-7007"
  // },
  // {
  //   name: "Kumbakonam",
  //   address: "",
  //   branchLink: "",
  //   link: "",
  //    phone:"82-7018-7007"
  // },
];

const andhraBranches = [
  {
    name: "Vijayawada",
    address: "Dr. No: 40-16/1-37, 1st Floor, Georgepet, Near D-Address Mall, Labbipet, Vijayawada, Andhra Pradesh - 520010.",
    branchLink: "/fertility-centre-in-vijayawada",
    link: "https://maps.app.goo.gl/eLWPXMvBPa4PvYgz9",
    phone: "90-8774-4545"
  },
  {
    name: "Tenali",
    address: "V Cardiac and Multi-speciality hospital, TB Road, Ramalingeswara peta, Tenali-522201.",
    branchLink: "",
    link: "",
    phone: "89-2567-5454"
  },
  {
    name: "Ongole",
    address: "Anjani Super speciality hospital, 60 Feet Road, Satyanarayana puram, Ongole-523001.",
    branchLink: "",
    link: "",
    phone: "90-8724-7007"
  },
  {
    name: "Chilakaluripet",
    address: "Sri Krishna Hospital, Purushotham Road, Addaroad, Chilakaluripeta , Pincode -522616.",
    branchLink: "",
    link: "",
    phone: "84-8996-4545"
  },
  {
    name: "Nellore",
    address: "16/2/254, Swatantra Park road, Gandhinagar, Gandhinagar, Brindavan Colony, Nellore, Andhra Pradesh 524001",
    branchLink: "/fertility-centre-in-nellore",
    link: "https://maps.app.goo.gl/mF1fcEMt4XcDpc9F9",
    phone: "90-4796-6006"
  },
]

const karnatakaBranches = [
  {
    name: "Bangalore",
    address: "Door no. - 1534, 21st Main, 7th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka - 560102.",
    branchLink: "/fertility-centre-in-bangalore",
    link: "https://maps.app.goo.gl/GZSDWRzyTaZgY3Le8",
    phone: "82-7041-7007"
  },
]

const puducherryBranches = [
  {
    name: "Pondicherry",
    address: "No.21, J.K Towers, 100 Feet Rd, Ellaipillaichavady, Sathya Nagar East, , 605013.",
    branchLink: "/fertility-centre-in-pondicherry",
    link: "https://maps.app.goo.gl/63ez9CyRiUTc7PDx7",
    phone: "90-8713-7007"

  },
]

const telanganaBranches = [
  {
    name: "Hyderabad",
    address: "D.No. 8-2-335/2 A/T, Green Valley Road, No 5, Banjara Hills, Hyderabad, Telangana - 500034.",
    branchLink: "/fertility-centre-in-hyderabad",
    link: "https://maps.app.goo.gl/1j6HjWA7kSvZW7LNA",
    phone: "70-9447-7007"
  },
  {
    name: "Attapur",
    address: "Pillar Number 147, Zoi Hospitals Campus, Rambagh Colony, Attapur, Hyderabad, Telangana - 500048.",
    branchLink: "/fertility-centre-in-attapur",
    link: "https://maps.app.goo.gl/wXdY12ENv8XuQNsKA",
    phone: "95-1410-7007"
  },
]

const tabs = [
  {
    title: "All Branches",
    label: "All Branches",
    content: {
      heading: "Sudha Fertility Centre Pvt Ltd",
      description: "410, Bharathiyar Rd, Siddhapudur, New Siddhapudur, Coimbatore, Tamil Nadu - 641044.",
      image: Tab1,
      children: [...tamilNaduBranches, ...andhraBranches, ...karnatakaBranches, ...puducherryBranches, ...telanganaBranches],
    },
    icon: Icon4,
  },
  {
    title: "Tamil Nadu",
    label: "Tamil Nadu",
    content: {
      heading: "Tamil Nadu",
      description: "At Sudha Fertility Centre, we believe that fertility care should be both affordable and of the highest quality...",
      image: Tab2,
      children: tamilNaduBranches
    },
    icon: Icon2,
  },
  {
    title: "Andhra Pradesh",
    label: "Andhra Pradesh",
    content: {
      heading: "Andhra Pradesh",
      description: "At Sudha Fertility Centre, we believe that fertility care should be both affordable and of the highest quality...",
      image: Tab2,
      children: andhraBranches
    },
    icon: Icon2,
  },
  {
    title: "Karnataka",
    label: "Karnataka",
    content: {
      heading: "Karnataka",
      description: "At Sudha Fertility Centre, we believe that fertility care should be both affordable and of the highest quality...",
      image: Tab2,
      children: karnatakaBranches
    },
    icon: Icon2,
  },
  {
    title: "Pondicherry",
    label: "Pondicherry",
    content: {
      heading: "Pondicherry",
      description: "At Sudha Fertility Centre, we believe that fertility care should be both affordable and of the highest quality...",
      image: Tab2,
      children: puducherryBranches
    },
    icon: Icon2,
  },
  {
    title: "Telangana",
    label: "Telangana",
    content: {
      heading: "Telangana",
      description: "At Sudha Fertility Centre, we believe that fertility care should be both affordable and of the highest quality...",
      image: Tab2,
      children: telanganaBranches
    },
    icon: Icon2,
  },
];


function Branches() {
  return (
    <>
      {/* Banner */}
      <div className="relative ">
        <div
          className="absolute inset-0 bg-cover bg-center -top-28  md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "fill",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-28 ">
            <div className="text-white text-center px-4 font-outfit mt-10">
              <h1 className="font-outfit font-semibold ">
                Our Branches
              </h1>
              <p className=" mt-4 text-[22px] leading-[1.6] ">
                Bringing advanced fertility solutions across india.
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Get Consultation with Our Specialists"} link="/contact-us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Baby's smile in every hopeless home marks our proudest milestone.*/}
      <div className="container mx-auto mt-8 ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold ">
              Baby's smile in every hopeless home marks our proudest milestone.
            </h2>
            <h2 className="font-outfit font-semibold lg:block mt-2"> Our Achievements</h2>
          </div>

          <div>
            <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h4 className="text-[36px] font-bold text-[#173366] text-center">
                        3.5L+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        Infertile Couples Counselled
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="icon mr-4"></div>
                  <div className="content">
                    <div className="title">
                      <h4 className="text-[36px] font-bold text-center text-[#173366]">
                        1L+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        Laparoscopic Surgeries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg">
                <div className="main-tail flex items-center justify-center ">
                  <div className="content">
                    <div className="title">
                      <h4 className="text-[36px] font-bold text-center text-[#173366]">
                        35k+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">IUI Babies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-cente">
                    <div className="title">
                      <h4 className="text-[36px] font-bold text-center text-[#173366]">
                        60k+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">IVF Babies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Fertility Treatments at Sudha Fertility Centre */}

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="title text-center ">
            <h2 className="font-outfit font-semibold ">
              Wherever You Are, Your Parenthood Journey Begins with Sudha

            </h2>


          </div>
          <div className="tab mt-12">
            <BranchTabs tabs={tabs} />
          </div>

        </div>
      </div>

      {/* MarqueeComponent */}
      <section>
        {/* <div className="container mx-auto">
            <div className=" mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex md:flex-row  flex-col justify-center gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube " link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Ambattur.gallery}
          direction="right"
          speed="fast"
          className="custom-class"
        /> */}
        {/* </div>
          </div> */}
      </section>
    </>
  );
}

export default Branches;
