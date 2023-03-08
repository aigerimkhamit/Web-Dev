import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Albums} from "../db";
import {Album, Photo} from "../models";
import {AlbumService} from "../album.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  updatedTitle: string;
  constructor(private route: ActivatedRoute, private albumService: AlbumService, public location: Location) {
    this.album ={} as Album;
    this.loaded = true;
    this.album.editing = false;
    this.updatedTitle = '';
  }
  ngOnInit() {
    this.getAlbumDetails();
  }
  getAlbumDetails(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) =>{
        this.album = album;
        this.loaded = true;
      });
      // this.album = Albums.find((album:Album) => album.id === id) as Album;
    })
  }
  edit(){
    this.album.editing = true;
  }
  save(){
    this.album.title = this.updatedTitle;
    this.albumService.updateAlbum(this.album).subscribe((album)=> {
      this.album = album;
      this.album.editing = false;
      this.updatedTitle = '';
    });
  }


}
