import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  enrolledPrograms: any[] = [];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    // Fetch user data and enrolled programs from the backend
    this.username = 'JohnDoe';
    this.enrolledPrograms = [
      { id: 1, name: 'Fitness Program 1' },
      { id: 2, name: 'Fitness Program 2' },
      // Add more enrolled programs as needed
    ];
  }
  deleteProgram(programId: number): void {
    // Call the program service to delete the program
    this.userservice.deleteProgram(programId).subscribe(
      () => {
        // If delete request is successful, remove the program from the list
        this.enrolledPrograms = this.enrolledPrograms.filter(program => program.id !== programId);
      },
      (error: any) => {
        console.error('Error deleting program:', error);
        // Handle error, e.g., display error message to the user
      }
    );
  }
}
