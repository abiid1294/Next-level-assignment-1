function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        let result = value.toUpperCase();
        return result;
    } else if (typeof value === "number") {
        let result = value * 10;
        return result;
    } else {
        let result = !value;
        return result;
    }
}

function getLength(input: string | any[]): number {
    if (typeof input === "string") {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            count++;
        }
        return count;
    } else {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            count++;
        }
        return count;
    }
}

class Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    getDetails(): string {
        let details = "Name: " + this.name + ", Age: " + this.age;
        return details;
    }
}

function filterByRating(items: {title: string, rating: number}[]): {title: string, rating: number}[] {
    let goodItems = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].rating >= 4) {
            goodItems.push(items[i]);
        }
    }
    return goodItems;
}

function filterActiveUsers(users: {id: number, name: string, email: string, isActive: boolean}[]): {id: number, name: string, email: string, isActive: boolean}[] {
    let activeOnes = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive) {
            activeOnes.push(users[i]);
        }
    }
    return activeOnes;
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(b: Book): void {
    let available = b.isAvailable ? "Yes" : "No";
    let output = "Title: " + b.title + ", Author: " + b.author + ", Published: " + b.publishedYear + ", Available: " + available;
    console.log(output);
}

function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    let allItems = [];
    
    for (let i = 0; i < arr1.length; i++) {
        allItems.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        allItems.push(arr2[i]);
    }
    
    let uniqueItems = [];
    
    for (let i = 0; i < allItems.length; i++) {
        let alreadyExists = false;
        for (let j = 0; j < uniqueItems.length; j++) {
            if (allItems[i] === uniqueItems[j]) {
                alreadyExists = true;
                break;
            }
        }
        if (!alreadyExists) {
            uniqueItems.push(allItems[i]);
        }
    }
    
    return uniqueItems;
}

function calculateTotalPrice(products: {name: string, price: number, quantity: number, discount?: number}[]): number {
    let finalTotal = 0;
    
    for (let i = 0; i < products.length; i++) {
        let p = products[i];
        let totalForProduct = p.price * p.quantity;
        
        if (p.discount !== undefined) {
            let discountValue = totalForProduct * p.discount / 100;
            totalForProduct = totalForProduct - discountValue;
        }
        
        finalTotal = finalTotal + totalForProduct;
    }
    
    return finalTotal;
}