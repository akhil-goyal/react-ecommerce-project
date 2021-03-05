import { v4 as uuidv4 } from 'uuid';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

export const productsList = [
    {
        id: uuidv4(),
        features: {
            name: 'Silver Dollar Plant',
            description: 'If you’re looking for drought-tolerant plants, succulents like the Xerosicyos da',
            img: `${images['plant1.jpg'].default}`,
            isNew: true,
            rating: 4,
            category: 'indoor',
            price: {
                initalPrice: 50,
                discount: 20,
                finalPrice: 40
            }
        }
    },
    {
        id: uuidv4(),
        features: {
            name: 'Amrood',
            price: 30
        }
    },
    {
        id: uuidv4(),
        features: {
            name: 'Peepal',
            price: 40
        }
    },
];