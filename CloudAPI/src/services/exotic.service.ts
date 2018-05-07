import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExoticService {

  constructor(private http: HttpClient) { }

  getAll(){
    this.http.get('http://http://www.tropicalfruitandveg.com/tfvlista-z.php');
  }

  getCategory(category){}

  getSearchResult(name){}

  getDetail(fullname){}

}
