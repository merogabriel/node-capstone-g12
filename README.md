# Capstone Node JS

[HEROKU APPLICATION SERVER](https://capstone-security-server.herokuapp.com)

## Descrição do Projeto <br/>

<p align="justify"> Desenvolvemos uma aplicação para facilitar o processo de contratação de serviços de segurança, empresas poderão postar vagas e procurarem candidatos, usuários podem procurar e demonstrar interesse em vagas!   </p>


## Users

#### POST /users/register

_Formato da requisição_

```json
{
  "name": "Nome",
  "email": "mail@email.com",
  "password": "1234",
  "age": 22
}
```

_Formato de resposta_

```json
{
  "id": "af5d3026-4c96-4e3c-9e30-04ae000dbf6d",
  "name": "Nome",
  "age": 22,
  "email": "mail@email.com",
  "password": "$2b$10$pV3dlAXg0KvdeWwGDbxN/.KWj8bWy7BdRxDuy5xsjjfUcUOpNkqUa",
  "isAdm": false,
  "hired": false
}
```

#### POST /users/login

_Formato da requisição_

```json
{ "email": "mail@email.com", "password": "1234" }
```

_Formato de resposta_

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im90YXZpb0BlbWFpbC5jb20iLCJpYXQiOjE2NTUyOTk4OTcsImV4cCI6MTY1NTMwNzA5N30.8ayEbC8Tk_eOjJjKhaQzvFLeKfDri9TIzorpQkWrO4w"
}
```

#### DELETE /users/delete

_Formato da requisição_

```json
{ "email": "mail@email.com" }
```

_Formato de resposta_

```json
{}
```

## Company

#### POST /company/register

_Formato da requisição_

```json
{
  "name": "Empresa",
  "cnpj": "12.345.678/9123-45",
  "password": "1234"
}
```

#### POST /company/login

_Formato da requisição_

```json
{ "cnpj": "12.345.678/9123-45", "password": "1234" }
```

_Formato de resposta_

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbnBqIjoiMTIzNCIsImlhdCI6MTY1NTI5OTkyNiwiZXhwIjoxNjU1MzA3MTI2fQ.60G17RFPw9Rk4p9Q5Vj7X1WYBWGuBdJiTAKaEUwser4"
}
```

#### GET /company/<name>

_Formato de resposta_

```json
[
  {
    "Vaga": "Vaga1"
  },
  {
    "Vaga": "Vaga2"
  },
  {
    "Vaga": "Vaga3"
  }
]
```

#### DELETE /company/delete

_Formato da requisição_

```json
{ "cnpj": "12.345.678/9123-45" }
```

_Formato de resposta_

```json
{}
```

## Vacancy

#### POST /vacancy/create

_Formato da requisição_

```json
{}
```

_Formato de resposta_

```json
{}
```

#### GET /vacancy/list

_Formato da requisição_

```json
{}
```

_Formato de resposta_

```json
{}
```

#### PATCH /vacancy/<vacancyId>

_Formato da requisição_

```json
{}
```

_Formato de resposta_

```json
{}
```

## Courses

#### GET /courses/

_Formato da requisição_

```json
{}
```

_Formato de resposta_

```json
{}
```