// user-define function
function calcScore(total, choosable){	// formal type
	// total : 총 문항 수. choosable : 각 문제별 선지 수.
	
	var myForm = document.querySelector("form");
	var score=0;
	var count=0; // 실제 체크된 수. or 실제 체크된 수.
	var missed=1;
	switch(choosable){
		case 1:
			for(var i=1;i<=total;i++){
				var e=eval("myForm.a"+i);
				if(e.checked){
						score+=Number(e.value);
						count++;
					}
			}
		break;
		case 2:
			for(var i=1;i<=total;i++){
				var e=eval("myForm.b"+i);
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
				var notchecked=eval("myForm.b"+missed);
				notchecked[0].focus();
				return;
			}
		break;
		case 4:
			for(var i=total;i>=1;i--){
				var e=eval("myForm.d"+i);
				for(j=0;j<choosable;j++){
					if(e[j].checked){
						score+=Number(e[j].value);
						count++;
					}else{ missed=i;}					
				}
			}
			if(total != count){
				alert("모든 항목을 채워주세요");
				var notchecked=eval("myForm.d"+missed);
				notchecked[0].focus();
				return;
			}
		break;
		case 5:
			for(var i=1;i<=total;i++){
				var e=eval("myForm.e"+i);
				for(j=choosable-1;j>=0;j--){
					if(e[j].checked){
						score+=Number(e[j].value);
						count++;
					}else{ missed=i; }					
				}										
			}
			if(total != count){
				alert("모든 항목을 채워주세요");
				var notchecked=eval("myForm.e"+missed);
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
	var elems=document.querySelector("form");
	var point=0;
	for(var i=1;i<=7;i++){
		var e=eval("elems.e"+i);
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
	e=eval("elems.f8");
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
		e=eval("elems.c"+i);
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
	var elems=document.querySelector("form");
		var point=0;
		for(var i=1;i<=4;i++){
			var e=eval("elems.b"+i);
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
			f=eval("elems.d"+a);
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
	var elems = document.querySelector("form");
	var point1=0; 
	var point2=0;
	for(var i=1;i<=26;i++){
		elem=eval("elems.e"+i);

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
	var elems = document.querySelector("form");
	var scores= [0,0,0,0,0,0,0,0];
	var num=[3,8,5,4,6,7,6,4];
	var i, j;
	for(i=1;i<=43;i++){
		elem=eval("elems.d"+i);

		if(i<=3){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[0]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=4 && i<=11){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[1]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=12 && i<=16){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[2]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=17 && i<=20){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[3]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=21 && i<=26){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[4]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=27 && i<=33){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[5]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=34 && i<=39){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[6]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=40 && i<=43){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[7]+=Number(elem[j].value);
					break;
				}
			}
		}

		if(j==5){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
		}

	}//end for
	var res = "result"
	for(i=0;i<8;i++){
		scores[i]= (((scores[i]-num[i])*100)/(3*num[i])).toFixed(1);
		res= res+i;
		console.log(res+","+scores[i]);

		document.getElementsByName(res)[0].value = scores[i];
		res="result";
	}

}

function calcScoreJob02(){
	var elems = document.querySelector("form");
	var scores= [0,0,0,0,0];
	var num=[5,3,6,3,7];
	var i, j;
	for(i=1;i<=24;i++){
		elem=eval("elems.d"+i);

		if(i<=5){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[0]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=6 && i<=8){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[1]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=9 && i<=14){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[2]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=15 && i<=17){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[3]+=Number(elem[j].value);
					break;
				}
			}
		}else if(i>=18 && i<=24){
			for(j=0;j<=4;j++){
				if(elem[j].checked){
					scores[4]+=Number(elem[j].value);
					break;
				}
			}
		}

		if(j==5){
			alert(i+"번째 항목을 체크하세요");
			elem[0].focus();
			return;
		}

	}//end for
	var res = "result"
	var redish="redish"
	var standard=new Array();	// 2차원배열 남,여
		standard[0]=new Array(83.33,76.67);
		standard[1]=new Array(83.33,72.22);
		standard[2]=new Array(69.44,63.89);
		standard[3]=new Array(61.11,50.00);
		standard[4]=new Array(50.00,45.24);
	for(i=0;i<5;i++){
		scores[i]= (((scores[i]-num[i])*100)/(3*num[i])).toFixed(2);
		res= res+i;
		redish+=i;
		console.log(res+","+scores[i]);

		document.getElementsByName(res)[0].value = scores[i];
		document.getElementsByName(res)[1].value = scores[i];

		if(scores[i]>standard[i][0]){	//남자
			document.getElementsByName(redish)[0].className+='danger';
			//console.log(document.getElementsByName(redish)[1].value);
			
			console.log(redish+" man");
		}
		if(scores[i]>standard[i][1]){	//여자
			document.getElementsByName(redish)[1].className+='danger';
			console.log(redish+" woman");
		}
		res="result";
		redish="redish"
	}
}

