import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data_Binding_Problem_Statement';

  name='Arjun'
  bio='java Developer'
  location='Pune'

  Producturl='https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

   user = {
    username: '',
    password: '',
    email:''
  };

  onLogin() {
    alert('Event Created');
  }

   onSubmit() {
    console.log('Submitted:', this.user);
    alert(`Email: ${this.user.email}\nPassword: ${this.user.password}`);
  }
}
