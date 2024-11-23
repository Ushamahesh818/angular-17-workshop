import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo-1',
  standalone: true,
  imports: [],
  templateUrl: './subject-demo-1.component.html',
  styleUrl: './subject-demo-1.component.css'
})
export class SubjectDemo1Component {

  constructor(){
  // this.subjectDemo();
  // this.behaviorSubjectDemo();
  //this.behaviorSubjectDemo();
  this.replaySubjectDemo();
  this.AsyncSubjectDemo();
  }

  subjectDemo(){
    let publisher = new Subject();
    publisher.next("aaaaa");

    let subscriber1=publisher.subscribe(val=>console.log("subscriber-1 "+val))
    publisher.next("bbbb")
    publisher.next("cccc")
  }

  behaviorSubjectDemo(){
    let publisher = new BehaviorSubject("Helloooo");
    // publisher.next("aaaaa");

    let subscriber1=publisher.subscribe(val=>console.log("subscriber-1 "+val))
    publisher.next("bbbb")
    let subscriber2=publisher.subscribe(val=>console.log("subscriber-2 "+val))
    publisher.next("cccc")
    publisher.next("DDDD")
    let subscriber3=publisher.subscribe(val=>console.log("subscriber-3 "+val))
  }

  replaySubjectDemo(){
    let publisher = new ReplaySubject();
    // publisher.next("aaaaa");

    let subscriber1=publisher.subscribe(val=>console.log("subscriber-1 "+val))
    publisher.next("bbbb")
    let subscriber2=publisher.subscribe(val=>console.log("subscriber-2 "+val))
    publisher.next("cccc")
    publisher.next("DDDD")
    let subscriber3=publisher.subscribe(val=>console.log("subscriber-3 "+val))
  }

  AsyncSubjectDemo(){
    let publisher = new AsyncSubject();
    // publisher.next("aaaaa");

    let subscriber1=publisher.subscribe(val=>console.log("subscriber-1 "+val))
    publisher.next("bbbb")
    let subscriber2=publisher.subscribe(val=>console.log("subscriber-2 "+val))
    publisher.next("cccc")
    publisher.next("DDDD")
    let subscriber3=publisher.subscribe(val=>console.log("subscriber-3 "+val))
    publisher.complete()
  }
}
