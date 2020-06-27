import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ShowPostService } from './show-post.service';
;
import { CommonService, } from '../service/common.service';
import { Post } from '../models/post';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
 
@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss'],
  providers: [ ShowPostService ]
})
export class ShowPostComponent implements OnInit {
 
  @ViewChild('closeBtn') closeBtn: ElementRef;
 
  public posts : any [];
  public post_to_delete;
  modalRef: BsModalRef;
 
  constructor(private showPostService: ShowPostService, private commonService: CommonService, private modalService: BsModalService) {
       
  }
 
  ngOnInit(){
    this.getAllPost();
 
    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }
 
  setDelete(template: TemplateRef<any>, post: Post){
     this.modalRef = this.modalService.show(template);
     this.post_to_delete = post;
  }
 
  unsetDelete(){
    this.post_to_delete = null;
  }
 
  getAllPost(){
    this.showPostService.getAllPost().subscribe(result => {
        console.log('result is ', result);
        this.posts = result['data'];
    });
  }
 
  editPost(post: Post){
    this.commonService.setPostToEdit(post);
  }
 
  deletePost(){
    this.showPostService.deletePost(this.post_to_delete._id).subscribe(res => {
     
      this.getAllPost();
      // this.closeBtn.nativeElement.click();
    })
  }
 
}