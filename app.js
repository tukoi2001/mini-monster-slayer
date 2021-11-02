const app = Vue.createApp({
  data() {
    return {
      userHeart: 100,
      monsterHeart: 100,
      userDamage: 35,
      monsterDamage: 30,
      isFighting: false,
      isShowPopup: true,
      isUntil: false,
      attackEffect: false,
      monsterAttackEffect: false,
      health: 10,
      countHealth: 0,
      listMonsters: [
        {
          name: "HYDRA",
          srcImg: "./image/dragon-icegif.gif",
          altImg: "monster_1",
        },
        {
          name: "Ghidorah",
          srcImg: "./image/dragon_2.gif",
          altImg: "monster_2",
        },
        {
          name: "Gigan",
          srcImg: "./image/dragon-3.gif",
          altImg: "monster_3",
        },
        {
          name: "Spiga",
          srcImg: "./image/dragon-4.gif",
          altImg: "monster_4",
        },
        {
          name: "Kamacuras",
          srcImg: "./image/dragon-5.gif",
          altImg: "monster_5",
        },
        {
          name: "Baragon",
          srcImg: "./image/dragon-6.gif",
          altImg: "monster_6",
        },
        {
          name: "Mothra",
          srcImg: "./image/dragon-7.gif",
          altImg: "monster_7",
        },
        {
          name: "MONSTER-8",
          srcImg: "./image/dragon-8.gif",
          altImg: "monster_8",
        },
      ],
      listCharacters: [
        {
          name: "Erhadt",
          srcImg: "./image/User/erhardt-octopath.gif",
          altImg: "user_1",
        },
        {
          name: "ShovelKnight",
          srcImg: "./image/User/giac-dau-si.gif",
          altImg: "user_2",
        },
        {
          name: "Arthur",
          srcImg: "./image/User/hiep_si.gif",
          altImg: "user_3",
        },
        {
          name: "Honda",
          srcImg: "./image/User/honda_sumo.gif",
          altImg: "user_4",
        },
        {
          name: "Rochyn",
          srcImg: "./image/User/rochyn_idle.gif",
          altImg: "user_5",
        },
        {
          name: "Alex",
          srcImg: "./image/User/sorcerer.gif",
          altImg: "user_6",
        },
        {
          name: "Hakan",
          srcImg: "./image/User/Usfiv_hakan.gif",
          altImg: "user_7",
        },
      ],
      levels: [
        {
          key: "Dễ",
        },
        {
          key: "Trung Bình",
        },
        {
          key: "Khó",
        },
      ],
      isShowMonster: false,
      isShowDifficulty: false,
      selectedMonster: 0,
      isShowCharacter: false,
      selectedCharacter: 0,
      selectedDifficulty: 0,
      dragonBreath: new Audio("../mini-monster-slayer/sound/dragon-attack.mp3"),
      warriorAttack: new Audio("../mini-monster-slayer/sound/user-attack.mp3"),
      warriorAttack2: new Audio("../mini-monster-slayer/sound/user-attack2.mp3"),
      healEffect: new Audio("../mini-monster-slayer/sound/heal_effect.mp3"),
      attackCount: 0,
      attackUntilEffect: false,
      attackLowUntilEffect: false,
      isHealth: false,
    };
  },
  methods: {
    userAttack() {
      this.isFighting = true;
      setTimeout(() => {
        this.monsterHeart -= Math.floor(Math.random() * 15) + 5;
        this.monsterAttack();
      }, 5000); //this.monsterHeart = this.monsterHeart - this.userDamage
      this.warriorAttack.play();
      this.attackCount += 1;
      if (this.attackCount == 2) {
        this.isUntil = true;
      }
      this.typeAttack(1);
    },
    userAttack2() {
      this.isFighting = true;
      setTimeout(() => {
        this.monsterHeart -= Math.floor(Math.random() * 25) + 15;
        this.monsterAttack();
      }, 1500);
      this.warriorAttack2.play();
      this.typeAttack(2);
    },
    userAttack3() {
      this.isFighting = true;
      setTimeout(() => {
        this.monsterHeart -= Math.floor(Math.random() * 40) + 25;
      }, 800); //this.monsterHeart = this.monsterHeart - this.userDamage
      setTimeout(() => {
        this.monsterAttack();
      }, 1500);
      this.warriorAttack2.play();
      this.typeAttack(3);
    },
    monsterAttack() {
      setTimeout(() => {
        this.userHeart -= Math.floor(Math.random() * 25) + 15;
        this.isFighting = false;
        this.monsterAttackEffect = false;
      }, 4000);
      this.attackEffect = false;
      this.dragonBreath.play();
      this.typeAttack(0);
    },
    typeAttack(number) {
      if (number == 1) {
        this.attackEffect = true;
      } else if (number == 2) {
        this.attackLowUntilEffect = true;
      } else if (number == 3) {
        this.attackUntilEffect = true;
      } else if (number == 4) {
        this.isHealth = true;
      } else if (number == 0) {
        this.monsterAttackEffect = true;
      }
      setTimeout(() => {
        this.attackEffect = false;
      }, 4000);
      setTimeout(() => {
        this.attackLowUntilEffect = false;
        this.attackUntilEffect = false;
      }, 1000);
      setTimeout(() => {
        this.isHealth = false;
      }, 1500);
    },
    hidePopup() {
      this.isShowPopup = !this.isShowPopup;
    },
    addHealth() {
      if (this.userHeart >= 80 || this.countHealth == 2) {
      } else {
        setTimeout(() => {
          this.userHeart += this.health;
          this.countHealth += 1;
          this.healEffect.play();
        }, 1500);
        this.typeAttack(4);
      }
    },
    checkUserHeart() {
      if (this.userHeart >= 80) {
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
    handleDifficulty(index) {
      this.selectedDifficulty = index;
      this.isShowDifficulty = false;
      console.log(index);
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
      if (this.userHeart <= 10 && this.userHeart > 0) {
        setTimeout(function () {
          alert("HP của bạn đang dưới 10%, cần bổ sung HP");
        }, 700);
      }
    },
  },
});

app.mount("#app");

// 1. Thêm hình ảnh ng chơi, quái vật. (Thêm đc hiệu ứng tấn công 1 tí thì tốt)
// 2. Nếu máu user hoặc monster < 0 thì hiện endgame
// 3. Thêm các chức năng chơi:
// - thêm skill (skill đặc biệt, hồi máu,...)
// - random sát thương tấn công. Ví dụ: userDamage: 10 - 20, monster: 15 - 35
// - thêm độ khó (Monster đánh tầm 3 4 phát, thì có 1 phát skill đặc biệt (x2 dam)). (random theo %, ví dụ 20% đánh chí mạng, 5 (1 phát chí mạng))
