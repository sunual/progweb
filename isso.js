let tamanho = 2;
		document.addEventListener("DOMContentLoaded", cria);
		function cria() {
			segura = document.createElement("div");
			segura.innerHTML = " <button onclick='mudamenos()'> - </button> <button onclick='mudamais()'> + </button>";
			document.body.append(segura);
		}
		
		function mudamais() {
			if (tamanho < 8) {
				tamanho += 0.5;
				const aga = document.querySelector("h1");
				aga.style.fontSize = `${tamanho}em`;
			}
		}
		
		function mudamenos() {
			if (tamanho > 0.5) {
				tamanho -= 0.5;
				const aga = document.querySelector("h1");
				aga.style.fontSize = `${tamanho}em`;
			}
		}
