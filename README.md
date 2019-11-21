# projeto-pwa

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Criar banco
```
No Workbench - create database dbeventos - user: root, senha: root
```

### Criar tabelas
```
DESCOMENTAR AS LINHAS DO ARQUIVO EXPRESS.JS (9 e 10) - RODAR - DEPOIS COMENTAR NOVAMENTE


### SCRIPT BANCO
```

insert into User (name, email, password, picture) values ('Marco', 'marco@gmail.com', '1234', 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/01/bryan-cranston-breaking-bad.jpg');
insert into User (name, email, password, picture) values ('Pedro', 'pedro@gmail.com', '1234', 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/01/bryan-cranston-breaking-bad.jpg');
insert into Event (name, local, picture, edate, address, UserId) values ('Sunset Party', 'Praia do Rosa', 'http://destinoflorianopolis.com.br/wp-content/uploads/2018/06/Iha-do-Campeche.jpg', '12-12-2019', 'Rua do Serviço', 1);


### Links que acessamos para fazer coneção com heroku
https://medium.com/tableless/fazendo-deploy-de-apps-vue-webpack-no-heroku-89340028a88e
https://devcenter.heroku.com/articles/heroku-local
https://devcenter.heroku.com/articles/nodejs-support
https://devcenter.heroku.com/articles/procfile
https://cli.vuejs.org/guide/deployment.html#heroku
https://gist.github.com/hone/24b06869b4c1eca701f9
https://devcenter.heroku.com/articles/buildpacks#detection-failure
https://developer.here.com/blog/validate-street-addresses-with-vue.js-and-the-here-geocoder-autocomplete-api

###
link CRIAR PREVIEW e carregar imagem https://stackoverflow.com/questions/49106045/preview-an-image-before-it-is-uploaded-vuejs

```





=============================================================== SQL ============================================================

use gb18rjtcz6zwty36;

SHOW TABLES;
select * from Event;
select * from Event_preference;
select * from Preference;
select * from User;
select * from User_preference;