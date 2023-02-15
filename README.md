# escolher_frutas

O programa começa definindo uma matriz de frutas. Em seguida, define várias variáveis usando a mesma palavra-chave, incluindo 'adicionar', 'escolha'. Essas variáveis são usadas para armazenar a entrada do usuário e outros valores.

O programa também define uma função chamada menu() que pergunta ao usuário se ele deseja remover a primeira fruta do array. A função exibe a matriz atual de frutas usando o método document.write() e solicita que o usuário insira "S" ou "N" para indicar sua escolha. A função então retorna a escolha do usuário.

O programa usa um while para verificar se a entrada do usuário é válida. Se o usuário inserir um valor diferente de "S", "s", "N" ou "n", o programa solicitará ao usuário novamente até que ele insira um valor válido.

Após o while, o programa usa uma instrução if-else para determinar qual ação tomar com base na escolha do usuário. Caso o usuário opte por retirar o primeiro fruto digitando "S" ou "s", o programa utiliza o método shift() para retirar o primeiro elemento do array 'frutas'. O programa então solicita que o usuário digite "S" ou "N" para indicar se deseja adicionar uma nova fruta ao início da matriz. Se o usuário inserir "S" ou "s", o programa solicita que o usuário insira a nova fruta e usa o método unshift() para adicioná-la ao início do array. Por fim, o programa exibe o array atualizado usando o document.write()método.

Se o usuário optar por não remover a primeira fruta digitando "N" ou "n", o programa solicitará que o usuário digite "S" ou "N" para indicar se deseja adicionar uma nova fruta ao início da matriz. Se o usuário inserir "S" ou "s", o programa solicita que o usuário insira a nova fruta e usa o método unshift() para adicioná-la ao início do array. Por fim, o programa exibe o array atualizado usando o método document.write().

Se o usuário inserir uma escolha inválida, o programa exibirá uma mensagem de erro usando o método document.write().
