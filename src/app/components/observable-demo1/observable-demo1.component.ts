import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, filter, from, interval, map, of, range, zip } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {
  //   observable1=new Observable(function(observer){
  //       observer.next("AAAAAAA")
  //       observer.next("BBBBBB")
  //       observer.next("cccccc")
  //       observer.next("dddddddddd")
  //       observer.complete()
  //   })
  //   subscriber1=this.observable1.subscribe({
  //     next:(data)=>console.log(data),
  //     error:(e)=>console.log(e),
  //     complete:()=>console.log('completed')
  //   })

  //   arr=[10,20,30,40,50]
  //   observable2=from(this.arr);
  //  subscriber2= this.observable2.subscribe(val=>console.log(val))

  //   observable3=interval(60);
  //  subscriber3=this.observable3.subscribe(val=>console.log(val))

  //  timerId= setTimeout(()=>{this.subscriber3.unsubscribe()},1000)

  //  observable4=range(1,10);
  // //  subscriber4=this.observable4.subscribe(val=>console.log(val));

  //  observable5_even=this.observable4.pipe(filter((ele:any)=>ele%2 === 0))
  //  subscriber5=this.observable5_even.subscribe(val=>console.log(val));

  //  observable6_square=this.observable4.pipe(map((ele:any)=>ele * ele));
  //  subscriber6_square=this.observable6_square.subscribe(val=>console.log(val));
  time = new Observable(function (observer) {
    setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000)
  })

  zipDemo() {
    let publisher1=of(31,56,90);
    let publisher2=of("sanjay","sarag","swara");
    let publisher3=of("Mysore","Bangalore","Toronto");

    let finalPublisher=zip(publisher1,publisher2,publisher3).pipe(
      map(([age,name,addre])=>({age,name,addre})));
    finalPublisher.subscribe(data=>console.log(data))
  }

  constructor(){
    this.zipDemo();
  }
}
