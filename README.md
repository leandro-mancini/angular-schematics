# Angular Schematics

## Começando

Baixe o repositório:

```bash
git clone https://github.com/leandro-mancini/angular-schematics.git
```

1. Vá para a pasta do projeto `./my-schematics` e instale as dependências:

```bash
npm install
```

2. Compilar os arquivos typescript:

```bash
npm run build
```

3. E em seguida executá-lo:

```bash
schematics .:my-schematics --name=hello
```

### Adicionando o Schematic ao seu projeto

Navegue para a pasta do projeto `./my-project` adicione o Schematic via npm link:

```bash
cd my-project

npm link ../my-schematics
```

Feito isso, basta executar o schematic via Angular CLI:

```bash
ng g my-schematics:my-schematics --name=hello
```

Pronto! O arquivo hello foi criado na raiz do seu projeto. Pode conferir o conteúdo.
