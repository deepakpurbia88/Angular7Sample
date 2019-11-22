import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public employee_name = null;
  public employee_id = null;
  public designation = null;
  public manager = null;
  constructor() { }
}
