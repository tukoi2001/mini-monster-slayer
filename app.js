const app = Vue.createApp({
  data() {
    return {
      userHeart: 100,
      monsterHeart: 100,
      userDamage: 20,
      monsterDamage: 90,
      isFighting: false,
      isShowPopup: true,
      health: 10,
      countHealth: 0,
      listMonsters: [
        {
          name: "MONSTER-1",
          srcImg: "./image/dragon-icegif.gif",
          altImg: "monster_1"
        },
        {
          name: "MONSTER-2",
          srcImg: "./image/dragon_2.gif",
          altImg: "monster_2"
        },
        {
          name: "MONSTER-3",
          srcImg: "./image/dragon-3.gif",
          altImg: "monster_3"
        },
        {
          name: "MONSTER-4",
          srcImg: "./image/dragon-4.gif",
          altImg: "monster_4"
        },
        {
          name: "MONSTER-5",
          srcImg: "./image/dragon-5.gif",
          altImg: "monster_5"
        },
        {
          name: "MONSTER-6",
          srcImg: "./image/dragon-6.gif",
          altImg: "monster_6"
        },
        {
          name: "MONSTER-7",
          srcImg: "./image/dragon-7.gif",
          altImg: "monster_7"
        },
        {
          name: "MONSTER-8",
          srcImg: "./image/dragon-8.gif",
          altImg: "monster_8"
        }
      ],
      listCharacters: [
        {
          name: "Erhadt",
          srcImg: "./image/User/erhardt-octopath.gif",
          altImg: "user_1"
        },
        {
          name: "ShovelKnight",
          srcImg: "./image/User/giac_dau_si.gif",
          altImg: "user_2"
        },
        {
          name: "Arthur",
          srcImg: "./image/User/hiep_si.gif",
          altImg: "user_3"
        },
        {
          name: "Honda",
          srcImg: "./image/User/honda_sumo.gif",
          altImg: "user_4"
        },
        {
          name: "Rochyn",
          srcImg: "./image/User/rochyn_idle.gif",
          altImg: "user_5"
        },
        {
          name: "Alex",
          srcImg: "./image/User/sorcerer.gif",
          altImg: "user_6"
        },
        {
          name: "Hakan",
          srcImg: "./image/User/Usfiv_hakan.gif",
          altImg: "user_7"
        },
      ],
      levels: [
        {
          key: "Dễ"
        },
        {
          key: "Trung Bình"
        },
        {
          key: "Khó"
        }
      ],
      isShowMonster: false,
      isShowDifficulty: false,
      isShowRules: false,
      selectedMonster: 0,
      isShowCharacter: false,
      selectedCharacter: 0,
      selectedDifficulty: 0,
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
    hidePopup() {
      this.isShowPopup = !this.isShowPopup;
    }, 
    addHealth() {
      if(this.userHeart >= 80 || this.countHealth == 2) {}
      else {
        this.userHeart += this.health;
        this.countHealth += 1; 
      }
    },
    checkUserHeart() {
      if(this.userHeart >= 80) {
        alert("Bạn không thể hồi máu khi máu còn trên 80%");
      }
    },
    showMonsters() {
      this.isShowMonster = true;
    },
    hideMonster() {
      this.isShowMonster = false;
    },
    handleMonster(index) {
      this.selectedMonster = index;
      this.isShowMonster = false;
    },
    handleCharacter(index) {
      this.selectedCharacter = index;
      this.isShowCharacter = false;
    },
    showDifficulty() {
      this.isShowDifficulty = true;
    },
    handleDifficulty(index) {
      this.selectedDifficulty = index;
      this.isShowDifficulty = false;
      console.log(index);
    },
    showRules() {
      this.isShowRules = true;
    },
    hideRule() {
      this.isShowRules = false;
    }
  },
  computed: {
    monsterSelect() {
      let index = this.selectedMonster;
      return this.listMonsters[index];
    },
    characterSelect() {
      let index = this.selectedCharacter;
      return this.listCharacters[index];
    },
    difficulSelect() {
      let index = this.selectedDifficulty;
      return this.levels[index];
    }
  },
  watch: {
    userHeart() {
     if(this.userHeart <= 10) {
      setTimeout(function() {
        alert("HP của bạn đang dưới 10%, cần bổ sung HP");
      }, 500)
     }      
    },
  },
});

app.mount('#app');

// 1. Thêm hình ảnh ng chơi, quái vật. (Thêm đc hiệu ứng tấn công 1 tí thì tốt)
// 2. Nếu máu user hoặc monster < 0 thì hiện endgame
// 3. Thêm các chức năng chơi:
  // - thêm skill (skill đặc biệt, hồi máu,...)
  // - random sát thương tấn công. Ví dụ: userDamage: 10 - 20, monster: 15 - 35
  // - thêm độ khó (Monster đánh tầm 3 4 phát, thì có 1 phát skill đặc biệt (x2 dam)). (random theo %, ví dụ 20% đánh chí mạng, 5 (1 phát chí mạng))

