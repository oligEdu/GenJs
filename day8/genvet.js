const leia = require('readline-sync')

        let vetorNum = []
        let soma = 0
        let media
        let contador

        console.log("\nDigite 10 números inteiros: ")
        for (contador = 0; contador < 10; contador++)
        {
            vetorNum[contador] = leia.questionInt(`\nNúmero ${contador + 1}: `);
        }

        console.log("\nElementos nos índices ímpares:")
        for (contador = 0; contador < 10; contador++)
        {
            if (contador % 2 != 0)
            {
                console.log(vetorNum[contador])
            }
        }

        console.log("\nElementos pares:")
        for (contador = 0; contador < 10; contador++)
        {
            if (vetorNum[contador] % 2 == 0)
            {
                console.log(vetorNum[contador])
            }
        }

        for (contador = 0; contador < 10; contador++)
        {
            soma = soma + vetorNum[contador]
        }
        media = soma / 10

        console.log("\nSoma:")
        console.log(soma)

        console.log("\nMédia:")
        console.log(media)
