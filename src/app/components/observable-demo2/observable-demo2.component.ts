import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  posts:any=[];
  albums:any=[];
  comments:any=[];
  
  constructor(private _httpClient:HttpClient){
    this.fetchDataFromMultipleAPIs();
  }
  fetchDataFromMultipleAPIs(){
    //let userNames=['google','Ushamahesh818']
    let userNames=['posts','albums','comments']
    let requests=userNames.map(username=>{
      //return this._httpClient.get(`https://api.github.com/users/${username}`)});
      return this._httpClient.get(`https://jsonplaceholder.typicode.com/${username}`)})
      forkJoin(requests).subscribe((responses)=>{
        //console.log(responses)
        this.posts=responses[1];
        this.albums=responses[1];
        this.comments=responses[2];
      })
    
  }

  withoutMergeMapDemo(){
   let userPublisher=of(1,2,3,4,5);
   let userSubscriber=userPublisher.subscribe(userId=>{
      console.log(userId);
      this._httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe(user=>{
        console.log(user)
      })
   })
    
  }

  withMergeMapDemo(){
    let userPublisher=of(1,2,3,4,5);
    userPublisher.pipe(
      mergeMap((userId)=>{
        return this._httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      })
    )
    }


  
}
