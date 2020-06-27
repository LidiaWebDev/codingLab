import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
 
@Injectable()
export class AddPostService {
 
    constructor(private http: HttpClient){
 
    }

    //As seen in the above code, you have made use of the HttpClient to make the API call and return the Observable

    addPost(post: Post){
        return this.http.post('/api/post/createPost',{
            title : post.title,
            description : post.description
        })
    }

    updatePost(post: Post){
		return this.http.post('/api/post/updatePost',{
			id: post._id,
			title : post.title,
			description : post.description
		})
	}
 
}