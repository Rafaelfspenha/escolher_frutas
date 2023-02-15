let frutas = ["maçã", "laranja", "banana", "melão", "melância"]
let adicionar
let escolha
let a

        function menu(){
            a=prompt("As frutas atuais são: " + frutas + " | Você deseja retirar o primeira fruta? S/N")
            return a
        }

        pergunta=menu() 
        
        while(pergunta!="S" && pergunta!="s" && pergunta!="N" && pergunta!="n")
            pergunta=menu()
// se deixar apenas "menu()" e colocar "S","s","N","n" na primeira vez que entrar no while
// o programa funcionará normalmente, mas se inserir outros valores, o programa ficará em loop.

        if (pergunta == "S" || pergunta == "s") {
            frutas.shift()
            adicionar = prompt("Deseja acrescentar alguma fruta no início? S/N")
            if (adicionar == "S" || adicionar == "s") {
                escolha = prompt("Digite a fruta a adicionar: ")
                frutas.unshift(escolha)
                document.write("As frutas atuais são: " + frutas)
            } else if (adicionar == "N" || adicionar == "n"){
                document.write("As frutas atuais são: " + frutas)
            } 
        } else if (pergunta == "N" || pergunta == "n") {
            adicionar = prompt("Deseja acrescentar alguma fruta no início (S/N) ? ")
            if (adicionar == "S" || adicionar == "s") {
                escolha = prompt("Digite a fruta a adicionar: ")
                frutas.unshift(escolha)
                document.write("As frutas atuais são: " + frutas)
            } else if (adicionar == "N" || adicionar == "n")
                document.write("As frutas " + frutas + " não foram alteradas.")
        } else {
            document.write("Opção Inválida!")
        }
