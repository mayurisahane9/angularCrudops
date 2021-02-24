import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable ,  Subject } from 'rxjs';
import {NotificationsService} from 'angular2-notifications';

@Injectable()
export class AlertService {
    options: any = {
        position: ['bottom', 'right'],
      };
      position1 = 'bottom';
      position2 = 'right';
      timeOut = 10;
      showProgressBar = true;
      pauseOnHover = true;
      lastOnBottom = true;
      clickToClose = true;
      maxLength = 0;
      maxStack = 8;
      preventDuplicates = false;
      preventLastDuplicates = false;
      theClass: string;
      rtl = false;
      animate = 'fromRight';
      icons: string;
      subType = 'success';
      title: string;
      msg: string;

    constructor(private router: Router,public servicePNotify: NotificationsService) {
        // clear alert message on route change

    }


    notify(type,title,msg='message') {
        console.log('mesage');
    this.servicePNotify.remove();
    let options: any = {title: title, msg: msg, type:type};
    this.options  = {
      position : [
        ('position1' in options) ? options.position1 : this.position1,
        ('position2' in options) ? options.position2 : this.position2
      ],
      maxStack: ('maxStack' in options) ? options.maxStack : this.maxStack,
      // timeOut: options.timeOut ? options.timeOut : this.timeOut,
      timeOut: 1000,
      showProgressBar: ('showProgressBar' in options) ? options.showProgressBar : this.showProgressBar,
      pauseOnHover: ('pauseOnHover' in options) ? options.pauseOnHover : this.pauseOnHover,
      lastOnBottom: ('lastOnBottom' in options) ? options.lastOnBottom : this.lastOnBottom,
      clickToClose: ('clickToClose' in options) ? options.clickToClose : this.clickToClose,
      maxLength: options.maxLength ? options.maxLength : this.maxLength,
     
    };

    switch (options.type) {
      case 'success':
        this.servicePNotify.success(
          options.title ? options.title : this.title,
          options.msg ? options.msg : this.msg
        );
        break;
      case 'error':
        this.servicePNotify.error(
          options.title ? options.title : this.title,
          options.msg ? options.msg : this.msg
        );
        break;
      case 'alert':
        this.servicePNotify.error(
          options.title ? options.title : this.title,
          options.msg ? options.msg : this.msg
        );
        break;
      case 'info':
        this.servicePNotify.info(
          options.title ? options.title : this.title,
          options.msg ? options.msg : this.msg
        );
        break;
     
    }
  }

}
