const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campgound = require("../models/campground");

mongoose.connect(
    "mongodb+srv://palash:cyberdrivert2@campx.h2czssp.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
    console.log("Connected to MongoDB successfully!");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campgound.deleteMany({});
    const camps = [];
    for (let i = 0; i < 1000; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        camps.push({
            author: "641a9e3de5d812e80018fa45",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, commodi itaque at soluta voluptas iste dolorem eum ipsum beatae a assumenda delectus nisi, velit cupiditate repellat molestiae? Provident, rerum porro!",
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ],
            },
            images: [
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1679575078/CampX/yzqph0cwagoiznkj599b.jpg",
                    filename: "CampX/yzqph0cwagoiznkj599b",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1679575076/CampX/ol0qwfknjsrh5opnzs3m.jpg",
                    filename: "CampX/ol0qwfknjsrh5opnzs3m",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1679575072/CampX/btuzvilujh4yfp7g5fw8.jpg",
                    filename: "CampX/btuzvilujh4yfp7g5fw8",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1679575062/CampX/ohbtr9irvbchti5cacsh.jpg",
                    filename: "CampX/ohbtr9irvbchti5cacsh",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1679575059/CampX/ogy2sasdlerhzqoprwfm.jpg",
                    filename: "CampX/ogy2sasdlerhzqoprwfm",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1679575058/CampX/f0q0ngye1qwypthjvxkj.jpg",
                    filename: "CampX/f0q0ngye1qwypthjvxkj",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1679575053/CampX/xtzmycuszyou8ytv05kl.jpg",
                    filename: "CampX/xtzmycuszyou8ytv05kl",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1679575051/CampX/jy3haypdsxgyzd191nnu.jpg",
                    filename: "CampX/jy3haypdsxgyzd191nnu",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1679575049/CampX/wgvtbee9igcmp2iu3xpi.jpg",
                    filename: "CampX/wgvtbee9igcmp2iu3xpi",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1679575046/CampX/e58msmsphl2leek7pm4c.jpg",
                    filename: "CampX/e58msmsphl2leek7pm4c",
                },
                /* {
                    url: "https://res.cloudinary.com/campx/image/upload/v1677572861/CampX/tfxidkcztnnhvlgiyqjq.jpg",
                    filename: "CampX/tfxidkcztnnhvlgiyqjq",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1677572874/CampX/m21rambulhdoytp9wkrn.jpg",
                    filename: "CampX/m21rambulhdoytp9wkrn",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1677572899/CampX/hrqmm1xwy7hizjediu3d.jpg",
                    filename: "CampX/hrqmm1xwy7hizjediu3d",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1677572896/CampX/jzxquwfovzb9pntbeljx.jpg",
                    filename: "CampX/jzxquwfovzb9pntbeljx",
                },
                {
                    url: "https://res.cloudinary.com/campx/image/upload/v1677572901/CampX/dk6sfmgivjjghx8qtwxo.jpg",
                    filename: "CampX/dk6sfmgivjjghx8qtwxo",
                }, */
            ],
        });
    }
    await Campgound.insertMany(camps);
};

seedDB().then(() => {
    mongoose.connection.close();
});
