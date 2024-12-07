// const rootNode = document.getElementById("app")

// const root = ReactDOM.createRoot(rootNode)

// root.render(<App/>)

// console.log(root)




// ///


// function App(){

//     return <div><BallSack children='my ass' text='balls' cumslut='girl'/></div>
// }

// console.log(App)


// function BallSack({children}){

//     return <div>{children}</div>
// }

class LinkedListNode {
    constructor(val, next = null){
        this.value = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(val){
        const newNode = new LinkedListNode(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

            return this;
        }


        this.tail.next = newNode;
        this.tail = newNode;

        return this
    }

    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value)
            currentNode = currentNode.next;
        }

    }
}

const linkedList = new LinkedList()

linkedList.append('Tony')
linkedList.append('Alicea')
linkedList.append('Understanding React')

linkedList.print()

console.log(linkedList.tail)



