export interface Facility {
  id: string;
  name: string;
  shortName: string;
  county: string;
  town: string;
  level: string;
  type: string;
  lat: number;
  lng: number;
  history: string;
  services: string[];
  programmes: string[];
  accessibility: string;
  roads: string;
  color: string;
  contact: {
    email: string;
    phone: string;
    head: string;
  };
  living: {
    housing: string;
    meals: string;
    transport: string;
  };
  mapsUrl?: string;
  image?: string;
  gallery?: string[];
}

export const facilities: Facility[] = [
  {
    id: "jootrh",
    name: "Jaramogi Oginga Odinga Teaching & Referral Hospital",
    shortName: "JOOTRH",
    county: "Kisumu",
    town: "Kisumu",
    level: "Level 6",
    type: "Public / Teaching",
    lat: -0.0889779161798264,
    lng: 34.77179031384578,
    history: "Established as a regional hub for Western Kenya, JOOTRH has grown into a premier teaching and referral center with a robust ophthalmology department.",
    services: ["Cataract Surgery", "Glaucoma Management", "Pediatric Ophthalmology", "Refraction Services"],
    programmes: ["Clinical Internship", "Residency Rotations", "Optometry Attachment"],
    accessibility: "Located along the Kisumu-Kakamega road, easily accessible by public transport (matatus) from the CBD.",
    roads: "A1 Highway",
    color: "bg-blue-600",
    contact: {
      email: "info@jootrh.go.ke",
      phone: "+254 57 2020101",
      head: "Dr. George Rae (CEO)"
    },
    living: {
      housing: "Hostels available within hospital grounds; private rentals in Milimani or Polyview area (Ksh 10k-20k).",
      meals: "Hospital canteen offers affordable meals (Ksh 150-300); many local eateries in the vicinity.",
      transport: "Matatus from CBD to Kondele/Kibos stop right at the gate (Ksh 30-50)."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep5a4fTkMJ3bRDSJtiVC2krB693Aq2rS9I4aZmHDGi6SR8T5ESQotn6y2G89548IwtOGi6g8JXMT01p5wkIxPcgIssJAw7J0f3OpPqQ0s61SGktkOgUr7BoCMGd-9LXkWl8chyfCpsux-4=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep5a4fTkMJ3bRDSJtiVC2krB693Aq2rS9I4aZmHDGi6SR8T5ESQotn6y2G89548IwtOGi6g8JXMT01p5wkIxPcgIssJAw7J0f3OpPqQ0s61SGktkOgUr7BoCMGd-9LXkWl8chyfCpsux-4=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoutWrjFd1WUwUcYqlKRS7HL4D1yAfhfV28GwWfIIX52GYErz_7j2N571_-WFF47lkuONI0o3O9vj14mR9yPfXBZFGaj8TdAi_mvhUDCoxxPOe1gV9VB4nek4P7Jf8ftfAn578=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo-Jx8crbCgjqLZ6_IPnMXlN197w9bYDedn2mwrFBy-O6SgKGx6PejGfAhGpEdrfWUR0-3KA14t_pR_XbpxXlGLk4Hm9SrbEe6n3yWDPfIVhPtuRCIuH7V5ot91ZcrhdFW5Puxe9A=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerS5UNwzbbWsINYKo-OLA-GWN0hTuHsg0zTgEek3cm-eEJV0AjfF1VtBjXdDV6AWocCVm5rhIJ7TxPCcw4SLTxkkZ5wX3--IMlqFv27Pyx_Q_urFmX8S81nP9iMXMIi6J3iYVLb=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcBxrgVtb2DHq0j_gGQg3vtQpaTr7ZYEw65_iYiO8M8ypxx93BTp7y7g033VZ8tpNiILGjUyFy44AT-bdOU51ES4rQxzOY-f_lLjMnQ_Fzuwas66OhAG6BHhc8UG-yKcgNwfk=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerjlcBvzFdcN22rR9WTtUyUy59rTDmBL3OzAd4oNvj7kp4sp1tM3pcKe501yEQKaebQHcpZ4zUqsuWCu8XmRhkzIRzWfc44rtmISWV-8sdzeJbRh-gJeC2jrNkFJDY-rUFiL1-4jg=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoPB8MIiqhWra4-ykcIKMO1vJdqGzSsy9jfLILa9N4xYHO9OBlb2fAeUSfSh6-YP1JHHxlEZJ6yhz-TsH0SKOXvKmx2sb9PcAUzavDvnpi-Y54ba8NS-8P6D2E4IqPhE0rhCN6N=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerkiu-ar2sfPnGbrK3Rh64BAXCSXpFhSYW6F_FN-fRVQ6MONvNqLknPHSJlMUR0NRoiDwDxoCqmUU7m5bqtyA6riGSEwGOgvxXlTJQOceM4ojwEgzXLqMHNRZtoUUEshLzXq3Gj=w1080-h720-k-no"
    ]
  },
  {
    id: "thika-l5",
    name: "Thika Level 5 Hospital",
    shortName: "Thika Level 5",
    county: "Kiambu",
    town: "Thika",
    level: "Level 5",
    type: "Public",
    lat: -1.04161961181066,
    lng: 37.078712010377494,
    history: "A key facility serving the industrial hub of Thika and surrounding Kiambu county, known for high patient volume and diverse clinical cases.",
    services: ["General Eye Care", "Optical Workshop", "Low Vision Assessment"],
    programmes: ["Diploma in Optometry Attachment", "Nursing Specialized Training"],
    accessibility: "Central Thika, near the main bus terminus.",
    roads: "Thika Superhighway",
    color: "bg-emerald-600",
    contact: {
      email: "thikal5@kiambu.go.ke",
      phone: "+254 67 21621",
      head: "Dr. Patrick Nyaga (Med Sup)"
    },
    living: {
      housing: "Private apartments in Section 9 or Landless area (Ksh 8k-15k).",
      meals: "Numerous budget-friendly cafes in Thika town (Ksh 100-250).",
      transport: "Walking distance from Thika town center; easy access via Thika Superhighway."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoK_HzFIvGOJA6nU0LodXMtBBQYLo4AMyYP2Ls3szpmchMb9RWyGnbXP5fgSCqGoq6hPbswO_I91BJSlTYO3IY8z7s8CumO_6HXz-vDxYrs67W13iP4WYqK_IiWDwYTcOLPWZvk=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoK_HzFIvGOJA6nU0LodXMtBBQYLo4AMyYP2Ls3szpmchMb9RWyGnbXP5fgSCqGoq6hPbswO_I91BJSlTYO3IY8z7s8CumO_6HXz-vDxYrs67W13iP4WYqK_IiWDwYTcOLPWZvk=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwephp2Xv3Wy22F_fgvLG9FzC8FiVojcmAPaMyISCQ5mKEjojtLLxu0ocrfq5gWio4mMpEQCJ36cX2YE4yF-6NLBSSklRZO_jYnYLpzckYoYTcTcewOPK45fqLSwHvBJ2DR-LQr6b_M_uhFeo=w1080-h1440-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepfq2IY1GKHdmgrxnbhBhkLKWVi744GMrpwUV6z_WTYx4n7XeYF57ITykW71HsYqxQvFM2wP-3GZwiqRVrUbjlLOisaRNsYoVT7VXzYYxwySnVw-DTlkdi67K2-5U9rLqTkfxJ_1O1VADDM=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerGQ14GG6WRxcY5SquqTNsyQjdVluCVpcmnasE3hZEWZEhtzXuPkLq08hcoBACFCJMVLmdtoRz2JYYHt7GWcIQzhpTp2M6T_ZIsWwOMDZ6xP4mBQOSulDlise7PhbHMRf73Jami3I7A6x1n=w1080-h1440-k-no"
    ]
  },
  {
    id: "mbagathi",
    name: "Mbagathi Hospital",
    shortName: "Mbagathi",
    county: "Nairobi",
    town: "Nairobi",
    level: "Level 5",
    type: "Public",
    lat: -1.3087431005389227,
    lng: 36.80339178035951,
    history: "Originally an infectious disease hospital, it has evolved into a comprehensive county referral hospital serving the southern parts of Nairobi.",
    services: ["Primary Eye Care", "Diabetic Retinopathy Screening", "Refraction"],
    programmes: ["Medical Student Rotations", "Optometry Internships"],
    accessibility: "Located off Ngong Road, accessible via matatus heading to Kenyatta National Hospital area.",
    roads: "Mbagathi Way",
    color: "bg-purple-600",
    contact: {
      email: "mbagathi@nairobi.go.ke",
      phone: "+254 20 2724730",
      head: "Dr. Loice Mutai (Med Sup)"
    },
    living: {
      housing: "Rentals in Highview, Ngumo, or Madaraka estates (Ksh 15k-30k).",
      meals: "KNH area has many affordable food kiosks and canteens (Ksh 150-400).",
      transport: "Matatus No. 34 or 126 from CBD drop at the hospital entrance (Ksh 50-80)."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepeIvW8htw26c8Jsn6lbhreg4lbS3HFxoUSw_O7yOq86Voqj2mK6nkvKuMt-3sCT-SINUomfNFzxeEeTIk8i9rhx8y-_BPYcWwxgl85-vbiNemIeJYt0DaZLjJf05UTdeXuqnIo=w1080-h1440-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepeIvW8htw26c8Jsn6lbhreg4lbS3HFxoUSw_O7yOq86Voqj2mK6nkvKuMt-3sCT-SINUomfNFzxeEeTIk8i9rhx8y-_BPYcWwxgl85-vbiNemIeJYt0DaZLjJf05UTdeXuqnIo=w1080-h1440-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoFRt5ljhQ3v2GUZgfhuzG5w9B6LnCKHzz2h560Cp-ENjhqJ2VsnF9pFkNjuleAiqWdAP1fLjhNmn2OGThXBiJnLjWnTM_lmu86w7FUrvFRJEGSopEYdrhx5vZn7dU5PJOeAbzG=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweolXD8uTenUy9Romf4iAw6n7RSoY6fgLDuajKMpCH__qbeIYOFntQPpxAPONHt55xBJZYhEiWQ8ngFMHvxrq6yivSqLgXwBNoIkzE1qFLK_a2Xt0FVOsrU_0gt9R-yihNU6I8qW=w1080-h1440-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerURSi36MPR9mm7PstI4nD8eLzYGM43jpp4-bgQjNxSfJQhSZ-XgU2CogqUzJ3gx6wrsoGWmApsTvwOpzipATHkiwsfCX4_UJ0d6RIuIenag-7OFmoAfguKZ0xCLb_ugZIKgTw=w1080-h2400-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqhbXoOGVs--PUK1lW15gh8tx-amAPfCkvzSGUd7RPbpt8Vg6OZV3uyUtoZfNmOcdxT9x8Bv1DlJQ62Z-tPI-S-mq5Wky3jUWV4ZcqPqMYyDz8BIU_UNDsZe08QWujuGvRPYvj1=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoMR-mpU0NQwmGt4Vyl6T8XO1nxd50tOFDSF0dhDB8SOs-gzu_WAnJlX6WQjiV5k9ytSa0Qgfi-ZSIlln-WJTF4DbXWNO1rF3noSZQpy-tDjsQCEvUQycmuLmocLJNuAiEhfJ7W=w1080-h1440-k-no"
    ]
  },
  {
    id: "coast-gen",
    name: "Coast General Teaching & Referral Hospital",
    shortName: "Coast General",
    county: "Mombasa",
    town: "Mombasa",
    level: "Level 6",
    type: "Public / Teaching",
    lat: -4.04877465316978,
    lng: 39.67405699403583,
    history: "The largest referral hospital in the Coast region, providing specialized eye care to a diverse coastal population.",
    services: ["Corneal Transplants", "Vitreoretinal Surgery", "Ocular Oncology"],
    programmes: ["Specialist Training", "Optometry Clinical Practice"],
    accessibility: "Located in Kisauni area, easily accessible from Mombasa Island.",
    roads: "Abdel Nasser Road",
    color: "bg-orange-600",
    contact: {
      email: "info@cgtrh.go.ke",
      phone: "+254 41 2314261",
      head: "Dr. Iqbal Khandwalla (CEO)"
    },
    living: {
      housing: "Apartments in Kisauni or Nyali (Ksh 12k-25k).",
      meals: "Coastal cuisine available at local spots (Ksh 200-500).",
      transport: "Matatus from Posta or Ferry area to Kisauni (Ksh 30-60)."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepZIviUvRM0GXsQGXEGwScSxTq05X07zbmZACEGnpMB6bhxOAbjad-IxrQjOEGwrp2soyeFL_zMLuRMnKLPuJYZFoKQifWueWLmWVVo6_6tl49BKGKO__yaY-EtZ3aRHSqkpbar=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepZIviUvRM0GXsQGXEGwScSxTq05X07zbmZACEGnpMB6bhxOAbjad-IxrQjOEGwrp2soyeFL_zMLuRMnKLPuJYZFoKQifWueWLmWVVo6_6tl49BKGKO__yaY-EtZ3aRHSqkpbar=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo_x9RGcvMTdbQn12py7mBbZkUg6hfkowd4PzDCAeY3npRf0GapAP9MQAm2lsLOqYLbN7A6duB1v_esqrrfAUsVdukzwu4juiPmX9CtiaJih_w5SHWLTHO09JQGCw8AyhjkHCso=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqoMyTPUj79ywbcqpU1a5nYRgcqxdnCAhXLs0gOdlLLigwG_RN6gd3gx-VMiMggKpzQj7KlX2R8BlPlb4pshOgmRxFiajyl6HQydCIXPGp8_Tm0dv_wps-wTXOOLvFkTT0D-tYWMQ=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo2zr7AsMX_XlizLyb5NsNarvjCGM2fjs-6nSqZl3rLdIDoEghHHMXWRwdsAtQXP8PIvsb_BAyvG-Nb_zJZrqrh1GYH0_B5DxvHgQvJbtk8Jf1Ai0ZqOdgNlufBI08KiRPoymqO=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqwY7joonob5vW5I-6xW09yQ8aRSXAGLW6SyUwl7eqzT7KqCJysYZetkLcEKlTbH1SpO7gyFdGKtYnfvoQxG2M3YHDk9I0NVGsgEwfcTDuD4voZel0SoO4tBRq-PiCi_bh9Ff1ATg=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoeWLBubbGXswIg7CiC2GO9_sSgf1DNwFkdE_M5FpjWw6ISS4LqcDAFdNkXQWjLTw39_kmSdU0BRatxfyLLPuCYtlLCJxF18IlkQcJggUY5RMmYPOqv-VuKxzO79e0v0FQAaKo0=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerDy1TPHUP0Q5P_NXsIS5hANvsGuSgdcWKPZhom5mlb2EMSZFbcMzdEFh8Z0Enpo3hog8Zbw38qAitGZh4j-6qN3IrmLMjKnngIDyAUyp7U-zjqz3EgenBpyE6oQOcakpo4cDrfnw=w1080-h720-k-no"
    ]
  },
  {
    id: "nyeri-pgh",
    name: "Nyeri Provincial General Hospital",
    shortName: "Nyeri PGH",
    county: "Nyeri",
    town: "Nyeri",
    level: "Level 5",
    type: "Public",
    lat: -0.425810172418005,
    lng: 36.96354389181398,
    history: "A historical facility serving the Mt. Kenya region, with a long-standing reputation for surgical excellence.",
    services: ["Cataract Campaigns", "Trachoma Control", "Optical Services"],
    programmes: ["Regional Internship Hub", "Community Outreach Training"],
    accessibility: "Nyeri Town center, walking distance from the main stage.",
    roads: "Nyeri-Nyahururu Road",
    color: "bg-red-600",
    contact: {
      email: "nyeripgh@nyeri.go.ke",
      phone: "+254 61 2030611",
      head: "Dr. Robert Ngunjiri (Med Sup)"
    },
    living: {
      housing: "Private rentals in Nyeri Town or King'ong'o (Ksh 7k-15k).",
      meals: "Affordable town hotels (Ksh 100-300).",
      transport: "Walking distance from Nyeri town center."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep0SR-Ro_Wkt115aZTyv41ULciUo_b9NEHtHB_3g4NlptdRC_Mr4ZdFuVWnB8AEFLDbyA69Dzpb7mU7DNmj4cSip_nxOkg560ctan8LwmDO9sEndRAKGRE_6N1R1F58Rk8ek0xN=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep0SR-Ro_Wkt115aZTyv41ULciUo_b9NEHtHB_3g4NlptdRC_Mr4ZdFuVWnB8AEFLDbyA69Dzpb7mU7DNmj4cSip_nxOkg560ctan8LwmDO9sEndRAKGRE_6N1R1F58Rk8ek0xN=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweruKRUDOy-izhqiMLrmmDL1_Vr-d67xcKkuVpw--g_-4sEVOl2LYt0TE79en0T6bTeukQrZzsXuRj9KtliUHPbO-6Z-NX00RbW04Jyf2W9zj3jdb0aBh2bPl0_XlxipD1p4Hwap=w1080-h720-k-no"
    ]
  },
  {
    id: "embu",
    name: "Embu Level 5 Hospital",
    shortName: "Embu",
    county: "Embu",
    town: "Embu",
    level: "Level 5",
    type: "Public",
    lat: -0.5233408872220578,
    lng: 37.4525133535318,
    history: "A central facility for the Eastern region, providing essential eye care services to the residents of Embu and neighboring counties.",
    services: ["General Ophthalmology", "Optical Services", "Outreach"],
    programmes: ["Optometry Attachment", "Clinical Rotations"],
    accessibility: "Embu Town, easily accessible from the CBD.",
    roads: "Embu-Meru Highway",
    color: "bg-amber-600",
    contact: {
      email: "embul5@embu.go.ke",
      phone: "+254 68 30619",
      head: "Dr. Daniel Mugendi (Med Sup)"
    },
    living: {
      housing: "Apartments in Blue Valley or Dallas area (Ksh 6k-12k).",
      meals: "Local eateries in Embu town (Ksh 100-250).",
      transport: "Short boda-boda or matatu ride from Embu CBD (Ksh 30-50)."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqnd5P0aX0YMb0Gvxzt5pnQ_467H0Nc3y1vSYMokfDkFoytBCaxAcurdhIHObaO3kUUB-WlnvZmnshTysS0V_osx35ZW46SExIWFNRv2nC-Dp1lEXa4_BmynE7es-D2G0SAdkha=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqnd5P0aX0YMb0Gvxzt5pnQ_467H0Nc3y1vSYMokfDkFoytBCaxAcurdhIHObaO3kUUB-WlnvZmnshTysS0V_osx35ZW46SExIWFNRv2nC-Dp1lEXa4_BmynE7es-D2G0SAdkha=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerLgDOtuNuahp4o-1TWA-VpZDRrjGkXowjQlIfTAvF2_YSk1It0grskhQcoA4xGj2nrQ1L0tBtNhgxdv8tEJ884Go_2CUM4ch1tW47WDNoyAf6xI6mehVEne3EqgM_Fz60NsN0=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepmN9dZGH0pi32sPmJXWFS8VZ74GLmSeq2z4m0bRtYhyjgAX9u3eD_OgNddbiePzg2ydsYV7HHULTq8e1myBsD1syxe2Z12hxarvfB5OUWjSDtEpo3vOohl4q6YofvsYOVmZos_=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqyUEbCENDKVuiQeu0DArIOFFGiW_wzljgT-QU3Sg4iqj8Li_4qx2Jb_mimD4l0eQVgAqeaNwi0pSTC_-6po_GZMyUPySpOPnXIG4f8cmNFciIB_ncC9xBduyWh9uolCvA4kn7lmQ=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqkhj1Hnuo2vyU-J_BvgYgeP0eFGGHr_tcjbwM6TyctajMQccdSBGdycp-LPWYJCzzl4lL6ZIRpNJCCrFJe2xZ98x6jvJaYfVzt6em_0XOg8gbVWjNXH5ktbhBQKWtaSA21DB0=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqqvvQUYjAzYJ278TP-MIWF0LWLaCorIQ8jQd7xGPYnp-MH0tconwGAaiaFAiNDzkN-q6q2XrMa8RX3KyrhiI69O6Zo7-oe8ImeZ_nw6JgtroSTuQ5HgwVRtQzJNcyI1YP5agLD=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq0DXOfx3bmJVi_gFNhhjOUY13DS14u_vDVIomossSGIUcRy5-nVXZlJfqsq7dzMscIpUQPKZWhx_pGaqX_pWSWhPtltLm3-5liSGzONaZF-tCy9SSvDJDm413-SpIJ1Gu2Rm0j5A=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqkZ5sRFa_MdX42uydQaDK0xHQj1x5uBT0U1ozC8p7AgtpiZqAyKAnFuNuD0qhRoLztxRUukiKvjB-nVb0iSQOGvDd-xSvd248sf7yRQMOUqMp5wBV199NJnNrDIV9xBsmWO18HM9ZOA0s=w1080-h720-k-no"
    ]
  },
  {
    id: "sabatia",
    name: "Sabatia Eye Hospital",
    shortName: "Sabatia Eye",
    county: "Vihiga",
    town: "Wodanga",
    level: "Specialized",
    type: "Not-for-Profit",
    lat: 0.12104131371408672,
    lng: 34.787410379264514,
    history: "A premier specialized eye hospital in Western Kenya, renowned for its community-based approach and high-quality surgical outcomes.",
    services: ["Comprehensive Ophthalmology", "Training Center", "Outreach Programs"],
    programmes: ["Ophthalmic Clinical Officer Training", "Optometry Residency"],
    accessibility: "Located in a serene rural setting, accessible via the Chavakali-Kapsabet road.",
    roads: "C39 Road",
    color: "bg-indigo-600",
    contact: {
      email: "info@sabatiaeyehospital.org",
      phone: "+254 723 721722",
      head: "Dr. Ernest Ollando (Medical Director)"
    },
    living: {
      housing: "Guest house available on-site for students; local rentals in Wodanga (Ksh 4k-8k).",
      meals: "Hospital canteen provides subsidized meals (Ksh 100-200).",
      transport: "Matatus from Chavakali or Majengo (Ksh 50-100)."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerLgkMjC_1hQ-yhPerNADeynjwvwvQz6RcIFXtAWHXbT6K3He6QfpJBgbGAhSFqjK_7LAeQz3eOUdSGCc4VWobQ7SGq7Z2tomoud9xhWFr9o9p7PHEXZHep8t4P2YDQ_UMIcme3=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerLgkMjC_1hQ-yhPerNADeynjwvwvQz6RcIFXtAWHXbT6K3He6QfpJBgbGAhSFqjK_7LAeQz3eOUdSGCc4VWobQ7SGq7Z2tomoud9xhWFr9o9p7PHEXZHep8t4P2YDQ_UMIcme3=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq6P9-WY3dedSd6CZj9k6dxxWODJbeLRehAL040WNMYa-gWqVI7t8ybhgxkFj7JzEvASq5RQv2Mc_tKgmzqoenV0rD4YgAx3i73DCxPrZwmFOpzN4dODeTofm-RFhNVGUxRfdKO=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwephysdD9QQdKbHuqFY5yLgrWBBdjNHrYAcAH9PWDeRHFlHmnStWq0MM-TmYNVHmjAXIbUmicOhpa1ui9zkb7pJjd4Pfu3wll-iC5QzTZxJHxn8dxftNUyggR7WzE-VAiGNPuS4=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoWi_JX3PZWwjzz4sxsxKWJMOoNZ76jEEvw_Ilgm6kpEXncC31Bg_s9g8rQDF6_2bP1NioWoXeSD4PtliUB2eURWyWS2hVBpQzSLaJFdpXhUXuVNkhCdgjuOh70Sf-404Tr7ACp=w1080-h720-k-no"
    ]
  },
  {
    id: "kwale",
    name: "Kwale County Hospital",
    shortName: "Kwale",
    county: "Kwale",
    town: "Kwale",
    level: "Level 4",
    type: "Public",
    lat: -4.17492289648378,
    lng: 39.455277640472005,
    history: "Providing essential healthcare services to the Kwale community, with a focus on primary eye care and community health.",
    services: ["Primary Eye Care", "Refraction", "Screening"],
    programmes: ["Community Health Attachment"],
    accessibility: "Kwale Town, accessible from Mombasa.",
    roads: "Kwale-Kinango Road",
    color: "bg-lime-600",
    contact: {
      email: "kwalehospital@kwale.go.ke",
      phone: "+254 40 2102021",
      head: "Dr. Hajara El-Busaidy (Med Sup)"
    },
    living: {
      housing: "Local rentals in Kwale Town (Ksh 5k-10k).",
      meals: "Small town cafes (Ksh 100-200).",
      transport: "Matatus from Likoni Ferry to Kwale (Ksh 100-150)."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep5L4EfHsYegbVCVKqasVqlOSoaVmkR7OdcEoaf-vgkIfJk609O0WYjGGwTJbUbU0u1pNK8lVZPBa7hYpJCz_nCgC1al8YJ_QvihjE93OIvFkRGFGk2ti3-guD7F4K4CQRlJt4=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep5L4EfHsYegbVCVKqasVqlOSoaVmkR7OdcEoaf-vgkIfJk609O0WYjGGwTJbUbU0u1pNK8lVZPBa7hYpJCz_nCgC1al8YJ_QvihjE93OIvFkRGFGk2ti3-guD7F4K4CQRlJt4=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepiPlQwDq3vyy_tEjI8yfoh3yEa4NdEvn85pbFX5dTdS05y2Ctz2ShTZfd-sh39GV0a1talM5tCgHwZ5-koaEhSa1xxTMTeyNHilPvZu2zjfzB6H--timuNPN-o0rJunmlpD8I=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqX5KeiHINnhF-hsN7uqkaHkUtRGfqBuegUiVUDF2mLX4YcrwXG-lJKDzvNcgqbTFFq6XA6_UpYISxvnjXCLdVhir5mw8WqDab0iVjKgNbzBO_ML-MPg3n2R7DXZLcAMhCUD3LD=w1080-h720-k-no"
    ]
  },
  {
    id: "nanyuki",
    name: "Nanyuki Teaching & Referral Hospital",
    shortName: "Nanyuki",
    county: "Laikipia",
    town: "Nanyuki",
    level: "Level 5",
    type: "Public / Teaching",
    lat: 0.016672469278739027,
    lng: 37.078429670315536,
    history: "A key facility in Laikipia County, recently upgraded to support medical training and specialized services.",
    services: ["General Eye Care", "Surgical Services", "Optical Shop"],
    programmes: ["Medical Internship", "Optometry Attachment"],
    accessibility: "Nanyuki Town, near the main highway.",
    roads: "Nanyuki-Meru Road",
    color: "bg-rose-600",
    contact: {
      email: "nanyukihospital@laikipia.go.ke",
      phone: "+254 62 32021",
      head: "Dr. Timothy Panga (CEO)"
    },
    living: {
      housing: "Rentals in Nanyuki Town or Majengo (Ksh 8k-18k).",
      meals: "Diverse options in Nanyuki town (Ksh 150-400).",
      transport: "Short walk or boda-boda from Nanyuki town center (Ksh 50)."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweomj1fX0WKKdItV7lxAadMieFvcsEXwyapq9Dnk5mUXfyt8VY3xcyVO1qPS_WvTEBZvxbQ9ONd_cJYIZHS4AqmiD8esXpak8LXbLW__sPdmA1CeDsfSMX0UQmkCduaqnyvZCUQCwwT7mWiM=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweomj1fX0WKKdItV7lxAadMieFvcsEXwyapq9Dnk5mUXfyt8VY3xcyVO1qPS_WvTEBZvxbQ9ONd_cJYIZHS4AqmiD8esXpak8LXbLW__sPdmA1CeDsfSMX0UQmkCduaqnyvZCUQCwwT7mWiM=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/p/AF1QipNmcVg-_PuH2rJWMJIDA5qx25nybw38NllYZtDt=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/p/AF1QipOb387lLI-UFKaXFgMJrEi8rQt5YQuMK2_9W-_9=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/p/AF1QipNGJHrNj2m1-SMz-CgGlosAN3Akl35SYvEVLN70=w1080-h720-k-no"
    ]
  },
  {
    id: "nakuru-pgh",
    name: "Nakuru Level 6 Hospital",
    shortName: "Nakuru PGH",
    county: "Nakuru",
    town: "Nakuru",
    level: "Level 6",
    type: "Public / Teaching",
    lat: -0.27803972745193967,
    lng: 36.070289123866445,
    history: "A major hub in the Rift Valley, Nakuru PGH provides extensive specialized services including a dedicated eye unit.",
    services: ["Retina Clinic", "Glaucoma Screening", "Spectacle Dispensing"],
    programmes: ["Internship Rotations", "Ophthalmic Nursing"],
    accessibility: "Nakuru City, near the Milimani area.",
    roads: "Nairobi-Nakuru Highway",
    color: "bg-yellow-600",
    contact: {
      email: "nakurupgh@nakuru.go.ke",
      phone: "+254 51 2215580",
      head: "Dr. Aisha Maina (Med Sup)"
    },
    living: {
      housing: "Apartments in Milimani or Shabab area (Ksh 10k-22k).",
      meals: "Many options in Nakuru CBD (Ksh 150-350).",
      transport: "Matatus from Nakuru CBD (Ksh 30-50)."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerG4WZWpseEK_5M4Q3Hh4gylTgAfhEzwcGMi75iiD8S3UBjJij_ygggHtJrxjYX1dk646m4zmZoGANq_zAOFNMPE3tkBLKN5N4OZj84DJpr-KPEKwadsCbdiJhP88baXWzOHa9o=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerG4WZWpseEK_5M4Q3Hh4gylTgAfhEzwcGMi75iiD8S3UBjJij_ygggHtJrxjYX1dk646m4zmZoGANq_zAOFNMPE3tkBLKN5N4OZj84DJpr-KPEKwadsCbdiJhP88baXWzOHa9o=w1080-h720-k-no"
    ]
  },
  {
    id: "mama-lucy",
    name: "Mama Lucy Kibaki Hospital",
    shortName: "Mama Lucy",
    county: "Nairobi",
    town: "Kayole",
    level: "Level 5",
    type: "Public",
    lat: -1.2735474327754444,
    lng: 36.898978602301206,
    history: "Serving the densely populated Eastlands area of Nairobi, this hospital handles a high volume of primary and secondary eye care cases.",
    services: ["Refraction", "Minor Eye Surgeries", "School Screening"],
    programmes: ["Optometry Attachment", "Community Health Volunteer Training"],
    accessibility: "Located in Embakasi West, accessible via Kangundo Road.",
    roads: "Kangundo Road",
    color: "bg-pink-600",
    contact: {
      email: "mamalucy@nairobi.go.ke",
      phone: "+254 20 2020202",
      head: "Dr. Emma Mutio (Med Sup)"
    },
    living: {
      housing: "Rentals in Kayole, Komarock, or Umoja (Ksh 8k-18k).",
      meals: "Budget-friendly kiosks in Eastlands (Ksh 100-250).",
      transport: "Matatus No. 19-60 from CBD (Ksh 50-100)."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerz3JjC055CeqxfO9nw50s-o8MImP8jPAZJCvxZEzgTdig_HWN_yNpFfyvFfSr0lnHcR5qy0XzW4iPH4vjwt4RWNohcxTU42iGQlSCWS2bSyD5V7HQaiRD0_FBsCU_EmgbusZo8=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerz3JjC055CeqxfO9nw50s-o8MImP8jPAZJCvxZEzgTdig_HWN_yNpFfyvFfSr0lnHcR5qy0XzW4iPH4vjwt4RWNohcxTU42iGQlSCWS2bSyD5V7HQaiRD0_FBsCU_EmgbusZo8=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep4TqPTBR2pju6Njmbuk4Xr5QNDJshwcZiONuuxFdDa5rE3fFe3NjI6L3ZRSUo01rOCUgWBrBed5tMIMkF1ap_ua-Fsog_9Fc1KK-6wmw7TcgWGU7L_qpMLvluI2zvZA0V-MF2aVSIQH-C4=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqQ4SK5s-XNpX346xvkbvd9luZ2d4_aqLUUEt_FlBTeN_g52Zw3oq18sz6Bj7BO3ohJ1tElBmIs42xNVFeyJNj7A4baqKnSsedlviaNqlCMa7A-B9kOWPDqVMSeTglFWzZCng1V=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq-WmVg4de9Bkpp9PExQmkJbCbBL90Gg7Qha0-qpoAoDgzBGRKMGtc0DiC2Vxp_q4nOKfPxrljWqvUDie-c3glkcm3bO-5GVr21b78e8kYKvpIVhGEU64f0l-fCVEHpJOEhoBVwJw=w1080-h720-k-no"
    ]
  },
  {
    id: "kakamega-gen",
    name: "Kakamega County General Teaching & Referral Hospital",
    shortName: "Kakamega General",
    county: "Kakamega",
    town: "Kakamega",
    level: "Level 6",
    type: "Public / Teaching",
    lat: 0.3221079555034496,
    lng: 34.746367998161105,
    history: "The main referral center for Kakamega County, recently upgraded to teaching status to support medical education in the region.",
    services: ["General Ophthalmology", "Optical Shop", "Emergency Eye Care"],
    programmes: ["Medical Internship", "Optometry Practical Training"],
    accessibility: "Kakamega Town, along the main highway.",
    roads: "A1 Highway",
    color: "bg-teal-600",
    contact: {
      email: "kakamegahospital@kakamega.go.ke",
      phone: "+254 56 31131",
      head: "Dr. Boniface Nyumbile (Med Sup)"
    },
    living: {
      housing: "Rentals in Kakamega Town or Milimani (Ksh 7k-15k).",
      meals: "Town hotels and canteens (Ksh 100-300).",
      transport: "Short matatu or boda-boda ride from Kakamega CBD (Ksh 30-50)."
    }
  },
  {
    id: "chuka",
    name: "Chuka County Referral Hospital",
    shortName: "Chuka",
    county: "Tharaka Nithi",
    town: "Chuka",
    level: "Level 4",
    type: "Public",
    lat: -0.3293557124625677,
    lng: 37.655728166195516,
    history: "Serving the residents of Tharaka Nithi, Chuka Hospital provides essential eye care and surgical services.",
    services: ["Cataract Surgery", "Refraction", "General Eye Clinic"],
    programmes: ["Optometry Attachment"],
    accessibility: "Chuka Town, along the Meru-Nairobi highway.",
    roads: "Meru-Nairobi Highway",
    color: "bg-orange-500",
    contact: {
      email: "chukahospital@tharakanithi.go.ke",
      phone: "+254 64 630120",
      head: "Dr. Maurine Ogeto (Med Sup)"
    },
    living: {
      housing: "Local rentals in Chuka Town (Ksh 5k-12k).",
      meals: "Affordable town cafes (Ksh 100-200).",
      transport: "Short walk from Chuka town center."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoNz8buhfSJkYZoxLQ6cOSWqlTUfROONwulU0WBJc0VUwvFNh0DJY8qsdQbf05laqA6FQvdTxX3TZCjqVeylcCsJouQCOeQTPwDWQA_3U0yorQG36zv74cblCJodS11SGGi9fLv=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoNz8buhfSJkYZoxLQ6cOSWqlTUfROONwulU0WBJc0VUwvFNh0DJY8qsdQbf05laqA6FQvdTxX3TZCjqVeylcCsJouQCOeQTPwDWQA_3U0yorQG36zv74cblCJodS11SGGi9fLv=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep757snqimk7_dcU9hb8B2HvMj8Cb9vw-vr9AZdh4jOHBOX5XEy5vKaChjZ9ophpjps3fr9Nq3n0rkyqJlu9wghm6-fJ22yzEAL9KYlWCk222NZzdDMgib-ib9i1zx2LhYJGmcvvg=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepmNLxhN8l7FGL33bve31AAk3eluubC2_gPc16M1S6AyZaE447iIubhACD1aTIFunGXOZ66Aai7Jfvnm9g95vTly5BbAt_9Vi7mmpbXz66BfOUzlFZkUIorNOzG84EEeKY9q3o6=w1080-h720-k-no"
    ]
  },
  {
    id: "homabay",
    name: "Homa Bay County Referral Hospital",
    shortName: "Homabay",
    county: "Homa Bay",
    town: "Homa Bay",
    level: "Level 4",
    type: "Public",
    lat: -0.5330262077247854,
    lng: 34.461586900000015,
    history: "A critical facility in the Nyanza region, focusing on maternal and child health alongside specialized eye care.",
    services: ["General Ophthalmology", "Optical Services", "Community Outreach"],
    programmes: ["Clinical Attachment"],
    accessibility: "Homa Bay Town, near the lake shore.",
    roads: "Homa Bay-Rongo Road",
    color: "bg-blue-400",
    contact: {
      email: "homabayhospital@homabay.go.ke",
      phone: "+254 59 22161",
      head: "Dr. Peter Ogola (CEO)"
    },
    living: {
      housing: "Rentals in Homa Bay Town (Ksh 6k-12k).",
      meals: "Lakeside eateries (Ksh 150-300).",
      transport: "Short walk or boda-boda from Homa Bay CBD (Ksh 50)."
    }
  },
  {
    id: "longisa",
    name: "Longisa County Referral Hospital",
    shortName: "Longisa",
    county: "Bomet",
    town: "Longisa",
    level: "Level 4",
    type: "Public",
    lat: -0.8602754189705786,
    lng: 35.390502966198184,
    history: "Serving the Bomet community, Longisa Hospital is known for its efficient service delivery and dedicated eye unit.",
    services: ["Cataract Surgery", "Refraction", "Eye Health Education"],
    programmes: ["Optometry Student Attachment"],
    accessibility: "Longisa, along the Mulot-Bomet road.",
    roads: "B3 Highway",
    color: "bg-green-700",
    contact: {
      email: "longisahospital@bomet.go.ke",
      phone: "+254 52 22221",
      head: "Dr. Isaac Bomet (Med Sup)"
    },
    living: {
      housing: "Local rentals in Longisa or Bomet Town (Ksh 5k-10k).",
      meals: "Budget town hotels (Ksh 100-200).",
      transport: "Matatus from Bomet Town (Ksh 50-80)."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerN63ZoZzdQmczyTcy98af3OzFiBJ8xttsyeQehCggjgj3ivk1_AWR-d8ZygbK4-UNfQBwIpmtPSalWuXoY05Q1VJL3dGA3URsmm7XZEroC4eGHTuWr5ZtptYFM36I1qOYDI8tZWg=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerN63ZoZzdQmczyTcy98af3OzFiBJ8xttsyeQehCggjgj3ivk1_AWR-d8ZygbK4-UNfQBwIpmtPSalWuXoY05Q1VJL3dGA3URsmm7XZEroC4eGHTuWr5ZtptYFM36I1qOYDI8tZWg=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerl-JN3Wszc_pbcoJQSHRr9KQRVCEmcCtAKGasKbsJrd6ToNEChTwwbV5IPAyuz3kCw_Q8k6E7iG6jsh_8lq9ydD_EnmBee6RLMCzXKTrU_TQa5pABX1sQ1TFbGquJMPEZ0FyVjfA=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer2IRe1EGSpjIsTwn2s-FvrMlWskNT84zmipBWSMbgsP9cNfZi87g1xBVR1GC5DJKOb4ZSYWQIvWE3PEix3aI8i0FQjjifb3zN_S2T1NTSCPoHtOo03yQrmT2xqhY6t2PB4fhiA=w1080-h720-k-no"
    ]
  },
  {
    id: "kitale-eye",
    name: "Kitale County Referral Hospital Eye Unit",
    shortName: "Kitale Eye Unit",
    county: "Trans Nzoia",
    town: "Kitale",
    level: "Level 4",
    type: "Public",
    lat: 1.0159734901805157,
    lng: 35.00894861239952,
    history: "A vital service point for the North Rift and Western regions, focusing on preventable blindness.",
    services: ["Cataract Surgery", "Refraction", "Eye Health Education"],
    programmes: ["Optometry Student Attachment"],
    accessibility: "Kitale Town, easily accessible from the bus park.",
    roads: "Kitale-Lodwar Road",
    color: "bg-cyan-600",
    contact: {
      email: "kitalehospital@transnzoia.go.ke",
      phone: "+254 54 30331",
      head: "Dr. Francis Soita (Med Sup)"
    },
    living: {
      housing: "Rentals in Kitale Town or Milimani (Ksh 7k-15k).",
      meals: "Town hotels and food kiosks (Ksh 100-250).",
      transport: "Short walk from Kitale town center."
    },
    image: "https://lh3.googleusercontent.com/p/AF1QipMMmZLjCLBtQB65iy6W2EeDgBlMHQu08Wl_muEo=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/p/AF1QipMMmZLjCLBtQB65iy6W2EeDgBlMHQu08Wl_muEo=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerXQvxpssXeW1RCItriVyJzWTF-c41ZxLn2vVMWce5en9bpwr6kT7Fdr1p05FGo8UMIXmy5wxATxRjUhvSWP-RAVheKM5Hc58Elusngaa4SmAxaeWGNHaVV3rOeNupOQhspaXI=w1080-h720-k-no"
    ]
  },
  {
    id: "kisii",
    name: "Kisii Teaching & Referral Hospital",
    shortName: "Kisii",
    county: "Kisii",
    town: "Kisii",
    level: "Level 6",
    type: "Public / Teaching",
    lat: -0.669809382164654,
    lng: 34.77133277362458,
    history: "A major referral and teaching center in South Nyanza, providing high-level specialized eye care.",
    services: ["Specialized Eye Surgery", "Optical Workshop", "Training"],
    programmes: ["Medical Residency", "Optometry Internship"],
    accessibility: "Kisii Town center.",
    roads: "Kisii-Kilgoris Road",
    color: "bg-violet-600",
    contact: {
      email: "kisiihospital@kisii.go.ke",
      phone: "+254 58 30005",
      head: "Dr. Enock Ondari (CEO)"
    },
    living: {
      housing: "Rentals in Kisii Town or Milimani (Ksh 8k-18k).",
      meals: "Numerous options in Kisii town (Ksh 150-350).",
      transport: "Walking distance from Kisii town center."
    },
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer96lBtPgaWHpFvJOS-Q6cRJhJXWZgSS_S4gvJtQ9SP72PYsB9GE3KZIMprb8TNeDKsDz1leb4th2T43Lmw6_IHIaJxb2QfWj1e3f3PpRvRE5tu6CBe2wF9Ezny_vbHQxtE8_c3=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer96lBtPgaWHpFvJOS-Q6cRJhJXWZgSS_S4gvJtQ9SP72PYsB9GE3KZIMprb8TNeDKsDz1leb4th2T43Lmw6_IHIaJxb2QfWj1e3f3PpRvRE5tu6CBe2wF9Ezny_vbHQxtE8_c3=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerWbdv6bFPnu6sHYTq0IfRE2-CC60Dr9XRrDP8Xq3vL3Q-L1gyD0mSQav1SoJsjNr3rBlux6NB5GNfuqlPyDGKpFvxMVlEuE8a83el3Hclc9IEjllCUsC8dAru3UdcfBNut4d6g=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweos4CYYlnQy3LhPEYDWfv9rpwFHa1ZgQ7W-aF9RKvQ55V6qj94IghH1Lqi2rNLRw7sukSTgnszcpFoinu_sLVefIPb4Sxzx-FVFweE0ws_9awl_WGGzineiog1GCJK0nL4O7j0j=w1080-h720-k-no"
    ]
  },
  {
    id: "narok",
    name: "Narok County Referral Hospital",
    shortName: "Narok",
    county: "Narok",
    town: "Narok",
    level: "Level 4",
    type: "Public",
    lat: -1.0841602336844058,
    lng: 35.86729728154194,
    history: "Serving the Narok community, this hospital provides essential eye care services to a diverse population including pastoralist communities.",
    services: ["General Eye Care", "Refraction", "Outreach"],
    programmes: ["Clinical Attachment"],
    accessibility: "Narok Town, along the Mai Mahiu-Narok highway.",
    roads: "B3 Highway",
    color: "bg-orange-800",
    contact: {
      email: "narokhospital@narok.go.ke",
      phone: "+254 50 22021",
      head: "Dr. Steven Kanyinke (Med Sup)"
    },
    living: {
      housing: "Local rentals in Narok Town (Ksh 6k-12k).",
      meals: "Town hotels (Ksh 100-250).",
      transport: "Short walk from Narok town center."
    },
    image: "https://lh3.googleusercontent.com/p/AF1QipNwVz0Dew1YVeWmToylU-y5O125FGOip282PBHc=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/p/AF1QipNwVz0Dew1YVeWmToylU-y5O125FGOip282PBHc=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoM6hkmTDwNq6AP0gVT2c3A0XOSgFrDFoko6E6LDW585cDoX4-vVxxFi6g_ZGq6zeQG8bzeTxynZ7shzx8UswUPUr3Ut6KeMVzRnHolNKPR5WYZtTTh0RUGOkR8ZENMxt2g2coCKw=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo_4vrzT8TOMRNVYLZJEVGEOEG8el5bErzOPrNo7ToMsfnVq33Va6hDtjWluLamGDGv-AJB_KY4x57nhO6zgxM2i1cb0F4qcIjcEoszUBLpFNSieHeEHb0zvAEb5IdvN9Id_aC2CA=w1080-h720-k-no"
    ]
  },
  {
    id: "kwale-eye-center",
    name: "Kwale Eye Center",
    shortName: "Kwale Eye Center",
    county: "Kwale",
    town: "Diani",
    level: "Specialized",
    type: "Not-for-Profit",
    lat: -4.161699288169408,
    lng: 39.61688241040258,
    history: "A world-renowned specialized eye center at the coast, focusing on high-quality surgical outcomes and community blindness prevention.",
    services: ["Advanced Eye Surgery", "Optical Services", "Community Outreach"],
    programmes: ["Specialized Clinical Attachment", "Ophthalmic Training"],
    accessibility: "Diani, accessible from Mombasa.",
    roads: "Diani Beach Road",
    color: "bg-sky-600",
    contact: {
      email: "info@kwaleeyecentre.com",
      phone: "+254 722 412412",
      head: "Dr. Helen Roberts (Medical Director)"
    },
    living: {
      housing: "Hostels in Diani or private rentals (Ksh 10k-25k).",
      meals: "Many tourist-friendly and local eateries (Ksh 200-600).",
      transport: "Matatus from Likoni Ferry to Diani (Ksh 100-150)."
    },
    image: "https://lh3.googleusercontent.com/p/AF1QipPer0Q7iULu8kZPY1q8v5ELzWDIetNbPdR_5j75=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/p/AF1QipPer0Q7iULu8kZPY1q8v5ELzWDIetNbPdR_5j75=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepZFGhTrTJWeRP7hJM2gL_8YPmGJX7sK9NoFtGryB9jNJhx4KHRqEzNQYx4S-4pVaf2afkRn4IMv7JWyC71KDCtmbmciPJpjPMmKpZjVOFpPhLczTUfvufRRAOG44mohFLGEBsJrA=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepTLjdwaKW_8-2DRTW3xMB_ZVdmZZv6rNbO198qJ9OFb1tTDUaFiyCr429LFNPX9kut5GfhigfuB8jQ7Vyi9arCn6xzyBMaTafZfuybyvN_PoQv18EwdpcWfYeZ1l7Xgr36AC4=w1080-h720-k-no"
    ]
  },
  {
    id: "ksb",
    name: "Kenya Society for the Blind",
    shortName: "KSB",
    county: "Nairobi",
    town: "Lang'ata",
    level: "Specialized",
    type: "Not-for-Profit",
    lat: -1.3149326264412413,
    lng: 36.81783191037905,
    history: "Established in 1956, KSB is the leading organization in Kenya providing rehabilitation, education, and advocacy for the visually impaired, focusing on empowerment and inclusion.",
    services: ["Low Vision Assessment", "Braille Training", "Orientation & Mobility", "Vocational Training"],
    programmes: ["Low Vision Clinical Attachment", "Rehabilitation Officer Training", "Special Education Support"],
    accessibility: "Located along Lang'ata Road, opposite the Wilson Airport area, easily accessible by public transport.",
    roads: "Lang'ata Road",
    color: "bg-slate-700",
    contact: {
      email: "info@ksb.or.ke",
      phone: "+254 20 6001534",
      head: "Samson Waweru (Executive Director)"
    },
    living: {
      housing: "Rentals in Lang'ata, South C, or Kibera area (Ksh 10k-25k).",
      meals: "Many food kiosks and malls (T-Mall, Galleria) nearby (Ksh 200-500).",
      transport: "Matatus No. 125 or 126 from CBD drop right outside (Ksh 50-100)."
    },
    image: "https://lh3.googleusercontent.com/p/AF1QipNP062Jd4K4XlGkh8AXQuLaquQSP3Vd3bwJOc2x=w1080-h720-k-no",
    gallery: [
      "https://lh3.googleusercontent.com/p/AF1QipNP062Jd4K4XlGkh8AXQuLaquQSP3Vd3bwJOc2x=w1080-h720-k-no",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepLbu-aOKVg2-EKsrji86i1hMpNKfXm1YRQnLUrxr5W1mwmfK9WsRkmYXbiwPluahcKMyvONf_ScwR1ei0gcWcHaeBOG4odyP3NGilQRBgZY6DT2Rll6sFDCZISeoSnSb_mQqxrhw=w1080-h720-k-no"
    ]
  }
];
