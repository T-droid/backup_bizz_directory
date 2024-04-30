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
    this.categories = [
      {
        "id": 1,
        "name": "Aerobic Exercise",
        "exercise_types": [
          {
            "id": 1,
            "name": "Walking",
            "weight": 40,
            "gifUrl": "https://th.bing.com/th/id/R.edc28aabeed4c08e4e20fbf4f48b4faf?rik=wN5CaejGF07iaQ&pid=ImgRaw&r=0",
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
            "gifUrl": "https://media.giphy.com/media/1XnToWGb5tj8Y/giphy.gif",
            "instructions": [
              "Start with a brisk walk to warm up.",
              "Begin jogging at a comfortable pace, keeping your posture upright and your arms relaxed.",
              "Maintain a steady breathing rhythm as you increase your speed.",
              "Focus on landing mid-foot and pushing off with your toes."
            ]
          },
          {
            "id": 3,
            "name": "Cycling",
            "weight": 30,
            "gifUrl": "https://media.giphy.com/media/rbnCRrbO3tcTS/giphy.gif",
            "instructions": [
              "Adjust your bike seat to the correct height, allowing for a slight bend in your knees when your foot is at the bottom of the pedal stroke.",
              "Start pedaling at a moderate pace, focusing on smooth, even strokes.",
              "Shift gears as needed to maintain a comfortable resistance level.",
              "Keep your upper body relaxed and your eyes on the road ahead."
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "Strength Training",
        "exercise_types": [
          {
            "id": 1,
            "name": "Bodyweight Exercises",
            "weight": 50,
            "gifUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/weighted-push-up.gif",
            "instructions": [
              "Push-ups: Start in a plank position with your hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up.",
              "Squats: Stand with your feet shoulder-width apart, then lower your body by bending your knees and pushing your hips back as if sitting in a chair."
            ]
          },
          {
            "id": 2,
            "name": "Resistance Training",
            "weight": 30,
            "gifUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/dumbbell-hip-thrust.gif",
            "instructions": [
              "Dumbbell Curls: Hold a dumbbell in each hand with your arms at your sides. Curl the weights towards your shoulders, then lower them back down with control.",
              "Leg Press: Sit in a leg press machine with your feet shoulder-width apart. Push the weight away from your body using your legs, then slowly return to the starting position."
            ]
          },
          {
            "id": 3,
            "name": "Weight Machines",
            "weight": 20,
            "gifUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/barbell-bench-press.gif",
            "instructions": [
              "Chest Press Machine: Sit on the machine with your back flat against the backrest. Push the handles forward until your arms are fully extended, then slowly return to the starting position.",
              "Leg Curl Machine: Adjust the machine so that the pad rests on the back of your ankles. Curl your legs up towards your buttocks, then lower them back down."
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "Stretching",
        "exercise_types": [
          {
            "id": 1,
            "name": "Lower Body",
            "weight": 30,
            "gifUrl": "https://fitnessprogramer.com/wp-content/uploads/2021/05/Seated-Adductor-Groin-Stretch.gif",
            "instructions": [
              "Hamstring Stretch: Sit on the floor with one leg extended and the other bent. Lean forward from your hips until you feel a stretch in the back of your thigh.",
              "Calf Stretch: Stand facing a wall with one foot behind you. Lean forward, placing your hands on the wall, until you feel a stretch in your calf."
            ]
          },
          {
            "id": 2,
            "name": "Upper Body",
            "weight": 30,
            "gifUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/cross-chest-shoulder-stretch.gif",
            "instructions": [
              "Shoulder Stretch: Stand tall with your feet hip-width apart. Bring one arm across your body and use your other arm to gently pull it closer to your chest.",
              "Triceps Stretch: Reach one arm overhead and bend your elbow, reaching your hand down your back. Use your other hand to gently press on your elbow."
            ]
          },
          {
            "id": 3,
            "name": "Full Body",
            "weight": 40,
            "gifUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/cobra-push-up-movement.gif",
            "instructions": [
              "Cobra Stretch: Lie face down on the floor with your palms near your shoulders. Press into your hands to lift your chest off the floor, keeping your hips and legs relaxed.",
              "Child's Pose: Sit back on your heels with your knees apart. Lean forward, reaching your arms out in front of you, and rest your forehead on the floor."
            ]
          }
        ]
      },
      {
        "id": 4,
        "name": "Balance Exercises",
        "exercise_types": [
          {
            "id": 1,
            "name": "Static Balance",
            "weight": 50,
            "gifUrl": "https://www.inspireusafoundation.org/wp-content/uploads/2021/06/single-leg-standing-calf-raise.gif",
            "instructions": [
              "Standing on One Leg: Stand on one leg while keeping your knee slightly bent. Hold this position for 10-30 seconds, then switch legs.",
              "Tree Pose: Stand tall with your feet together. Lift one foot and place it against the opposite inner thigh or calf. Bring your hands together at your chest and hold for balance."
            ]
          },
          {
            "id": 2,
            "name": "Dynamic Balance",
            "weight": 50,
            "gifUrl": "https://gymvisual.com/img/p/1/9/8/8/2/19882.gif",
            "instructions": [
              "Heel-to-Toe Walk: Position your heel directly in front of the toes of your other foot. Walk in a straight line, placing one foot in front of the other with each step.",
              "Side Leg Raise: Stand tall with your feet hip-width apart. Lift one leg out to the side, keeping it straight, then lower it back down with control."
            ]
          }
        ]
      }
    ];
     
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
      // Logic for enrolling the category
      // Set enrolled to true and update backend if needed
      category.enrolled = true;
    }
  }
}
