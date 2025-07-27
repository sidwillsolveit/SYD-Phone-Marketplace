
// src/data/phones.js
import sydOneImg from '../assets/syd_one.png'; // Place your image in src/assets/
import sydEdgeImg from '../assets/syd_edge.png';
import sydTrailImg from '../assets/syd_trail.png';

const phones = [
  {
    id: 1,
    name: "SYD One",
    image: sydOneImg,
    price: 199,
    description: "The essential phone for everyone.",
    for: "First-time smartphone users, students, and everyday essentials.",
    specs: {
      Display: '6.1" HD+ LCD',
      Processor: "Unisoc T610 Octa-core",
      Battery: "4000mAh",
      Camera: {
        Rear: "13MP",
        Front: "8MP"
      },
      Connectivity: [
        "Dual SIM",
        "4G LTE",
        "Wi-Fi, Bluetooth 5.0"
      ],
      OS: "SYD OS Lite (Android 13 base)"
    }
  },
  {
    id: 2,
    name: "SYD Trail",
    image: sydTrailImg,
    price: 349,
    description: "Built for adventure and the outdoors.",
    for: "Trekkers, explorers, field workers.",
    specs: {
      Display: '6.5" FHD+ OLED',
      Processor: "Snapdragon 6 Gen 1",
      Battery: "6000mAh + solar",
      Camera: {
        Rear: "48MP + 8MP",
        Front: "16MP"
      },
      Connectivity: [
        "Global eSIM",
        "Mesh network extender",
        "Wi-Fi 6, Bluetooth 5.3"
      ],
      OS: "SYD OS Pro (Android 14 core)"
    }
  },
  {
    id: 3,
    name: "SYD Edge",
    image: sydEdgeImg,
    price: 599,
    description: "Premium resilience for extreme conditions.",
    for: "Survivalists, preppers, remote workers.",
    specs: {
      Display: '6.7" AMOLED, HDR10+',
      Processor: "Snapdragon 8 Gen 2",
      Battery: "7000mAh + solar + kinetic",
      Camera: {
        Rear: "64MP + 50MP + LiDAR",
        Front: "32MP"
      },
      Connectivity: [
        "Dual eSIM",
        "Built-in Satellite Text & GPS",
        "5G, Wi-Fi 7"
      ],
      OS: "SYD OS Max (Android 15 base)"
    }
  }
];

export default phones;
