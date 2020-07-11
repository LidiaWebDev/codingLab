import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Post } from '../models/post';

 
@Injectable()
export class CommonService {

    //I have declared a Subject called postAdded_Observable to keep track of the new blog post addition to the database. Whenever 
    //a new blog post is added to the database,  call the notifyPostAddition method, which will notify the subscribers about the update.
 
    public postAdded_Observable = new Subject();
    //to define an observable to keep track of when the edit button is clicked.
    public postEdit_Observable = new Subject();
    public post_to_be_edited;
 
    constructor(){
        this.post_to_be_edited = new Post();
 
    }
 
    notifyPostAddition(){
        this.postAdded_Observable.next();
    }

    notifyPostEdit(){
        this.postEdit_Observable.next();
    }
     
    setPostToEdit(post: Post){
        this.post_to_be_edited = post;
        this.notifyPostEdit();
    }
 
}