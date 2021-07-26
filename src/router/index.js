import VueRouter from 'vue-router'

// 数据采集
import BasicData from '../views/DataCollection/BasicData.vue'
import DailyActivity from '../views/DataCollection/DailyActivity.vue'
import GradeData from '../views/DataCollection/GradeData.vue'
import QuestionSurvey from '../views/DataCollection/QuestionSurvey.vue'
import SignIn from '../views/DataCollection/SignIn.vue'
// 学生跟踪管理
import Evaluation from '../views/StudentManage/Evaluation.vue'
import Growth from '../views/StudentManage/Growth.vue'
import ImageAnalysis from '../views/StudentManage/ImageAnalysis.vue'
import MentalWarning from '../views/StudentManage/MentalWarning.vue'
import RecentCare from '../views/StudentManage/RecentCare.vue'
// 学生跟踪管理
import CharacterManage from '../views/UserManage/CharacterManage.vue'
import StudentAndParent from '../views/UserManage/StudentAndParent.vue'
import UserManage from '../views/UserManage/UserManage.vue'
// 基础信息配置
import BasicInformation from '../views/BasicInformation/BasicInformation.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'BasicData',
        },
        {
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