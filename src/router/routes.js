import AddDocument from '@/views/AddDocument.vue';
import AllDocuments from '@/views/Documents.vue';
import AllRequests from '@/views/Requests.vue';
import UserDashboard from '@/views/Dashboard.vue';
// import UserLogin from '@/views/Login.vue';
import DocumentIssuance from '@/views/Issuance.vue'
import DocumentReturn from '@/views/Return.vue';
import PrintForm from '@/views/Forms.vue'
import DocumentReports from '@/views/reports/DocumentReports.vue'
import UserActivityReports from '@/views/reports/UserActivityReports.vue'
import RequestDocuments from '@/views/reports/RequestReports.vue';
import ReturnIssuance from '@/views/reports/ReturnIssuanceReports.vue';
import AllUsers from '@/views/Users.vue';
import AddUser from '@/views/AddUser.vue';
import UserRoles  from '@/views/Roles.vue';
import UserDepartments  from '@/views/Departments.vue';
import UserProfile from '@/views/Profile.vue';
import AllClients from '@/views/Clients.vue';
import AddClient from '@/views/AddClient.vue';


export default [
    {
      path: '/',
      component: () => import('@/layout/Layout.vue'),
      children: [
        {
            path: '/',
            name: 'UserHome',
            component: UserDashboard,
            meta: { requiresAuth: true }
        },
        { 
          path: '/home', 
          name: 'UserHome',
          component: UserDashboard,
          meta: { requiresAuth: true }
        },
        {
          path: '/clients',
          name: 'Clients',
          component: AllClients,
          meta: { requiresAuth: true }
        },
        {
          path: '/clients/add',
          name: 'AddClients',
          component: AddClient,
          meta: { requiresAuth: true }
        },
        {
            path: '/documents',
            name:'AllDocuments',
            component: AllDocuments,
            meta: { requiresAuth: true }
        },
        {
            path: '/documents/add',
            name:'AddDocuments',
            component: AddDocument,
            meta: { requiresAuth: true }
        },
        {
            path: '/requests',
            name:'AllRequests',
            component: AllRequests,
            meta: { requiresAuth: true }
        },
        {
          path: '/issuance',
          name: 'DocumentIssuance',
          component: DocumentIssuance,
          meta: { requiresAuth: true }
        },
        {
          path: '/returns',
          name: 'DocumentReturn',
          component: DocumentReturn,
          meta: { requiresAuth: true }
        },
        {
          path: '/forms',
          name: 'PrintForm',
          component: PrintForm,
          meta: { requiresAuth: true }
        },
        {
          path: '/reports/documents',
          name: 'DocumentReports',
          component: DocumentReports,
          meta: { requiresAuth: true }
        },
        {
          path: '/reports/user-activity',
          name: 'UserActivityReports',
          component: UserActivityReports,
          meta: { requiresAuth: true }
        },
        {
          path: '/reports/requests',
          name: 'RequestDocuments',
          component: RequestDocuments,
          meta: { requiresAuth: true }
        },
        {
          path: '/reports/issuance-returns',
          name: 'ReturnIssuance',
          component: ReturnIssuance,
          meta: { requiresAuth: true }
        },
        {
          path: '/users',
          name: 'AllUsers',
          component: AllUsers,
          meta: { requiresAuth: true }
        },
        {
          path: '/users/add',
          name: 'AddUser',
          component: AddUser,
          meta: { requiresAuth: true }
        },
        {
          path: '/settings/roles',
          name: 'Roles',
          component: UserRoles,
          meta: { requiresAuth: true }
        },
        {
          path: '/settings/departments',
          name: 'Roles',
          component: UserDepartments,
          meta: { requiresAuth: true }
        },
        {
          path: '/profile',
          name: 'UserProfile',
          component: UserProfile,
          meta: {requiresAuth: true}
        }
        
      ],
    },
];