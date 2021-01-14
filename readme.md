# Acessar aplicação no navegador: http://localhost:3000

# Utilizar somente estas bibliotecas para o funcionamento

npm install

# Metódos e bibliotecas utilizada passo a passo de desenvolvimento

npm init 

npm install express --save 

npm install ejs --save <- biblioteca para renderização do html

npm install nodemon --save-dev <- auxilia ao reiniciar o servidor automaticamente sempre que feito uma alteração
npm run dev <- para acionar nosso comando dev dentro de nosso package.json
nodemon server.js

npm install body-parser --save  <- middleware como body-parser, são basicamente plugins que alteram o objeto request ou response antes de serem manipulados pelo nosso aplicativo.

O método urlencoded dentro de body-parser diz ao body-parser para extrair dados do elemento form e adicioná-los à propriedade body no objeto request. Faça o teste, dê um console.loge preencha o formulário, você deverá ver tudo no campo de formulário dentro do objeto


# Banco de dados

npm install mongodb --save 

# Implementado modelo mais básico dos principios de SOLID

1°Princípio da Responsabilidade Única. Tudo deve possuir apenas uma razão para mudar. ...
2°Princípio Aberto-Fechado. A mudança de comportamento deve ser possível sem alterar código existente. ...
3°Princípio da Substituição de Liskov. ...
4°Princípio de Segregação de Interfaces. ...
5°Princípio de Inversão de Dependências.

