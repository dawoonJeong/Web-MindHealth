// user-define function
function calcScore(total, choosable){	// formal type
	// total : 총 문항 수. choosable : 각 문제별 선지 수.
	var myForm = document.getElementsByTagName("form");
	//var myForm = document.querySelector("form");
	var score=0;
	var count=0; // 실제 체크된 수. or 실제 체크된 수.
	var missed=1;
	switch(choosable){
		case 1:
			for(var i=1;i<=total;i++){
				var e=eval("myForm[0].a"+i);
				if(e.checked){
						score+=Number(e.value);
						count++;
					}
			}
		break;
		case 2:
			for(var i=1;i<=total;i++){
				var e=eval("myForm[0].b"+i);
				for(j=choosable-1;j>=0;j--){
					if(e[j].checked){
						score+=Number(e[j].value);
						count++;
					}else{
						missed=i;
					}				
				}
			}
			if(total != count){
				alert("모든 항목을 채워주세요");
				var notchecked=eval("myForm[0].b"+missed);
				notchecked[0].focus();
				return;
			}
		break;
		case 4:
			for(var i=total;i>=1;i--){
				var e=eval("myForm[0].d"+i);
				for(j=0;j<choosable;j++){
					if(e[j].checked){
						score+=Number(e[j].value);
						count++;
					}else{ missed=i;}					
				}
			}
			if(total != count){
				alert("모든 항목을 채워주세요");
				var notchecked=eval("myForm[0].d"+missed);
				notchecked[0].focus();
				return;
			}
		break;
		case 5:
			for(var i=1;i<=total;i++){
				var e=eval("myForm[0].e"+i);
				for(j=choosable-1;j>=0;j--){
					if(e[j].checked){
						score+=Number(e[j].value);
						count++;
					}else{ missed=i; }					
				}										
			}
			if(total != count){
				alert("모든 항목을 채워주세요");
				var notchecked=eval("myForm[0].e"+missed);
				notchecked[0].focus();
				return;
			}
		break;
		default:
			break;
	}
	document.getElementsByName("result")[0].value=score;
}

function calcAlcScore(){
	//var elems=document.querySelector("form");
	var elems = document.getElementsByTagName("form");
	var point=0;
	for(var i=1;i<=7;i++){
		var e=eval("elems[0].e"+i);
		for(j=0;j<5;j++){
			if(e[j].checked){
				point+=Number(e[j].value);
				break;
			}
		}
		if(j==5){
			alert(i+"번째 항목을 체크하세요");
			e[0].focus();
			return;
		}
	}
	e=eval("elems[0].f8");
	for(j=0;j<6;j++){
		if(e[j].checked){
			point+=Number(e[j].value);
			break;
		}
		if(j==6){
			alert("8번째 항목을 체크하세요");
			e[0].focus();
			return;
		}
	}
	for(i=9;i<=10;i++){
		e=eval("elems[0].c"+i);
		for(j=0;j<3;j++){
			if(e[j].checked){
				point+=Number(e[j].value);
				break;
			}
			if(j==3){
				alert(i+"번째 항목을 체크하세요");
				e[0].focus();
				return;
			}
		}
	}
	document.getElementsByName("result")[0].value=point;
}

function calcnicScore(){
	//var elems=document.querySelector("form");
	var elems = document.getElementsByTagName("form");
		var point=0;
		for(var i=1;i<=4;i++){
			var e=eval("elems[0].b"+i);
			for(j=0;j<=1;j++){
				if(e[j].checked){
					point+=Number(e[j].value);
					break;
				}
			}
			if(j==2){
				alert(i+"번째 항목을 체크하세요");
				e[0].focus();
				return;
			}
		}
		for(a=1;a<=2;a++){
			f=eval("elems[0].d"+a);
			for(c=0;c<=3;c++){
				if(f[c].checked){
					point+=Number(f[c].value);
					break;
				}
			}
			if(c==4){
				if(a==1){
					a=5;
					alert(a+"번째 항목을 체크하세요");
					f[0].focus();
					return;
				}
				else
					a=6;
				alert(a+"번째 항목을 체크하세요");
				f[0].focus();
				return;
				
			}	
		}
		document.getElementsByName("result")[0].value=point;
}

function calcScore_Stress(){
	//var elems = document.querySelector("form");
	var elems = document.getElementsByTagName("form");
	var point1=0; 
	var point2=0;
	for(var i=1;i<=26;i++){
		elem=eval("elems[0].e"+i);

		if(i<=22){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					point1+=Number(elem[j].value);
					break;
				}
			}
		}else{
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					point2+=Number(elem[j].value);
					break;
				}
			}
		}

		if(j==5){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
		}
	}
	document.getElementsByName("result1")[0].value=point1;
	document.getElementsByName("result2")[0].value=point2;

}


function calcScoreJob01(){
	//var elems = document.querySelector("form");
	//var elems = document.getElementsByTagName("form");
	var scores= [0,0,0,0,0,0,0,0];
	var num=[3,8,5,4,6,7,6,4];
	var i, j;
	var gender;
	elem=eval("elems[0].gender");
	if(elem[0].checked){	// Man
		gender="Man";
	}else if(elem[1].checked){
		gender="Woman";
	}else{
		alert("성별을 체크하세요");
		elem[0].focus();
		return;
	}
	for(i=1;i<=43;i++){
		elem=eval("elems[0].d"+i);

		if(i<=3){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[0]+=Number(elem[j].value);
					break;
				}
			}			if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
			}
		}else if(i>=4 && i<=11){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[1]+=Number(elem[j].value);
					break;
				}
			}			if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
			}
		}else if(i>=12 && i<=16){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[2]+=Number(elem[j].value);
					break;
				}
			}			if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
			}
		}else if(i>=17 && i<=20){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[3]+=Number(elem[j].value);
					break;
				}
			}
						if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
			}
		}else if(i>=21 && i<=26){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[4]+=Number(elem[j].value);
					break;
				}
			}
						if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
			}
		}else if(i>=27 && i<=33){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[5]+=Number(elem[j].value);
					break;
				}
			}
						if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
			}
		}else if(i>=34 && i<=39){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[6]+=Number(elem[j].value);
					break;
				}
			}
						if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
			}
		}else if(i>=40 && i<=43){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[7]+=Number(elem[j].value);
					break;
				}
			}
			if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
			}
		}

		

	}//end for
	var res = "result"
	var redish="class=\"danger\""
	var innerString;
	// tbl array 추가. ------------------------------------------
	var standard=new Array();
		standard[0]=new Array(44.5, 44.5);
		standard[1]=new Array(50.1, 54.2);
		standard[2]=new Array(53.4, 60.1);
		standard[3]=new Array(33.4, 33.4);
		standard[4]=new Array(50.1, 50.1);
		standard[5]=new Array(52.4, 52.4);
		standard[6]=new Array(66.7, 66.7);
		standard[7]=new Array(41.7, 41.7);
	var danger=new Array();
		danger[0]=new Array(" "," ");
		danger[1]=new Array(" "," ");
		danger[2]=new Array(" "," ");
		danger[3]=new Array(" "," ");
		danger[4]=new Array(" "," ");
		danger[5]=new Array(" "," ");
		danger[6]=new Array(" "," ");
		danger[7]=new Array(" "," ");

	for(i=0;i<8;i++){
		scores[i]= (((scores[i]-num[i])*100)/(3*num[i])).toFixed(1);
		res= res+i;
		//console.log(res+","+scores[i]);
		if(scores[i]>=standard[i][0]){
			danger[i][0]=redish;
		}
		if(scores[i]>=standard[i][1]){
			danger[i][1]=redish;
		}

		//document.getElementsByName(res)[0].value = scores[i];
		//res="result";
	}

	if(gender=="Man"){
		innerString='<div class="panel panel-primary"><div class="panel-heading" > 점수결과(남) </div><div class="panel-body">'
					+'<table class="table"><thead style="background-color:#ffffff; color:black;">'
					+'<tr><th color="white"> 영 역 </th><th color="white"> 결과값 </th><th color="white"> 한국노동자 중간값 </th></tr>'
					+'<tbody>'
					+'<tr '+danger[0][0]+'><td>물리적 환경</td><td> '+scores[0]+'점</td><td> '+standard[0][0]+'점</td></tr>'
					+'<tr '+danger[1][0]+'><td>직무요구</td><td> '+scores[1]+'점</td><td> '+standard[1][0]+'점</td></tr>'
					+'<tr '+danger[2][0]+'><td>직무자율</td><td> '+scores[2]+'점</td><td> '+standard[2][0]+'점</td></tr>'
					+'<tr '+danger[3][0]+'><td>관계갈등</td><td> '+scores[3]+'점</td><td> '+standard[3][0]+'점</td></tr>'
					+'<tr '+danger[4][0]+'><td>직무불안정</td><td> '+scores[4]+'점</td><td> '+standard[4][0]+'점</td></tr>'
					+'<tr '+danger[5][0]+'><td>조직체계</td><td> '+scores[5]+'점</td><td> '+standard[5][0]+'점</td></tr>'
					+'<tr '+danger[6][0]+'><td>보상부적절</td><td> '+scores[6]+'점</td><td> '+standard[6][0]+'점</td></tr>'
					+'<tr '+danger[7][0]+'><td>직장문화</td><td> '+scores[7]+'점</td><td> '+standard[7][0]+'점</td></tr>'
					+'</tbody></thead></table></div></div>';
		
		document.getElementById('tblResult').innerHTML=innerString;
		document.getElementById('tblResult').focus();

	}else if(gender=="Woman"){
		innerString='<div class="panel panel-primary"><div class="panel-heading" > 점수결과(여) </div><div class="panel-body">'
					+'<table class="table"><thead style="background-color:#ffffff; color:black;">'
					+'<tr><th color="white"> 영 역 </th><th color="white"> 결과값 </th><th color="white"> 한국노동자 중간값 </th></tr>'
					+'<tbody>'
					+'<tr '+danger[0][1]+'><td>물리적 환경</td><td> '+scores[0]+'점</td><td> '+standard[0][1]+'점</td></tr>'
					+'<tr '+danger[1][1]+'><td>직무요구</td><td> '+scores[1]+'점</td><td> '+standard[1][1]+'점</td></tr>'
					+'<tr '+danger[2][1]+'><td>직무자율</td><td> '+scores[2]+'점</td><td> '+standard[2][1]+'점</td></tr>'
					+'<tr '+danger[3][1]+'><td>관계갈등</td><td> '+scores[3]+'점</td><td> '+standard[3][1]+'점</td></tr>'
					+'<tr '+danger[4][1]+'><td>직무불안정</td><td> '+scores[4]+'점</td><td> '+standard[4][1]+'점</td></tr>'
					+'<tr '+danger[5][1]+'><td>조직체계</td><td> '+scores[5]+'점</td><td> '+standard[5][1]+'점</td></tr>'
					+'<tr '+danger[6][1]+'><td>보상부적절</td><td> '+scores[6]+'점</td><td> '+standard[6][1]+'점</td></tr>'
					+'<tr '+danger[7][1]+'><td>직장문화</td><td> '+scores[7]+'점</td><td> '+standard[7][1]+'점</td></tr>'
					+'</tbody></thead></table></div></div>';
		
		document.getElementById('tblResult').innerHTML=innerString;
	}


}

function calcScoreJob02(){
	//var elems = document.querySelector("form");
	var elems = document.getElementsByTagName("form");
	var scores= [0,0,0,0,0];
	var num=[5,3,6,3,7];
	var gender;
	var i, j;
	elem=eval("elems[0].gender");
	if(elem[0].checked){	// Man
		gender="Man";
	}else if(elem[1].checked){
		gender="Woman";
	}else{
		alert("성별을 체크하세요");
		elem[0].focus();
		return;
	}
	for(i=1;i<=24;i++){
		elem=eval("elems[0].d"+i);

		if(i<=5){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[0]+=Number(elem[j].value);
					break;
				}
			}
			if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
		}
		}else if(i>=6 && i<=8){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[1]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=9 && i<=14){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[2]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=15 && i<=17){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[3]+=Number(elem[j].value);
					break;
				}
			}
			if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
		}
		}else if(i>=18 && i<=24){
			for(j=0;j<4;j++){
				if(elem[j].checked){
					scores[4]+=Number(elem[j].value);
					break;
				}

			}
			if(j==4){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
		}
		}

		

	}//end for
	//gender="Man"||"Woman"
	//결과에 따라 html에 띄워주는 값 바뀌어야 함.
	var res = "result"
	var redish="class=\"danger\""
	var innerString;
	var standard=new Array();	// 2차원배열 남,여
		standard[0]=new Array(83.33,76.67);
		standard[1]=new Array(83.33,72.22);
		standard[2]=new Array(69.44,63.89);
		standard[3]=new Array(61.11,50.00);
		standard[4]=new Array(50.00,45.24);
	var danger=new Array();
		danger[0]=new Array(" "," ");
		danger[1]=new Array(" "," ");
		danger[2]=new Array(" "," ");
		danger[3]=new Array(" "," ");
		danger[4]=new Array(" "," ");
	
	for(i=0;i<5;i++){
		scores[i]= (((scores[i]-num[i])*100)/(3*num[i])).toFixed(2);
		res= res+i;
		if(scores[i]>=standard[i][0]){
			danger[i][0]=redish;
		}
		if(scores[i]>=standard[i][1]){
			danger[i][1]=redish;
		}
		
		console.log(res+","+scores[i]);
		console.log("danger["+i+"]:"+danger[i]);
	}

	if(gender=="Man"){
		innerString='<div class="panel panel-primary"><div class="panel-heading" > 점수결과(남) </div><div class="panel-body">'
						+'<table class="table">'
						+'<thead style="background-color:#ffffff; color:black;">'
						+'<tr><th color="white"> 영 역 </th><th color="white"> 결과값 </th><th color="white"> 위험범위(남) </th></tr>'
						+'<tbody>'
						+'<tr '+danger[0][0]+'><td>감정표출의 노력 및 다양성</td><td> '+scores[0]+'점</td><td>'+standard[0][0]+'~100</td></tr>'
						+'<tr '+danger[1][0]+'><td>고객응대 과부하 및 갈등</td><td> '+scores[1]+'점</td><td>'+standard[1][0]+'~100</td></tr>'
						+'<tr '+danger[2][0]+'><td>감정부조화 및 손상</td><td> '+scores[2]+'점</td><td>'+standard[2][0]+'~100</td></tr>'
						+'<tr '+danger[3][0]+'><td>조직 감시 및 모니터링</td><td> '+scores[3]+'점</td><td>'+standard[3][0]+'~100</td></tr>'
						+'<tr '+danger[4][0]+'><td>조직 지지 및 보호체계</td><td> '+scores[4]+'점</td><td>'+standard[4][0]+'~100</td></tr>'
						+'</tbody></thead></table></div></div>';
		document.getElementById('tblResult').innerHTML=innerString;
		//document.getElementById('tblResult').innerHTML='<div class="panel-body"><div id="man" class="tab-pane fade"><?include "./jobstress02M.html"?></div></div>';
		
	}else if(gender=="Woman"){
		innerString='<div class="panel panel-primary"><div class="panel-heading" > 점수결과(여) </div><div class="panel-body">'
						+'<table class="table">'
						+'<thead style="background-color:#ffffff; color:black;">'
						+'<tr><th color="white"> 영 역 </th><th color="white"> 결과값 </th><th color="white"> 위험범위(여) </th></tr>'
						+'<tbody>'
						+'<tr '+danger[0][1]+'><td>감정표출의 노력 및 다양성</td><td> '+scores[0]+'점</td><td>'+standard[0][1]+'~100</td></tr>'
						+'<tr '+danger[1][1]+'><td>고객응대 과부하 및 갈등</td><td> '+scores[1]+'점</td><td>'+standard[1][1]+'~100</td></tr>'
						+'<tr '+danger[2][1]+'><td>감정부조화 및 손상</td><td> '+scores[2]+'점</td><td>'+standard[2][1]+'~100</td></tr>'
						+'<tr '+danger[3][1]+'><td>조직 감시 및 모니터링</td><td> '+scores[3]+'점</td><td>'+standard[3][1]+'~100</td></tr>'
						+'<tr '+danger[4][1]+'><td>조직 지지 및 보호체계</td><td> '+scores[4]+'점</td><td>'+standard[4][1]+'~100</td></tr>'
						+'</tbody></thead></table></div></div>';
		document.getElementById('tblResult').innerHTML=innerString;


		//document.getElementById('tblResult').innerHTML='<div class="panel-body"><div id="woman" class="tab-pane fade"><?include "./jobstress02F.html"?></div></div>';
		
	}

	
}

