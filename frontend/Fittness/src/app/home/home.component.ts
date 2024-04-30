import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any[] = [];

  constructor(private http: HttpClient, private user: UserService, private router: Router) { }

  ngOnInit(): void {     
    // this.categories = this.user.getCategories();
    this.user.getCategories().subscribe(categories => {
      this.categories = categories;

      // Check if the user is enrolled in any program
      this.user.getEnrolledPrograms(2).subscribe(enrolledPrograms => {
        enrolledPrograms.forEach(enrolledProgram => {
          const category = this.categories.find(category => category.id === enrolledProgram.categoryId);
          if (category) {
            category.enrolled = true;
          }
        });
      });
    });
    
  }

  toggleDescription(category: any) {
    category.showDescription = !category.showDescription;
  }

  enroll(category: any): void {
    if (category.enrolled) {
      // Redirect to progress update page
      this.router.navigate(['/update-progress', category.id]); // Update with your actual route
    } else {
      this.user.enrollInProgram(category.name).subscribe(
        response => {
          category.enrolled = true;
          console.log('Enrollment successful:', response);
          alert('Enrollment succesfull');
        },
        error => {
          console.error('Enrollment failed:', error);
          alert('Enrollment failed');
        }
      );
      
    }
  }
}
