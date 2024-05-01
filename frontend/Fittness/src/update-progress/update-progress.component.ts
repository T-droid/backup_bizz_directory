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
  user_id: string | null = '';
  categoryId: any;
  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private Actroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.Actroute.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('id'));
  });
    // Fetch enrolled programs for the current user
    this.user_id = this.tokenStorage.getUserId();
    this.loadEnrolledPrograms()
   
    
  }
  loadEnrolledPrograms(): void {
    this.userService.getEnrolledPrograms(this.user_id).subscribe(
      (data: any[]) => {
        const program = data.find(item => item.id === this.categoryId);
        if (program) {
          this.enrolledPrograms = program;
        }
      },
      (error) => {
        console.error('Error loading enrolled programs:', error);
      }
    );
  }

  toggleExerciseStatus(programName: string, exerciseType: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;

    // Call the updateExerciseStatus method from the service
    this.userService.updateExerciseStatus(programName, exerciseType, this.user_id, checked).subscribe(
      response => {
        console.log('Exercise status updated successfully:', response);
      },
      error => {
        console.error('Error updating exercise status:', error);
      }
    );
  }
}
