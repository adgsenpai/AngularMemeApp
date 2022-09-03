import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MemeComponent {
  title = 'ADG MEME APP WITH ANGULAR';
  // do a GET request to https://api.imgflip.com/get_memes 

  // create an empty array to store the memes
  memes : any[] = [];

  fetchData() {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => {
      console.log(data.data.memes);
      this.memes = data.data.memes;

    })
  }

  // set the memes array to fetchData
  ngOnInit() {
    this.fetchData();
  }
  
}

