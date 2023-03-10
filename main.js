
//ax^2+bx+c=0
function prog() {
	let a = document.getElementById('a').value ?? false;
	let b = document.getElementById('b').value ?? false;
	let c = document.getElementById('c').value ?? false;
	let result = '';

	if(a && b && c){
		result = quad(a, b, c);
	}else{
		result = 'Должны быть заданы все переменные!';
	}

	document.getElementById('result').textContent = result;
	document.getElementById('otvet').style.display = 'block';
}

function quad(a, b, c) {

	if(a == 0 || b == 0 || c == 0){
		let x;
		if (a == 0) {
			 x = -(c/b);
		}else if(b == 0){
			x = - Math.sqrt(c/a);
		}else if(c == 0){
			 x = -(b/a);
		}
		return "Коэффициенты: a="+a+", b="+b+", c="+c+"\nКорень уравнения: X=" + x;
	}

	let D = b * b - 4 * a * c; //Дискриминант
	let x1, x2;
	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		return "Коэффициенты: a="+a+", b="+b+", c="+c+"\nКорни уравнения: X1=" + x1 + ", X2=" + x2 + "\nДискриминант(D)=" + D;
	} else if (D == 0) {
		x1 = -b / (2 * a);
		return "Коэффициенты: a="+a+", b="+b+", c="+c+"\nКорень уравнения: X=" + x1 + "\nДискриминант(D)=" + D;
	} else if (D < 0) {
		return "Коэффициенты: a="+a+", b="+b+", c="+c+"\nКорней нет!\nДискриминант(D)=" + D;
	}
}