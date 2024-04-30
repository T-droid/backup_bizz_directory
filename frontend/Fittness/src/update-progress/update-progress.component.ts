import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-update-progress',
  templateUrl: './update-progress.component.html',
  styleUrl: './update-progress.component.css'
})
export class UpdateProgressComponent implements OnInit {
  enrolledPrograms: any[] = [];
  selectedProgramId: number | null = null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Fetch enrolled programs for the current user
    const userId = 'current_user_id'; // Replace 'current_user_id' with the actual user ID
    this.enrolledPrograms = [
      {
        "id": 1,
        "name": "Aerobic Exercise",
        "exercise_types": [
          {
            "id": 1,
            "name": "Walking",
            "weight": 40,
            "status": true,
            "instructions": [
              "Start by standing tall with your shoulders relaxed and your arms swinging naturally at your sides.",
              "Take a step forward with your right foot, landing on your heel.",
              "Roll your foot forward until it's on the ground, then roll onto your toes.",
              "Bring your left foot forward to meet your right foot, repeating the process."
            ]
          },
          {
            "id": 2,
            "name": "Running",
            "weight": 30,
            "status": false,
            "instructions": [
              "Start with a brisk walk to warm up.",
              "Begin jogging at a comfortable pace, keeping your posture upright and your arms relaxed.",
              "Maintain a steady breathing rhythm as you increase your speed.",
              "Focus on landing mid-foot and pushing off with your toes."
            ]
          },
    ]
  }
    ];
    // this.userService.getEnrolledPrograms(userId).subscribe(
    //   programs => {
    //     this.enrolledPrograms = programs;
    //   },
    //   error => {
    //     console.error('Error fetching enrolled programs:', error);
    //     // Handle error if needed
    //   }
    // );
    
  }
  loadEnrolledPrograms(): void {
    this.userService.getEnrolledPrograms(2).subscribe(
      (data: any[]) => {
        this.enrolledPrograms = data;
      },
      (error) => {
        console.error('Error loading enrolled programs:', error);
      }
    );
  }

  toggleExerciseStatus(programId: number, exerciseId: number, event: Event): void {
    const target = event.target as HTMLInputElement; // Assert the type of event.target
    const checked = target.checked; // Get the checked property

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
