
export const mainNavItems = [
  { item: "Home", link: "/" },
  { item: "About Us", link: "/about-us" },
  {
    title: "Treatments",
    link: "treatment",
    dropdownItems: [
      {
        item: (
          <p>
            In Vitro Fertilization{" "}
            <span className="font-semibold">( IVF )</span>{" "}
          </p>
        ),
        link: "/in-vitro-fertilization",
      },
      {
        item: (
          <p>
            Intrauterine Insemination{" "}
            <span className="font-semibold">( IUI )</span>{" "}
          </p>
        ),
        link: "/intrauterine-insemination",
      },
      {
        item: (
          <p>
            Intracytoplasmic Sperm Injection{" "}
            <span className="font-semibold">(ICSI)</span>{" "}
          </p>
        ),
        link: "/intracytoplasmic-sperm-injection",
      },
      { item: "Hysteroscopy", link: "/hysteroscopy" },
      {
        item: "Blastocyst Culture And Transfer",
        link: "/blastocyst-culture-and-transfer",
      },
      {
        item: (
          <p>
            Laser Assisted Hatching{" "}
            <span className="font-semibold">( LAH ) </span>{" "}
          </p>
        ),
        link: "/laser-assisted-hatching",
      },
      { item: "Laparoscopy", link: "/laparoscopy" },
      {
        item: (
          <p>
            Assisted Reproductive Technology{" "}
            <span className="font-semibold">( ART ) </span>{" "}
          </p>
        ),
        link: "/assisted-reproductive-technology",
      },
      {
        item: "Pregnancy & Antenatal Care",
        link: "/pregnancy-and-antenatal-care",
      },
      { item: "PCOS & PCOD", link: "/pcos-and-pcod" },
      { item: "Female-Infertility", link: "/female-infertility" },
      { item: "Male-Infertility", link: "/male-infertility" },
    ],
  },
  {
    title: "Branches",
    states: [
      {
        name: "Tamil Nadu",
        branches: [
          { item: "Ambattur", link: "/fertility-centre-in-ambattur", hreflang: "en-in" },
          { item: "Chennai", link: "/fertility-centre-in-chennai" },
          { item: "Coimbatore", link: "/fertility-centre-in-coimbatore" },
          { item: "Dindigul", link: "/fertility-centre-in-dindigul" },
          { item: "Erode", link: "/fertility-centre-in-erode" },
          { item: "Kallakurichi", link: "/fertility-centre-in-kallakurichi" },
          { item: "Krishnagiri", link: "/fertility-centre-in-krishnagiri" },
          { item: "Madurai", link: "/fertility-centre-in-madurai" },
          { item: "Manapparai", link: "/fertility-centre-in-manapparai" },
          { item: "Nagercoil", link: "/fertility-centre-in-nagercoil" },
          { item: "Ramanathapuram", link: "/fertility-centre-in-ramanathapuram" },
          { item: "Salem", link: "/fertility-centre-in-salem" },
          { item: "Sivangangai", link: "/fertility-centre-in-sivagangai" },
          { item: "Thanjavur", link: "/fertility-centre-in-thanjavur" },
          { item: "Thoothukudi", link: "/fertility-centre-in-thoothukudi" },
          { item: "Theni", link: "/fertility-centre-in-theni" },
          { item: "Tirunelveli", link: "/fertility-centre-in-tirunelveli" },
          { item: "Tiruppur", link: "/fertility-centre-in-tiruppur" },
          { item: "Trichy ", link: "/fertility-centre-in-trichy " },
          { item: "Tiruvannamalai", link: "/fertility-centre-in-tiruvannamalai" },
          { item: "Vellore", link: "/fertility-centre-in-vellore" },
          { item: "Paramakudi", link: "/fertility-centre-in-paramakudi" },
          { item: "Viluppuram", link: "/fertility-centre-in-viluppuram" },
          { item: "Tindivanam", link: "/fertility-centre-in-tindivanam" },
          { item: "Tirupathur", link: "/fertility-centre-in-tirupathur" },
        ],
      },
      {
        name: "Andhra Pradesh",
        branches: [
          { item: "Chilakaluripet", link: "/fertility-centre-in-chilakaluripet" },
          { item: "Ongole ", link: "/fertility-centre-in-ongole" },
          { item: "Vijayawada ", link: "/fertility-centre-in-vijayawada" },
          { item: "Nellore", link: "/fertility-centre-in-nellore" },
        ],
      },
      {
        name: "Karnataka",
        branches: [{ item: "Bangalore ", link: "/fertility-centre-in-bangalore" }],
      },
      {
        name: "Pondicherry",
        link: "/fertility-centre-in-pondicherry",
        branches: [],
      },
      {
        name: "Telangana",
        branches: [
          { item: "Attapur", link: "/fertility-centre-in-attapur" },
          { item: "Hanamkonda", link: "/fertility-centre-in-hanamkonda" },
          { item: "Hyderabad ", link: "/fertility-centre-in-hyderabad" },
        ],
      },
    ],
  },
  { item: "Blog", link: "https://sudhafertilitycentre.com/blog/" },
  { item: "Contact Us", link: "/contact-us" },
];

export const branches = [
  { title: "Ambattur", link: "fertility-centre-in-ambattur", mapsLink: "https://maps.app.goo.gl/uM1mFNbeJvbYeLXY7" },
  { title: "Attapur", link: "fertility-centre-in-attapur", mapsLink: "https://maps.app.goo.gl/kCN9frsx9Ma8d6A89" },
  { title: "Bangalore", link: "fertility-centre-in-bangalore", mapsLink: "https://maps.app.goo.gl/1Ncdrbka7Ua9Ax8T9" },
  { title: "Chennai", link: "fertility-centre-in-chennai", mapsLink: "https://maps.app.goo.gl/UpkkHrKcbUe1B5Ez9" },
  { title: "Chilakaluripet", link: "fertility-centre-in-chilakaluripet", mapsLink: "https://maps.app.goo.gl/8zeUm6TGz7egrCJ96" },
  { title: "Coimbatore", link: "fertility-centre-in-coimbatore", mapsLink: "https://maps.app.goo.gl/tk26i3ZCqKy5tvgZ8" },
  { title: "Erode", link: "fertility-centre-in-erode", mapsLink: "https://maps.app.goo.gl/25HVE7mZdQ5U1Z6F6" },
  { title: "Dindigul", link: "fertility-centre-in-dindigul", mapsLink: "https://maps.app.goo.gl/fZ8shcWhwnXGZDeJ6" },
  { title: "Hanamkonda", link: "fertility-centre-in-hanamkonda", mapsLink: "https://maps.app.goo.gl/xDisk6tufXdoqzxL7" },
  { title: "Hyderabad", link: "fertility-centre-in-hyderabad", mapsLink: "https://maps.app.goo.gl/HkU6U4pm4V9Ry8gX6" },
  { title: "Krishnagiri", link: "fertility-centre-in-krishnagiri", mapsLink: "https://maps.app.goo.gl/AFhZgdDtcZKJVvcT8" },
  { title: "Madurai", link: "fertility-centre-in-madurai", mapsLink: "https://maps.app.goo.gl/2KNqTNT3D7vSdsrAA" },
  { title: "Nagercoil", link: "fertility-centre-in-nagercoil", mapsLink: "https://maps.app.goo.gl/q1uZKWHDhL4QsEYs6" },
  { title: "Ongole", link: "fertility-centre-in-ongole", mapsLink: "https://maps.app.goo.gl/GZzvWM3RoAN9tBZA8" },
  { title: "Pondicherry", link: "fertility-centre-in-pondicherry", mapsLink: "https://maps.app.goo.gl/jb5DRZmTN5j35YUAA" },
  { title: "Ramanathapuram", link: "fertility-centre-in-ramanathapuram", mapsLink: "https://maps.app.goo.gl/B4i7qWWrpRDwLT9e8" },
  { title: "Salem", link: "fertility-centre-in-salem", mapsLink: "https://maps.app.goo.gl/DhH1ssMcYmhfrLfA7" },
  { title: "Tiruvannamalai", link: "fertility-centre-in-tiruvannamalai", mapsLink: "https://maps.app.goo.gl/sSRbqRwYA9eoocoC6" },
  { title: "Trichy", link: "fertility-centre-in-trichy", mapsLink: "https://maps.app.goo.gl/LtKvMB5paEZekmxPA" },
  { title: "Thanjavur", link: "fertility-centre-in-thanjavur", mapsLink: "https://maps.app.goo.gl/nY94QAuTsCJq8qaD6" },
  { title: "Tiruppur", link: "fertility-centre-in-tiruppur", mapsLink: "https://maps.app.goo.gl/871MuLRMYPysaYbj6" },
  { title: "Theni", link: "fertility-centre-in-theni", mapsLink: "https://maps.app.goo.gl/wQfuXdXibDm3NEQP7" },
  { title: "Tirunelveli", link: "fertility-centre-in-tirunelveli", mapsLink: "https://maps.app.goo.gl/HUYbXbThSM4urLWSA" },
  { title: "Vellore", link: "fertility-centre-in-vellore", mapsLink: "https://maps.app.goo.gl/x3auhVG89QFREzXT8" },
  { title: "Vijayawada", link: "fertility-centre-in-vijayawada", mapsLink: "https://maps.app.goo.gl/Kar7sb7ZvQkQEwYr5" },
  { title: "Paramakudi", link: "fertility-centre-in-paramakudi", mapsLink: "https://share.google/tC4DtJRrUXxwoxcLs" },
  { title: "Tirupathur", link: "fertility-centre-in-tirupathur", mapsLink: "https://share.google/O7iKqwZMUZByQm9qG" },
  { title: "Tindivanam", link: "fertility-centre-in-tindivanam", mapsLink: "https://share.google/w8fxjpydGnMH3r4qZ" },
  { title: "Nellore", link: "fertility-centre-in-nellore", mapsLink: "https://share.google/g01PmAeLKM2Q5sJpW" },
  { title: "Viluppuram", link: "fertility-centre-in-viluppuram", mapsLink: "https://share.google/RtBPwq6Srm0vycAhE" },
];
