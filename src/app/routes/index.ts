// Imports
import express, { Router } from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { BuildingRoutes } from '../modules/building/building.route';
import { RoomRoutes } from '../modules/room/room.route';
import { CourseRoutes } from '../modules/course/course.route';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.route';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.route';
import { OfferedCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { StudentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.route';
import { StudentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.route';
import { StudentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';

const router = express.Router();

const moduleRoutes = [
  { path: '/academic-semesters', route: AcademicSemesterRoutes },
  { path: '/academic-faculties', route: AcademicFacultyRoutes },
  { path: '/academic-departments', route: AcademicDepartmentRoutes },
  { path: '/buildings', route: BuildingRoutes },
  { path: '/rooms', route: RoomRoutes },
  { path: '/courses', route: CourseRoutes },
  { path: '/semester-registrations', route: SemesterRegistrationRoutes },
  { path: '/offered-courses', route: offeredCourseRoutes },
  { path: '/offered-course-sections', route: offeredCourseSectionRoutes },
  {
    path: '/offered-course-class-schedules',
    route: OfferedCourseClassScheduleRoutes
  },
  {
    path: '/student-enrolled-courses',
    route: StudentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    route: StudentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-semester-payments',
    route: StudentSemesterPaymentRoutes
  },
  {
    path: '/users',
    route: UserRoutes
  },
  {
    path: '/auth',
    route: AuthRoutes
  }
];

moduleRoutes.forEach((route: { path: string; route: Router }) => {
  router.use(route.path, route.route);
});

export default router;
