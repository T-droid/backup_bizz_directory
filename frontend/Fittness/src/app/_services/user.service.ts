import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, throwError } from 'rxjs';
// import { text } from 'stream/consumers';

const API_URL = 'http://localhost:5000/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getCategories(): Observable<any> {
    return this.http.get(API_URL + 'categories');
  }
  getEnrolledPrograms(userid: any): Observable<any[]> {
    return this.http.get<any[]>(API_URL + `fitness_programs/${userid}`);
  }

  getEnrolledProgramDetails(programid: number, userid: any): Observable<any> {
    return this.getEnrolledPrograms(userid).pipe(
      map(enrolledPrograms => enrolledPrograms.find(program => program.id === programid)),
      catchError(error => {
        console.error('Error fetching enrolled program details:', error);
        throw error; 
      })
    );
  }

  enrollInProgram(categoryName: string, user_id: string | null) {
    return this.http.post<any>(`${API_URL}/fitness_program/${categoryName}`, {user_id: user_id});
  }

  updateExerciseStatus(program_name: string, exercise_type: string, user_id: string | null, status: boolean): Observable<any> {
    return this.http.put(`${API_URL}fitnessProgress/`, { user_id: user_id, program_name: program_name, status: status, exercise_type: exercise_type });
  }

  deleteProgram(programId: number): Observable<void> {
    const url = `${API_URL}/programs/${programId}`;

    return this.http.delete<void>(url).pipe(
      catchError((error: any) => {
        console.error('Error deleting program:', error);
        return throwError('Failed to delete program. Please try again.'); // Handle error
      })
    );
  }
}
