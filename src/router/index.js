import VueRouter from 'vue-router'

// 数据采集
import BasicData from '../components/DataCollection/BasicData.vue'
import DailyActivity from '../components/DataCollection/DailyActivity.vue'
import GradeData from '../components/DataCollection/GradeData.vue'
import QuestionSurvey from '../components/DataCollection/QuestionSurvey.vue'
import SignIn from '../components/DataCollection/SignIn.vue'
// 学生跟踪管理
import Evaluation from '../components/StudentManage/Evaluation.vue'
import Growth from '../components/StudentManage/Growth.vue'
import ImageAnalysis from '../components/StudentManage/ImageAnalysis.vue'
import MentalWarning from '../components/StudentManage/MentalWarning.vue'
import RecentCare from '../components/StudentManage/RecentCare.vue'
// 学生跟踪管理
import CharacterManage from '../components/UserManage/CharacterManage.vue'
import StudentAndParent from '../components/UserManage/StudentAndParent.vue'
import UserManage from '../components/UserManage/UserManage.vue'
// 基础信息配置
import BasicInformation from '../components/BasicInformation/BasicInformation.vue'

export default new VueRouter({
    routes: [{
        path: '/BasicData',
        name: 'BasicData',
        component: BasicData,
    },
    {
        path: '/DailyActivity',
        name: 'DailyActivity',
        component: DailyActivity,
    },
    {
        path: '/GradeData',
        name: 'GradeData',
        component: GradeData,
    },
    {
        path: '/QuestionSurvey',
        name: 'QuestionSurvey',
        component: QuestionSurvey,
    },
    {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/Evaluation',
        name: 'Evaluation',
        component: Evaluation,
    },
    {
        path: '/Growth',
        name: 'Growth',
        component: Growth,
    },
    {
        path: '/ImageAnalysis',
        name: 'ImageAnalysis',
        component: ImageAnalysis,
    },
    {
        path: '/MentalWarning',
        name: 'MentalWarning',
        component: MentalWarning,
    },
    {
        path: '/RecentCare',
        name: 'RecentCare',
        component: RecentCare
    },
    {
        path: '/CharacterManage',
        name: 'CharacterManage',
        component: CharacterManage,
    },
    {
        path: '/StudentAndParent',
        name: 'StudentAndParent',
        component: StudentAndParent,
    },
    {
        path: '/UserManage',
        name: 'UserManage',
        component: UserManage,
    },
    {
        path: '/BasicInformation',
        name: 'BasicInformation',
        component: BasicInformation,
    }
    ]
})