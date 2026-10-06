import { useState, useEffect, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import styles from "../styles/styles";
import Account from "./Account";

// FRAGRANCES
import arimani from "../assets/fragrances/arimani.jpg";
import baccarat from "../assets/fragrances/baccarat.jpg";
import badee from "../assets/fragrances/badee-al-oud.jpg";
import blazer from "../assets/fragrances/blazer.jpg";
import blazer2 from "../assets/fragrances/blazer2.jpg";
import blazer3 from "../assets/fragrances/blazer3.jpg";
import boss from "../assets/fragrances/boss.jpg";
import burberry from "../assets/fragrances/burberry.jpg";
import cap2 from "../assets/fragrances/cap2.jpg";
import cap3 from "../assets/fragrances/cap3.jpg";
import cap4 from "../assets/fragrances/cap4.jpg";
import chanel from "../assets/fragrances/chanel.jpg";
import coc from "../assets/fragrances/coc.jpg";
import creed from "../assets/fragrances/creed.jpg";
import creedsilver from "../assets/fragrances/creedsilver.jpg";
import diorhome from "../assets/fragrances/dior-homme.jpg";
import dress from "../assets/fragrances/dress.jpg";
import dress2 from "../assets/fragrances/dress2.jpg";
import dress3 from "../assets/fragrances/dress3.jpg";
import dress4 from "../assets/fragrances/dress4.jpg";
import dress5 from "../assets/fragrances/dress5.jpg";
import dress6 from "../assets/fragrances/dress6.jpg";
import dress7 from "../assets/fragrances/dress7.jpg";
import flowerbomb from "../assets/fragrances/flowerbomb.jpg";
import goodgirl from "../assets/fragrances/goodgirl.jpg";
import gucci from "../assets/fragrances/gucci.jpg";
import gypsy from "../assets/fragrances/gypsy.jpg";
import hoodie from "../assets/fragrances/hoodie.jpg";
import jeans from "../assets/fragrances/jeans.jpg";
import khamrah from "../assets/fragrances/khamrah.jpg";
import lavie from "../assets/fragrances/lavie.jpg";
import mancera from "../assets/fragrances/mancera.jpg";
import mfk from "../assets/fragrances/mfk.jpg";
import myway from "../assets/fragrances/myway.jpg";
import sauvage from "../assets/fragrances/sauvage.jpg";
import sneakers from "../assets/fragrances/sneakers.jpg";
import sneakers2 from "../assets/fragrances/sneakers2.jpg";
import sneakers3 from "../assets/fragrances/sneakers3.jpg";
import sneakers4 from "../assets/fragrances/sneakers4.jpg";
import sneakers5 from "../assets/fragrances/sneakers5.jpg";
import sneakers6 from "../assets/fragrances/sneakers6.jpg";
import tshirt from "../assets/fragrances/tshirt.jpg";
import tshirt2 from "../assets/fragrances/tshirt2.jpg";
import tomfordtobacco from "../assets/fragrances/tomfordtobacco.jpg";
import versace from "../assets/fragrances/versace.jpg";
import ysl from "../assets/fragrances/ysl.jpg";
import tomford from "../assets/fragrances/tomford.jpg";
// KIDS FASHION
import kidJeans1 from "../assets/fragrances/kid jeans1.jpg";
import kidJeans2 from "../assets/fragrances/kid jeans2.jpg";
import kidJeans3 from "../assets/fragrances/kid jeans3.jpg";
import kidJeans4 from "../assets/fragrances/kid jeans4.jpg";

import kidSneakers1 from "../assets/fragrances/kid sneakers.jpg";
import kidSneakers2 from "../assets/fragrances/kid sneakers2.jpg";
import kidSneakers3 from "../assets/fragrances/kid sneakers3.jpg";
import kidSneakers4 from "../assets/fragrances/kid sneakers4.jpg";
import kidSneakers5 from "../assets/fragrances/kid sneakers5.jpg";
import kidSneakers6 from "../assets/fragrances/kid sneakers6.jpg";
import kidSneakers7 from "../assets/fragrances/kid sneakers7.jpg";

import kidTshirt1 from "../assets/fragrances/kid tshirt.jpg";
import kidTshirt2 from "../assets/fragrances/kid tshirt2.jpg";
import kidTshirt3 from "../assets/fragrances/kid tshirt3.jpg";
import kidTshirt4 from "../assets/fragrances/kid tshirt4.jpg";
import kidTshirt5 from "../assets/fragrances/kid tshirt5.jpg";

import kidsCap1 from "../assets/fragrances/kids cap1.jpg";
import kidsCap2 from "../assets/fragrances/kids cap2.jpg";
import kidsCap3 from "../assets/fragrances/kids cap3.jpg";

import kidsHoodie1 from "../assets/fragrances/kids-hoodie.jpg";
import kidsHoodie2 from "../assets/fragrances/kids-hoodie2.jpg";
import kidsHoodie3 from "../assets/fragrances/kids-hoodie3.jpg";
import kidsHoodie4 from "../assets/fragrances/kids-hoodie4.jpg";

import unisexHoodie1 from "../assets/fragrances/unisex hoddie.jpg";
import unisexHoodie2 from "../assets/fragrances/unisex hoddie2.jpg";
import unisexHoodie3 from "../assets/fragrances/unisex hoddie3.jpg";
import unisexHoodie4 from "../assets/fragrances/unisex hoddie4.jpg";

import unisexTshirt1 from "../assets/fragrances/unisex-tshirt.jpg";
import unisexTshirt2 from "../assets/fragrances/unisex-tshirt1.jpg";
import unisexTshirt3 from "../assets/fragrances/unisex-tshirt2.jpg";
import unisexTshirt4 from "../assets/fragrances/unisex-tshirt3.jpg";
import unisexTshirt5 from "../assets/fragrances/unisex-tshirt4.jpg";

// MEN BEAUTY
import faceWash from "../assets/fragrances/face-wash.jpg";
import faceScrub from "../assets/fragrances/face-scrub.jpg";
import hairGel from "../assets/fragrances/hair-gel.jpg";
import hairWax from "../assets/fragrances/hair-wax.jpg";
import groomingKit from "../assets/fragrances/grooming-kit.jpg";

import darkConcealer from "../assets/fragrances/dark-concealer.jpg";
import darkLipstick from "../assets/fragrances/dark lipstick.jpg";
import eyeline2 from "../assets/fragrances/eyeline2.jpg";
import eyeliner from "../assets/fragrances/eyeliner.jpg";
import flawless from "../assets/fragrances/flawless.jpg";
import foundationMakeup from "../assets/fragrances/foundation makeup.jpg";
import lakime from "../assets/fragrances/lakime.jpg";
import lipstick from "../assets/fragrances/lipstick.jpg";
import lipstick2 from "../assets/fragrances/lipstick2.jpg";
import makeupKit from "../assets/fragrances/makeup kit.jpg";
import makeupKit2 from "../assets/fragrances/makeup kit2.jpg";
import mascara from "../assets/fragrances/mascara.jpg";
import maybellineFit from "../assets/fragrances/maybelline fit.jpg";
import naturalMakeup from "../assets/fragrances/natural makeup.jpg";
import powderBlush from "../assets/fragrances/powder blush.jpg";

import niveaMen from "../assets/fragrances/nivea-men.jpg";
import doveMen from "../assets/fragrances/dove-men.jpg";
import axeDeo from "../assets/fragrances/axe-deo.jpg";
import gilletteGel from "../assets/fragrances/gillette-gel.jpg";
import oldSpice from "../assets/fragrances/old-spice.jpg";

import bodyLotion from "../assets/fragrances/body-lotion.jpg";
import soapBar from "../assets/fragrances/soap.jpg";
import faceCream from "../assets/fragrances/face-cream.jpg";
import showerGel from "../assets/fragrances/shower-gel.jpg";
import handCream from "../assets/fragrances/hand-cream.jpg";
import niveaMenMoisturizer from "../assets/fragrances/nivea-men moisturizer.jpg";
import manShowerGel from "../assets/fragrances/man-showergel.jpg";
// JEWELLERY
import goldRing1 from "../assets/fragrances/gold ring.jpg";
import goldRing2 from "../assets/fragrances/gold ring2.jpg";
import goldRing3 from "../assets/fragrances/gold ring3.jpg";

import necklace1 from "../assets/fragrances/necklace1.jpg";
import necklace2 from "../assets/fragrances/necklace2.jpg";
import necklace3 from "../assets/fragrances/necklace3.jpg";

import circleNecklace from "../assets/fragrances/circle necklace.jpg";
import diamondNecklace from "../assets/fragrances/diamond necklace.jpg";

import bracelet1 from "../assets/fragrances/bracelets1.jpg";

import charmBracelet from "../assets/fragrances/charm.jpg";
import soulKnot from "../assets/fragrances/soul knot.jpg";

import earrings1 from "../assets/fragrances/earrings.jpg";
import earrings2 from "../assets/fragrances/earrings2.jpg";
import earrings3 from "../assets/fragrances/earrings3.jpg";
import earrings5 from "../assets/fragrances/earrings5.jpg";
import twinkDiamond from "../assets/fragrances/twink diamond.jpg";
import engagementRing1 from "../assets/fragrances/engagement ring.jpg";
import engagementRing2 from "../assets/fragrances/engagement ring2.jpg";

// MEN SKINCARE
import menFaceWash from "../assets/fragrances/men-face-wash.jpg";
import Moisturizer from "../assets/fragrances/men1-moisturizer.jpg";
import menFaceCream from "../assets/fragrances/men-face-cream.jpg";
import menCleanser from "../assets/fragrances/men-cleanser.jpg";
import beardOil from "../assets/fragrances/beard-oil.jpg";

// SUNSCREENS
import sunscreenDry from "../assets/fragrances/sunscreen-dry-skin.jpg";
import sunscreenCombination from "../assets/fragrances/sunscreen-combination-skin.jpg";
import sunscreenSensitive from "../assets/fragrances/sunscreen-sensitive-skin.jpg";

import menMoisturizer from "../assets/fragrances/men1-moisturizer.jpg";
import menSerum from "../assets/fragrances/serum.jpg";
import menEyeCream from "../assets/fragrances/eye.cream.jpg";
import menExfoliator from "../assets/fragrances/exfoliator.jpg";
import menNightCream from "../assets/fragrances/men-night-cream.jpg";

import womenCleanser from "../assets/fragrances/women-cleanser.jpg";
import vitaminCSerum from "../assets/fragrances/vitamin-c-serum.jpg";
import womenMoisturizer from "../assets/fragrances/women-moisturizer.jpg";
import womenNightCream from "../assets/fragrances/women-night-cream.jpg";
import womenEyeCream from "../assets/fragrances/women-eye-cream.jpg";
import aloeVeraGel from "../assets/fragrances/aloe-vera-gel.jpg";
import hydratingSerum from "../assets/fragrances/hydrating-serum.jpg";
import aveeno from "../assets/fragrances/hand-cream2.jpg";
import lipBalm from "../assets/fragrances/lip-balm.jpg";
import sheabutter from "../assets/fragrances/shea-butter.jpg";
import vaseline from "../assets/fragrances/vaseline.jpg";

import roseGoldRing from "../assets/fragrances/rose-gold-ring.jpg";
import infinityRing from "../assets/fragrances/infinity-ring.jpg";
import silverDiamondRing from "../assets/fragrances/silver-diamond-ring.jpg";
import weddingRing from "../assets/fragrances/wedding-ring.jpg";
import princessRing from "../assets/fragrances/princess-ring.jpg";

import pearlNecklace from "../assets/fragrances/pearl-necklace.jpg";
import heartNecklace from "../assets/fragrances/heart-necklace.jpg";
import goldChainNecklace from "../assets/fragrances/gold-chain-necklace.jpg";
import butterflyNecklace from "../assets/fragrances/butterfly-necklace.jpg";
import crystalPendant from "../assets/fragrances/crystal-pendant.jpg";

import tennisBracelet from "../assets/fragrances/tennis-bracelet.jpg";
import roseGoldBracelet from "../assets/fragrances/rose-gold-bracelet.jpg";
import infinityBracelet from "../assets/fragrances/infinity-bracelet.jpg";
import pearlBracelet from "../assets/fragrances/pearl-bracelet.jpg";
import luxuryCharmBracelet from "../assets/fragrances/luxury-charm-bracelet.jpg";

import pearlEarrings from "../assets/fragrances/pearl-earrings.jpg";
import hoopEarrings from "../assets/fragrances/hoop-earrings.jpg";
import butterflyEarrings from "../assets/fragrances/butterfly-earrings.jpg";
import crystalEarrings from "../assets/fragrances/crystal-earrings.jpg";
import diamondStuds from "../assets/fragrances/diamond-studs.jpg";

const CATEGORIES = [
  "All",
  "Fashion",
  "Beauty",
  "Jewellery",
  "Fragrance",
  "Skincare",
];
const SUBCATEGORIES = {
  Fashion: ["All", "Men", "Women", "Kids", "Unisex"],
  Fragrance: ["All", "Men", "Women", "Unisex"],
  Beauty: ["All", "Men", "Women"],
  Jewellery: ["All", "Rings", "Necklaces", "Earrings", "Bracelets"],
  Skincare: ["All", "Men", "Women", "Unisex"],
};

// ✅ NOW WE ADD gender inside fragrance
const PRODUCTS = [
  // 🌸 FRAGRANCE (MEN / WOMEN / UNISEX)

  { id: 1, name: "Armani Code", category: "Fragrance", sub: "Men", image: arimani, price: 120 },
  { id: 2, name: "Creed Aventus", category: "Fragrance", sub: "Men", image: creed, price: 250 },
  { id: 3, name: "Dior Homme", category: "Fragrance", sub: "Men", image: diorhome, price: 180 },
  { id: 4, name: "Dior Sauvage", category: "Fragrance", sub: "Men", image: sauvage, price: 150 },
  { id: 5, name: "Hugo Boss Bottled", category: "Fragrance", sub: "Men", image: boss, price: 110 },
  { id: 6, name: "YSL Y Eau de Parfum", category: "Fragrance", sub: "Men", image: ysl, price: 160 },
  { id: 7, name: "Versace Eros", category: "Fragrance", sub: "Men", image: versace, price: 145 },
  
  { id: 8, name: "Bleu de Chanel", category: "Fragrance", sub: "Women", image: chanel, price: 170 },
  { id: 9, name: "Creed Original Vetiver", category: "Fragrance", sub: "Women", image: coc, price: 240 },
  { id: 10, name: "Tom Ford Black Orchid", category: "Fragrance", sub: "Women", image: tomfordtobacco, price: 220 },
  { id: 11, name: "Good Girl", category: "Fragrance", sub: "Women", image: goodgirl, price: 140 },
  { id: 12, name: "La Vie Est Belle", category: "Fragrance", sub: "Women", image: lavie, price: 135 },
  { id: 13, name: "My Way", category: "Fragrance", sub: "Women", image: myway, price: 145 },
  { id: 14, name: "Flowerbomb", category: "Fragrance", sub: "Women", image: flowerbomb, price: 155 },
  { id: 15, name: "Gucci Bloom", category: "Fragrance", sub: "Women", image: gucci, price: 130 },
  { id: 16, name: "Burberry Her", category: "Fragrance", sub: "Women", image: burberry, price: 140 },

  { id: 17, name: "Khamrah Lattafa", category: "Fragrance", sub: "Unisex", image: khamrah, price: 95 },
  { id: 18, name: "Badee Al Oud", category: "Fragrance", sub: "Unisex", image: badee, price: 130 },
  { id: 19, name: "Baccarat Rouge 540", category: "Fragrance", sub: "Unisex", image: baccarat, price: 320 },
  { id: 20, name: "MFK Oud Satin Mood", category: "Fragrance", sub: "Unisex", image: mfk, price: 340 },
  { id: 21, name: "Mancera Cedrat Boise", category: "Fragrance", sub: "Unisex", image: mancera, price: 180 },
  { id: 22, name: "Gypsy Water", category: "Fragrance", sub: "Unisex", image: gypsy, price: 260 },
  { id: 23, name: "Tom Ford Tobacco Vanille", category: "Fragrance", sub: "Unisex", image: tomfordtobacco, price: 280 },

{ id: 24, name: "Hoodie", category: "Fashion", sub: "Men", image: hoodie, price: 60 },
{ id: 25, name: "T-Shirt", category: "Fashion", sub: "Men", image: tshirt, price: 30 },
{ id: 26, name: "Dress", category: "Fashion", sub: "Women", image: dress, price: 80 },
{id: 27, name: "Elegant Dress", category: "Fashion", sub: "Women", image: dress2, price: 1000 },
{id: 28, name: "Summer Dress", category: "Fashion", sub: "Women", image: dress3, price: 100 },
{id: 29, name: "Cute Dress", category: "Fashion", sub: "Women", image: dress4, price: 10 },
{id: 30, name: "Pretty Dress", category: "Fashion", sub: "Women", image: dress5, price: 500},
{id: 31, name: "Awesome Dress", category: "Fashion", sub: "Women", image: dress6, price: 700 },
{id: 32, name: "Demure Dress", category: "Fashion", sub: "Women", image: dress7, price: 10 },
{id: 33, name: "Cap", category: "Fashion", sub: "Unisex", image: cap2, price: 25 },
{id: 34, name: "Cap black", category: "Fashion", sub: "Unisex", image: cap3, price: 30 },
{id: 35, name: "Cap sport", category: "Fashion", sub: "Unisex", image: cap4, price: 75 },

{id: 36, name: "Classic Sneakers", category: "Fashion", sub: "Men", image: sneakers, price: 70 },
{id: 37, name: "Running Sneakers", category: "Fashion", sub: "Men", image: sneakers2, price: 75 },
{id: 38, name: "Street Sneakers", category: "Fashion", sub: "Men", image: sneakers3, price: 80 },
{id: 39, name: "Sport Sneakers", category: "Fashion", sub: "Men", image: sneakers4, price: 85 },
{id: 40, name: "Urban Sneakers", category: "Fashion", sub: "Men", image: sneakers5, price: 90 },
{id: 41, name: "Premium Sneakers", category: "Fashion", sub: "Men", image: sneakers6, price: 95 },
{ id: 42, name: "White T-Shirt", category: "Fashion", sub: "Men", image: tshirt2, price: 30 },

// KIDS FASHION

{ id: 43, name: "Kids Hoodie", category: "Fashion", sub: "Kids", image: kidsHoodie1, price: 35 },
{ id: 44, name: "Kids Hoodie Blue", category: "Fashion", sub: "Kids", image: kidsHoodie2, price: 38 },
{ id: 45, name: "Kids Hoodie Premium", category: "Fashion", sub: "Kids", image: kidsHoodie3, price: 40 },
{ id: 46, name: "Kids Hoodie Winter", category: "Fashion", sub: "Kids", image: kidsHoodie4, price: 42 },

{ id: 47, name: "Kids T-Shirt", category: "Fashion", sub: "Kids", image: kidTshirt1, price: 18 },
{ id: 48, name: "Kids T-Shirt ", category: "Fashion", sub: "Kids", image: kidTshirt2, price: 20 },
{ id: 49, name: "Kids T-Shirt ", category: "Fashion", sub: "Kids", image: kidTshirt3, price: 22 },
{ id: 50, name: "Kids T-Shirt Casual", category: "Fashion", sub: "Kids", image: kidTshirt4, price: 19 },
{ id: 51, name: "Kids T-Shirt Premium", category: "Fashion", sub: "Kids", image: kidTshirt5, price: 24 },

{ id: 52, name: "Kids Jeans Blue", category: "Fashion", sub: "Kids", image: kidJeans1, price: 28 },
{ id: 53, name: "Kids Jeans Slim", category: "Fashion", sub: "Kids", image: kidJeans2, price: 30 },
{ id: 54, name: "Kids Jeans Black", category: "Fashion", sub: "Kids", image: kidJeans3, price: 32 },
{ id: 55, name: "Kids Jeans Classic", category: "Fashion", sub: "Kids", image: kidJeans4, price: 34 },

{ id: 56, name: "Kids Cap", category: "Fashion", sub: "Kids", image: kidsCap1, price: 15 },
{ id: 57, name: "Kids Cap Sport", category: "Fashion", sub: "Kids", image: kidsCap2, price: 18 },
{ id: 58, name: "Kids Cap Casual", category: "Fashion", sub: "Kids", image: kidsCap3, price: 17 },

{ id: 59, name: "Kids Sneakers", category: "Fashion", sub: "Kids", image: kidSneakers1, price: 35 },
{ id: 60, name: "Kids Sneakers Runner", category: "Fashion", sub: "Kids", image: kidSneakers2, price: 38 },
{ id: 61, name: "Kids Sneakers Sport", category: "Fashion", sub: "Kids", image: kidSneakers3, price: 40 },
{ id: 62, name: "Kids Sneakers Urban", category: "Fashion", sub: "Kids", image: kidSneakers4, price: 42 },
{ id: 63, name: "Kids Sneakers Premium", category: "Fashion", sub: "Kids", image: kidSneakers5, price: 45 },
{ id: 64, name: "Kids Sneakers Elite", category: "Fashion", sub: "Kids", image: kidSneakers6, price: 48 },
{ id: 65, name: "Kids Sneakers Pro", category: "Fashion", sub: "Kids", image: kidSneakers7, price: 50 },

// UNISEX HOODIES

{ id: 66, name: "Classic Unisex Hoodie", category: "Fashion", sub: "Unisex", image: unisexHoodie1, price: 55 },

{ id: 67, name: "Street Unisex Hoodie", category: "Fashion", sub: "Unisex", image: unisexHoodie2, price: 60 },

{ id: 68, name: "Premium Unisex Hoodie", category: "Fashion", sub: "Unisex", image: unisexHoodie3, price: 65 },

{ id: 69, name: "Winter Unisex Hoodie", category: "Fashion", sub: "Unisex", image: unisexHoodie4, price: 70 },

// UNISEX T-SHIRTS

{ id: 70, name: "Basic Unisex T-Shirt", category: "Fashion", sub: "Unisex", image: unisexTshirt1, price: 20 },

{ id: 71, name: "Casual Unisex T-Shirt", category: "Fashion", sub: "Unisex", image: unisexTshirt2, price: 22 },

{ id: 72, name: "Sport Unisex T-Shirt", category: "Fashion", sub: "Unisex", image: unisexTshirt3, price: 24 },

{ id: 73, name: "Premium Unisex T-Shirt", category: "Fashion", sub: "Unisex", image: unisexTshirt4, price: 26 },

{ id: 74, name: "Oversized Unisex T-Shirt", category: "Fashion", sub: "Unisex", image: unisexTshirt5, price: 28 },

// MEN BEAUTY

{ id: 75, name: "Daily Face Wash", category: "Beauty", sub: "Men", image: faceWash, price: 15 },
{ id: 76, name: "Face Scrub", category: "Beauty", sub: "Men", image: faceScrub, price: 18 },
{ id: 77, name: "Hair Gel", category: "Beauty", sub: "Men", image: hairGel, price: 12 },
{ id: 78, name: "Hair Wax", category: "Beauty", sub: "Men", image: hairWax, price: 14 },
{ id: 79, name: "Gromming Kit", category: "Beauty", sub: "Men", image: groomingKit, price: 35 },

{ id: 80, name: "Nivea Men", category: "Beauty", sub: "Men", image: niveaMen, price: 16 },
{ id: 81, name: "Dove Men ", category: "Beauty", sub: "Men", image: doveMen, price: 18 },
{ id: 82, name: "Axe Body Spray", category: "Beauty", sub: "Men", image: axeDeo, price: 12 },
{ id: 83, name: "Gillette Shaving Gel", category: "Beauty", sub: "Men", image: gilletteGel, price: 14 },
{ id: 84, name: "Old Spice Deo", category: "Beauty", sub: "Men", image: oldSpice, price: 13 },
{ id: 85, name: "Moisturizer", category: "Beauty", sub: "Men", image: niveaMenMoisturizer, price: 17 },
{ id: 86, name: "Men Shower Gel", category: "Beauty", sub: "Men", image: manShowerGel, price: 14 },

// WOMEN BEAUTY

{ id: 87, name: "Dark Concealer", category: "Beauty", sub: "Women", image: darkConcealer, price: 18 },
{ id: 88, name: "Dark Lipstick", category: "Beauty", sub: "Women", image: darkLipstick, price: 15 },
{ id: 89, name: "Eyeliner Classic", category: "Beauty", sub: "Women", image: eyeliner, price: 12 },
{ id: 90, name: "Eyeliner Pro", category: "Beauty", sub: "Women", image: eyeline2, price: 14 },
{ id: 91, name: "Flawless Foundation", category: "Beauty", sub: "Women", image: flawless, price: 22 },
{ id: 92, name: "Foundation Makeup", category: "Beauty", sub: "Women", image: foundationMakeup, price: 24 },
{ id: 93, name: "Lakime Beauty Set", category: "Beauty", sub: "Women", image: lakime, price: 28 },
{ id: 94, name: "Lipstick Red", category: "Beauty", sub: "Women", image: lipstick, price: 10 },
{ id: 95, name: "Lipstick Matte", category: "Beauty", sub: "Women", image: lipstick2, price: 12 },
{ id: 96, name: "Makeup Kit Basic", category: "Beauty", sub: "Women", image: makeupKit, price: 35 },
{ id: 97, name: "Makeup Kit Premium", category: "Beauty", sub: "Women", image: makeupKit2, price: 45 },
{ id: 98, name: "Mascara Volume", category: "Beauty", sub: "Women", image: mascara, price: 16 },
{ id: 99, name: "Maybelline Fit", category: "Beauty", sub: "Women", image: maybellineFit, price: 20 },
{ id: 100, name: "Natural Makeup", category: "Beauty", sub: "Women", image: naturalMakeup, price: 25 },
{ id: 101, name: "Powder Blush", category: "Beauty", sub: "Women", image: powderBlush, price: 14 },

// JEWELLERY

{ id: 102, name: "Gold Ring", category: "Jewellery", sub: "Rings", image: goldRing1, price: 120 },
{ id: 103, name: "Gold Ring Deluxe", category: "Jewellery", sub: "Rings", image: goldRing2, price: 140 },
{ id: 104, name: "Premium Gold Ring", category: "Jewellery", sub: "Rings", image: goldRing3, price: 180 },

{ id: 105, name: "Necklace Classic", category: "Jewellery", sub: "Necklaces", image: necklace1, price: 90 },
{ id: 106, name: "Luxury Necklace", category: "Jewellery", sub: "Necklaces", image: necklace2, price: 120 },
{ id: 107, name: "Elegant Necklace", category: "Jewellery", sub: "Necklaces", image: necklace3, price: 150 },
{ id: 108, name: "Circle Necklace", category: "Jewellery", sub: "Necklaces", image: circleNecklace, price: 110 },
{ id: 109, name: "Diamond Necklace", category: "Jewellery", sub: "Necklaces", image: diamondNecklace, price: 250 },

{ id: 110, name: "Gold Bracelet", category: "Jewellery", sub: "Bracelets", image: bracelet1, price: 95 },
{ id: 111, name: "Charm Bracelet", category: "Jewellery", sub: "Bracelets", image: charmBracelet, price: 105 },
{ id: 112, name: "Soul Knot Bracelet", category: "Jewellery", sub: "Bracelets", image: soulKnot, price: 130 },

{ id: 113, name: "Classic Earrings", category: "Jewellery", sub: "Earrings", image: earrings1, price: 60 },
{ id: 114, name: "Diamond Earrings", category: "Jewellery", sub: "Earrings", image: earrings2, price: 90 },
{ id: 115, name: "Luxury Earrings", category: "Jewellery", sub: "Earrings", image: earrings3, price: 120 },
{ id: 116, name: "Twink Diamond Earrings", category: "Jewellery", sub: "Earrings", image: twinkDiamond, price: 180 },
{ id: 117, name: "Premium Earrings", category: "Jewellery", sub: "Earrings", image: earrings5, price: 140 },
{ id: 118, name: "Engagement Ring", category: "Jewellery", sub: "Rings", image: engagementRing1, price: 450 },
{ id: 119, name: "Diamond Engagement Ring", category: "Jewellery", sub: "Rings", image: engagementRing2, price: 650 },

// MEN SKINCARE

{ id: 120, name: "Face Wash", category: "Skincare", sub: "Men", image: menFaceWash, price: 15 },

{ id: 122, name: "Face Cream", category: "Skincare", sub: "Men", image: menFaceCream, price: 20 },

{ id: 123, name: "Cleanser", category: "Skincare", sub: "Men", image: menCleanser, price: 16 },

{ id: 124, name: "Beard Oil", category: "Skincare", sub: "Men", image: beardOil, price: 14 },

// UNIVERSAL SUNSCREENS

{ id: 125, name: "Sunscreen For Dry Skin", category: "Skincare", sub: "Unisex", image: sunscreenDry, price: 22 },

{ id: 126, name: "Combination Skin SPF 60", category: "Skincare", sub: "Unisex", image: sunscreenCombination, price: 22 },

{ id: 127, name: "Sensitive Skin SPF 50", category: "Skincare", sub: "Unisex", image: sunscreenSensitive, price: 24 },
{ id: 128, name: "Moisturizer", category: "Skincare", sub: "Men", image: Moisturizer, price: 18 },

{ id: 129, name: "Hydrating Serum", category: "Skincare", sub: "Men", image: menSerum, price: 24 },

{ id: 130, name: "Eye Cream", category: "Skincare", sub: "Men", image: menEyeCream, price: 22 },

{ id: 131, name: "Nivea Exfoliator", category: "Skincare", sub: "Men", image: menExfoliator, price: 19 },

{ id: 132, name: "Night Cream", category: "Skincare", sub: "Men", image: menNightCream, price: 26 },
{ id: 133, name: "Women's Cleanser", category: "Skincare", sub: "Women", image: womenCleanser, price: 18 },

{ id: 134, name: "Vitamin C Serum", category: "Skincare", sub: "Women", image: vitaminCSerum, price: 28 },

{ id: 135, name: "Women's Moisturizer", category: "Skincare", sub: "Women", image: womenMoisturizer, price: 22 },

{ id: 136, name: "Women's Night Cream", category: "Skincare", sub: "Women", image: womenNightCream, price: 30 },

{ id: 137, name: "Women's Eye Cream", category: "Skincare", sub: "Women", image: womenEyeCream, price: 24 },
{ id: 138, name: "Aloe Vera Gel", category: "Skincare", sub: "Unisex", image: aloeVeraGel, price: 12 },

{ id: 139, name: "Hydrating Serum", category: "Skincare", sub: "Unisex", image: hydratingSerum, price: 20 },

{ id: 140, name: "Aveeno Cream", category: "Skincare", sub: "Unisex", image: aveeno, price: 10 },

{ id: 141, name: "Lip Balm", category: "Skincare", sub: "Women", image: lipBalm, price: 8 },
{ id: 142, name: "Shea Butter Cream", category: "Skincare", sub: "Unisex", image: sheabutter, price: 14 },
{ id: 143, name: "Vaseline Petroleum Jelly", category: "Skincare", sub: "Unisex", image: vaseline, price: 8 },

{ id: 144, name: "Rose Gold Ring", category: "Jewellery", sub: "Rings", image: roseGoldRing, price: 125 },
{ id: 145, name: "Infinity Ring", category: "Jewellery", sub: "Rings", image: infinityRing, price: 115 },
{ id: 146, name: "Silver Diamond Ring", category: "Jewellery", sub: "Rings", image: silverDiamondRing, price: 170 },
{ id: 147, name: "Luxury Wedding Ring", category: "Jewellery", sub: "Rings", image: weddingRing, price: 320 },
{ id: 148, name: "Princess Cut Ring", category: "Jewellery", sub: "Rings", image: princessRing, price: 280 },

{ id: 149, name: "Pearl Necklace", category: "Jewellery", sub: "Necklaces", image: pearlNecklace, price: 140 },
{ id: 150, name: "Heart Pendant Necklace", category: "Jewellery", sub: "Necklaces", image: heartNecklace, price: 95 },
{ id: 151, name: "Gold Chain Necklace", category: "Jewellery", sub: "Necklaces", image: goldChainNecklace, price: 180 },
{ id: 152, name: "Butterfly Necklace", category: "Jewellery", sub: "Necklaces", image: butterflyNecklace, price: 110 },
{ id: 153, name: "Crystal Pendant", category: "Jewellery", sub: "Necklaces", image: crystalPendant, price: 130 },

{ id: 154, name: "Diamond Tennis Bracelet", category: "Jewellery", sub: "Bracelets", image: tennisBracelet, price: 240 },
{ id: 155, name: "Rose Gold Bracelet", category: "Jewellery", sub: "Bracelets", image: roseGoldBracelet, price: 135 },
{ id: 156, name: "Infinity Bracelet", category: "Jewellery", sub: "Bracelets", image: infinityBracelet, price: 120 },
{ id: 157, name: "Pearl Bracelet", category: "Jewellery", sub: "Bracelets", image: pearlBracelet, price: 100 },
{ id: 158, name: "Luxury Charm Bracelet", category: "Jewellery", sub: "Bracelets", image: luxuryCharmBracelet, price: 150 },

{ id: 159, name: "Pearl Earrings", category: "Jewellery", sub: "Earrings", image: pearlEarrings, price: 75 },
{ id: 160, name: "Gold Hoop Earrings", category: "Jewellery", sub: "Earrings", image: hoopEarrings, price: 85 },
{ id: 161, name: "Butterfly Earrings", category: "Jewellery", sub: "Earrings", image: butterflyEarrings, price: 70 },
{ id: 162, name: "Crystal Drop Earrings", category: "Jewellery", sub: "Earrings", image: crystalEarrings, price: 95 },
{ id: 163, name: "Luxury Diamond Studs", category: "Jewellery", sub: "Earrings", image: diamondStuds, price: 220 },

];

export default function Home() {
  const [category, setCategory] = useState("All");
  const [sub, setSub] = useState("All");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const dataLoadedForUser = useRef(null);

  // FIREBASE AUTH
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);

    if (!currentUser) {
      dataLoadedForUser.current = null;
      setCart([]);
      setWishlist([]);
      setRecentlyViewed([]);
    }
  });

  return () => unsubscribe();
}, []);

  // LOAD SAVED DATA FOR CURRENT USER
useEffect(() => {
  if (!user) return;

  const cartKey = `nexaCart_${user.uid}`;
  const wishlistKey = `nexaWishlist_${user.uid}`;
  const recentlyViewedKey = `nexaRecentlyViewed_${user.uid}`;

  const savedCart = localStorage.getItem(cartKey);
  const savedWishlist = localStorage.getItem(wishlistKey);
  const savedRecentlyViewed = localStorage.getItem(recentlyViewedKey);

  setCart(savedCart ? JSON.parse(savedCart) : []);
  setWishlist(savedWishlist ? JSON.parse(savedWishlist) : []);
  setRecentlyViewed(
    savedRecentlyViewed ? JSON.parse(savedRecentlyViewed) : []
  );

  dataLoadedForUser.current = user.uid;
}, [user]);

useEffect(() => {
  if (!user || dataLoadedForUser.current !== user.uid) return;

  localStorage.setItem(
    `nexaCart_${user.uid}`,
    JSON.stringify(cart)
  );
}, [cart, user]);

useEffect(() => {
  if (!user || dataLoadedForUser.current !== user.uid) return;

  localStorage.setItem(
    `nexaWishlist_${user.uid}`,
    JSON.stringify(wishlist)
  );
}, [wishlist, user]);

useEffect(() => {
  if (!user || dataLoadedForUser.current !== user.uid) return;

  localStorage.setItem(
    `nexaRecentlyViewed_${user.uid}`,
    JSON.stringify(recentlyViewed)
  );
}, [recentlyViewed, user]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ➖ REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 💰 TOTAL PRICE
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

const increaseQty = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  );
};

const decreaseQty = (id) => {
  setCart(
    cart
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0)
  );
};

const toggleWishlist = (product) => {
  const exists = wishlist.find((i) => i.id === product.id);

  if (exists) {
    setWishlist(
      wishlist.filter((i) => i.id !== product.id)
    );
  } else {
    setWishlist([...wishlist, product]);
  }
};
const addToRecentlyViewed = (product) => {
  setRecentlyViewed((prev) => {
    const filtered = prev.filter((item) => item.id !== product.id);

    return [product, ...filtered].slice(0, 10);
  });
};

const removeItem = (id) => {
  setCart(cart.filter((item) => item.id !== id));
};

  // 🚀 FILTER SYSTEM (FIXED)
  const filtered = PRODUCTS.filter((p) => {
  const mainMatch = category === "All" || p.category === category;
  const subMatch = sub === "All" || p.sub === sub;
  const searchMatch = p.name.toLowerCase().includes(search.toLowerCase());

  return mainMatch && subMatch && searchMatch;
});

  return (
  <div
    style={{
      ...styles.page,
      background: darkMode ? "#111" : "#fff",
      color: darkMode ? "#fff" : "#111",
    }}
  >
    {/* ================= HEADER ================= */}
    <div
      style={{
        ...styles.header,
        background: darkMode ? "#1b1b1b" : "#fff",
        color: darkMode ? "#fff" : "#111",
        borderBottom: darkMode
          ? "1px solid #333"
          : "1px solid #eee",
      }}
    >
      <h2 style={{ margin: 0 }}>🛍️ NexaStore</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
            color: darkMode ? "#fff" : "#111",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          onClick={() => setPage("cart")}
          style={{
            ...styles.navBtn,
            color: darkMode ? "#fff" : "#111",
          }}
        >
          <div style={styles.cart}>
            🛒
            <span style={styles.badge}>{cart.length}</span>
          </div>
        </button>
      </div>
    </div>

    {/* ================= SEARCH ================= */}
    {page === "home" && (
      <>
        <div style={styles.searchWrap}>
          <input
            type="text"
            placeholder="Search for fragrances, fashion, skincare..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              ...styles.search,
              background: darkMode ? "#222" : "#fff",
              color: darkMode ? "#fff" : "#111",
              border: darkMode
                ? "1px solid #444"
                : "1px solid #ddd",
            }}
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              style={styles.clearBtn}
            >
              ✖
            </button>
          )}
        </div>

        {/* ================= CATEGORIES ================= */}
        <div style={styles.categories}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                setSub("All");
              }}
              style={
                category === c
                  ? styles.activeCat
                  : styles.cat
              }
            >
              {c}
            </button>
          ))}
        </div>

        {/* ================= SUB CATEGORIES ================= */}
        {category !== "All" && (
          <div style={styles.subBar}>
            {SUBCATEGORIES[category]?.map((s) => (
              <button
                key={s}
                onClick={() => setSub(s)}
                style={
                  sub === s
                    ? styles.activeSub
                    : styles.sub
                }
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* ================= PRODUCTS ================= */}
        <div style={styles.grid}>
          {filtered.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filtered.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                style={{
                  ...styles.card,
                  background: darkMode
                    ? "#1f1f1f"
                    : "#fff",
                  color: darkMode ? "#fff" : "#111",
                  border: darkMode
                    ? "1px solid #333"
                    : "1px solid #eee",
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  style={styles.img}
                />

                <h4
                  style={{
                    ...styles.name,
                    color: darkMode ? "#fff" : "#111",
                  }}
                >
                  {p.name}
                </h4>

                <p
                  style={{
                    ...styles.price,
                    color: darkMode ? "#ddd" : "#444",
                  }}
                >
                  KES {p.price}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 10,
                  }}
                >
                  <button
                    style={styles.btn}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(p);
                    }}
                  >
                    🛒 Add to Cart
                  </button>

                  <button
                    style={styles.wishlistBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(p);
                    }}
                  >
                    {wishlist.some(
                      (i) => i.id === p.id
                    )
                      ? "💔 Remove"
                      : "❤️ Wishlist"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ================= PRODUCT MODAL ================= */}
        {selectedProduct && (
          <div style={styles.modalOverlay}>
            <div
              style={{
                ...styles.modal,
                background: darkMode
                  ? "#222"
                  : "#fff",
                color: darkMode
                  ? "#fff"
                  : "#111",
              }}
            >
              <button
                onClick={() =>
                  setSelectedProduct(null)
                }
                style={styles.closeBtn}
              >
                ✖
              </button>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={styles.modalImage}
              />

              <h2>{selectedProduct.name}</h2>

              <h3>
                KES {selectedProduct.price}
              </h3>

              <p>
                Premium quality product from
                NexaStore.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginTop: 20,
                }}
              >
                <button
                  style={styles.wishlistBtn}
                  onClick={() =>
                    toggleWishlist(
                      selectedProduct
                    )
                  }
                >
                  ❤️ Wishlist
                </button>

                <button
                  style={styles.btn}
                  onClick={() =>
                    addToCart(selectedProduct)
                  }
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )}

    {/* ================= WISHLIST ================= */}
{page === "wishlist" && (
  <div style={{ padding: 20 }}>
    <h2>❤️ Wishlist</h2>

    {wishlist.length === 0 ? (
      <p>No wishlist items.</p>
    ) : (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {wishlist.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 12,
              background: "#fff",
            }}
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: 90,
                height: 90,
                objectFit: "cover",
                borderRadius: 10,
                flexShrink: 0,
              }}
            />

            {/* Product Details */}
            <div
              style={{
                flex: 1,
              }}
            >
              <h4
                style={{
                  margin: "0 0 8px",
                }}
              >
                {item.name}
              </h4>

              <p
                style={{
                  margin: 0,
                  fontWeight: "bold",
                }}
              >
                KES {item.price}
              </p>
            </div>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: 8,
              }}
            >
              <button
                onClick={() => addToCart(item)}
                style={{
                  padding: "10px 14px",
                  border: "none",
                  borderRadius: 8,
                  background: "#000",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(item)}
                style={{
                  padding: "10px 14px",
                  border: "none",
                  borderRadius: 8,
                  background: "#f3f3f3",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                💔 Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
)}
    {/* ================= CART ================= */}
    {page === "cart" && (
      <div style={{ padding: 20 }}>
        <h2>🛒 My Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                  marginBottom: 15,
                  padding: 10,
                  border: "1px solid #ddd",
                  borderRadius: 10,
                }}
              >
                <div>
                  <h4>{item.name}</h4>
                  <p>Qty: {item.qty}</p>
                  <p>
                    KES {item.price}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                    style={{
                      marginRight: 5,
                    }}
                  >
                    -
                  </button>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                    style={{
                      marginRight: 5,
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    style={styles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <hr />

            <h2>
              Total: KES {total}
            </h2>

            <button
              style={{
                width: "100%",
                padding: 15,
                background: "#000",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                marginTop: 20,
              }}
              onClick={() =>
                alert("Checkout coming soon")
              }
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    )}

  {page === "account" && (
  <Account
    user={user}
    darkMode={darkMode}
    setDarkMode={setDarkMode}
    setPage={setPage}
  />
)}


    {/* ================= BOTTOM NAVIGATION ================= */}
    <div
      style={{
        ...styles.bottomNav,
        background: darkMode
          ? "#1b1b1b"
          : "#fff",
        borderTop: darkMode
          ? "1px solid #333"
          : "1px solid #eee",
      }}
    >
      <button
        style={{
          ...styles.navBtn,
          color: darkMode ? "#fff" : "#111",
        }}
        onClick={() => setPage("home")}
      >
        <span>🏠</span>
        <span>Home</span>
      </button>

      <button
        style={{
          ...styles.navBtn,
          color: darkMode ? "#fff" : "#111",
        }}
        onClick={() => setPage("wishlist")}
      >
        <span>❤️</span>
        <span>Wishlist</span>
      </button>

      <button
        style={{
          ...styles.navBtn,
          color: darkMode ? "#fff" : "#111",
        }}
        onClick={() => setPage("cart")}
      >
        <span>🛒</span>
        <span>Cart</span>
      </button>

      <button
        style={{
          ...styles.navBtn,
          color: darkMode ? "#fff" : "#111",
        }}
        onClick={() => setPage("account")}
      >
        <span>👤</span>
        <span>Account</span>
      </button>
    </div>
  </div>
);
}