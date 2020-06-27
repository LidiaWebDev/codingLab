import { Component, TemplateRef, ViewChild, ElementRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Post } from '../models/post';
import { Router } from '@angular/router';
import { AddPostService } from './add-post.service';
import { CommonService } from '../service/common.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [ AddPostService ]
})
export class AddPostComponent {

  modalRef: BsModalRef;
  public post : Post;
 

  constructor(private modalService: BsModalService,  private bsModalRef: BsModalRef, private router: Router, private addPostService: AddPostService, private commonService: CommonService ) {
    this.post = new Post();
   }

   ngOnInit() { 
    
    this.commonService.postEdit_Observable.subscribe(res => {
    this.post = this.commonService.post_to_be_edited;
    console.log('post about ', this.post._id);
    });
   }
   

  close() {
    this.bsModalRef.hide()
  };


  addPost() {
  	if(this.post.title && this.post.description){
      if(this.post._id){
        this.addPostService.updatePost(this.post).subscribe(res =>{
         
          this.commonService.notifyPostAddition();
        });
      } else {
        this.addPostService.addPost(this.post).subscribe(res =>{
          
          this.commonService.notifyPostAddition();
        });
      }
  	} else {
  		alert('Title and Description required');
  	}
  }

}
