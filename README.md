# Capstone Node JS

[HEROKU APPLICATION SERVER](https://capstone-security-server.herokuapp.com)

## Descrição do Projeto <br/>

<p align="justify"> Desenvolvemos uma aplicação para facilitar o processo de contratação de serviços de segurança, empresas poderão postar vagas e procurarem candidatos, usuários podem procurar e demonstrar interesse em vagas!   </p>

## Users

#### POST /users/register

_Formato da requisição_

```json
{
  "name": "teste",
  "email": "teste@",
  "password": "123456",
  "age": 20,
  "state": "SP",
  "courses": ["Vigilância Patrimonial", "Técnicas de defesa pessoal"]
}
```

_Formato de resposta_

```json
{
  "id": "4eab19e3-7fb9-4148-acec-c82f6e763bce",
  "name": "teste",
  "age": 20,
  "email": "teste@",
  "password": "$2b$10$6l49RtSfkZbqwhRYqp6NyOFYMErAq8RAAjN/cCo9rtnBpPM4GbKS.",
  "address": {
    "addressUuid": "d5893193-cc24-4ee6-8771-82078e44aed7",
    "state": "SP"
  },
  "isAdm": false,
  "hired": false,
  "courses": [
    {
      "employeeUuid": "ff2b2ece-5ff4-48be-9345-88a360153b2c",
      "name": "Vigilância Patrimonial"
    },
    {
      "employeeUuid": "da215920-2c45-4741-960c-0264b55c8202",
      "name": "Técnicas de defesa pessoal"
    }
  ]
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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQCIsImlhdCI6MTY1NTkxODk1MCwiZXhwIjoxNjU1OTIyNTUwfQ.TRPOCjhhUl_5AcDhqcNonijDdXU_cFnU_YOuYc1a-5k"
}
```

#### PATCH /users/update

_Formato da requisição, necessário token_

````json
{
"state":"RJ",
"courses":["Criminalística"]
}```

_Formato de resposta_

```json
{
  "id": "4eab19e3-7fb9-4148-acec-c82f6e763bce",
  "name": "teste",
  "email": "teste@",
  "password": "$2b$10$6l49RtSfkZbqwhRYqp6NyOFYMErAq8RAAjN/cCo9rtnBpPM4GbKS.",
  "isAdm": false,
  "age": 20,
  "hired": false,
  "courses": [
    {
      "employeeUuid": "ff2b2ece-5ff4-48be-9345-88a360153b2c",
      "name": "Vigilância Patrimonial"
    },
    {
      "employeeUuid": "da215920-2c45-4741-960c-0264b55c8202",
      "name": "Técnicas de defesa pessoal"
    },
    {
      "employeeUuid": "e24347ca-8265-4bbf-ba08-1c040631be30",
      "name": "Criminalística"
    }
  ],
  "address": {
    "addressUuid": "d5893193-cc24-4ee6-8771-82078e44aed7",
    "state": "SP"
  }
}
````

#### DELETE /users/delete

_Formato da requisição_
_,inserir no header_

```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQCIsImlhdCI6MTY1NTkxODk1MCwiZXhwIjoxNjU1OTIyNTUwfQ.TRPOCjhhUl_5AcDhqcNonijDdXU_cFnU_YOuYc1a-5k"
}
```

_Formato de resposta_

```json
{}
```

#### POST /users/apply/:vacancyId

_Formato da requisição_

```json
{}
```

_Formato de resposta_

```json
{
  "vacancyUuid": "748295b4-6abc-4ce8-9755-d70054922d30",
  "name": "qualquer",
  "create_at": "2022-06-22T18:26:54.170Z",
  "update_at": "2022-06-22T18:26:54.170Z",
  "description": "fazendo deploy",
  "isActive": false,
  "hired": null,
  "company": {
    "id": "918d2663-854d-4ffe-bc7b-fc118eee8436",
    "name": "EmpresaTeste",
    "cnpj": "1234",
    "password": "$2b$10$K/sJInSUNrHQtQ82FNA5deVzFUjQIGNVaSr6SMcZa2icRPyl1QBae"
  },
  "cadidate": {
    "candidatesUuid": "93270b5a-3b7a-4d4f-9a39-796786d524ea",
    "user": [
      {
        "id": "3d51db66-6595-4210-b254-507df01d87d7",
        "name": "teste",
        "email": "teste@",
        "password": "$2b$10$k8IqnDDMLmgMvcDNMaUrRuxzkG90txWf6wigCENRPbjOyy3Th7Pfm",
        "isAdm": false,
        "age": 20,
        "hired": false,
        "courses": [
          {
            "employeeUuid": "2a9ada9c-76d2-4e05-9698-89b81c1f8d08",
            "name": "Vigilância Patrimonial"
          },
          {
            "employeeUuid": "c55ab337-4c77-4873-9948-d85eead8ae33",
            "name": "Técnicas de defesa pessoal"
          }
        ],
        "address": {
          "addressUuid": "57019d08-9589-463b-ae0e-534ebf155e0e",
          "state": "SP"
        }
      }
    ]
  }
}
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

#### GET /company/:name

_Formato de resposta_

```json
[
  {
    "vacancies": [
      {
        "vacancyUuid": "748295b4-6abc-4ce8-9755-d70054922d30",
        "name": "qualquer",
        "create_at": "2022-06-22T18:26:54.170Z",
        "update_at": "2022-06-22T18:33:00.911Z",
        "description": "fazendo deploy",
        "isActive": false,
        "hired": {
          "id": "3d51db66-6595-4210-b254-507df01d87d7",
          "name": "teste",
          "email": "teste@",
          "password": "$2b$10$k8IqnDDMLmgMvcDNMaUrRuxzkG90txWf6wigCENRPbjOyy3Th7Pfm",
          "isAdm": false,
          "age": 20,
          "hired": false,
          "courses": [
            {
              "employeeUuid": "c55ab337-4c77-4873-9948-d85eead8ae33",
              "name": "Técnicas de defesa pessoal"
            },
            {
              "employeeUuid": "2a9ada9c-76d2-4e05-9698-89b81c1f8d08",
              "name": "Vigilância Patrimonial"
            }
          ],
          "address": {
            "addressUuid": "57019d08-9589-463b-ae0e-534ebf155e0e",
            "state": "SP"
          }
        },
        "company": {
          "id": "918d2663-854d-4ffe-bc7b-fc118eee8436",
          "name": "EmpresaTeste",
          "cnpj": "1234",
          "password": "$2b$10$K/sJInSUNrHQtQ82FNA5deVzFUjQIGNVaSr6SMcZa2icRPyl1QBae"
        },
        "cadidate": {
          "candidatesUuid": "93270b5a-3b7a-4d4f-9a39-796786d524ea",
          "user": [
            {
              "id": "3d51db66-6595-4210-b254-507df01d87d7",
              "name": "teste",
              "email": "teste@",
              "password": "$2b$10$k8IqnDDMLmgMvcDNMaUrRuxzkG90txWf6wigCENRPbjOyy3Th7Pfm",
              "isAdm": false,
              "age": 20,
              "hired": false,
              "courses": [
                {
                  "employeeUuid": "2a9ada9c-76d2-4e05-9698-89b81c1f8d08",
                  "name": "Vigilância Patrimonial"
                },
                {
                  "employeeUuid": "c55ab337-4c77-4873-9948-d85eead8ae33",
                  "name": "Técnicas de defesa pessoal"
                }
              ],
              "address": {
                "addressUuid": "57019d08-9589-463b-ae0e-534ebf155e0e",
                "state": "SP"
              }
            }
          ]
        }
      }
    ]
  },
  {
    "Vaga": "Vaga2"
  },
  {
    "Vaga": "Vaga3"
  }
]
```

#### PATCH /company/update

_Formato da requisição, necessário token_

```json
{ "password": "12345" }
```

_Formato de resposta_

```json
{
  "id": "6868987d-3fb8-4e5a-861a-559d6e0a7856",
  "name": "EmpresaTeste",
  "cnpj": "1234",
  "password": "$2b$10$tgtlkI7HIgk91Q8UxdL4AuxgGNRJSJyZzkipc1rcVJqJg4eu.YEOa"
}
```

#### DELETE /company/delete

_Formato da requisição, necessário token_

```json
{ "cnpj": "12.345.678/9123-45" }
```

_Formato de resposta_

```json
{}
```

## Vacancy

#### POST /vacancy/create

_Formato da requisição, necessário token_

```json
{
  "name": "qualquer",
  "description": "fazendo deploy",
  "isActive": false
}
```

_Formato de resposta_

```json
{
  "name": "qualquer",
  "description": "fazendo deploy",
  "isActive": false,
  "company": {
    "id": "918d2663-854d-4ffe-bc7b-fc118eee8436",
    "name": "EmpresaTeste",
    "cnpj": "1234",
    "password": "$2b$10$K/sJInSUNrHQtQ82FNA5deVzFUjQIGNVaSr6SMcZa2icRPyl1QBae"
  },
  "cadidate": {
    "candidatesUuid": "ad842dbf-c228-4c0f-908a-88aa80ef2eb1"
  },
  "vacancyUuid": "da9948d5-44cb-43c3-b5ad-bcf2915d60ce",
  "create_at": "2022-06-22T18:11:01.277Z",
  "update_at": "2022-06-22T18:11:01.277Z"
}
```

#### PATCH /vacancy/propriety/:vacancyId

_Formato da requisição, necessário token_

```json
{
  "description": "uma vaga volta para especialista em segunraça, que tem experiencia de pelo menos 3 anos com portaria. Vaga para PDC. #aprova",
  "isActive": true
}
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

#### PATCH /vacancy/hired/:vacancyId

_Formato da requisição, necessário token de empresa_

```json
{ "email": "test@" }
```

_Formato de resposta_

```json
{
  "vacancyUuid": "748295b4-6abc-4ce8-9755-d70054922d30",
  "name": "qualquer",
  "create_at": "2022-06-22T18:26:54.170Z",
  "update_at": "2022-06-22T18:33:00.911Z",
  "description": "fazendo deploy",
  "isActive": false,
  "hired": {
    "id": "3d51db66-6595-4210-b254-507df01d87d7",
    "name": "teste",
    "email": "teste@",
    "password": "$2b$10$k8IqnDDMLmgMvcDNMaUrRuxzkG90txWf6wigCENRPbjOyy3Th7Pfm",
    "isAdm": false,
    "age": 20,
    "hired": true,
    "courses": [
      {
        "employeeUuid": "c55ab337-4c77-4873-9948-d85eead8ae33",
        "name": "Técnicas de defesa pessoal"
      },
      {
        "employeeUuid": "2a9ada9c-76d2-4e05-9698-89b81c1f8d08",
        "name": "Vigilância Patrimonial"
      }
    ],
    "address": {
      "addressUuid": "57019d08-9589-463b-ae0e-534ebf155e0e",
      "state": "SP"
    }
  },
  "company": {
    "id": "918d2663-854d-4ffe-bc7b-fc118eee8436",
    "name": "EmpresaTeste",
    "cnpj": "1234",
    "password": "$2b$10$K/sJInSUNrHQtQ82FNA5deVzFUjQIGNVaSr6SMcZa2icRPyl1QBae"
  }
}
```

#### DELETE /vacancy/delete/:vacancyId

_Formato da requisição, necessário token_

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
{
  "courses": [
    "Escolta armada",
    "Transporte de valores",
    "Segurança de grandes eventos",
    "Segurança pessoal e privada",
    "Reciclagem de formaçao de vigilantes",
    "Manutenção preventiva de armas de fogo",
    "Vigilância Patrimonial",
    "Extensão em Equipamentos  Não-letais",
    "Habilitação para Condução de Cão na Segurança Privada",
    "Nível Superior na Área da Segurança Privada",
    "Funcionamento e operação de equipamentos de  segurança eletrônica",
    "Técnicas de defesa pessoal",
    "Técnicas de primeiros socorros",
    "Uso de recursos de  informatica",
    "Criminalística",
    "Prevenção de combate a incêndio",
    "Vigilância",
    "Educação física"
  ]
}
```

## Candidates

#### GET /candidates/:vacancyId

_Formato da requisição, necessário token de empresa_

```json
{}
```

_Formato de resposta_

```json
[
  {
    "id": "3d51db66-6595-4210-b254-507df01d87d7",
    "name": "teste",
    "email": "teste@",
    "password": "$2b$10$k8IqnDDMLmgMvcDNMaUrRuxzkG90txWf6wigCENRPbjOyy3Th7Pfm",
    "isAdm": false,
    "age": 20,
    "hired": false,
    "courses": [
      {
        "employeeUuid": "c55ab337-4c77-4873-9948-d85eead8ae33",
        "name": "Técnicas de defesa pessoal"
      },
      {
        "employeeUuid": "2a9ada9c-76d2-4e05-9698-89b81c1f8d08",
        "name": "Vigilância Patrimonial"
      }
    ],
    "address": {
      "addressUuid": "57019d08-9589-463b-ae0e-534ebf155e0e",
      "state": "SP"
    }
  }
]
```
