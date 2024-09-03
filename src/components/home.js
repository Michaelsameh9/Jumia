import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/home.css";
import { Col, Container, Row, Carousel, } from 'react-bootstrap';
import MenuHome from './menuhome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from "../components/images/home/first-slider.gif";
import slider2 from "../components/images/home/sceand-slider.png";
import slider3 from "../components/images/home/thr-slider.png";
import slider4 from "../components/images/home/fourd-slider.png";
import slider5 from "../components/images/home/fifth-slider.png";
import slider6 from "../components/images/home/six-slider.png";
import slider7 from "../components/images/home/seven-slider.png";
import slider8 from "../components/images/home/eigth-slider.png";
import buy from "../components/images/home/buy.gif"
import { GiShop } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import { IoChevronDown } from "react-icons/io5";
import { Helmet } from "react-helmet";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card1 from "../components/images/home/card-slider1.png"
import card2 from "../components/images/home/card-slider2.png"
import card3 from "../components/images/home/card-slider3.png"
import card4 from "../components/images/home/card-slider4.png"
import card5 from "../components/images/home/card-slider5.jpg"
import card6 from "../components/images/home/card-slider6.png"
import card7 from "../components/images/home/card-slider7.jpg"
import card8 from "../components/images/home/card-slider8.png"
import card9 from "../components/images/home/card-slider9.png"
import Slider from 'react-slick';

import air from "../components/images/home/Air.png";
import fans from "../components/images/home/Fans.png";
import water from "../components/images/home/water.png";
import freezers from "../components/images/home/Freezer.png";
import grills from "../components/images/home/Grills.png";
import refrig from "../components/images/home/Fefrig.png";

import stove from "../components/images/home/stove.jpg";
import AirFryer from "../components/images/home/Air Fryer.jpg";
import Dishwasher from "../components/images/home/Dishwasher.jpg";
import WashingMachine from "../components/images/home/Washing Machine.jpg";
import FrostRefrigerator from "../components/images/home/Frost Refrigerator.jpg";
import HandMixer from "../components/images/home/Hand Mixer.jpg";
import CeramicCoated from "../components/images/home/Ceramic .jpg";
import CastIron from "../components/images/home/SXEL Built In Stainless.jpg";
import FrostRefrigerator2 from "../components/images/home/Frost Refrigerator2.jpg";
import FrontLoading from "../components/images/home/Front Loading.jpg";
import Dishwasher2 from "../components/images/home/Dishwasher 60 cm.jpg";
import FrostRefrigerator3 from "../components/images/home/Frost Refrigerator2.jpg";
import WashingMachine2 from "../components/images/home/Washing Machine.jpg";



import jumia from "../components/images/home/Jumia.gif";
import Women from "../components/images/home/Women_FashionEN.png";
import Men from "../components/images/home/Men_FashionEN.png";
import Phones from "../components/images/home/PhonesEN.png";
import Beauty from "../components/images/home/BeautyEN.png";
import Appliances from "../components/images/home/AppliancesEN.png";
import kids from "../components/images/home/kids_fashionEN.png";
import Sport from "../components/images/home/SportEN.png";
import Baby from "../components/images/home/BabyEN.png";
import Essentials from "../components/images/home/Home_EssentialsEN.png";
import Electronics from "../components/images/home/ElectronicsEN.png";
import Computing from "../components/images/home/ComputingEN.png";



import beko from "../components/images/home/beko.png";
import banner2 from "../components/images/home/banner2.png";

import Lcwaikiki from "../components/images/home/LC WAIKIKI.png";
import womenDresses from "../components/images/home/women Dresses.png";

import shein from "../components/images/home/SHEIN.png";
import haircare from "../components/images/home/Haie care.png";
import actie from "../components/images/home/Activ.png";

import offer1 from "../components/images/home/SliderOffer1.png";
import offer2 from "../components/images/home/SliderOffer2.png";
import offer3 from "../components/images/home/SliderOffer3.png";
import offer4 from "../components/images/home/SliderOffer4.png";
import offer5 from "../components/images/home/SliderOffer5.png";


import lc from "../components/images/home/LC.png";
import aeo from "../components/images/home/AEO.png";
import elaraby from "../components/images/home/Elaraby.png";
import defacto from "../components/images/home/Defacto.png";
import adidas from "../components/images/home/Adidas.png";
import brko2 from "../components/images/home/Beko2.png";
import eva from "../components/images/home/Eva.png";
import samsung from "../components/images/home/Samsung.png";
import xiaomi from "../components/images/home/Xiaomi.png";
import zanussi from "../components/images/home/Zanussi.png";
import loreal from "../components/images/home/LOreal.png";


import Summer1 from "../components/images/home/Summer.png"
import Summer2 from "../components/images/home/Summer2.png"
import Summer3 from "../components/images/home/Summer3.png"

import Johnson from "../components/images/home/Johnson.png";
import AVUVA from "../components/images/home/AVUVA.png";
import FOGG from "../components/images/home/FOGG.png";
import CYBELE from "../components/images/home/CYBELE.png";
import SKINCARE from "../components/images/home/SKIN CARE.png";
import Unilever from "../components/images/home/Unilever.png";


import Fresh from "../components/images/home/Fresh.png";
import Btech from "../components/images/home/B.tech.png";
import samsung2 from "../components/images/home/Samsung2.png";

import Lcwaikiki2 from "../components/images/home/LC Waikiki Women's .jpg";
import Adidas2 from "../components/images/home/Adidas2.jpg";
import WaikikiMens from "../components/images/home/LC Waikiki Men's .jpg";
import ActivFloral from "../components/images/home/Activ Floral Self.jpg";
import SHEIN2 from "../components/images/home/SHEIN2.jpg";
import WomensTshirt from "../components/images/home/Women's T-shirt.jpg";
import FitMens from "../components/images/home/LC Waikiki Fit Men's.jpg";
import BagForWomens from "../components/images/home/Bag For Womens.jpg";
import LCWaikiki3 from "../components/images/home/LC Waikiki Bottoms Women's.jpg";
import ADIDAS3 from "../components/images/home/ADIDAS Shoes White.jpg";
import LinenShirt from "../components/images/home/Women Long.jpg";
import MeseryBundle from "../components/images/home/Mesery Bundle.jpg";
import AmericanEagle from "../components/images/home/American Eagle.jpg";
import WomensTshirt2 from "../components/images/home/Women's T-shirt2.jpg";
import BoysShirt from "../components/images/home/Boy's Shirt.jpg";


import HairBrush from "../components/images/home/Hair Brush.jpg";
import FastClear from "../components/images/home/Fast Clear.jpg";
import Care from "../components/images/home/Care .jpg";
import NIVEA from "../components/images/home/NIVEA.jpg";
import Private from "../components/images/home/Private .jpg";
import Mascara from "../components/images/home/Mascara .jpg";
import StarvilleWhitening from "../components/images/home/Starville Whitening.jpg";
import Axe from "../components/images/home/Axe.jpg";
import Bobai from "../components/images/home/Bobai.jpg";
import ShaanBody from "../components/images/home/Shaan Body.jpg";
import Eva2 from "../components/images/home/Eva2.jpg";
import Eva3 from "../components/images/home/Eva3.jpg";
import ShowerGel from "../components/images/home/Shower Gel.jpg";

import Samsung3 from "../components/images/home/Samsung3.png";
import Xiaomi2 from "../components/images/home/Xiaomi2.png";
import Nokia from "../components/images/home/Nokia .png";

import kidsfashion from "../components/images/home/kids_fashion.jpg";
import Essentials2 from "../components/images/home/Travel Essentials.jpg";

import pay from "../components/images/home/pay.png";
import buyNow from "../components/images/home/buynow.png";
import noCach from "../components/images/home/nocach.png";

import realme from "../components/images/home/realme .jpg";
import Samsung4 from "../components/images/home/Samsung4.jpg";
import Nokia2 from "../components/images/home/Nokia2.jpg";
import Redmi from "../components/images/home/Redmi .jpg";
import Anker from "../components/images/home/Anker .jpg";
import Headset from "../components/images/home/Headset.jpg";
import Nokia3 from "../components/images/home/Nokia3.jpg";
import USB from "../components/images/home/USB.jpg";
import Scren from "../components/images/home/Screen .jpg";
import PowerBank from "../components/images/home/Power Bank.jpg";
import USBSilicone from "../components/images/home/USB Silicone.jpg";
import Headphone from "../components/images/home/Headphone .jpg";



export default function Home() {
  const Card = [
    {
      "id": 1,
      "image": card1,
    },
    {
      "id": 2,
      "image": card2,
    },
    {
      "id": 3,
      "image": card3,
    },
    {
      "id": 4,
      "image": card4,
    },
    {
      "id": 5,
      "image": card5,
    },
    {
      "id": 6,
      "image": card6,
    },
    {
      "id": 7,
      "image": card7,
    },
    {
      "id": 8,
      "image": card8,
    },
    {
      "id": 9,
      "image": card9,
    },

  ]

  const Brand = [
    {
      "id": 1,
      "image": lc,
    },
    {
      "id": 2,
      "image": aeo,
    },
    {
      "id": 3,
      "image": elaraby,
    },
    {
      "id": 4,
      "image": defacto,
    },
    {
      "id": 5,
      "image": adidas,
    },
    {
      "id": 6,
      "image": brko2,
    },
    {
      "id": 7,
      "image": eva,
    },
    {
      "id": 8,
      "image": samsung,
    },
    {
      "id": 9,
      "image": xiaomi,
    },
    {
      "id": 10,
      "image": zanussi,
    },
    {
      "id": 11,
      "image": loreal,
    },
  ]

  const BgCard = [
    {
      "id": 1,
      "link": "/air",
      "image": air,
    },
    {
      "id": 2,
      "link": "/fans",
      "image": fans,
    },
    {
      "id": 3,
      "link": "/water",
      "image": water,
    },
    {
      "id": 4,
      "link": "/freezers",
      "image": freezers,
    },
    {
      "id": 5,
      "link": "/grills",
      "image": grills,
    },
    {
      "id": 6,
      "link": "/refrig",
      "image": refrig,
    },
  ]

  const Sale = [
    {
      "id": 1,
      "image": stove,
      'alt': "stove",
      "sale": "-31%",
      "title": "Beko GGR 15325 FX NS Gas Cooker  - 90 cm - 5 Burners Full Safety cooling fan + cooking fan + Digital + cast pan support",
      "price": "EGP 21,699.00",
      "befor": "EGP 31,399.00",
    },
    {
      "id": 2,
      "image": AirFryer,
      'alt': "Air Fryer",
      "sale": "-27%",
      "title": "Beko FRL 2244 B-Air Fryer – 4.7L Pot capacity & 3.9L basket capacity – 1500 Watt –Black.",
      "price": "EGP 4,949.00",
      "befor": "EGP 6,799.00",
    },
    {
      "id": 3,
      "image": Dishwasher,
      'alt': "Dishwasher",
      "sale": "-5%",
      "title": "Beko DVS05020S - Dishwasher 45 cm 5 program 10 person LED Display - Half load - time delay - Silver",
      "price": "EGP 19,239.00",
      "befor": "EGP 20,239.00",
    },
    {
      "id": 4,
      "image": WashingMachine,
      'alt': "Washing Machine",
      "sale": "-30%",
      "title": "Beko WTV 7512 XBCI: Freestanding Washing Machine (7 kg, 1000 rpm)",
      "price": "EGP 20,299.00",
      "befor": "EGP 28,999.00",
    },
    {
      "id": 5,
      "image": FrostRefrigerator,
      'alt': "Frost Refrigerator",
      "sale": "-26%",
      "title": "Beko RDNE340K02XB No-Frost Refrigerator - 314 Liters - Brushed Silver",
      "price": "EGP 26,779.00",
      "befor": "EGP 36,199.00",
    },
    {
      "id": 6,
      "image": HandMixer,
      'alt': "Hand Mixer",
      "sale": "-27%",
      "title": "Beko HMM 81504 BX Hand Mixer - 500 Watt – Black & Stainless",
      "price": "EGP 2,833.95",
      "befor": "EGP 3,899.00",
    },
    {
      "id": 7,
      "image": CeramicCoated,
      'alt': "Ceramic Coated",
      "sale": "-28%",
      "title": "Beko SIM 3122 T Ceramic Coated Soleplate  Steam Iron - 2200 Watt – Turquoise",
      "price": "EGP 2,099.00",
      "befor": "EGP 2,899.00",
    },
    {
      "id": 8,
      "image": CastIron,
      'alt': "Cast Iron",
      "sale": "-27%",
      "title": "Beko HIMW 95226 SXEL Built In Stainless-Cast Iron Gas Hob - 90 Cm",
      "price": "EGP 22,989.00",
      "befor": "EGP 31,299.00",
    },
    {
      "id": 9,
      "image": FrostRefrigerator2,
      'alt': "Frost Refrigerator",
      "sale": "-9%",
      "title": "Beko RDNE448M20B No-Frost Refrigerator - 408 Liters - Inverter Motor - Black",
      "price": "EGP 31,649.00",
      "befor": "EGP 34,649.00",
    },
    {
      "id": 10,
      "image": FrontLoading,
      'alt': " Front Loading",
      "sale": "-26%",
      "title": "Beko WTX 91232 XMCI2 Front Loading Inverter Washing Machine - 1200 RPM - 9 Kg",
      "price": "EGP 27,519.00",
      "befor": "EGP 37,199.00",
    },
    {
      "id": 11,
      "image": Dishwasher2,
      'alt': " Dishwasher",
      "sale": "-26%",
      "title": "Beko BDFN36531XC - Dishwasher 60 cm 6 program 15 person  - LED Display - (CornerIntense)-Hygiene -SteamGloss-Fast - Half load- Inv - Inox",
      "price": "EGP 39,379.00",
      "befor": "EGP 53,199.00",
    },
    {
      "id": 12,
      "image": FrostRefrigerator3,
      'alt': " Frost Refrigerator",
      "sale": "-26%",
      "title": "Beko RDNE340K22B No-Frost Refrigerator - 314 Liters - Black",
      "price": "EGP 26,779.00",
      "befor": "EGP 36,199.00",
    },
    {
      "id": 13,
      "image": WashingMachine2,
      'alt': " Washing Machine",
      "sale": "-26%",
      "title": "Beko Wtv 7512 Xmci2 Washing Machine 7 Kg 1000 Rpm Digital Inverter -Gray",
      "price": "EGP 21,219.00",
      "befor": "EGP 28,699.00",
    },
  ]
  const Slide = [
    {
      "id": 1,
      "image": jumia,
    },
    {
      "id": 2,
      "image": Women,
    },
    {
      "id": 3,
      "image": Men,
    },
    {
      "id": 4,
      "image": Phones,
    },
    {
      "id": 5,
      "image": Phones,
    },
    {
      "id": 6,
      "image": Beauty,
    },
    {
      "id": 7,
      "image": Appliances,
    },
    {
      "id": 8,
      "image": kids,
    },
    {
      "id": 9,
      "image": Sport,
    },
    {
      "id": 10,
      "image": Baby,
    },
    {
      "id": 11,
      "image": Essentials,
    },
    {
      "id": 12,
      "image": Electronics,
    },
    {
      "id": 13,
      "image": Computing,
    },
  ]

  const Sale2 = [
    {
      "id": 1,
      "image": AirFryer,
      'alt': "Air Fryer",
      "sale": "-27%",
      "title": "Beko FRL 2244 B-Air Fryer – 4.7L Pot capacity & 3.9L basket capacity – 1500 Watt –Black.",
      "price": "EGP 4,949.00",
      "befor": "EGP 6,799.00",
    },
    {
      "id": 2,
      "image": Dishwasher,
      'alt': "Dishwasher",
      "sale": "-5%",
      "title": "Beko DVS05020S - Dishwasher 45 cm 5 program 10 person LED Display - Half load - time delay - Silver",
      "price": "EGP 19,239.00",
      "befor": "EGP 20,239.00",
    },
    {
      "id": 3,
      "image": WashingMachine,
      'alt': "Washing Machine",
      "sale": "-30%",
      "title": "Beko WTV 7512 XBCI: Freestanding Washing Machine (7 kg, 1000 rpm)",
      "price": "EGP 20,299.00",
      "befor": "EGP 28,999.00",
    },
    {
      "id": 4,
      "image": FrostRefrigerator,
      'alt': "Frost Refrigerator",
      "sale": "-26%",
      "title": "Beko RDNE340K02XB No-Frost Refrigerator - 314 Liters - Brushed Silver",
      "price": "EGP 26,779.00",
      "befor": "EGP 36,199.00",
    },
    {
      "id": 5,
      "image": HandMixer,
      'alt': "Hand Mixer",
      "sale": "-27%",
      "title": "Beko HMM 81504 BX Hand Mixer - 500 Watt – Black & Stainless",
      "price": "EGP 2,833.95",
      "befor": "EGP 3,899.00",
    },
    {
      "id": 6,
      "image": CeramicCoated,
      'alt': "Ceramic Coated",
      "sale": "-28%",
      "title": "Beko SIM 3122 T Ceramic Coated Soleplate  Steam Iron - 2200 Watt – Turquoise",
      "price": "EGP 2,099.00",
      "befor": "EGP 2,899.00",
    },
  ]

  const Brand2 = [
    {
      "id": 1,
      "image": Johnson,
    },
    {
      "id": 2,
      "image": AVUVA,
    },
    {
      "id": 3,
      "image": FOGG,
    },
    {
      "id": 4,
      "image": CYBELE,
    },
    {
      "id": 5,
      "image": SKINCARE,
    },
    {
      "id": 6,
      "image": Unilever,
    },
  ]
  const Sale3 = [
    {
      "id": 1,
      "image": Lcwaikiki2,
      'alt': "LC Waikiki Women's",
      "sale": "-23%",
      "title": "LC Waikiki Crew Neck Embroidered Short Sleeve Women's Tunic",
      "price": "EGP 229.00",
      "befor": "EGP 299.00",
    },
    {
      "id": 2,
      "image": Adidas2,
      'alt': "LC Waikiki Women's",
      "title": "ADIDAS LIU80 Grand Court Base 2.0 Tennis Shoes - Ftwr White",
      "price": "EGP 4,999.00",
    },
    {
      "id": 3,
      "image": WaikikiMens,
      'alt': "LC Waikiki Men's",
      "sale": "-38%",
      "title": "LC Waikiki Regular Fit Long Sleeve Striped Men's Shirt",
      "price": "EGP 619.00",
      "befor": "EGP 999.00",
    },
    {
      "id": 4,
      "image": ActivFloral,
      'alt': "Activ Floral",
      "sale": "-20%",
      "title": "Activ Floral Self Patterned Rose & Blue Zipper Closure Backpack",
      "price": "EGP 399.00",
      "befor": "EGP 499.00",
    },
    {
      "id": 5,
      "image": SHEIN2,
      'alt': "SHEIN",
      "sale": "-53%",
      "title": "SHEIN 1pc Rhinestone Decor Quartz Watch & 4pcs Bracelet-5505",
      "price": "EGP 279.99",
      "befor": "EGP 599.00",
    },
    {
      "id": 6,
      "image": WomensTshirt,
      'alt': "Women's T-shirt",
      "sale": "-40%",
      "title": "Women's T-shirt Made Of Ribbed Cotton - Black",
      "price": "EGP 149.99",
      "befor": "EGP 249.99",
    },
    {
      "id": 7,
      "image": FitMens,
      'alt': "LC Waikiki Standard Fit Men's Shorts",
      "sale": "-59%",
      "title": "LC Waikiki Standard Fit Men's Shorts.",
      "price": "EGP 289.00",
      "befor": "EGP 699.00",
    },
    {
      "id": 8,
      "image": BagForWomens,
      'alt': " Bag For Womens",
      "sale": "-41%",
      "title": "B.S COLLECTION Soft Canvas B.S Bag Tote Bag And Shoulder Bag For Womens - Black",
      "price": "EGP 295.00",
      "befor": "EGP 500.00",
    },
    {
      "id": 9,
      "image": LCWaikiki3,
      'alt': " LC Waikiki For Womens",
      "sale": "-27%",
      "title": "LC Waikiki Elastic Waist Regular Bell-Bottoms Women's Trousers",
      "price": "EGP 509.00",
      "befor": "EGP 699.00",
    },
    {
      "id": 10,
      "image": ADIDAS3,
      'alt': " ADIDAS",
      "sale": "-40%",
      "title": "ADIDAS LKK10 Tensaur Sport 2.0 Cf K Running Shoes - Ftwr White",
      "price": "EGP 1,409.00",
      "befor": "EGP 2,349.00",
    },
    {
      "id": 11,
      "image": LinenShirt,
      'alt': " Women Long Sleeves Linen Shirt - White",
      "sale": "-50%",
      "title": "Women Long Sleeves Linen Shirt - White",
      "price": "EGP 349.99",
      "befor": "EGP 699.99",
    },
    {
      "id": 12,
      "image": MeseryBundle,
      'alt': " Mesery Bundle",
      "sale": "-46%",
      "title": "Mesery Bundle Of Two Spaghetti Sleeves Plain Tank Tops",
      "price": "EGP 159.99",
      "befor": "EGP 299.00",
    },
    {
      "id": 13,
      "image": AmericanEagle,
      'alt': " American Eagle",
      "sale": "-40%",
      "title": "American Eagle AE Lounge Jogger",
      "price": "EGP 960.00",
      "befor": "EGP 1,600.00",
    },
    {
      "id": 14,
      "image": WomensTshirt2,
      'alt': " Women's T-shirt",
      "sale": "-36%",
      "title": "Women's T-shirt Made Of Ribbed Cotton - White & Black",
      "price": "EGP 159.99",
      "befor": "EGP 159.99",
    },
    {
      "id": 15,
      "image": BoysShirt,
      'alt': " Boy's Shirt",
      "sale": "-52%",
      "title": "LC Waikiki Grandad Collar Basic Short Sleeve Boy's Shirt",
      "price": "EGP 289.00",
      "befor": "EGP 599.00",
    },
  ]

  const Featured = [
    {
      "id": 1,
      "image": HairBrush,
      'alt': "Hair Brush",
      "sale": "-85%",
      "title": "Taha Offer Magic Detangling Hair Brush 1 Piece",
      "price": "EGP 19.18",
      "befor": "EGP 125.00",
    },
    {
      "id": 2,
      "image": FastClear,
      'alt': "Fast Clear",
      "sale": "-19%",
      "title": "Garnier Skin active Fast Clear Booster Face Serum For Acne Prone Skin With Salicylic Acid & Vitamin C - 30ml",
      "price": "EGP 283.00",
      "befor": "EGP 350.00",
    },
    {
      "id": 3,
      "image": Care,
      'alt': "Care",
      "sale": "-24%",
      "title": "Care & More Soft Cream With Glycerin - Deep Moisturizing - 75 ML",
      "price": "EGP 34.00",
      "befor": "EGP 45.00",
    },
    {
      "id": 4,
      "image": NIVEA,
      'alt': "NIVEA",
      "sale": "-30%",
      "title": "NIVEA Antiperspirant Spray for Women, 48h Protection, Pearl & Beauty, 150ml",
      "price": "EGP 105.00",
      "befor": "EGP 150.00",
    },
    {
      "id": 5,
      "image": Private,
      'alt': "Private ",
      "sale": "-28%",
      "title": "Private Cotton Anti-Allergenic Feminine Super Folded Pads With Wings - 18 Pads",
      "price": "EGP 49.00",
      "befor": "EGP 68.00",
    },
    {
      "id": 6,
      "image": Mascara,
      'alt': "Mascara ",
      "sale": "-58%",
      "title": "Rimmel Wonder’Luxe Volume Mascara - 001 Black",
      "price": "EGP 210.00",
      "befor": "EGP 499.00",
    },
    {
      "id": 7,
      "image": StarvilleWhitening,
      'alt': "Starville Whitening ",
      "sale": "-21%",
      "title": "Starville Whitening Cleanser Foam For Face & Body  - 200 Ml",
      "price": "EGP 135.00",
      "befor": "EGP 170.00",
    },
    {
      "id": 8,
      "image": Axe,
      'alt': " Axe ",
      "sale": "-31%",
      "title": "Axe Body Spray for Men Skateboard & Fresh Roses 150ML",
      "price": "EGP 111.00",
      "befor": "EGP 160.00",
    },
    {
      "id": 9,
      "image": Bobai,
      'alt': " Bobai ",
      "sale": "-54%",
      "title": "Bobai Sunscreen Gel 50+SPF Anti Shine For Oily Combination Skin 60 Gm",
      "price": "EGP 139.00",
      "befor": "EGP 299.00",
    },
    {
      "id": 10,
      "image": ShaanBody,
      'alt': " Shaan Body ",
      "sale": "-20%",
      "title": "Shaan Body Milk 300ML",
      "price": "EGP 193.00",
      "befor": "EGP 240.00",
    },
    {
      "id": 11,
      "image": Eva2,
      'alt': " Eva Care Skin Care ",
      "sale": "-15%",
      "title": "Eva Care Skin Care Senses Body Splash - In the Clouds 240 ml",
      "price": "EGP 174.00",
      "befor": "EGP 205.00",
    },
    {
      "id": 12,
      "image": Eva3,
      'alt': " Eva B-White Under-eye",
      "sale": "-14%",
      "title": "Eva B-White Under-eye lightning cream 20 gm",
      "price": "EGP 36.00",
      "befor": "EGP 42.00",
    },
    {
      "id": 13,
      "image": ShowerGel,
      'alt': " Shower Gel",
      "sale": "-34%",
      "title": "Karimed Brilliant Touch Shower Gel 1000ML 4Pcs. 4 Scents",
      "price": "EGP 199.00",
      "befor": "EGP 300.00",
    },
  ]

  const Phone = [
    {
      "id": 1,
      "image": realme,
      'alt': "realme",
      "sale": "-19%",
      "title": "realme C67 - 6.72-inch 256GB/8GB Dual SIM Mobile Phone - Sunny Oasis (D)",
      "price": "EGP 8,119.99",
      "befor": "EGP 9,999.00",
    },
    {
      "id": 2,
      "image": Samsung4,
      'alt': "Samsung Galaxy",
      "sale": "-30%",
      "title": "Samsung Galaxy A15 - 6.5-inch 4GB/128GB Dual Sim 4G - Mobile Phone - Light Blue",
      "price": "EGP 6,299.00",
      "befor": "EGP 8,999.00",
    },
    {
      "id": 3,
      "image": Nokia2,
      'alt': "Nokia 106 Cell Phone",
      "sale": "-46%",
      "title": "Nokia 106 Cell Phone -Dual SIM - Black",
      "price": "EGP 455.00",
      "befor": "EGP 840.00",
    },
    {
      "id": 4,
      "image": Redmi,
      'alt': "Redmi",
      "sale": "-23%",
      "title": "XIAOMI Redmi A3 Dual SIM 4G 64GB/3GB - Forest Green",
      "price": "EGP 4,309.00",
      "befor": "EGP 5,599.00",
    },
    {
      "id": 5,
      "image": Anker,
      'alt': "Anker",
      "sale": "-23%",
      "title": "Anker P25i True Wireless Earbuds IPX5 Waterproof ,30H Playtime - A3949Z11 - Black 1",
      "price": "EGP 1,028.97",
      "befor": "1,337.66",
    },
    {
      "id": 6,
      "image": Headset,
      'alt': "Headset",
      "sale": "-77%",
      "title": "Wireless Headset  M19 With  Power Bank-Black",
      "price": "EGP 273.00",
      "befor": "EGP 1,200.00",
    },
    {
      "id": 7,
      "image":Nokia3 ,
      'alt': "Nokia",
      "sale": "-46%",
      "title": "Nokia 105 1.8-inch Dual SIM Mobile Phone - Black",
      "price": "EGP 430.00",
      "befor": "EGP 800.00",
    },
    {
      "id": 8,
      "image":USB ,
      'alt': "USB",
      "sale": "-53%",
      "title": "DC 5V To 12V USB Power Cable, USB Power Supply Cable With DC 5.5 X 2.1mm Plug For Router To Avoid Power Outage",
      "price": "EGP 95.00",
      "befor": "EGP 200.00",
    },
    {
      "id": 9,
      "image": Scren,
      'alt': "Screen",
      "sale": "-%",
      "title": "Gazelle - Screen Protector Premium Quality Tempered Glass For Samsung Galaxy A55 5G - 0 - BLACK",
      "price": "EGP 119.00",
      "befor": "",
    },
    {
      "id": 10,
      "image": PowerBank,
      'alt': "Power Bank",
      "sale": "-25%",
      "title": "JOYROOM JR-T012 10000mAh Power Bank - Black",
      "price": "EGP 555.00",
      "befor": "EGP 744.00",
    },
    {
      "id": 11,
      "image":USBSilicone ,
      'alt': "USB Silicone",
      "sale": "-45%",
      "title": "Fast Charging Cable 6A - Zinc Alloy 3.3ft USB To Type C USB Silicone",
      "price": "EGP 110.00",
      "befor": "EGP 199.00",
    },
    {
      "id": 12,
      "image":Headphone ,
      'alt': "Headphone",
      "sale": "-50%",
      "title": "P9  Bluetooth Wireless Headphone - Black",
      "price": "EGP 333.00",
      "befor": "EGP 666.00",
    },
  ]
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [setSwiperRef] = useState(null);
  return (
    <>
      <Container className='home-page'>
      <Helmet>
          <meta charSet="utf-8" />
          <title>jumia Egypt | Best online shopping Mall</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Row>
          <Col lg={2}>
            <MenuHome />
          </Col>
          {/* ------------------slider---------- */}
          <Col lg={7} className='slider'>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider4}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider5}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider6}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider7}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slider8}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          {/* ----------- End slider ------------- */}
          <Col>
            <div>
              <div className='card'>
                <a href='/' className='btn-sel'>
                  <p className='span-icon'>
                    <GiShop className='icon-sell' />
                  </p>
                  <span>
                    Sell on JUMIA
                  </span>
                  <br />
                  <p className='span-sel'>
                    And Grow Your Business
                  </p>
                </a>
                <a href='/' className='btn-sel'>
                  <p className='span-icon'>
                    <GiReceiveMoney className='icon-sell' />
                  </p>
                  <span>
                    Installments
                  </span>
                  <br />
                  <p className='span-sel'>
                    With Your Bank
                  </p>
                </a>
                <a href='/' className='btn-sel'>
                  <p className='span-icon'>
                    <GoGear className='icon-sell' />
                  </p>
                  <span>
                    Warranty
                  </span>
                  <br />
                  <p className='span-sel'>
                    On Your Purchases
                  </p>
                </a>
              </div>
              <div>
                <div>
                  <a href='/buy'>
                    <img src={buy} alt='buy-now' className='buy' />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card2'>
              <Slider {...settings}>
                {Card.map((item) =>
                  <div>
                    <div className='card-top' key={item.id}>
                      <img src={item.image} alt='card' className='image-card' />
                    </div>
                  </div>
                )}
              </Slider>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card4'>
              <div>
                <a href='/banner2'>
                  <img src={banner2} alt='beko' className='beko' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card3'>
              <div className='head'>
                <p className='p-head'>
                  Appliance Up Your Summer Home
                </p>
              </div>
              <div style={{ display: "flex" }}>
                {BgCard.map((i) =>
                  <div className='card-bg' key={i.id}>
                    <a href={i.link}>
                      <img src={i.image} alt='card' className='bg-card' />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card4'>
              <div>
                <a href='/beko'>
                  <img src={beko} alt='beko' className='beko' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card5'>
              <div className='head1'>
                <p className='p-head1'>
                  Create & Shop The Bundle That Suits You
                  <a href='/' className='a-head1'>
                    SEE ALL <IoChevronDown className='icon-see' />
                  </a>
                </p>
              </div>
              <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={6}
                centeredSlides={true}
                spaceBetween={5}
                pagination={{
                  type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {Sale.map((i) =>
                  <SwiperSlide>
                    <div className='section-1'>
                      <a href='/' className='a-sale'>
                        <div key={i.id}>
                          <img src={i.image} alt={i.alt} className='bg-card1' />
                          <p className='sale'>{i.sale}</p>
                        </div>
                        <div style={{ paddingLeft: '6%' }}>
                          <p className='title'>{i.title}</p>
                          <p className='price'>{i.price}</p>
                          <p className='price-befor-sale'>{i.befor}</p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card6'>
              <Slider {...settings}>
                {Slide.map((item) =>
                  <div>
                    <div className='card-top2' key={item.id}>
                      <img src={item.image} alt='card' className='image-card2' />
                    </div>
                  </div>
                )}
              </Slider>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card3'>
              <div className='head2'>
                <p className='p-head'>Shop All Your Needs</p>
              </div>
              <div className='offer'>
                <div>
                  <a href='/'>
                    <img src={Lcwaikiki} alt='' className='bg-offer' />
                  </a>
                </div>
                <div>
                  <a href='/'>
                    <img src={womenDresses} alt='' className='bg-offer' />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card7'>
              <div>
                <a href='/shein'>
                  <img src={shein} alt='' className='bg-offer2' />
                </a>
              </div>
              <div>
                <a href='/shein'>
                  <img src={haircare} alt='' className='bg-offer2' />
                </a>
              </div>
              <div>
                <a href='/shein'>
                  <img src={actie} alt='' className='bg-offer2' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card8'>
              <div className='head2'>
                <p class="p-head">Offers You Do Not Want To Miss</p>
              </div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="offer1"
                    src={offer1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="offer1"
                    src={offer2}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="offer1"
                    src={offer3}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="offer1"
                    src={offer4}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="offer1"
                    src={offer5}
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card2'>
              <Slider {...settings}>
                {Brand.map((item) =>
                  <div>
                    <a href='/'>
                      <div className='card-top' key={item.id}>
                        <img src={item.image} alt='card' className='image-card' />
                      </div>
                    </a>
                  </div>
                )}
              </Slider>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card5'>
              <div className='head1'>
                <p className='p-head1'>
                  Keep Shopping For
                  <a href='/' className='a-head2'>
                    SEE ALL <IoChevronDown className='icon-see' />
                  </a>
                </p>
              </div>
              {Sale2.map((i) =>
                <div className='section-1'>
                  <a href='/' className='a-sale'>
                    <div key={i.id}>
                      <img src={i.image} alt={i.alt} className='bg-card1' />
                      <p className='sale'>{i.sale}</p>
                    </div>
                    <div style={{ paddingLeft: '6%' }}>
                      <p className='title'>{i.title}</p>
                      <p className='price'>{i.price}</p>
                      <p className='price-befor-sale'>{i.befor}</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card3'>
              <div className='head2'>
                <p className='p-head'>Summer Style Starts Here</p>
              </div>
              <div className='offer2'>
                <div>
                  <a href='/'>
                    <img src={Summer1} alt='' className='bg-offer' />
                  </a>
                </div>
                <div>
                  <a href='/'>
                    <img src={Summer2} alt='' className='bg-offer' />
                  </a>
                </div>
                <div>
                  <a href='/'>
                    <img src={Summer3} alt='' className='bg-offer' />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card3'>
              <div className='head2'>
                <p className='p-head'>Summer Beauty Essentials</p>
              </div>
              <div className='offer2'>
                {Brand2.map((item) =>
                  <div key={item.id}>
                    <a href='/'>
                      <img src={item.image} alt='' className='bg-offer' />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card5'>
              <div className='head1'>
                <p className='p-head1'>
                  Shop More Products
                  <a href='/' className='a-head2'>
                    SEE ALL <IoChevronDown className='icon-see' />
                  </a>
                </p>
              </div>
              <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={6}
                centeredSlides={true}
                spaceBetween={5}
                pagination={{
                  type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {Sale3.map((i) =>
                  <SwiperSlide>
                    <div className='section-1'>
                      <a href='/' className='a-sale'>
                        <div key={i.id}>
                          <img src={i.image} alt={i.alt} className='bg-card1' />
                          <p className='sale'>{i.sale}</p>
                        </div>
                        <div style={{ paddingLeft: '6%' }}>
                          <p className='title'>{i.title}</p>
                          <p className='price'>{i.price}</p>
                          <p className='price-befor-sale'>{i.befor}</p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card3'>
              <div className='head2'>
                <p className='p-head'>Beat the Heat Appliances</p>
              </div>
              <div className='offer2'>
                <div>
                  <a href='/'>
                    <img src={Fresh} alt='' className='bg-offer' />
                  </a>
                </div>
                <div>
                  <a href='/'>
                    <img src={Btech} alt='' className='bg-offer' />
                  </a>
                </div>
                <div>
                  <a href='/'>
                    <img src={samsung2} alt='' className='bg-offer' />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card5'>
              <div className='head1'>
                <p className='p-head1'>
                  Featured This Week
                  <a href='/' className='a-head2'>
                    SEE ALL <IoChevronDown className='icon-see' />
                  </a>
                </p>
              </div>
              <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={6}
                centeredSlides={true}
                spaceBetween={5}
                pagination={{
                  type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {Featured.map((i) =>
                  <SwiperSlide>
                    <div className='section-1'>
                      <a href='/' className='a-sale'>
                        <div key={i.id}>
                          <img src={i.image} alt={i.alt} className='bg-card1' />
                          <p className='sale'>{i.sale}</p>
                        </div>
                        <div style={{ paddingLeft: '6%' }}>
                          <p className='title'>{i.title}</p>
                          <p className='price'>{i.price}</p>
                          <p className='price-befor-sale'>{i.befor}</p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card3'>
              <div className='head2'>
                <p className='p-head'>Beat the Heat Appliances</p>
              </div>
              <div className='offer2'>
                <div>
                  <a href='/'>
                    <img src={Samsung3} alt='' className='bg-offer' />
                  </a>
                </div>
                <div>
                  <a href='/'>
                    <img src={Xiaomi2} alt='' className='bg-offer' />
                  </a>
                </div>
                <div>
                  <a href='/'>
                    <img src={Nokia} alt='' className='bg-offer' />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card3'>
              <div className='head2'>
                <p className='p-head'>Discover More</p>
              </div>
              <div className='offer'>
                <div>
                  <a href='/'>
                    <img src={kidsfashion} alt='' className='bg-offer' />
                  </a>
                </div>
                <div>
                  <a href='/'>
                    <img src={Essentials2} alt='' className='bg-offer' />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card8'>
              <div className='head3'>
                <p class="p-head">More To Explore</p>
              </div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="offer1"
                    src={pay}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="offer1"
                    src={buyNow}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="offer1"
                    src={noCach}
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card5'>
              <div className='head1'>
                <p className='p-head1'>
                  Discover More Products
                  <a href='/' className='a-head3'>
                    SEE ALL <IoChevronDown className='icon-see' />
                  </a>
                </p>
              </div>
              <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={6}
                centeredSlides={true}
                spaceBetween={5}
                pagination={{
                  type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {Phone.map((i) =>
                  <SwiperSlide>
                    <div className='section-1'>
                      <a href='/' className='a-sale'>
                        <div key={i.id}>
                          <img src={i.image} alt={i.alt} className='bg-card1' />
                          <p className='sale'>{i.sale}</p>
                        </div>
                        <div style={{ paddingLeft: '6%' }}>
                          <p className='title'>{i.title}</p>
                          <p className='price'>{i.price}</p>
                          <p className='price-befor-sale'>{i.befor}</p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='card9'>
              <h2 className='h-titlle'>
                Jumia Egypt – Biggest Online Shopping Website
              </h2>
              <p className='p-title'>
                Online shopping sites are now part of our everyday lives, because everyone enjoys the possibility of being able to buy whatever they need, whether it’s<a href='/' className='text'>clothing</a>or <a href='/' className='text'>electronics</a>, without having to move an inch. It’s even better when you can buy everything you’re looking for, all from the same store. This is what Jumia Egypt offers and that’s what makes it one of the best online shopping websites in Egypt.
              </p>
              <h2 className='h-titlle'>
                Enjoy Endless Deals & Discounts
              </h2>
              <p className='p-title'>
                Jumia is an easy platform to use when you’re online shopping for any type of products you’re looking for. Even if you’re just browsing, we assure you that you will find something you like in our catalog.Our <span className='text2'>clothing store</span>provides you with over one million products and variations to choose from! You can shop for anything you need from women fashion to <a href='/' className='text'> baby clothes</a> and get the latest <a href='/' className='text'>fashion</a>fashion. Jumia Egypt is one of the biggest online shopping sites because we always try to expand our catalog to provide any possible products or gadgets our customer could be searching to buy online!
              </p>
              <h2 className='h-titlle'>
                Shop Now for All Products Online
              </h2>
              <h2 className='h-titlle'>
                Order Electronics & Appliances Here
              </h2>
              <p className='p-title'>
                Check off your <span className='text2'>grocery</span> list with our <a href='/' className='text'>online supermarket</a> which is filled with all the canned goods and fresh foods you could possibly think of. You can easily shop for all variations of <a href='/' className='text'>appliances</a> for your home from a large selection which include appliances such as a <a href='/' className='text'>fridge</a>, washing machine or <a href='/' className='text'>air conditioner</a>, for example.
              </p>
              <p className='p-title'>
                Our catalog for electronics offers you the highest quality products from trusted sellers and brands; you can show for a new <a href='/' className='text'>television</a> for your living room, your favorite <a href='/' className='text'>smartphone</a> or even a new <a href='/' className='text'>PlayStation 4or PS5</a>, for example. Get the latest releases of<span className='text2'>mobiles and tablets</span>  before anyone else in town, whether you want to buy a new phone from <a href='/' className='text'>Apple</a>, Infinix, Xiaomi, Realme or <a href='/' className='text'>Samsung</a>, for example. Another amazing category available is one dedicated to computers, <a href='/' className='text'>laptops</a> and all their accessories. Shop for <a href='/' className='text'>printers</a>, scanners, computer components and monitors to enhance your computer or laptop experience to the max! All these products are provided in <span className='text2'>Jumia Egypt</span> for you to discover and buy, and enjoy the fastest delivery anywhere in Egypt.
              </p>
              <h2 className='h-titlle'>
                Indulge in a Selection of Beauty Products
              </h2>
              <p className='p-title'>
                Our onlinestore also offers you the best beauty products from world-wide known brands. Anything related to <a href='/' className='text'>health and beauty</a>, cosmetics and <a href='/' className='text'>fragrances</a> can be found at our online store. Discover our <a href='/' className='text'>baby shop</a> for all baby essentials from food and diapers to toys and education games. Start online shopping for furniture and home décor for each and every room in your house.
              </p>
              <p className='p-title'>
                Order our <a href='/' className='text'>Jumia Express</a> products, which are stocked in Jumia’s warehouse, which means you will enjoy express shipping and have your products delivered to you in no time! There are endless categories and subcategories of products available to help you reach the products you’re looking for at <span className='text2'>Jumia Egypt.</span> Also, many of our products are shipped from overseas under the <a href='/' className='text'>Jumia Global</a> catalog, which will all be shipped to your doorstep, wherever you are.
              </p>
              <h2 className='h-titlle'>
                Discover the Online Shopping World
              </h2>
              <p className='p-title'>
                Jumia Egypt offers <span className='text2'>deals and discounts</span> and never ceases to form campaigns all year around, all for the satisfaction and joy of our customers. Our newsletter subscribers and Facebook fans get to know all of our offers before anyone else such as Mobile & Tech Week, Ramadan, Jumia Anniversary, <a href='/' className='text'>Mother's Day</a> Also, You can buy tickets for concerts and important events online @ Jumia. We have a dedicated team who will answer your questions instantly on social media and customer service is available through the week to help solve any issues and answer all inquiries, simply reach us as <span className='text2'>19586</span>. Moreover, you can join Jumia’s partnership team to open your shop on Jumia Egypt and sell your products to our customers. Jumia Egypt promises to provide you with the best service and <span className='text2'>100% genuine</span> products. We deliver your order at your doorstep as fast as possible, offer you safe and secure payments and also provide free returns, which you can read more about in our refund and return policy. Stay tuned and get the best prices in Egypt on all your favorite products all over the year!
              </p>
              <h2 className='h-titlle'>
                What are the <a href='/' className='text3'>payment methods</a> available on Jumia?
              </h2>
              <p className='p-title'>
                Cash on delivery, Mastercard, Visa & Fawry.
              </p>
            </div>
          </Col>
        </Row>
      </Container >
    </>
  )
}