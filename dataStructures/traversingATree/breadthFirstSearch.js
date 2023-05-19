/*
-create a queue(this can be an array) and a variable to store the values of nodes visited
- place the root node in the queue
- loop as long as there is anything in the queue
    -dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - if there is a left property on the node dequeued - add it to the queue
    - if there is a right property on the node dequeued - add it to the queue
- return teh variable that stores the values
*/

function BFS() {
  let data = [];
  let queue = [];
}
