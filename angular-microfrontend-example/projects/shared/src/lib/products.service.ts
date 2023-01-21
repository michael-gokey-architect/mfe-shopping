import { Injectable } from '@angular/core';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  
  public getProducts(): Product[] {
    return [
      {
        id: 1,
        link: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
        name: 'Lemon Sunshine',
        description: 'Bursting with orange and lemon flavors, it\'s the perfect treat to make every day a sunny day!'
      },
      {
        id: 2,
        link: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Red Velvet',
        description: 'Chocolate, cream cheese, and velvety red... This classic treat is sure to delight!'
      },
      {
        id: 3,
        link: 'https://images.unsplash.com/photo-1640806354894-35ac4b8df5ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Dark Chocolate',
        description: 'Deep flavors of dark chocolate are in every bite. With a chocolate cake and fudgey frosting, this cake has it all. Chocoholics, rejoice!'
      },
      {
        id: 4,
        link: 'https://images.unsplash.com/photo-1599785209796-786432b228bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Shirly Temple',
        description: 'A sure favorite for kids of all ages. Vanilla cake, pink frosting, and a cherry on top!'
      },
      {
        id: 5,
        link: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Mint Chocolate',
        description: 'Dark chocolate cake with a minty frosting. A delicious combination of refreshing and decadent.'
      },
      {
        id: 6,
        link: 'https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Strawberry Fields Forever',
        description: 'When strawberries are in season, we celebrate with strawberry in every bite. You don\'t want to miss this seasonal special!',
      },
      {
        id: 7,
        link: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Chocolate hazelnut',
        description: 'Chocolate and hazelnut together is perfection. Our weekly special might be perfect as a result!'
      },
      {
        id: 8,
        link: 'https://images.unsplash.com/photo-1640806354894-35ac4b8df5ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Dark Chocolate',
        description: 'Deep flavors of dark chocolate are in every bite. With a chocolate cake and fudgey frosting, this cake has it all. Chocoholics, rejoice!'
      },
      {
        id: 9,
        link: 'https://images.unsplash.com/photo-1599785209796-786432b228bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Temple of Doom',
        description: 'Best Indy Jones movie with  cherry on top!'
      },
    ]
  }


}
