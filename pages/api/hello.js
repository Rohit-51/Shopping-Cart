// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    let products = [
        {   
            id: "101",
            title: "Hair Oil",
            description: "Lorem ipsum dolor sit amet. Non consequatur libero sit vero dolor ea fugiat incidunt vel modi corporis hic voluptatum autem  molestiae exercitationem.",
            price: 71.35,
            image: "https://th.bing.com/th?q=Avocado+Oil+Hair&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
            shoppable: true
        },
        {
            id: "102",
            title: "Wrist watch",
            description: "Lorem ipsum dolor sit amet. Non consequatur libero sit vero dolor ea fugiat incidunt vel modi corporis hic voluptatum autem  molestiae exercitationem.",
            price: 450.86,
            image: "https://th.bing.com/th/id/OIP.MVar6WSmjZ-OOSt6vzIHHgHaHa?w=178&h=178&c=7&r=0&o=5&pid=1.7",
            shoppable: true
        },
        
        {
            id: "103",
            title: "Shoes",
            description: "Lorem ipsum dolor sit amet. Non consequatur libero sit vero dolor ea fugiat incidunt vel modi corporis hic voluptatum autem  molestiae exercitationem.",
            price: 950.86,
            image: "https://th.bing.com/th/id/OIP._zYAxGunbFu7cclaGGBT6QHaIq?w=158&h=186&c=7&r=0&o=5&pid=1.7",
            shoppable: true
        },
        {
            id: "104",
            title: "HeadPhone",
            description: "Lorem ipsum dolor sit amet. Non consequatur libero sit vero dolor ea fugiat incidunt vel modi corporis hic voluptatum autem  molestiae exercitationem.",
            price: 1085.55,
            image: "https://th.bing.com/th/id/OIP.-mQ8ttsjFZhrS2xGsBd9FAHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7",
            shoppable: true
        },
        {
            id: "105",
            title: "Jacket",
            description: "Lorem ipsum dolor sit amet. Non consequatur libero sit vero dolor ea fugiat incidunt vel modi corporis hic voluptatum autem  molestiae exercitationem.",
            price: 2250.66,
            image: "https://th.bing.com/th/id/OIP.s41cah0_uahdnmQpDUl3_gHaHa?w=178&h=178&c=7&r=0&o=5&pid=1.7",
            shoppable: true
        },
        {
            id: "106",
            title: "Laptop",
            description: "Lorem ipsum dolor sit amet. Non consequatur libero sit vero dolor ea fugiat incidunt vel modi corporis hic voluptatum autem  molestiae exercitationem.",
            price: 51048.86,
            image: "https://th.bing.com/th/id/OIP.RXLk7QAkVi2Vj8FzpQoADgHaHa?w=198&h=199&c=7&r=0&o=5&pid=1.7",
            shoppable: true
        },
        {

            id: "107",
            title: "Jeans",
            description: "Lorem ipsum dolor sit amet. Non consequatur libero sit vero dolor ea fugiat incidunt vel modi corporis hic voluptatum autem  molestiae exercitationem.",
            price: 855.86,
            image: "https://th.bing.com/th/id/OIP.agWmYHR-_FFEMKVuj4DmkgHaJ4?w=178&h=237&c=7&r=0&o=5&pid=1.7",
            shoppable: true
        },
        {
            id: "108",
            title: "Shirt",
            description: "Lorem ipsum dolor sit amet. Non consequatur libero sit vero dolor ea fugiat incidunt vel modi corporis hic voluptatum autem  molestiae exercitationem.",
            price: 950.86,
            image: "https://th.bing.com/th/id/OIP.RUIBi6BysVALISbULM1MZgHaJ4?w=178&h=237&c=7&r=0&o=5&pid=1.7",
            shoppable: true
        },
        {
            id: "109",
            title: "Mobile Cover",
            description: "Lorem ipsum dolor sit amet. Non consequatur libero sit vero dolor ea fugiat incidunt vel modi corporis hic voluptatum autem  molestiae exercitationem.",
            price: 350.45,
            image: "https://th.bing.com/th/id/OIP.W8eD6OtfuSJg6t58qjrTFwHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7",
            shoppable: true
        },
        {
            id: "110",
            title: "Mobile",
            description: "Lorem ipsum dolor sit amet. Non consequatur libero sit vero dolor ea fugiat incidunt vel modi corporis hic voluptatum autem  molestiae exercitationem.",
            price: 14499,
            image: "https://th.bing.com/th/id/OIP.fD6NlCJfHnVIEm9JhPHnhAHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7",
            quantity: 0,
            shoppable: true
        },
    ]

    res.status(200).json(products);
}
