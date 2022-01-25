
function App() {
  return (
    <div className="App">
    	<div align="center">
      		<h1>Dokumentacja</h1>
      		<p>Realizacja zadania nr 1 w ramach laboratorium PFSwChO Oleksandr Tomenhcuk</p>
      		<br><br>
      		<p>Aplikacja internetowa w środowisku Docker. Stworzona przy pomocy Docker, nodeJS oraz ReactJS. Zawiera ona kontener 'server' który rozdziela ruch na składowe kontenery aplikacji, czyli 			'documentation', 'home' oraz 'calculator'. Analizuje on ruch na podstawie żądania przychodzącego, a następnie dopasowuję ją do zadeklarowanego serwera 			upstream.</p>
      		<br><br>
      		<h2> Instalacja wersji Developerskiej: </h2>
      		<p> W celu uruchomienia aplikacji niezbędnym jest wykonanie poniższych polecen.</p>
      		<br><br>
      		 <p>1. git clone https://github.com/tomen-coder/PFSwChO_zad1.git  </p><br>
      		 <p>2. cp .env.example .env </p><br>
      		 <p>3. docker-compose -f docker-compose.dev.yml up --build --force-recreate </p>
      		 <br><br>
      		<p> Po wykonaniu powyzszych działań można uruchomić przeglądarke i przejść pod adres http://localhost. </p>
      		
      	</div>
    </div>
  );
}

export default App;
