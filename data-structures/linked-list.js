class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Inicialmente, o próximo nó é nulo
  }

  setNext(node) {
    this.next = node; // Define o próximo nó
  }
}

// Criando os nós
const nodeA = new Node(6);
const nodeB = new Node(3);
const nodeC = new Node(4);
const nodeD = new Node(2);
const nodeE = new Node(1);

// Conectando os nós
nodeA.setNext(nodeB);
nodeB.setNext(nodeC);
nodeC.setNext(nodeD);
nodeD.setNext(nodeE);

// Função para contar os nós na lista ligada
function countNodes(head) {
  let count = 0;
  let current = head;

  while (current !== null) {
    count += 1; // Incrementa o contador
    current = current.next; // Move para o próximo nó
  }

  return count;
}

console.log("Número de nós:", countNodes(nodeA)); // Saída: "Número de nós: 5"

//

class Box {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new Box(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;      
    }
  }
}

const list = new LinkedList();
list.append(1)
list.append(2)
list.append(3)
list.print()

// Cenário
// imagine que voce está implementando um editor de texto que permite desfazer e refazer ações
// cade nó na lista pode representar uma açäo
// a lista ligada facilita a navegaçao para frente e para trás entre açoes sem a necessidade de redimensionar arrays.