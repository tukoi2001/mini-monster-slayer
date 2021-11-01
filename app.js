const app = Vue.createApp({
  data() {
    return {
      userName: '',
      userHeart: 100,
      monsterHeart: 100,
      userDamage1: 1,
      userDamage2: 1,
      userDamage3: 1,
      monsterDamage: 1,
      isFighting: false,
      isShowPopup: true,
      health: 10,
      countHealth: 0,
      countSkillHealth: 0,
      listMonsters: [
        {
          name: "Ghidorah",
          srcImg: "./image/dragon-icegif.gif",
          altImg: "monster_1"
        },
        {
          name: "Druk",
          srcImg: "./image/dragon_2.gif",
          altImg: "monster_2"
        },
        {
          name: "Slathborg",
          srcImg: "./image/dragon-3.gif",
          altImg: "monster_3"
        },
        {
          name: "Stoor Worm",
          srcImg: "./image/dragon-4.gif",
          altImg: "monster_4"
        },
        {
          name: "Temeraire",
          srcImg: "./image/dragon-5.gif",
          altImg: "monster_5"
        },
        {
          name: "Viserion",
          srcImg: "./image/dragon-6.gif",
          altImg: "monster_6"
        },
        {
          name: "Faranth",
          srcImg: "./image/dragon-7.gif",
          altImg: "monster_7"
        },
        {
          name: "Drakon",
          srcImg: "./image/dragon-8.gif",
          altImg: "monster_8"
        }
      ],
      listCharacters: [
        {
          name: "Erhadt",
          srcImg: "./image/User/erhardt-octopath.gif",
          altImg: "user_1",
          skillQ: "./image/User/erhardt-octopath/SkillQ.png",
          skillW: "./image/User/erhardt-octopath/SkillW.png",
          skillR: "./image/User/erhardt-octopath/SkillR.png",
        },
        {
          name: "ShovelKnight",
          srcImg: "./image/User/giac_dau_si.gif",
          altImg: "user_2",
          skillQ: "./image/User/giac_dau_si/SkillQ.png",
          skillW: "./image/User/giac_dau_si/SkillW.png",
          skillR: "./image/User/giac_dau_si/SkillR.png",
        },
        {
          name: "Arthur",
          srcImg: "./image/User/hiep_si.gif",
          altImg: "user_3",
          skillQ: "./image/User/hiep_si/SkillQ.png",
          skillW: "./image/User/hiep_si/SkillW.png",
          skillR: "./image/User/hiep_si/SkillR.png",
        },
        {
          name: "Honda",
          srcImg: "./image/User/honda_sumo.gif",
          altImg: "user_4",
          skillQ: "./image/User/honda_sumo/SkillQ.png",
          skillW: "./image/User/honda_sumo/SkillW.png",
          skillR: "./image/User/honda_sumo/SkillR.png",
        },
        {
          name: "Rochyn",
          srcImg: "./image/User/rochyn_idle.gif",
          altImg: "user_5",
          skillQ: "./image/User/rochyn_idle/SkillQ.png",
          skillW: "./image/User/rochyn_idle/SkillW.png",
          skillR: "./image/User/rochyn_idle/SkillR.png",
        },
        {
          name: "Alex",
          srcImg: "./image/User/sorcerer.gif",
          altImg: "user_6",
          skillQ: "./image/User/sorcerer/SkillQ.png",
          skillW: "./image/User/sorcerer/SkillR.png",
          skillR: "./image/User/sorcerer/SkillW.png",
        },
        {
          name: "Hakan",
          srcImg: "./image/User/Usfiv_hakan.gif",
          altImg: "user_7",
          skillQ: "./image/User/Usfiv_hakan/SkillQ.png",
          skillW: "./image/User/Usfiv_hakan/SkillW.png",
          skillR: "./image/User/Usfiv_hakan/SkillR.png",
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
      descriptionMonster: [
        {
          infor: "Rồng 1"
        },
        {
          infor: "Rồng 2"
        },
        {
          infor: "Rồng 3"
        },
      ],
      isShowMonster: false,
      isShowDifficulty: false,
      isShowRules: false,
      selectedMonster: 0,
      isShowCharacter: false,
      selectedCharacter: 0,
      selectedDifficulty: 0,
      isHealth: false,
      isQ: false,
      isMonsterSkill: false,
      isW: false,
      isR: false,
      countMonsterAttacks: 0,

    };
  },
  methods: {
    userAttack1() {
      this.isFighting = true;
      this.userDamage1 = Math.floor(Math.random() * 6) + 5;
      this.monsterHeart -= this.userDamage1;//this.monsterHeart = this.monsterHeart - this.userDamage
      setTimeout(() => {
        this.monsterAttack();
      }, 1500)
    },
    userAttack2() {
      this.isFighting = true;
      this.userDamage2 = Math.floor(Math.random() * 6) + 11;
      this.monsterHeart -= this.userDamage2 //this.monsterHeart = this.monsterHeart - this.userDamage
      setTimeout(() => {
        this.monsterAttack();
      }, 1500)
    },
    userAttack3() {
      this.isFighting = true;
      this.userDamage3 = Math.floor(Math.random() * 6) + 25;
      this.monsterHeart -= this.userDamage3 //this.monsterHeart = this.monsterHeart - this.userDamage
      setTimeout(() => {
        this.monsterAttack();
      }, 1500)
    },
    monsterAttack() {
      let n = this.countMonsterAttacks;
      if (this.selectedDifficulty == 0) {
        this.monsterDamage = Math.floor(Math.random() * 4) + 5;
        if(n % 3 === 0 && this.countMonsterAttacks != 0) {
          this.monsterDamage = (Math.floor(Math.random() * 4) + 5) * 2;
        }
      }
      if (this.selectedDifficulty == 1) {
        this.monsterDamage = Math.floor(Math.random() * 4) + 12;
        if(n % 3 === 0 && this.countMonsterAttacks != 0) {
          this.monsterDamage = (Math.floor(Math.random() * 4) + 12) *2;
        }
      }
      if (this.selectedDifficulty == 2) {
        this.monsterDamage = Math.floor(Math.random() * 8) + 15;
        if(n % 3 === 0 && this.countMonsterAttacks != 0) {
          this.monsterDamage = (Math.floor(Math.random() * 8) + 15) *2;
        }
      }
      this.countMonsterAttacks += 1;
      this.userHeart -= this.monsterDamage;
      setTimeout(() => {
        this.isFighting = false;
      }, 1200)
      this.checkSkillMonster();
    },
    checkSkillMonster() {
      this.isMonsterSkill = true;
      setTimeout(() => {
        this.isMonsterSkill = false;
      },1000)
    },
    checkEnteredName() {
      if (this.userName == '') {
        alert('Vui lòng nhập tên của bạn!!!')
      }

    },
    hidePopup() {
      if (this.userName !== '') {
        this.isShowPopup = !this.isShowPopup
      }
    },
    showPopup() {
      if (this.userName !== '') {
        this.isShowPopup = !this.isShowPopup
      }
    },
    addHealth() {
      if(this.userHeart > 80 || this.countHealth == 2) {}
      else {
        this.userHeart += this.health;
        this.countHealth += 1; 
      }
    },
    checkUserHeart() {
      if(this.userHeart > 80) {
        alert("Bạn không thể hồi máu khi máu còn trên 80%");
      }
    },
    showCharacter() {
      if (this.userHeart < 100 || this.monsterHeart < 100) {
        this.isShowCharacter = false;
        alert("Trận đấu đang diễn ra...")
      } else {
        this.isShowCharacter = true;
      }
    },
    showMonsters() {
      if (this.userHeart < 100 || this.monsterHeart < 100) {
        this.isShowMonster = false;
        alert("Trận đấu đang diễn ra...")
      } else {
        this.isShowMonster = true;
      }
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
      if (this.userHeart < 100 || this.monsterHeart < 100) {
        this.isShowDifficulty = false;
        alert("Trận đấu đang diễn ra...")
      } else {
        this.isShowDifficulty = true;
      }
    },
    handleDifficulty(index) {
      this.selectedDifficulty = index;
      this.isShowDifficulty = false;
    },
    showRules() {
      this.isShowRules = true;
    },
    showBoxes() {
      if (this.userHeart < 100 || this.monsterHeart < 100) {
        this.isShowCharacter = false;
        this.isShowDifficulty = false;
        alert("Trận đấu đang diễn ra...")
      }
    },
    hideRules() {
      this.isShowRules = false;
    },
    healthCheck() {
      if(this.userHeart > 80) {
        this.isHealth = false;
      }
      else {
        if (this.countSkillHealth > 1) {
          this.isHealth = false;
        }
        else {
          this.isHealth = true;
          setTimeout(() => {
            this.isHealth = false;
          }, 1000);
          this.countSkillHealth += 1;
        }
      }
    },
    qCheck() {
      this.isQ = true;
      setTimeout(() => {
        this.isQ = false;
      }, 1000)
    },
    rCheck() {
      this.isR = true;
      setTimeout(() => {
        this.isR = false;
      }, 1000)
    },
    wCheck() {
      this.isW = true;
      setTimeout(() => {
        this.isW = false;
      }, 1000)
    },
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
    },
  },
  watch: {
    userHeart() {
     if(this.userHeart <= 10) {
      setTimeout(function() {
        alert("HP của bạn đang dưới 10%, cần bổ sung HP");
      }, 1100)
     }      
    },
    selectedDifficulty() {
      if(this.selectedDifficulty == 0) {
        setTimeout(() => {
          alert("Độ khó hiện tại: Dễ");
        }, 500)
      }
      if (this.selectedDifficulty == 1) {
        setTimeout(() => {
          alert("Độ khó hiện tại: Trung Bình");
        }, 500)
      }
      if (this.selectedDifficulty == 2) {
        setTimeout(() => {
          alert("Độ khó hiện tại: Khó");
        }, 500)
      }
    }
  },
});

app.mount('#app');

// 1. Thêm hình ảnh ng chơi, quái vật. (Thêm đc hiệu ứng tấn công 1 tí thì tốt)
// 2. Nếu máu user hoặc monster < 0 thì hiện endgame
// 3. Thêm các chức năng chơi:
  // - thêm skill (skill đặc biệt, hồi máu,...)
  // - random sát thương tấn công. Ví dụ: userDamage: 10 - 20, monster: 15 - 35
  // - thêm độ khó (Monster đánh tầm 3 4 phát, thì có 1 phát skill đặc biệt (x2 dam)). (random theo %, ví dụ 20% đánh chí mạng, 5 (1 phát chí mạng))

