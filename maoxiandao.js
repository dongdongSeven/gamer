/**
 * Created by Administrator on 2017/4/12 0012.
 */
//创建玩家
function createDragonprototype(imgSrc,x,y,speed,blood,damage,state){
    this.imgNode=document.createElement('img');
    this.imgSrc=imgSrc;
    this.x=x;
    this.y=y;
    this.isDead=false;
    this.state=state;
    this.attack=false;
    this.move=false;
    this.damage=damage;
    this.speed=speed;
    this.blood=blood;
    this.createDragon=function(){
        this.damage=this.damage;
        this.imgNode.src=this.imgSrc;
        this.imgNode.style.position='absolute';
        this.imgNode.style.left=this.x+'px';
        this.imgNode.style.top=this.y+'px';
        this.imgNode.style.zIndex=3;
        gameBox.appendChild(this.imgNode);
    };
    this.moveLeft=function(){
        if(parseInt(this.imgNode.style.left)>0){
            this.imgNode.style.left=parseInt(this.imgNode.style.left)-this.speed+'px';
        }
    };
    this.moveRight=function(){
        if(parseInt(this.imgNode.style.left)<parseInt(1130-this.imgNode.width)){
            this.imgNode.style.left=parseInt(this.imgNode.style.left)+this.speed+'px';
        }
    };
    this.moveTop=function(){
        if(parseInt(this.imgNode.style.top)>0){
            this.imgNode.style.top=parseInt(this.imgNode.style.top)-this.speed+'px';
        }
    };
    this.moveBottom=function(){
        if(parseInt(this.imgNode.style.top)<parseInt(636-this.imgNode.height)){
            this.imgNode.style.top=parseInt(this.imgNode.style.top)+this.speed+'px';
        }
    };
    this.shot=function(){
        if(!playerDragon)
        return;
        var x=parseInt(playerDragon.imgNode.style.left)+this.imgNode.width;
        var y=parseInt(playerDragon.imgNode.style.top)+this.imgNode.height/4;
        var bullet;
        switch (this.state){
            case 1:
                bullet=new createBulletprototype('img/dragon/small/att.gif',x,y,8);
                bullet.state=this.state;
                break;
            case 2:
                bullet=new createBulletprototype('img/dragon/middle/att.gif',x,y,12);
                bullet.state=this.state;
                break;
            case 3:
                bullet=new createBulletprototype('img/dragon/big/att.gif',x,y,16);
                bullet.state=this.state;
                break;
            case 4:
                bullet=new createBulletprototype('img/dragon/large/att.gif',x,y,20);
                bullet.state=this.state;
                break;
            case 5:
                bullet=new createBulletprototype('img/dragon/final/att.gif',x,y,26);
                bullet.state=this.state;
                break;
        }
        bulletArr.push(bullet);
    };
    this.createDragon();
}

//创建子弹
function createBulletprototype(imgSrc,x,y,speed,damage){
    this.x=x;
    this.y=y;
    this.damage=damage;
    this.beimonsterpeng=false;
    this.breaked=false;
    this.imgNode=document.createElement('img');
    this.imgSrc=imgSrc;
    this.speed=speed;
    this.createBullet=function(){
        this.imgNode.src=this.imgSrc;
        this.imgNode.style.position='absolute';
        this.imgNode.style.top=this.y+'px';
        this.imgNode.style.left=this.x+'px';
        this.imgNode.style.zIndex=3;
        gameBox.appendChild(this.imgNode);
    };
    this.bulletMove=function(){
        this.imgNode.style.left=parseInt(this.imgNode.style.left)+this.speed+'px';
    };
    this.BOSSbulletMove=function(){
        this.imgNode.style.left=parseInt(this.imgNode.style.left)-this.speed+'px';
    };
    this.createBullet();
}

//创建怪
function createMonsterprototype(imgSrc,x,y,speed,blood,num,damage){
    this.imgSrc=imgSrc;
    this.imgNode=document.createElement('img');
    this.x=x;
    this.y=y;
    this.canShot=false;
    this.num=num;
    this.damage=damage;
    this.beiLongpeng=false;
    this.hitted=false;
    this.changehit=false;
    this.isDead=false;
    this.speed=speed;//速度
    this.blood=blood;//血量
    //移动
    this.move=function(){
        this.imgNode.style.left=parseInt(this.imgNode.style.left)-this.speed+'px';
    };
    //BOSS移动
    this.moveUpandDown=function(){
        if(parseInt(this.imgNode.style.top)<3){
            this.imgNode.style.top=parseInt(this.imgNode.style.top)+this.speed+'px';
        } else if(parseInt(this.imgNode.style.top)>420){
            this.imgNode.style.top=parseInt(this.imgNode.style.top)-this.speed+'px';
        }else{
            this.imgNode.style.top=parseInt(this.imgNode.style.top)+(5-parseInt(Math.random()*11))*this.speed+'px';
        }
    };
    //创建
    this.create=function(){
        this.imgNode.src=this.imgSrc;
        this.imgNode.style.position='absolute';
        this.imgNode.style.left=this.x+'px';
        this.imgNode.style.top=this.y+'px';
        this.imgNode.style.zIndex=3;
        gameBox.appendChild(this.imgNode);
    };
    //发射子弹
    this.shot=function(){
        var x=parseInt(this.imgNode.style.left)-150;
        var y=parseInt(this.imgNode.style.top)+this.imgNode.height/3;
        var BOSSbullet;
        BOSSbullet=new createBulletprototype('img/enemy/boss/attackBall.gif',x,y,this.speed*2,this.damage);
        BOSSbulletArr.push(BOSSbullet);
    };
    this.create();
}
