export class Employee{
    id: any;
    name: string;
    email: string;
    phone: number;
    salary: number;
    department: string;
    public Employee(id:any,name:string,email:string,phone:number,salary:number,department:string)
    {
        this.id=id;
        this.name=name;
        this.email=email;
        this.department=department;
        this.phone=phone;
        this.salary=salary;
    }
}