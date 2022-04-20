import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArray : any[] = [{name : 'Jui', password : '0207', data :[]}]

  obj : any[] | undefined = undefined;
  name : any[] | undefined = undefined;
  password : any[] | undefined = undefined;

  constructor() { }

  public getUser() : any[] {
    return this.userArray
  }

  public saveUser(obj :any) : any {
    let object = {name:obj.name,password:obj.password,data:[]}
    this.userArray.push(object);
  }
  
  public showData(n : any, pass : any) {
    for(let i = 0; i<this.userArray.length; i++) {
      if(this.userArray[i].name===n && this.userArray[i].password===pass) {
        return this.userArray[i].data;
      }
    }
  }

  public addData(obj:any, nam:any, pass:any): any{
    for(let i=0;i<this.userArray.length;i++){
      if(this.userArray[i].name===nam && this.userArray[i].password===pass){
        let object={department:obj.department, employee:obj.employee, salary:obj.salary}
        this.userArray[i].data.push(object);
      }
    }
  }

  public deleteData(nam:any,pass:any,depart:any,employ:any,sal:any){
    for(let i=0; i<this.userArray.length; i++){
      if(this.userArray[i].name===nam && this.userArray[i].password===pass){
        let data1=this.userArray[i].data
        for(let j=0; j<data1.length; j++){
          if(data1[j].department===depart && data1[j].employee===employ && data1[j].salary===sal){
            this.userArray[i].data.splice(j,1);
          }
        }
      }
    }
  }


}
