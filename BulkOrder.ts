// Bullk order system

interface item {
  name: string;
  quantity: number;
  price: number;
}

const itemList: item[] = [
  {
    name: "Laptop",
    quantity: 12,
    price: 65000,
  },
  {
    name: "Mobile",
    quantity: 8,
    price: 12000,
  },
  {
    name: "HeadPhone",
    quantity: 4,
    price: 450,
  },
  {
    name: "Bag",
    quantity: 5,
    price: 1234,
  },
];



function calaculateTotal(itemList: item[]) {
    for (let index = 0; index < itemList.length; index++) {
        const element = itemList[index];
        let subtotal = 0;
          let discount=0;
        if (element.quantity >= 10) {
            subtotal = element.price * element.quantity;
            discount = (subtotal * 20) / 100;
        }
        else if (element.quantity >= 5 && element.quantity < 10) {
            subtotal = element.price * element.quantity;
           discount = (subtotal * 10) / 100;
            
        }
        else {
            subtotal = element.price * element.quantity;
         discount = (subtotal * 5) / 100;
            
        }

        console.log( `oreder Proceesd of item ${element.name} ,Total amount after discount :${subtotal - discount}`);
        
    }
}
 calaculateTotal(itemList);

