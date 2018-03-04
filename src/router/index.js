import Vue from 'vue'
import Router from 'vue-router'
import Teacher from '@/components/teacher'
import Lesson from '@/components/lesson'
import Fund from '@/components/fund'
import Personal from '@/components/personal'
import Message from '@/components/message'
import Fundone from '@/components/fundone'
import Fundtwo from '@/components/fundtwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'teacher',
      component: Teacher
    },
    {
      path: '/teacher/',
      name: 'teacher',
      component: Teacher
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: Lesson
    },
    {
      path: '/fund',
      name: 'fund',
      component:Fund,
      children:[
        {path: '/',component: Fundone},
        {path: '/fundone', name: 'fundone',component: Fundone},
        {path: '/fundtwo', name: 'fundtwo',component: Fundtwo}
      ]
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/message',
      name: 'message',
      component:Message
    }
  ]
})
