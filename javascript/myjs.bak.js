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
    new recipe("r1","Easy","Nama resep",
    `Description
    blablablablabla`,
    `Step by step`,
    `1 gr avocado `,
    'images/motto.PNG'
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
    new product('v1',13000,'Fresh Almond','Vegetables','images/motto.PNG'),
    new product('v2',13000,'Fresh Tomato','Vegetables','images/motto.PNG'),
    new product('v3',13000,'Fresh Cocaine','Vegetables','images/cocaine.PNG'),
    new product('v4',13000,'Fresh Kelor','Vegetables','images/motto.PNG'),
    new product('v5',13000,'Fresh Cabagge','Vegetables','images/motto.PNG'),
    new product('v6',13000,'Fresh Cabagge','Vegetables','images/motto.PNG')
]
let beanList=[
    new product('b1',11000,'Fresh Almond','Bean','images/motto.PNG'),
    new product('b2',15000,'Fresh Hazelnut','Bean','images/motto.PNG'),
    new product('b3',17000,'Fresh Kedelai','Bean','images/cocaine.PNG'),
    new product('b4',13000,'Fresh Kelor','Bean','images/motto.PNG')
]
let fruitList=[
    new product('f1',13000,'Fresh Cabagge','Fruit','images/motto.PNG'),
    new product('f2',13000,'Fresh Cabagge','Fruit','images/motto.PNG'),
    new product('f3',13000,'Fresh Cabagge','Fruit','images/motto.PNG'),
    new product('f4',13000,'Fresh Cabagge','Fruit','images/motto.PNG'),
    new product('f5',13000,'Fresh Cabagge','Fruit','images/motto.PNG'),
    new product('f6',13000,'Fresh Cabagge','Fruit','images/motto.PNG'),
    new product('f7',13000,'Fresh Cabagge','Fruit','images/motto.PNG'),
    new product('f8',13000,'Fresh Cabagge','Fruit','images/motto.PNG')
]
let seasoningList=[
    new product('s1',13000,'Sambal Matah','seasoning','images/motto.PNG'),
    new product('s2',13000,'Fresh Cabagge','seasoning','images/motto.PNG'),
    new product('s3',13000,'Fresh Cabagge','seasoning','images/motto.PNG'),
    new product('s4',13000,'Fresh Cabagge','seasoning','images/motto.PNG'),
    new product('s5',13000,'Fresh Cabagge','seasoning','images/motto.PNG')
]

let detailList=[
    new prodDetails("f1",1.0,`Vitamin A, Viatamin B12, Vitamin C`,
    `This product is harvested from a farm with a good climates and no pecticide so it is good for your health`),
    new prodDetails("v1",1.0,`Vitamin A, Viatamin B12`,
    `This product is harvested from a farm with a good climates and no pecticide so it is good for your health`),
    new prodDetails("s1",1.0,`Vitamin A, Viatamin B12, Vitamin C`,
    `This product is harvested from a farm with a good climates and no pecticide so it is good for your health`)
]