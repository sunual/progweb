var a = 2
		//const subtitulos = document.querySelectorAll('h`{a}`');
		const subtitulos = document.querySelectorAll('h2');
    const topicos = new Array();
        subtitulos.forEach(subtitulo => {
            topicos.push(subtitulo.textContent);
			//const linke = document.createElement('h6');
			//linke.onclick = function () {
			//	window.scrollTo(0,0);
			//	linke.insertAdjacentHTML(subtitulo, 'Voltar');
			//}
        });
		let par = 1
        lista = document.querySelector('ol');
        topicos.forEach(topico => {
            const item = document.createElement('li');
			const boto = document.createElement('a');
            item.textContent = topico;
			//boto.textContent = 'Direcione-me até ' + topico;
			//boto.setAttribute('name', par)
			boto.setAttribute('name', par)
			item.onclick = function () {
				if (boto.name == 1) {
					window.scrollTo(0,200);
				} else if (boto.name == 2) {
					window.scrollTo(0,930);
				} else if (boto.name == 3) {
					window.scrollTo(0,1670);
				} else if (boto.name == 4) {
					window.scrollTo(0,2400); 
				} else if (boto.name == 5) {
					window.scrollTo(0,3135);
				} else {
					window.scrollTo(0,3870);
				};
			};
            lista.append(item);
			lista.append(boto);
			par+=1
        });
		
		lincagem();

		
		function lincagem() {
			let nodelist = document.getElementsByTagName("h2").length;
			let giragira = 0
			while (giragira < nodelist) {
				let primeiro = document.getElementsByTagName('h2')[`${giragira}`];
				let sertanejo = document.createElement('h5');
				sertanejo.textContent = 'Voltar ao sumário';
				primeiro.append(sertanejo);
				sertanejo.onclick = function () {
					window.scrollTo(0,0);	
				};
				giragira++;
			
			};
		};
