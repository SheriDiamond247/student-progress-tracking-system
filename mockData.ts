import type { Student, Grade, AttendanceRecord, Goal, AtRiskStudent, PerformanceTrend, Intervention, Course } from '@/types';

export const mockStudent: Student = {
  id: '1',
  username: 'adewale.johnson',
  email: 'adewale.johnson@lasustech.edu.ng',
  role: 'student',
  firstName: 'Adewale',
  lastName: 'Johnson',
  matricNumber: 'LST/2022/CS/0145',
  programOfStudy: 'Computer Science',
  department: 'Computer Science',
  currentLevel: 300,
  enrollmentYear: 2022,
  gpa: 3.72,
};

export const mockGrades: Grade[] = [
  { id: '1', courseCode: 'CSC301', courseTitle: 'Data Structures & Algorithms', score: 82, gradeLetter: 'A', gpaPoint: 5.0, semester: 'Harmattan', academicYear: '2024/2025' },
  { id: '2', courseCode: 'CSC303', courseTitle: 'Operating Systems', score: 71, gradeLetter: 'B', gpaPoint: 4.0, semester: 'Harmattan', academicYear: '2024/2025' },
  { id: '3', courseCode: 'CSC305', courseTitle: 'Database Management Systems', score: 88, gradeLetter: 'A', gpaPoint: 5.0, semester: 'Harmattan', academicYear: '2024/2025' },
  { id: '4', courseCode: 'MTH301', courseTitle: 'Numerical Analysis', score: 65, gradeLetter: 'C', gpaPoint: 3.0, semester: 'Harmattan', academicYear: '2024/2025' },
  { id: '5', courseCode: 'CSC307', courseTitle: 'Computer Networks', score: 78, gradeLetter: 'B', gpaPoint: 4.0, semester: 'Harmattan', academicYear: '2024/2025' },
  { id: '6', courseCode: 'GST301', courseTitle: 'Entrepreneurship Studies', score: 73, gradeLetter: 'B', gpaPoint: 4.0, semester: 'Harmattan', academicYear: '2024/2025' },
];

export const mockAttendance: AttendanceRecord[] = [
  { date: '2025-01-06', status: 'present', courseCode: 'CSC301' },
  { date: '2025-01-07', status: 'present', courseCode: 'CSC303' },
  { date: '2025-01-08', status: 'late', courseCode: 'CSC305' },
  { date: '2025-01-09', status: 'present', courseCode: 'MTH301' },
  { date: '2025-01-10', status: 'absent', courseCode: 'CSC307' },
  { date: '2025-01-13', status: 'present', courseCode: 'CSC301' },
  { date: '2025-01-14', status: 'present', courseCode: 'CSC303' },
  { date: '2025-01-15', status: 'present', courseCode: 'CSC305' },
  { date: '2025-01-16', status: 'excused', courseCode: 'MTH301' },
  { date: '2025-01-17', status: 'present', courseCode: 'CSC307' },
];

export const mockGoals: Goal[] = [
  { id: '1', description: 'Achieve a GPA of 4.0 this semester', targetMetric: 'GPA', targetValue: 4.0, currentValue: 3.72, dueDate: '2025-07-31', status: 'in_progress' },
  { id: '2', description: 'Maintain 90% attendance rate', targetMetric: 'Attendance Rate', targetValue: 90, currentValue: 85, dueDate: '2025-07-31', status: 'in_progress' },
  { id: '3', description: 'Complete all assignments on time', targetMetric: 'Completion Rate', targetValue: 100, currentValue: 92, dueDate: '2025-07-31', status: 'in_progress' },
];

export const mockAtRiskStudents: AtRiskStudent[] = [
  { id: '1', firstName: 'Chinedu', lastName: 'Okafor', matricNumber: 'LST/2022/CS/0089', department: 'Computer Science', level: 300, gpa: 1.85, riskLevel: 'critical', riskFactors: ['Low GPA', 'Poor Attendance', 'Failed Courses'], attendanceRate: 52 },
  { id: '2', firstName: 'Fatima', lastName: 'Ibrahim', matricNumber: 'LST/2023/EE/0201', department: 'Electrical Engineering', level: 200, gpa: 2.15, riskLevel: 'high', riskFactors: ['Declining GPA', 'Low Engagement'], attendanceRate: 65 },
  { id: '3', firstName: 'Tunde', lastName: 'Bakare', matricNumber: 'LST/2022/ME/0112', department: 'Mechanical Engineering', level: 300, gpa: 2.40, riskLevel: 'medium', riskFactors: ['Inconsistent Performance'], attendanceRate: 78 },
  { id: '4', firstName: 'Grace', lastName: 'Adekunle', matricNumber: 'LST/2023/CS/0167', department: 'Computer Science', level: 200, gpa: 2.50, riskLevel: 'medium', riskFactors: ['Declining Attendance'], attendanceRate: 71 },
  { id: '5', firstName: 'Emeka', lastName: 'Nwosu', matricNumber: 'LST/2021/CE/0045', department: 'Civil Engineering', level: 400, gpa: 1.92, riskLevel: 'high', riskFactors: ['Multiple Failed Courses', 'Low GPA'], attendanceRate: 60 },
];

export const mockPerformanceTrends: PerformanceTrend[] = [
  { academicYear: '2020/2021', avgGpa: 3.12, totalStudents: 1850, atRiskCount: 185, passRate: 82 },
  { academicYear: '2021/2022', avgGpa: 3.25, totalStudents: 2100, atRiskCount: 168, passRate: 85 },
  { academicYear: '2022/2023', avgGpa: 3.18, totalStudents: 2350, atRiskCount: 212, passRate: 83 },
  { academicYear: '2023/2024', avgGpa: 3.31, totalStudents: 2500, atRiskCount: 175, passRate: 87 },
  { academicYear: '2024/2025', avgGpa: 3.28, totalStudents: 2680, atRiskCount: 201, passRate: 86 },
];

export const mockInterventions: Intervention[] = [
  { id: '1', studentName: 'Chinedu Okafor', type: 'Advisory', description: 'Academic counseling session for GPA improvement', date: '2025-01-15', status: 'completed', facultyName: 'Dr. Afolabi' },
  { id: '2', studentName: 'Fatima Ibrahim', type: 'Remedial Class', description: 'Extra tutorials for Circuit Analysis', date: '2025-01-20', status: 'in_progress', facultyName: 'Prof. Ogundimu' },
  { id: '3', studentName: 'Emeka Nwosu', type: 'Counseling', description: 'Referral to student welfare services', date: '2025-02-01', status: 'planned', facultyName: 'Dr. Balogun' },
];

export const mockCourses: Course[] = [
  { id: '1', courseCode: 'CSC301', courseTitle: 'Data Structures & Algorithms', creditUnits: 3, department: 'Computer Science', level: 300 },
  { id: '2', courseCode: 'CSC303', courseTitle: 'Operating Systems', creditUnits: 3, department: 'Computer Science', level: 300 },
  { id: '3', courseCode: 'CSC305', courseTitle: 'Database Management Systems', creditUnits: 3, department: 'Computer Science', level: 300 },
  { id: '4', courseCode: 'MTH301', courseTitle: 'Numerical Analysis', creditUnits: 2, department: 'Mathematics', level: 300 },
  { id: '5', courseCode: 'CSC307', courseTitle: 'Computer Networks', creditUnits: 3, department: 'Computer Science', level: 300 },
  { id: '6', courseCode: 'GST301', courseTitle: 'Entrepreneurship Studies', creditUnits: 2, department: 'General Studies', level: 300 },
];

export const attendanceSummary = {
  present: 60,
  absent: 8,
  late: 5,
  excused: 3,
  total: 76,
  rate: 85,
};

export const semesterGpaHistory = [
  { semester: '100L H', gpa: 3.45 },
  { semester: '100L R', gpa: 3.52 },
  { semester: '200L H', gpa: 3.60 },
  { semester: '200L R', gpa: 3.68 },
  { semester: '300L H', gpa: 3.72 },
];
