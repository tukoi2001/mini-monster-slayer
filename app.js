import { createPopper } from '@popperjs/core';



const app = Vue.createApp({
  data() {
    return {
      userHeart: 100,
      monsterHeart: 100,
      userDamage: 20,
      monsterDamage: 15,
      isFighting: false
    };
  },
  methods: {
    userAttack() {
      this.isFighting = true
      this.monsterHeart -= this.userDamage //this.monsterHeart = this.monsterHeart - this.userDamage
      setTimeout(() => {
        this.monsterAttack();
      }, 2000)
    },
    monsterAttack() {
      this.userHeart -= this.monsterDamage
      this.isFighting = false
    },
     
  }
   
});

 app.mount('#app');

// 1. Thêm hình ảnh ng chơi, quái vật. (Thêm đc hiệu ứng tấn công 1 tí thì tốt)
// 2. Nếu máu user hoặc monster < 0 thì hiện endgame
// 3. Thêm các chức năng chơi:
  // - thêm skill (skill đặc biệt, hồi máu,...)
  // - random sát thương tấn công. Ví dụ: userDamage: 10 - 20, monster: 15 - 35
  // - thêm độ khó (Monster đánh tầm 3 4 phát, thì có 1 phát skill đặc biệt (x2 dam)). (random theo %, ví dụ 20% đánh chí mạng, 5 (1 phát chí mạng))

