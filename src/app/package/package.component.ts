import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  constructor() { }

  ngOnInit() {
  }

  public triggerSnapshot() {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage) {
    console.log('image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
