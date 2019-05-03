class product{
    constructor(id,price,name,category,imgUri){
        this.id=id;
        this.price=price;
        this.name=name;
        this.category=category;
        this.imgUri=imgUri;
    }
}

class announcement{
    constructor(id,title,category,description,date,imgUri){
        this.id=id;
        this.title=title;
        this.category=category;
        this.description=description;
        this.date=date;
        this.imgUri=imgUri;
    }
}

class prodDetails{
    constructor(id,weight,nutrients,description){
        this.id=id;
        this.weight=weight;
        this.nutrients=nutrients;
        this.description=description;
    }
}
class recipe{
    constructor(id,difficulty,name,description,step,ingredient,imgUri){
        this.id=id;
        this.difficulty=difficulty;
        this.name=name;
        this.description=description;
        this.step=step;
        this.ingredient=ingredient;
        this.imgUri=imgUri;

    }
}

let recipeList=[
    new recipe("r1","Moderate","Strawberry Avocado Spinach Salad With Chicken",
    `A simple balsamic dressing does double duty as a marinade for the chicken in this light and healthy, fresh spinach, avocado and strawberry salad.`,
    `
    <ol>
        <li>Whisk the extra virgin olive oil with the balsamic vinegar, sugar, tarragon, kosher salt and freshly ground black pepper in a small bowl until blended.</li>
        <li>Place the chicken breasts in a shallow bowl and cover with half of the dressing, cover and refrigerate for 30 minutes to 2 hours.</li>
        <li>Spray a grill pan or 12-inch non-stick pan with cooking spray and heat to medium high. Place the chicken breasts on the hot grill pan. Cook for 3 minutes then flip the chicken breasts. Cook for another 3 minutes, and turn. Reduce the cooking temperature to medium low and cook the chicken for 20-25 minutes more, turning every 5 minutes or so. Cooking time will depend on the thickness of the chicken, but it will be done when it hits 165 degrees internal temperature. Let the chicken rest for 5 minutes then slice into 1/4 inch slices.</li>
        <li>Arrange the spinach, strawberries and red onion in a bowl. Lightly toss with the remaining dressing. Add the avocado, sliced chicken and top with feta and almond slices. Serve immediately.</li>
    </ol>
    `,
    `
    <ol>
        <li>1/4 cup extra virgin olive oil</li>
        <li>1 tablespoon golden balsamic vinegar</li>
        <li>1 teaspoon sugar</li>
        <li>1 tablespoon roughly chopped fresh tarragon</li>
        <li>1/4 teaspoon kosher salt</li>
        <li>1/4 teaspoon freshly ground black pepper</li>
        <li> 2 boneless skinless chicken breasts</li>
        <li> 6 cups loosely packed fresh spinach</li>
        <li> 6-8 large strawberries hulled and quartered</li>
        <li> 1 avocado peeled, seeded and cut into chunks</li>
        <li> 3-4 thinly sliced rings of red onion</li>
        <li> 1/4 cup feta cheese</li>
        <li> 2 tablespoons sliced almonds</li>
    </ol>
    
    `,
    'images/recipes/recipes2.PNG'
    ),
    new recipe("r2","Easy","Avocado Shrimp Salad Recipe",
    `Avocado Shrimp Salad Recipe with cajun shrimp and the best flavors of summer. The cilantro lemon dressing gives this shrimp salad incredible fresh flavor!`,
    `
    <ol>
        <li>Pat dry shrimp with paper towels and place in a medium bowl. Add 1 tsp cajun spice, 2 pressed garlic cloves, a pinch of salt and stir to combine.</li>
        <li>Place a large non-stick pan over medium-high heat. Add 2 Tbsp butter and once its melted and hot, add shrimp in a single layer. Sauté 2 minutes per side or just until cooked through. Transfer to a plate and set aside.</li>
        <li>Chop, rinse and spin dry 1 medium head of romaine lettuce. You should end up with about 6 cups lettuce. Transfer that to a large mixing bowl. Now add 3 sliced tomatoes, thinly sliced red onion, sliced cucumbers, 2 sliced avocados and 1 cup cooked corn.</li>
        <li>To make the dressing, start with 3 Tbsp of fresh lemon juice, now finely chop about 1/2 cup of cilantro and stir that in. Add 3 Tbsp of olive oil and extra virgin has the best flavor. Season with 1 tsp salt and a generous pinch of black pepper and stir that together.</li>
    </ol>
    `,
    `
    <ol>
        <li>1 lb medium shrimp 31-40 Count, peeled and deveined</li>
        <li>1 tsp cajun spice</li>
        <li>2 cloves garlic pressed or grated</li>
        <li>Pinch of salt</li>
    </ol>
    <ol>
        <li>1 medium romaine lettuce 5-6 cups chopped</li>
        <li>1/2 lb 3 medium Roma tomatoes, sliced</li>
        <li>1/2 medium red onion thinly sliced</li>
        <li>1/2 English cucumber or 3 small, sliced</li>
        <li>2 avocados peeled, pitted and sliced</li>
        <li>1 cup corn kernels from 2 freshly cooked cobs</li>
    </ol>
    <ol>
        <li>Juice of 1 large lemon 3 Tbsp</li>
        <li>1/2 small bunch of cilantro 1/2 cup finely chopped or parsley</li>
        <li>3 Tbsp extra virgin olive oil</li>
        <li>1 tsp sea salt or 3/4 tsp table salt</li>
        <li>1/8 tsp black pepper</li>
        <li>2 Tbsp unsalted butter</li>
    </ol>
    
    `,
    'images/recipes/recipes.PNG'
    )
]

let announceList=[
    new announcement(
        "A1",
        "Healthy Seminar","Seminar",
        `This seminar will be held in Wengridient store at 5 may 2019 09:00 AM,
        pls check <a class='green-anchor' href='Wengridient.html'>Wengridient profile</a> to check for the store location,
        this seminar is free to enter See you there ^_^ `,
        "Posted on 30-April-2019",
        "images/announcement/HealthySeminar.PNG"),
    new announcement(
        "A2",
        "Product Update : Banana","Product",
        `This is new product that we put in product list with fruit category, order it soon 10 first buyers will get 15% off,
        this product is harvested from a farm with a good climates and no pecticide so it is good for your health`,
        "Posted on 2-May-2019",
        "images/announcement/newBanana.PNG"
    )
]



let vegeList=[
    //Vegetables
    new product('v1',13000,'Fresh Spinach/250gr','Vegetables','images/products/Veget/bayam.jpg'),
    new product('v2',10000,'Fresh Broccoli/250gr','Vegetables','images/products/Veget/brokoli.jpg'),
    new product('v3',12000,'Fresh Water Spinach/250gr','Vegetables','images/products/Veget/kangkung.jpg'),
    new product('v4',13000,'Fresh Cabagge/450gr','Vegetables','images/products/Veget/kol.jpg'),
    new product('v5',5000,'Fresh Mustard Greens/300gr','Vegetables','images/products/Veget/sawi.jpg'),
    new product('v6',25000,'Fresh Tomato/1kg','Vegetables','images/products/Veget/tomat.jpg')
]
let beanList=[
    new product('b1',27000,'Fresh Green Beans/500gr','Bean','images/products/Bean/kacanghijau.png'),
    new product('b2',22000,'Fresh Peanuts/500gr','Bean','images/products/Bean/kacangtanah.jpg'),
    new product('b3',20000,'Fresh Soybeans/500gr','Bean','images/products/Bean/kacangkedelai.jpg'),
    new product('b4',28000,'Fresh Red Beans/500gr','Bean','images/products/Bean/kacangmerah.jpg')
]
let fruitList=[
    new product('f1',58000,'Fresh Avocado/1kg','Fruit','images/products/Fruit/alpukat.jpg'),
    new product('f2',14000,'Fresh Dragon Fruit/1pcs','Fruit','images/products/Fruit/buahnaga.jpg'),
    new product('f3',20000,'Fresh Papaya/1pcs','Fruit','images/products/Fruit/pepaya.jpg'),
    new product('f4',31000,'Fresh Banana/1comb','Fruit','images/products/Fruit/pisang.jpg'),
    new product('f5',58000,'Fresh Grape/500gr','Fruit','images/products/Fruit/anggur.jpg'),
    new product('f6',14000,'Fresh Pineapple/1pcs','Fruit','images/products/Fruit/nanas.jpg'),
    new product('f7',77000,'Fresh Apple/1kg','Fruit','images/products/Fruit/apel.jpg'),
    new product('f8',80000,'Fresh Strawberry/20pcs','Fruit','images/products/Fruit/stroberi.jpg')
]
let seasoningList=[
    new product('s1',30000,'Red Onion/500gr','seasoning','images/products/Spice/bawangmerah.jpg'),
    new product('s2',40000,'Garlic/500gr','seasoning','images/products/Spice/bawangputih.jpg'),
    new product('s3',12000,'Chili/250gr','seasoning','images/products/Spice/cabai.jpg'),
    new product('s4',15000,'Ginger/300gr','seasoning','images/products/Spice/jahe.jpg'),
    new product('s5',20000,'Cinnamon/100gr','seasoning','images/products/Spice/kayumanis.jpg')
]

let detailList=[
    new prodDetails("f1",1.0,`Vitamin A, Viatamin B12, Vitamin C`,
    `This product is harvested from a farm with a good climates and no pecticide so it is good for your health`),
    new prodDetails("v1",1.0,`Vitamin A, Viatamin B12`,
    `This product is harvested from a farm with a good climates and no pecticide so it is good for your health`),
    new prodDetails("s1",1.0,`Vitamin A, Viatamin B12, Vitamin C`,
    `This product is harvested from a farm with a good climates and no pecticide so it is good for your health`)
]