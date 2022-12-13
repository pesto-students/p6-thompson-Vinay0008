// Implementation of Queue using 2 Stacks

const Stack = () => {
    const items = [];
  
    return {
      push: (data) => {
        items.push(data);
      },
      pop: () => {
        return items.pop();
      },
      peek: () => {
        return items[items.length - 1];
      },
      isEmpty: () => items.length === 0,
    };
  };
  
  const Queue = () => {
    let s1 = Stack();
    let s2 = Stack();
  
    return {
      enqueue: (item) => {
        s1.push(item);
      },
      dequeue: () => {
        while (!s1.isEmpty()) {
          s2.push(s1.pop());
        }
        const removedItem = s2.pop();
  
        while (!s2.isEmpty()) {
          s1.push(s2.pop());
        }
        console.log(removedItem);
      },
      peek: () => {
        return data[data.length - 1];
      },
    };
  };
  
  const value = [1, 2, 3, 4, 5];
  const queue = Queue();
  value.forEach((val) => queue.enqueue(val));
  queue.dequeue(); // 1
  queue.dequeue(); // 2