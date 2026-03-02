export type UserRole = 'student' | 'faculty' | 'admin';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
}

export interface Student extends User {
  role: 'student';
  matricNumber: string;
  programOfStudy: string;
  department: string;
  currentLevel: number;
  enrollmentYear: number;
  gpa: number;
}

export interface Course {
  id: string;
  courseCode: string;
  courseTitle: string;
  creditUnits: number;
  department: string;
  level: number;
}

export interface Grade {
  id: string;
  courseCode: string;
  courseTitle: string;
  score: number;
  gradeLetter: string;
  gpaPoint: number;
  semester: string;
  academicYear: string;
}

export interface AttendanceRecord {
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  courseCode: string;
}

export interface Goal {
  id: string;
  description: string;
  targetMetric: string;
  targetValue: number;
  currentValue: number;
  dueDate: string;
  status: 'pending' | 'in_progress' | 'achieved' | 'missed';
}

export interface AtRiskStudent {
  id: string;
  firstName: string;
  lastName: string;
  matricNumber: string;
  department: string;
  level: number;
  gpa: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  riskFactors: string[];
  attendanceRate: number;
}

export interface PerformanceTrend {
  academicYear: string;
  avgGpa: number;
  totalStudents: number;
  atRiskCount: number;
  passRate: number;
}

export interface Intervention {
  id: string;
  studentName: string;
  type: string;
  description: string;
  date: string;
  status: 'planned' | 'in_progress' | 'completed' | 'cancelled';
  facultyName: string;
}
