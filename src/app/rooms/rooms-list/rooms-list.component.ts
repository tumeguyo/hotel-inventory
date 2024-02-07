import { Component, DoCheck, Input, OnInit, Output } from '@angular/core';
import { Room, Roomlist } from '../rooms';
import { EventEmitter } from 'stream';

type NewType = Roomlist;

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent implements OnInit {
@Input () rooms:Roomlist[]=[];



constructor(){}
ngOnInit(): void {}

selectRoom(room:Roomlist){

}
}


