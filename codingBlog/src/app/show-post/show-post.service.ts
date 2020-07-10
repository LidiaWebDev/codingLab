import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post'
import { Observable } from 'rxjs';

 
@Injectable()
export class ShowPostService {
 
    constructor(private http: HttpClient){
      
 
    }

 getAllPost(): Observable<any> {
     console.log("is this here??")
     return this.http.post('/api/post/getAllPost', {})
 }

 deletePost(id){
    return this.http.post('/api/post/deletePost',{id : id})
}
 
}