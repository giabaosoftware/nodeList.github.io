//jshint esversion : 6

//Dynamic Array
class Stack{
    constructor(){
        this.stack = [];
    }

    push(item){
        this.stack.push(item);
    }

    pop(){
        this.stack.pop();
    }

    searchIndex(item){
        return this.stack.indexOf(item);
    }

    removeItem(item){
        if(this.stack.indexOf(item) !== -1){
            let head = this.stack.slice(0, this.searchIndex(item));
            let tail = this.stack.slice(this.searchIndex(item) + 1, this.stack.length + 1);
            this.stack = head.concat(tail);
            return this.stack;
        } else {
            return false;
        }
    }

    addIn(item, index){
        if (this.stack[index]) {
            let head = this.stack.slice(0, index);
            head.push(item);
            let tail = this.stack.slice(index, this.stack.length);
            this.stack = head.concat(tail);
        } else {
            return false;
        }
    }
}

//App
let node = new Stack();
let count = 0;


let elTitle = document.getElementById('title');
let elContent = document.getElementById('content');
let elId = document.getElementById('id');


function myFunction(){
    node.push({index: count, header : elTitle.value, text : elContent.value});
    addElement(node.stack[count].header, node.stack[count].text, node.stack[count].index);
    count++;
}


function addElement(header, text, index){
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="col-3" id="box-${index}">
                        <div class="note-item flex column justify-between">
                            <div class="note-header">
                                <div class="note-item__header flex justify-between align-center">
                                    <h3 class="title">
                                        ${header}
                                    </h3>
                                    <div onclick="removeElement(${index})">
                                        <i class="bi bi-x-circle"></i>
                                    </div>
                                </div>
                                <p class="note-item__content">
                                    ${text}
                                </p>
                            </div>
                            <div class="note-footer">
                                Node Id : ${index}
                            </div>
                        </div>
                    </div>`;

    const currentDiv = document.getElementById('app');
    document.getElementById('box').insertBefore(newDiv, currentDiv);
}

function removeElement(i){
    let element = document.getElementById(`box-${i}`);
    element.style.display = "none";
}

let elAlert = document.getElementById('alert');
function search(){
    for(let i = 0; i < node.stack.length; i++){
        console.log(node.stack[i]);
        if(parseInt(elId.value) === node.stack[i].index){
            let element = document.getElementById(`box-${i}`);
            element.style.display = "block";
            for(let j = 0; j < node.stack.length; j++){
                if(parseInt(elId.value) !== node.stack[j].index){
                    let element = document.getElementById(`box-${j}`);
                    element.style.display = "none";
                }
            }
        } else if (!elId.value) {
            for(let i = 0; i < node.stack.length; i++){
                let element = document.getElementById(`box-${i}`);
                element.style.display = "block";
            }
        }
    }
}