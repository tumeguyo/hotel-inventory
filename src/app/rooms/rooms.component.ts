import { Component, OnInit, ViewChild } from '@angular/core';
import { Room, Roomlist } from './rooms';
import { log } from 'console';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
 rooms: Room = {
   totalRooms: 20,
   availableRooms: 10,
   bookedRooms: 5,
   price: undefined
 }

  Roomlist: Roomlist[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner,free WIFI,TV,Bathroom,Kitchen',
    price: 500,
    photos: 'https://media.istockphoto.com/id/1365312403/photo/luxury-classic-interior-lounge-lobby-reception-with-leather-sofa-book-shelf-living-room.jpg?s=1024x1024&w=is&k=20&c=lrCCBjUNXEk6r3ufPp7zCWX_mD9WZeExJcBSidye-MU=',
    checkInTime: new Date('12-Nov-2021'),
    rating:4.5,
    
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner,free WIFI,TV,Bathroom,Kitchen',
    price: 1000,
    photos: 'https://media.istockphoto.com/id/1365312403/photo/luxury-classic-interior-lounge-lobby-reception-with-leather-sofa-book-shelf-living-room.jpg?s=1024x1024&w=is&k=20&c=lrCCBjUNXEk6r3ufPp7zCWX_mD9WZeExJcBSidye-MU=',
    checkInTime: new Date('12-Nov-2021'),
    rating:3.548,
  
  },
  {
    roomNumber: 3,
    roomType: 'Private Suit',
    amenities: 'Air Conditioner,free WIFI,TV,Bathroom,Kitchen',
    price: 1500,
    photos: 'https://media.istockphoto.com/id/1365312403/photo/luxury-classic-interior-lounge-lobby-reception-with-leather-sofa-book-shelf-living-room.jpg?s=1024x1024&w=is&k=20&c=lrCCBjUNXEk6r3ufPp7zCWX_mD9WZeExJcBSidye-MU=',
    checkInTime: new Date('12-Nov-2021'),
    rating:2.555,
  
  }
  ];
  room: any;
  // roomService=new RoomsService();this a service



  constructor(private roomsService:RoomsService) { }
  ngOnInit(): void {
    this.Roomlist=this.roomsService.getRooms();
   }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom({ room }: { room: Roomlist; }): void{
    console.log(room)
    
    
  }
}
