problems：

主要是上课签到统计（SignIn.vue）的“入学年份”“班级”这两个select无法对齐到行尾

![image-20210720220035163](C:\Users\DDDDDXu\AppData\Roaming\Typora\typora-user-images\image-20210720220035163.png)

然后下面的table数据无法单行显示，然后成绩统计数据（GradeData.vue）的div仅仅占了左边一小部分，在App.vue里面设置的右边div（通过路由跳转）的大小应该是固定的，在这里这个div就变小了

![image-20210720220533464](C:\Users\DDDDDXu\AppData\Roaming\Typora\typora-user-images\image-20210720220533464.png)

以及页面在缩放的时候，左边导航栏会出现页面层叠的现象

![image-20210720220554865](C:\Users\DDDDDXu\AppData\Roaming\Typora\typora-user-images\image-20210720220554865.png)