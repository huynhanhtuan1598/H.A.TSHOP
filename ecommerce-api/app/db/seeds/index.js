"use strict";

const Models = require("../models");
const PasswordUtils = require("../../services/password");

const dataRole = [
  {
    nameRole: "admin",
    description: "admin",
    isActive: true,
  },
  {
    nameRole: "staff",
    description: "staff",
    isActive: true,
  },
  {
    nameRole: "user",
    description: "user",
    isActive: true,
  },
];

const dataUser = [
  {
    email: "admin@gmail.com",
    name: "admin",
    isVerifyEmail: true,
  },
  {
    email: "staff@gmail.com",
    name: "staff",
    isVerifyEmail: true,
  },
  {
    email: "user@gmail.com",
    name: "user",
    isVerifyEmail: true,
  },
];

const dataCategory = [
  {
    nameCategory: "KAWASAKI",
    image: "https://via.placeholder.com/300x300.png",
    isActive: true,
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
  {
    nameCategory: "KTM",
    image: "https://via.placeholder.com/300x300.png",
    isActive: true,
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
  {
    nameCategory: "DUCATI",
    image: "https://via.placeholder.com/300x300.png",
    isActive: true,
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
  {
    nameCategory: "SUZUKI",
    image: "https://via.placeholder.com/300x300.png",
    isActive: true,
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
  {
    nameCategory: "APRILIA",
    image: "https://via.placeholder.com/300x300.png",
    isActive: true,
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
  {
    nameCategory: "YAMAHA",
    image: "https://via.placeholder.com/300x300.png",
    isActive: true,
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
  {
    nameCategory: "BMW",
    image: "https://via.placeholder.com/300x300.png",
    isActive: true,
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
];

const dataProducer = [
  {
    name: "SPORT",
    categoryId: "HONDA",
    isActive: true,
    image: "https://i.ibb.co/3rxcf1p/cbr1000rr-2017.jpg",
  },
  {
    name: "NAKED",
    categoryId: "HONDA",
    isActive: true,
    image: "https://i.ibb.co/4WNkKN5/t-i-xu-ng-1.jpg",
  },
  {
    name: "NAKED",
    categoryId: "KTM",
    isActive: true,
    image: "https://i.ibb.co/BVW1KR7/ktm1290.jpg",
  },
  {
    name: "SPORT",
    categoryId: "KAWASAKI",
    isActive: true,
    image: "https://i.ibb.co/Bq7g498/z2733472862087-de1a64a869c0db74bd6d4748b1336d2b.jpg",
  },
  {
    name: "SPORT",
    categoryId: "SUZUKI",
    isActive: true,
    image: "https://i.ibb.co/vQ5qz8t/su-1000rr.jpg",
  },
  
];

const dataProduct = [
  {
    nameProduct: "CBR 1000RR",
    image: "https://i.ibb.co/3rxcf1p/cbr1000rr-2017.jpg",
    gallery: ["https://i.ibb.co/3rxcf1p/cbr1000rr-2017.jpg"],
    price: 28000,
    description:
      "",
    numberAvailable: 6,
    properties: {},
    isActive: true,
    categoryId: "HONDA",
    producerId: "SPORT",
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
  {
    nameProduct: "CB 1000R",
    image: "https://i.ibb.co/4WNkKN5/t-i-xu-ng-1.jpg",
    gallery: ["https://i.ibb.co/4WNkKN5/t-i-xu-ng-1.jpg"],
    price: 28000,
    description:
      "",
    numberAvailable: 6,
    properties: {},
    isActive: true,
    categoryId: "HONDA",
    producerId: "NAKED",
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
  {
    nameProduct: "	Fuchs Silkolene",
    image: "https://i.ibb.co/vsdJ4Jq/t-i-xu-ng-1.jpg",
    gallery: ["https://i.ibb.co/vsdJ4Jq/t-i-xu-ng-1.jpg"],
    price: 13,
    description:
      "",
    numberAvailable: 50,
    properties: {},
    isActive: true,
    categoryId: "Accessary",
    producerId: "",
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
  {
    nameProduct: "MOTUL 300V",
    image: "https://i.ibb.co/pjcHKyx/t-i-xu-ng.jpg",
    gallery: ["https://i.ibb.co/pjcHKyx/t-i-xu-ng.jpg"],
    price: 19,
    description:
      "",
    numberAvailable: 50,
    properties: {},
    isActive: true,
    categoryId: "Accessary",
    producerId: "",
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
  {
    nameProduct: "	OHLINS POWER ASSIST",
    image: "https://i.ibb.co/XSSzPGT/t-i-xu-ng-6.jpg",
    gallery: ["https://i.ibb.co/XSSzPGT/t-i-xu-ng-6.jpg"],
    price: 400,
    description:
      "",
    numberAvailable: 17,
    properties: {},
    isActive: true,
    categoryId: "Accessary",
    producerId: "",
    createdAt: "Sep 5, 2021, 2:14:34 AM",
    updatedAt: "Sep 5, 2021, 2:14:34 AM",
  },
];

exports.seed = async function (knex, prom) {
  const users = await Models.User.query();
  if(users.length === 0) {
  await Models.Role.query().delete();
  await Models.User.query().delete();
  await Models.Category.query().delete();
  await Models.Producer.query().delete();
  await Models.Product.query().delete();

  const roles = await Models.Role.query().insert(dataRole).returning("*");
  const newUsers = dataUser.map((e) => {
    e.roleId = roles.find((i) => i.nameRole === e.name).id;
    e.password = PasswordUtils.hashSync("123456");
    return e;
  });
  await Models.User.query().insert(newUsers);

  const categories = await Models.Category.query()
    .insert(dataCategory)
    .returning("*");
  const newProducers = dataProducer.map((e) => {
    e.categoryId = categories.find((i) => i.nameCategory === e.categoryId).id;
    return e;
  });
  const producers = await Models.Producer.query()
    .insert(newProducers)
    .returning("*");

  const newProducts = dataProduct.map((e) => {
    e.categoryId = categories.find((i) => i.nameCategory === e.categoryId).id;
    e.producerId = producers.find((i) => i.name === e.producerId).id;
    return e;
  });
  await Models.Product.query().insert(newProducts);    
}
return 1;
};
