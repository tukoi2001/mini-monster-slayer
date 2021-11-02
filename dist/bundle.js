Vue.createApp({data:()=>({userName:"",userHeart:100,monsterHeart:100,userDamage1:1,userDamage2:1,userDamage3:1,monsterDamage:1,isFighting:!1,isShowPopup:!0,countHealth:0,countSkillHealth:0,listMonsters:[{name:"Ghidorah",srcImg:"./image/dragon-icegif.gif",altImg:"monster_1"},{name:"Druk",srcImg:"./image/dragon_2.gif",altImg:"monster_2"},{name:"Slathborg",srcImg:"./image/dragon-3.gif",altImg:"monster_3"},{name:"Stoor Worm",srcImg:"./image/dragon-4.gif",altImg:"monster_4"},{name:"Temeraire",srcImg:"./image/dragon-5.gif",altImg:"monster_5"},{name:"Viserion",srcImg:"./image/dragon-6.gif",altImg:"monster_6"},{name:"Faranth",srcImg:"./image/dragon-7.gif",altImg:"monster_7"},{name:"Drakon",srcImg:"./image/dragon-8.gif",altImg:"monster_8"}],listCharacters:[{name:"Erhadt",srcImg:"./image/User/erhardt-octopath.gif",altImg:"user_1",skillQ:"./image/User/erhardt-octopath/SkillQ.png",skillW:"./image/User/erhardt-octopath/SkillW.png",skillR:"./image/User/erhardt-octopath/SkillR.png"},{name:"ShovelKnight",srcImg:"./image/User/giac_dau_si.gif",altImg:"user_2",skillQ:"./image/User/giac_dau_si/SkillQ.png",skillW:"./image/User/giac_dau_si/SkillW.png",skillR:"./image/User/giac_dau_si/SkillR.png"},{name:"Arthur",srcImg:"./image/User/hiep_si.gif",altImg:"user_3",skillQ:"./image/User/hiep_si/SkillQ.png",skillW:"./image/User/hiep_si/SkillW.png",skillR:"./image/User/hiep_si/SkillR.png"},{name:"Honda",srcImg:"./image/User/honda_sumo.gif",altImg:"user_4",skillQ:"./image/User/honda_sumo/SkillQ.png",skillW:"./image/User/honda_sumo/SkillW.png",skillR:"./image/User/honda_sumo/SkillR.png"},{name:"Rochyn",srcImg:"./image/User/rochyn_idle.gif",altImg:"user_5",skillQ:"./image/User/rochyn_idle/SkillQ.png",skillW:"./image/User/rochyn_idle/SkillW.png",skillR:"./image/User/rochyn_idle/SkillR.png"},{name:"Alex",srcImg:"./image/User/sorcerer.gif",altImg:"user_6",skillQ:"./image/User/sorcerer/SkillQ.png",skillW:"./image/User/sorcerer/SkillR.png",skillR:"./image/User/sorcerer/SkillW.png"},{name:"Hakan",srcImg:"./image/User/Usfiv_hakan.gif",altImg:"user_7",skillQ:"./image/User/Usfiv_hakan/SkillQ.png",skillW:"./image/User/Usfiv_hakan/SkillW.png",skillR:"./image/User/Usfiv_hakan/SkillR.png"}],levels:[{key:"Dễ"},{key:"Trung Bình"},{key:"Khó"}],descriptionMonster:[{infor:"Rồng 1"},{infor:"Rồng 2"},{infor:"Rồng 3"}],isShowMonster:!1,isShowDifficulty:!1,isShowRules:!1,selectedMonster:0,isShowCharacter:!1,selectedCharacter:0,selectedDifficulty:0,isHealth:!1,isQ:!1,isMonsterSkill:!1,isW:!1,isR:!1,countMonsterAttacks:0,countQ:0,countW:0,soundQ:new Audio("./sound/skillQ.mp3"),soundW:new Audio("./sound/skillW.mp3"),soundR:new Audio("./sound/skillR.mp3"),healEffect:new Audio("./sound/heal.mp3"),soundVictory:new Audio("./sound/victory.mp3"),soundDefeat:new Audio("./sound/defeat.mp3"),soundMonster:new Audio("./sound/monsterSound.mp3"),checkWin:!1,checkLose:!1}),methods:{userAttack1(){this.countQ+=1,console.log("Q: "+this.countQ),this.isFighting=!0,this.userDamage1=Math.floor(6*Math.random())+5,this.monsterHeart-=this.userDamage1,this.soundQ.play(),setTimeout((()=>{this.monsterAttack(),this.checkHealths()}),1500)},userAttack2(){let t=this.countQ;console.log("nQ: "+t),t>=2?(this.countQ-=2,console.log("Q: "+this.countQ),this.countW+=1,console.log("W: "+this.countW),this.wCheck(),this.isFighting=!0,this.userDamage2=Math.floor(6*Math.random())+11,this.monsterHeart-=this.userDamage2,this.soundW.play(),setTimeout((()=>{this.monsterAttack(),this.checkHealths()}),1500)):alert("Chưa được sử dụng kỹ năng này!")},userAttack3(){let t=this.countW;console.log("nW: "+t),t>=2?(this.countW-=2,console.log("W: "+this.countW),this.rCheck(),this.isFighting=!0,this.userDamage3=Math.floor(6*Math.random())+25,this.monsterHeart-=this.userDamage3,this.soundR.play(),setTimeout((()=>{this.monsterAttack(),this.checkHealths()}),1500)):alert("Chưa được sử dụng kỹ năng này!")},monsterAttack(){if(this.monsterHeart<=0)this.isMonsterSkill=!1,this.monsterDamage=0,setTimeout((()=>{this.checkWin=!0,this.soundVictory.play()}),500);else{let t=this.countMonsterAttacks;0==this.selectedDifficulty&&(this.monsterDamage=Math.floor(4*Math.random())+5,t%3==0&&0!=this.countMonsterAttacks&&(this.monsterDamage=2*(Math.floor(4*Math.random())+5))),1==this.selectedDifficulty&&(this.monsterDamage=Math.floor(4*Math.random())+8,t%3==0&&0!=this.countMonsterAttacks&&(this.monsterDamage=2*(Math.floor(4*Math.random())+10))),2==this.selectedDifficulty&&(this.monsterDamage=Math.floor(6*Math.random())+11,t%3==0&&0!=this.countMonsterAttacks&&(this.monsterDamage=2*(Math.floor(6*Math.random())+12))),this.countMonsterAttacks+=1,this.userHeart-=this.monsterDamage,setTimeout((()=>{this.isFighting=!1}),1200),this.checkSkillMonster(),this.soundMonster.play()}},reload(){location.reload()},checkHealths(){this.userHeart<=0&&(this.userHeart=0,setTimeout((()=>{this.checkLose=!0,this.soundDefeat.play()}),800)),this.monsterHeart<=0&&(this.monsterHeart=0)},checkSkillMonster(){this.isMonsterSkill=!0,setTimeout((()=>{this.isMonsterSkill=!1}),1e3)},checkEnteredName(){""==this.userName&&alert("Vui lòng nhập tên của bạn!!!")},hidePopup(){""!==this.userName&&(this.isShowPopup=!this.isShowPopup)},showPopup(){""!==this.userName&&(this.isShowPopup=!this.isShowPopup)},addHealth(){this.userHeart>70||2==this.countHealth||(0==this.selectedDifficulty&&(this.userHeart+=10,this.countHealth+=1,this.countSkillHealth>1?this.isHealth=!1:(this.isHealth=!0,setTimeout((()=>{this.isHealth=!1}),1e3),this.countSkillHealth+=1)),1==this.selectedDifficulty&&(this.userHeart+=15,this.countHealth+=1,this.countSkillHealth>1?this.isHealth=!1:(this.isHealth=!0,setTimeout((()=>{this.isHealth=!1}),1e3),this.countSkillHealth+=1)),2==this.selectedDifficulty&&(this.userHeart+=20,this.countHealth+=1,this.countSkillHealth>1?this.isHealth=!1:(this.isHealth=!0,setTimeout((()=>{this.isHealth=!1}),1e3),this.countSkillHealth+=1)),this.healEffect.play())},checkUserHeart(){100==this.userHeart&&alert("Bạn không thể hồi máu khi máu còn trên 100%")},showCharacter(){this.userHeart<100||this.monsterHeart<100?(this.isShowCharacter=!1,alert("Trận đấu đang diễn ra...")):this.isShowCharacter=!0},showMonsters(){this.userHeart<100||this.monsterHeart<100?(this.isShowMonster=!1,alert("Trận đấu đang diễn ra...")):this.isShowMonster=!0},hideMonster(){this.isShowMonster=!1},handleMonster(t){this.selectedMonster=t,this.isShowMonster=!1},handleCharacter(t){this.selectedCharacter=t,this.isShowCharacter=!1},showDifficulty(){this.userHeart<100||this.monsterHeart<100?(this.isShowDifficulty=!1,alert("Trận đấu đang diễn ra...")):this.isShowDifficulty=!0},handleDifficulty(t){this.selectedDifficulty=t,this.isShowDifficulty=!1},showRules(){this.isShowRules=!0},showBoxes(){(this.userHeart<100||this.monsterHeart<100)&&(this.isShowCharacter=!1,this.isShowDifficulty=!1,alert("Trận đấu đang diễn ra..."))},hideRules(){this.isShowRules=!1},qCheck(){this.isQ=!0,setTimeout((()=>{this.isQ=!1}),1e3)},rCheck(){this.isR=!0,setTimeout((()=>{this.isR=!1}),1e3)},wCheck(){this.isW=!0,setTimeout((()=>{this.isW=!1}),1e3)}},computed:{monsterSelect(){let t=this.selectedMonster;return this.listMonsters[t]},characterSelect(){let t=this.selectedCharacter;return this.listCharacters[t]},difficulSelect(){let t=this.selectedDifficulty;return this.levels[t]}},watch:{selectedDifficulty(){0==this.selectedDifficulty&&setTimeout((()=>{alert("Độ khó hiện tại: Dễ")}),500),1==this.selectedDifficulty&&setTimeout((()=>{alert("Độ khó hiện tại: Trung Bình")}),500),2==this.selectedDifficulty&&setTimeout((()=>{alert("Độ khó hiện tại: Khó")}),500)}}}).mount("#app");