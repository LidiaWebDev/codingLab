import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddPostComponent } from '../add-post/add-post.component';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bsModalRef: BsModalRef;
  @ViewChild('addPost') addBtn: ElementRef;

  constructor(private modalService: BsModalService, private commonService: CommonService, private router: Router) {

    if(!localStorage.getItem('loggedInUser')){
      this.router.navigate(['/home']);
  }

    this.commonService.postEdit_Observable.subscribe(res => {
      this.addBtn.nativeElement.click();
  });

   }
 ngOnInit(): void {
    
  }

  public openAddPostComponent() {
    console.log("this button was clicked");
    this.bsModalRef = this.modalService.show(AddPostComponent);
    this.bsModalRef.content.closeModal = "Close"

  }

  logout(){
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/']);
}

}
