# Demo App API

[Node.js](https://nodejs.org/) server implementující REST API [docs/swagger.yaml](docs/swagger.yaml).

Běžící instance serveru - http://hndocker.oksystem.local:58090

## REST API
REST API je definováno podle specifikace [Open API Initiative](https://openapis.org/) a pro jeho vytvoření byl použit framework [Swagger](http://swagger.io/). Definici REST API si lze prohlédnout pomoci [Swagger UI](http://swagger.io/swagger-ui/) jehož instance běží na http://hndocker.oksystem.local:58095/ (do pole lze pak zadat http://hndocker.oksystem.local:58090/docs/swagger.json). 

## Instalace

Pro spuštění je potřeba mít nainstalovaný [node](https://nodejs.org/download/) a databázi [MongoDB](https://www.mongodb.com/).

Instalace aplikace se provede spuštěním příkazu v adresáři, kde se nachází `package.json`
```
npm install
```

## Spuštění

Před spuštěním je potřeba mít spuštěnou MongoDB.

Proměnné prostředí:
```
DEMO_APP_MONGODB_HOST
DEMO_APP_MONGODB_PORT
DEMO_APP_MONGODB_DB_NAME
DEMO_APP_PORT
```
Pokud tyto proměnné nebudou nastavené, tak se použijí přednastavené hodnoty:
```
DEMO_APP_MONGODB_HOST=localhost
DEMO_APP_MONGODB_PORT=27017
DEMO_APP_MONGODB_DB_NAME=demo-app
DEMO_APP_PORT=8080
```

Spuštění aplikace:
```
npm start
```

## Docker

Pro spuštění na Docker Enginu je připravený `docker-compose.yml`, který zajistí spuštění kontejneru s MongoDB a vytvoření image  s aplikací a následné spuštění. Pro spuštění je tedy potřeba mít nainstalovaný [Docker Compose](https://www.docker.com/products/docker-compose).

Příkaz pro spuštění aplikace:
```
docker-compose up
``` 