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

const applyDiscount = (initialPrice, discount) => {
    let finalPrice = initialPrice - discount / 100 * initialPrice;
    return finalPrice
}

const buildSlug = name => {

    return name.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replacing spaces with hyphen (-)
        .replace(/&/g, '-and-') // Replacing '&' with 'and'
        .replace(/[^\w\-]+/g, '') // Removing all special characters
        .replace(/\-\-+/g, '-') // Replacing multiple hyphens with single hyphen
        .replace(/^-+/, '') // Trimming hyphen from start of the slug
        .replace(/-+$/, '') // Trimming hyphen from end of the sloug

}

const productsList = [
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Silver Dollar Plant',
            description: 'If you’re looking for drought-tolerant plants, succulents like the Xerosicyos danguyi are fantastic, but it helps to get a container with good drainage like these ceramic and bamboo planters. Xerosicyos are actually a climbing succulent so be prepared to leave a little headroom wherever you display them! A space with direct sunlight is best.',
            img: `${files['plant1.jpg'].default}`,
            isNew: true,
            rating: '4.5',
            category: 'Indoor',
            initialPrice: 50,
            discount: 20,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'String Of Pearls',
            description: 'What a unique houseplant! Guests are sure to comment on the grace of your beautiful Senecio rowleyanus as its delicate tendrils of round beads overflow its planter. These are great for hanging or draping over a pedestal, preferably in a location just out of the reach of direct sunlight. Plant in loose cactus soil and be careful to avoid overwatering for best results.',
            img: `${files['plant2.jpg'].default}`,
            isNew: false,
            rating: '5.0',
            category: 'Aerial',
            initialPrice: 85,
            discount: 15,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Peace Lilly',
            description: 'Sometimes flowering plants prove the most challenging to keep healthy, but certain lilies in the Spathiphyllum genus (the peace lily family) are on the more easygoing side. Peace lilies are forgiving plants but seem to do best in indirect sunlight with access to shade. Wait to water the plant until you notice a bit of drooping in the leaves for best results. These plants need reliable drainage. Consider planting in a simple pot to let the beautiful flowers take center stage.',
            img: `${files['plant3.jpg'].default}`,
            isNew: true,
            rating: '4.0',
            category: 'Indoor',
            initialPrice: 33,
            discount: 8,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Areca Palm',
            description: 'Dypsis lutescens, commonly known as golden cane palm or areca palm, makes a lovely focal point with its height and playful fronds. These plants enjoy indirect sunlight or partial shade, preferably in a well-drained planter filled with loamy soil. If you tend to overwater plants, this species will prove rather forgiving. Keep the soil moist but avoid muddiness. A little nibbling won’t hurt cats or dogs so pet owners can rest easily with this one.',
            img: `${files['plant4.jpg'].default}`,
            isNew: false,
            rating: '3.5',
            category: 'Outdoor',
            initialPrice: 76,
            discount: 12,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Grafter Ficus Bonsai',
            description: 'Are you looking for a small desk plant sure to spark conversation? Ficus microcarpa “Ginseng” definitely has a very distinctive look to it. These plants are extremely forgiving, easily tolerating conditions ranging from low to bright light (but not direct sunlight) and can live through irregular watering for the most part. They are a wonderful addition to any office environment.',
            img: `${files['plant5.jpg'].default}`,
            isNew: true,
            rating: '4.0',
            category: 'Indoor',
            initialPrice: 24,
            discount: 5,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Calathea Orbifolia',
            description: 'Smooth streaks of white stand out against the vivid green leaves of the Calathea orbifolia, like a living painting. These plants are a little tricky to care for compared to some of the others on the list, but the key is to stay calm and make adjustments slowly. Moist soil, good drainage, and low but reliable lighting conditions are a great place to start.',
            img: `${files['plant6.jpg'].default}`,
            isNew: false,
            rating: '4.5',
            category: 'Outdoor',
            initialPrice: 67,
            discount: 20,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Pothos Plant',
            description: 'Epipremnum aureum is an overwhelmingly popular houseplant for good reason. Supposedly, its other nickname of “devil’s ivy” comes from its hardiness and the perception that it is nearly impossible to kill. The vines can grow almost impossibly long, making them a great choice for suspension from tall ceilings. Consider this plant if you need something for low or indirect light conditions. Water when dry.',
            img: `${files['plant7.jpg'].default}`,
            isNew: false,
            rating: '4.5',
            category: 'Outdoor',
            initialPrice: 67,
            discount: 20,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Anthurium',
            description: 'This cultivar of anthurium is especially popular for its persistent, constant blooms and eye-catching waxy red flowers. Guests won’t believe it’s real! Avoid direct sunlight and allow the soil to dry slightly between each watering.',
            img: `${files['plant8.jpg'].default}`,
            isNew: false,
            rating: '4.5',
            category: 'Outdoor',
            initialPrice: 67,
            discount: 20,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Oxalis',
            description: 'Oxalis triangularis, or false shamrock, is a houseplant native to Brazil, known for its bold and vibrant coloration that can range from violet to crimson. The included link is for the bulbs only but should sprout within a week and may even bloom into lavender flowers within 10 weeks. These look great in a light colored pot. Oxalis requires multiple hours of direct sunlight each day so they’re perfect for a sunny spot in the garden too! Like many houseplants, this one is isn’t good for pets to nibble on, so always exercise caution when choosing placement for display.',
            img: `${files['plant9.jpg'].default}`,
            isNew: false,
            rating: '4.5',
            category: 'Outdoor',
            initialPrice: 67,
            discount: 20,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Aloe Vera',
            description: 'Besides being a popular ingredient in skincare products, Aloe plants are also extremely easy for even the most novice green thumb to keep alive. Plant these hardy ornamentals in cactus soil and place in a bright area for best results. They also make great gifts for friends who have trouble with other plants! They look great in just about any type of container and within any type of interior. They’re just that flexible.',
            img: `${files['plant10.jpg'].default}`,
            isNew: false,
            rating: '4.5',
            category: 'Outdoor',
            initialPrice: 67,
            discount: 20,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Chinese Money Plant',
            description: 'Pilea peperomioides, commonly known as the Chinese money plant, has such a distinctive look with its round coin-like leaves and straight stems – they look gorgeous in short pots like the one pictured. These hardy plants grow quickly with a once-a-week watering (depending on the temperature in your home) and will happily thrive in bright spaces but don’t require direct sunlight.',
            img: `${files['plant11.jpeg'].default}`,
            isNew: true,
            rating: '3',
            category: 'Indoor',
            initialPrice: 43,
            discount: 10,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Jade Plant',
            description: 'Jade plants (Crassula ovata) are an especially interesting succulent due to its unique bush-like structure that makes it suitable to trim as a bonsai. And under the right conditions, you might even see pink flower blossoms! These plants might develop red or yellowish tint with too much sunlight, but they require very little water in the summertime and even less in winter.',
            img: `${files['plant12.jpeg'].default}`,
            isNew: false,
            rating: '3.5',
            category: 'Aerial',
            initialPrice: 57,
            discount: 12,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'ZZ Plant',
            description: 'Zamioculcas zamiifolia grow tall and substantial to make a brilliant impression in any room. They’re easy to care for, preferring bright indirect light and small amounts of plant food.',
            img: `${files['plant13.jpeg'].default}`,
            isNew: true,
            rating: '4.5',
            category: 'Outdoor',
            initialPrice: 62,
            discount: 11,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Tillandsia',
            description: 'Succulents from the Tillandsia family are some of the easiest to care for – outside of an occasional misting, they’ll take all the water they need right from the humidity in the air. Another benefit is the lack of root system, making it easy to create fascinating arrangements like the cool sea urchin shell planters above. Pictured are Tillandsia oaxacana, one of the most common and easy to care for species of Tillandsia.',
            img: `${files['plant14.jpeg'].default}`,
            isNew: false,
            rating: '5',
            category: 'Outdoor',
            initialPrice: 72,
            discount: 22,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Donkey Tail Plant',
            description: 'Sedum morganianum is a wonderfully unique flowering succulent that lends itself to unique planters like the ones featured above. These plants enjoy bright direct light but not extreme heat, and require regular watering in warm weather but too much watering can hurt it during its dormant winter stage. Are you curious to learn more about growing and caring for succulents like these? Succulents Simplified is a book that covers 100 low-maintenance varieties, including the donkey tail plant.',
            img: `${files['plant15.jpeg'].default}`,
            isNew: false,
            rating: '4',
            category: 'Indoor',
            initialPrice: 35,
            discount: 8,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Bunny Ear Cactus',
            description: 'Iconic for their flat branching shape and deceptively fuzzy-looking but irritating barbs, Opuntia microdasys looks beautiful but deserves caution during handling. If you’re looking for a low-maintenance cactus to enhance a desert-themed interior, it’s hard to go wrong with this one. Give these plants plenty of sunlight and water when dry – they’re hard to get wrong. Consider pairing with a stone, sand-colored, or rustic planter.',
            img: `${files['plant16.jpeg'].default}`,
            isNew: true,
            rating: '4.5',
            category: 'Aerial',
            initialPrice: 68,
            discount: 25,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Heartleaf Philodendron',
            description: 'Here’s another houseplant beloved for its true hardiness. Philodendron hederaceum works well as a hanging plant or you can add a trellis and enjoy its potential as a climber. Avoid full sun and keep soil very lightly moistened to see it thrive. Once your plant starts getting unwieldy, you can propagate cuttings to give as gifts to friends.',
            img: `${files['plant17.jpeg'].default}`,
            isNew: false,
            rating: '3.5',
            category: 'Outdoor',
            initialPrice: 47,
            discount: 13,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Chinese Water Bamboo',
            description: 'Dracaena sanderiana grow without the need for soil – simply place in water like a cut flower would be. You can even add your favorite river rocks or decorative shells to match your decor! The bundled arrangement pictured above ensures they grow strong and tall. Just make sure to replace the water every few weeks but avoid treated tap water if possible. Or, you can transfer to a well-draining potting soil mix for a more traditional houseplant experience.',
            img: `${files['plant18.jpeg'].default}`,
            isNew: true,
            rating: '4.5',
            category: 'Indoor',
            initialPrice: 85,
            discount: 26,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Dragon Tree',
            description: 'When it comes to tree-like houseplants, it’s hard to find low-maintenance options, but Dracaena marginata is the exception to the rule. You can often wait until the soil is dry to water it, so it’s great for offices and far-off corners of the house that might not get much attention from caregivers. Bright indirect light and constant temperature will help this plant grow its strongest. Be prepared with several sizes of planters to accommodate its fast-growing root system.',
            img: `${files['plant19.jpeg'].default}`,
            isNew: true,
            rating: '5',
            category: 'Aerial',
            initialPrice: 57,
            discount: 10,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Swiss Cheese Plant',
            description: 'The scientific name Monstera deliciosa refers, in part, to the edible pineapple-like fruit this rainforest plant can provide – just make sure to read about how to ripen the fruits properly to avoid irritation upon consuming. These stunning large-leafed plants make a great statement piece and add warm, tropical appeal to any interior.',
            img: `${files['plant20.jpeg'].default}`,
            isNew: false,
            rating: '2.5',
            category: 'Outdoor',
            initialPrice: 44,
            discount: 5,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Prayer Plant',
            description: 'Just look at that amazing color! Maranta leuconeura plants are certainly a work of art. The red veins make them an effective accent for interiors that need a little color. The leaves actually raise and contract based on the day-night cycle, quite interesting to watch as the day progresses. This folding effect is how it gained the common name of “prayer plant”. Like many low-maintenance plants, these simply need indirect light and even moisture.',
            img: `${files['plant21.jpeg'].default}`,
            isNew: true,
            rating: '4.5',
            category: 'Aerial',
            initialPrice: 56,
            discount: 22,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Fiddle Leaf Fig',
            description: 'Ficus lyrata, or the Fiddle Leaf Fig, is a hardy tree that can grow up to 50 feet tall in its native tropical rainforest environment, but makes a lovely indoor tree for home decorating purposes. Be prepared to upgrade the size of the planter if you want your Ficus to grow nice and tall, which they are happy to do! This plant does best in bright indirect light and water once the top of the soil is dry and the leaves soften.',
            img: `${files['plant22.jpeg'].default}`,
            isNew: false,
            rating: '4',
            category: 'Indoor',
            initialPrice: 45,
            discount: 8,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Rubber Plant',
            description: 'Rubber plants love bright indirect sunlight, moist soil, and high humidity. The waxy leaves really catch the light for a beautiful presentation. These trees – also known by their proper name of Ficus elastica – tend to grow quite tall unless pruned so they’re a great candidate for beautiful spacious planters.',
            img: `${files['plant23.jpeg'].default}`,
            isNew: true,
            rating: '3.5',
            category: 'Aerial',
            initialPrice: 56,
            discount: 13,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Bird Of Paradise',
            description: 'Now this is a statement piece! Strelitzia nicolai, or the giant white bird of paradise, grows up to 20 feet tall in ideal conditions and certainly tall enough to make an impression in any interior or atrium. While many plants are sensitive to full sun, this plant welcomes it. Keep the soil moist and remember to fertilize monthly to get the best results.',
            img: `${files['plant24.jpeg'].default}`,
            isNew: false,
            rating: '4.5',
            category: 'Outdoor',
            initialPrice: 67,
            discount: 20,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Elephant Ears Plant',
            description: 'Colocasia gigantean is another big-leafed plant for interiors that need a big dose of the outdoors. In some countries, including Japan and parts of Vietnam, the stalk is a popular ingredient in meals after careful preparation. They are a little tricky to grow indoors but very worthwhile, requiring indirect sunlight and very high humidity.',
            img: `${files['plant25.jpeg'].default}`,
            isNew: true,
            rating: '4',
            category: 'Aerial',
            initialPrice: 52,
            discount: 12,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Snake Plant',
            description: 'What most people know as the snake plant or mother-in-law’s tongue, but officially known as Sansevieria Laurentii, is an exceptionally hardy and distinctive plant with high-contrast banding that is impossible to ignore. These plants grow rather tall and make a great statement piece for low tables. Snake plants are tolerant of low light and irregular watering, considered nearly indestructible by many.',
            img: `${files['plant26.jpeg'].default}`,
            isNew: true,
            rating: '3.5',
            category: 'Indoor',
            initialPrice: 98,
            discount: 22,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Hawaiian Umbrella Tree Bonsai',
            description: 'Bonsai enthusiasts will love this versatile and attractive tree, officially known as Schefflera arboricola. Even better, they stand up wonderfully to a variety of lighting conditions and watering routines. Let your umbrella tree grow naturally or trim it into a distinctive shape. Let it grow tall, or restrict to a small pot as a desk decoration.',
            img: `${files['plant27.jpeg'].default}`,
            isNew: false,
            rating: '4',
            category: 'Outdoor',
            initialPrice: 68,
            discount: 27,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Ivy (Hydera)',
            description: ' Ivy looks wonderful in a variety of planter types, from pedestals to hanging planters and even large concrete bowls and other decorative pieces. It’s hard to go wrong when dressing up a plant that has such spectacularly colorful leaves!',
            img: `${files['plant28.jpeg'].default}`,
            isNew: true,
            rating: '3.5',
            category: 'Indoor',
            initialPrice: 62,
            discount: 21,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Boston Fern',
            description: 'Nephrolepis exaltata is a topical fern that just bursts with energy and volume. These Boston ferns prefer damp high-nutrient soil and bright filtered light. They look spectacular as a hanging plant, on a pedestal, or even on an ordinary side table. It’s hard to go wrong with a fern as gorgeous and hardy as this one.',
            img: `${files['plant29.jpeg'].default}`,
            isNew: false,
            rating: '4.5',
            category: 'Outdoor',
            initialPrice: 68,
            discount: 22,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    },
    {
        id: uuidv4(),
        slug() {
            return buildSlug(this.features.name)
        },
        features: {
            name: 'Asparagus Fern',
            description: 'Feathery fern-like tendrils make the Asparagus setaceus look lighter than a cloud. They’re a popular indoor plant due to their low-maintenance needs (preferring bright indirect light and watering when dry), but the dried fronds are popular in flower arrangements as well. Do you love the planter? You can purchase it by following this link.',
            img: `${files['plant30.jpeg'].default}`,
            isNew: true,
            rating: '4',
            category: 'Aerial',
            initialPrice: 45,
            discount: 12,
            discountedPrice() {
                return applyDiscount(this.initialPrice, this.discount);
            }
        }
    }
];

export {
    trendingProducts,
    productsList
}