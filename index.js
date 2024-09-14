const { select, input } = require('@inquirer/prompts');

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
};

let metas = [meta];

const cadastrarMetas = async () => {
    const meta = await input({ message: "Digite a meta:" });

    if (meta.length === 0) {
        console.log('A meta não pode ser vazia.');
        return;
    }

    metas.push(
        { value: meta, checked: false }
    );
};

const start = async () => {
    while (true) {
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar metas",
                    value: "cadastrar" // Corrigido aqui
                },
                {
                    name: "Listar metas",
                    value: "listar" // Corrigido aqui
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        });

        switch (opcao) {
            case "cadastrar":
                await cadastrarMetas();
                console.log(metas);
                break;
            case "listar":
                console.log("Vamos listar as metas:");
                metas.forEach(m => console.log(m.value)); // Lista as metas
                break;
            case "sair":
                console.log("Até a próxima!");
                return;
        }
    }
};

start();
