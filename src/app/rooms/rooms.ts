export interface Room {
    price: any;
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;

}

export interface Roomlist {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkInTime: Date;
    rating:number;
    
}