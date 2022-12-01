use table1;

create table member(
	ID varchar(20) not null primary key, 
    name varchar(5) not null,
    age int ,
    gender varchar(2) not null, 
    email varchar(50),
    promotion varchar(2) default "X"
);

desc member;
desc user;

alter table member drop column age;

alter table member add column interest varchar(100);
/* 애드할땐 크리에잇 할때처럼 써주기 */
alter table member modify ID varchar(10);
/* 수정할 땐 수정할 부분만 */
drop table member;

show tables;
show databases;

create table user(
	ID varchar(10) not null primary key, 
    name varchar(5) not null,
    age int not null
);

insert into user(ID, name, age) values("a", "kim", 10); 
insert into user(ID, name, age) values("b", "lee", 20);
insert into user values("c", "park", 30); 
insert into user values("d", "park", 20);
/* 생략할땐 모든 항을 다 써줘야됨 */

select ID, name from user where name="kim" ;
/* select 해당컬럼 form 해당테이블 where 조건식 */

select * from user where name="park" order by ID desc limit 1; 
/* select -> from -> where -> order by -> limit 순서로 */

/* where절 다양하게 활용하기 
1) 비교연산자 사용 ex) age >= 10
2) 부정연산자 사용 ex) name != kim (where not name = kim;)
3) sql 연산자 사용 ex) between and / in / like / is (not) null 
age between 10 and 20 
name in ("a", "b") 리스트 중에 하나라도 해당되면 가져옴
name like "l%" "l"이란 글자로 시작하는 모든 단어 다 가져옴 
            %m m으로 끝나는 모든 단어/ %a% 중간에 a들어있는 모든 단어  
            %i_ 뒤에서 두번째에 i들어있는 모든 단어 
age is null age에 null값 있는 거 다가져옴 
4) and / or / not 
*/

update user set age=30 where ID="a";
delete from user where ID="d";

/*실습*/
create table user1(
	id varchar(10) not null primary key,
    pw varchar(20) not null, 
    name varchar(5) not null,
    gender enum('F', 'M', '') default '',
    birthday DATE not null,
    age int not null default 0
    
);

desc user1;

insert into user1 values('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33); 
insert into user1 values('sexyhong', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
insert into user1 values('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
insert into user1 values('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
insert into user1 values('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
insert into user1 values('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
insert into user1 values('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);


select * from user1 order by birthday;
select * from user1 where gender='M' order by name desc;
select id, name from user1 where birthday like '199%';
select * from user1 where birthday like '____-06-__' order by birthday desc;
select * from user1 where gender='M' and birthday like '197%';
select * from user1 order by age desc limit 3;
select * from user1 where age between 25 and 50;
update user1 set pw='12345678' where id='hong1234';
delete from user1 where id='jungkrat';
select * from user1;

CREATE USER 'user'@'%' IDENTIFIED BY '@sesac07';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
select host, user, plugin, authentication_string from mysql.user;
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '@sesac07';
