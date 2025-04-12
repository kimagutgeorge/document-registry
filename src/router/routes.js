import AddDocument from '@/views/AddDocument.vue';
import AllDocuments from '@/views/Documents.vue';
import AllRequests from '@/views/Requests.vue';
import UserDashboard from '@/views/Dashboard.vue';
// import UserLogin from '@/views/Login.vue';
import DocumentIssuance from '@/views/Issuance.vue'
import DocumentReturn from '@/views/Return.vue';
import PrintForm from '@/views/Forms.vue'
import AuditLogs from '@/views/Logs.vue';
import DocumentReports from '@/views/reports/DocumentReports.vue'
import UserActivityReports from '@/views/reports/UserActivityReports.vue'
import RequestDocuments from '@/views/reports/RequestReports.vue';
import ReturnIssuance from '@/views/reports/ReturnIssuanceReports.vue';
import AllUsers from '@/views/Users.vue';
import AddUser from '@/views/AddUser.vue';
import UserRoles  from '@/views/Roles.vue';
import UserDepartments  from '@/views/Departments.vue';


export default [
    {
      path: '/',
      component: () => import('@/layout/Layout.vue'),
      children: [
        {
            path: '/',
            name: 'UserHome',
            component: UserDashboard
        },
        { 
          path: '/home', 
          name: 'UserHome',
          component: UserDashboard
        },
        {
            path: '/documents',
            name:'AllDocuments',
            component: AllDocuments
        },
        {
            path: '/documents/add',
            name:'AddDocuments',
            component: AddDocument
        },
        {
            path: '/requests',
            name:'AllRequests',
            component: AllRequests
        },
        {
          path: '/issuance',
          name: 'DocumentIssuance',
          component: DocumentIssuance
        },
        {
          path: '/returns',
          name: 'DocumentReturn',
          component: DocumentReturn
        },
        {
          path: '/forms',
          name: 'PrintForm',
          component: PrintForm
        },
        {
          path: '/logs',
          name: 'AuditLogs',
          component: AuditLogs
        },
        {
          path: '/reports/documents',
          name: 'DocumentReports',
          component: DocumentReports
        },
        {
          path: '/reports/user-activity',
          name: 'UserActivityReports',
          component: UserActivityReports
        },
        {
          path: '/reports/requests',
          name: 'RequestDocuments',
          component: RequestDocuments
        },
        {
          path: '/reports/issuance-returns',
          name: 'ReturnIssuance',
          component: ReturnIssuance
        },
        {
          path: '/users',
          name: 'AllUsers',
          component: AllUsers
        },
        {
          path: '/users/add',
          name: 'AddUser',
          component: AddUser
        },
        {
          path: '/settings/roles',
          name: 'Roles',
          component: UserRoles
        },
        {
          path: '/settings/departments',
          name: 'Roles',
          component: UserDepartments
        },
        
      ],
    },
];