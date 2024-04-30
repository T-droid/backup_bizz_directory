import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-update-progress',
  templateUrl: './update-progress.component.html',
  styleUrl: './update-progress.component.css'
})
export class UpdateProgressComponent implements OnInit {
  enrolledPrograms: any[] = [];
  selectedProgramId: number | null = null;
  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    // Fetch enrolled programs for the current user
    const userId = 'current_user_id'; // Replace 'current_user_id' with the actual user ID
    this.loadEnrolledPrograms()
   
    
  }
  loadEnrolledPrograms(): void {
    let user_id = this.tokenStorage.getUserId();
    this.userService.getEnrolledPrograms(user_id).subscribe(
      (data: any[]) => {
        this.enrolledPrograms = data;
      },
      (error) => {
        console.error('Error loading enrolled programs:', error);
      }
    );
  }

  toggleExerciseStatus(programId: number, exerciseId: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;

    // Call the updateExerciseStatus method from the service
    this.userService.updateExerciseStatus(programId, exerciseId, checked).subscribe(
      response => {
        console.log('Exercise status updated successfully:', response);
      },
      error => {
        console.error('Error updating exercise status:', error);
      }
    );
  }
}
