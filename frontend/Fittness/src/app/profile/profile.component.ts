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

  constructor(private userservice: UserService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    // Fetch user data and enrolled programs from the backend
    let user_id = this.tokenStorage.getUserId();
    this.enrolledPrograms = [this.userservice.getEnrolledPrograms(user_id)]
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
