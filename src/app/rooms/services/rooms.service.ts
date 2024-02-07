import { Injectable } from '@angular/core';
import { RoomsComponent } from '../rooms.component';
import { RoomsListComponent } from '../rooms-list/rooms-list.component';
import { Roomlist } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  RoomList: Roomlist[] = [

    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner,free WIFI,TV,Bathroom,Kitchen',
      price: 500,
      photos: 'https://media.istockphoto.com/id/1365312403/photo/luxury-classic-interior-lounge-lobby-reception-with-leather-sofa-book-shelf-living-room.jpg?s=1024x1024&w=is&k=20&c=lrCCBjUNXEk6r3ufPp7zCWX_mD9WZeExJcBSidye-MU=',
      checkInTime: new Date('12-Nov-2021'),
      rating: 4.5,

    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner,free WIFI,TV,Bathroom,Kitchen',
      price: 1000,
      photos: 'https://media.istockphoto.com/id/1365312403/photo/luxury-classic-interior-lounge-lobby-reception-with-leather-sofa-book-shelf-living-room.jpg?s=1024x1024&w=is&k=20&c=lrCCBjUNXEk6r3ufPp7zCWX_mD9WZeExJcBSidye-MU=',
      checkInTime: new Date('12-Nov-2021'),
      rating: 3.548,

    },
    {
      roomNumber: 3,
      roomType: 'Private Suit',
      amenities: 'Air Conditioner,free WIFI,TV,Bathroom,Kitchen',
      price: 1500,
      photos: 'https://media.istockphoto.com/id/1365312403/photo/luxury-classic-interior-lounge-lobby-reception-with-leather-sofa-book-shelf-living-room.jpg?s=1024x1024&w=is&k=20&c=lrCCBjUNXEk6r3ufPp7zCWX_mD9WZeExJcBSidye-MU=',
      checkInTime: new Date('12-Nov-2021'),
      rating: 2.555,

    }]

  constructor() { 
    console.log('Rooms Service Initialized...');
    
  }

  getRooms() {
    return this.RoomList;
  }



}


