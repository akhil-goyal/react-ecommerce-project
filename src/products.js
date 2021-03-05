import { v4 as uuidv4 } from 'uuid';

function importImages(context) {
    let imageFiles = {};
    context.keys().forEach(image => { imageFiles[image.replace('./', '')] = context(image); });
    return imageFiles
}

const files = importImages(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const trendingProducts = [
    {
        id: uuidv4(),
        name: 'Silver Dollar Plant',
        img: `${files['plant1.jpg'].default}`
    },
    {
        id: uuidv4(),
        name: 'String Of Pearls',
        img: `${files['plant2.jpg'].default}`
    },
    {
        id: uuidv4(),
        name: 'Peace Lilly',
        img: `${files['plant3.jpg'].default}`
    },
    {
        id: uuidv4(),
        name: 'Areca Palm',
        img: `${files['plant4.jpg'].default}`
    },
    {
        id: uuidv4(),
        name: 'Grafter Ficus Bonsai',
        img: `${files['plant5.jpg'].default}`
    },
    {
        id: uuidv4(),
        name: 'Calathea Orbifolia',
        img: `${files['plant6.jpg'].default}`
    },
    {
        id: uuidv4(),
        name: 'Pothos Plant',
        img: `${files['plant7.jpg'].default}`
    },
    {
        id: uuidv4(),
        name: 'Anthurium',
        img: `${files['plant8.jpg'].default}`
    },
    {
        id: uuidv4(),
        name: 'Oxalis',
        img: `${files['plant9.jpg'].default}`
    },
    {
        id: uuidv4(),
        name: 'Aloe Vera',
        img: `${files['plant10.jpg'].default}`
    }
];

const productsList = [
    {
        id: uuidv4(),
        features: {
            name: 'Silver Dollar Plant',
            description: 'If you’re looking for drought-tolerant plants, succulents like the Xerosicyos danguyi are fantastic, but it helps to get a container with good drainage like these ceramic and bamboo planters. Xerosicyos are actually a climbing succulent so be prepared to leave a little headroom wherever you display them! A space with direct sunlight is best.',
            img: `${files['plant1.jpg'].default}`,
            isNew: true,
            rating: '4.5',
            category: 'Indoor',
            initialPrice: 50,
            discount: 20,
            applyDiscount() {
                let { initialPrice, discount } = this;
                let finalPrice = initialPrice - discount / 100 * initialPrice;
                return finalPrice
            }
        }
    },
    {
        id: uuidv4(),
        features: {
            name: 'String Of Pearls',
            description: 'What a unique houseplant! Guests are sure to comment on the grace of your beautiful Senecio rowleyanus as its delicate tendrils of round beads overflow its planter. These are great for hanging or draping over a pedestal, preferably in a location just out of the reach of direct sunlight. Plant in loose cactus soil and be careful to avoid overwatering for best results.',
            img: `${files['plant2.jpg'].default}`,
            isNew: false,
            rating: '5.0',
            category: 'Aerial',
            initialPrice: 85,
            discount: 15,
            applyDiscount() {
                let { initialPrice, discount } = this;
                let finalPrice = initialPrice - discount / 100 * initialPrice;
                return finalPrice
            }
        }
    },
    {
        id: uuidv4(),
        features: {
            name: 'Peace Lilly',
            description: 'Sometimes flowering plants prove the most challenging to keep healthy, but certain lilies in the Spathiphyllum genus (the peace lily family) are on the more easygoing side. Peace lilies are forgiving plants but seem to do best in indirect sunlight with access to shade. Wait to water the plant until you notice a bit of drooping in the leaves for best results. These plants need reliable drainage. Consider planting in a simple pot to let the beautiful flowers take center stage.',
            img: `${files['plant3.jpg'].default}`,
            isNew: true,
            rating: '4.0',
            category: 'Indoor',
            initialPrice: 33,
            discount: 8,
            applyDiscount() {
                let { initialPrice, discount } = this;
                let finalPrice = initialPrice - discount / 100 * initialPrice;
                return finalPrice
            }
        }
    },
    {
        id: uuidv4(),
        features: {
            name: 'Areca Palm',
            description: 'Dypsis lutescens, commonly known as golden cane palm or areca palm, makes a lovely focal point with its height and playful fronds. These plants enjoy indirect sunlight or partial shade, preferably in a well-drained planter filled with loamy soil. If you tend to overwater plants, this species will prove rather forgiving. Keep the soil moist but avoid muddiness. A little nibbling won’t hurt cats or dogs so pet owners can rest easily with this one.',
            img: `${files['plant4.jpg'].default}`,
            isNew: false,
            rating: '3.5',
            category: 'Outdoor',
            initialPrice: 76,
            discount: 12,
            applyDiscount() {
                let { initialPrice, discount } = this;
                let finalPrice = initialPrice - discount / 100 * initialPrice;
                return finalPrice
            }
        }
    },
    {
        id: uuidv4(),
        features: {
            name: 'Grafter Ficus Bonsai',
            description: 'Are you looking for a small desk plant sure to spark conversation? Ficus microcarpa “Ginseng” definitely has a very distinctive look to it. These plants are extremely forgiving, easily tolerating conditions ranging from low to bright light (but not direct sunlight) and can live through irregular watering for the most part. They are a wonderful addition to any office environment.',
            img: `${files['plant5.jpg'].default}`,
            isNew: true,
            rating: '4.0',
            category: 'Indoor',
            initialPrice: 24,
            discount: 5,
            applyDiscount() {
                let { initialPrice, discount } = this;
                let finalPrice = initialPrice - discount / 100 * initialPrice;
                return finalPrice
            }
        }
    },
    {
        id: uuidv4(),
        features: {
            name: 'Calathea Orbifolia',
            description: 'Smooth streaks of white stand out against the vivid green leaves of the Calathea orbifolia, like a living painting. These plants are a little tricky to care for compared to some of the others on the list, but the key is to stay calm and make adjustments slowly. Moist soil, good drainage, and low but reliable lighting conditions are a great place to start.',
            img: `${files['plant6.jpg'].default}`,
            isNew: false,
            rating: '4.5',
            category: 'Outdoor',
            initialPrice: 67,
            discount: 20,
            applyDiscount() {
                let { initialPrice, discount } = this;
                let finalPrice = initialPrice - discount / 100 * initialPrice;
                return finalPrice
            }
        }
    }
];

export {
    trendingProducts,
    productsList
}