[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

Answer:

The runtime of the function to convert an adjacency matrix to an adjacency list is $\Theta (n^2)$ where $n$ is the number of vertices in the matrix. This is because the function, using the nested for-loops, must iterate through each element in a row ($n$ times) and each element in a column ($n$ times). This results in a runtime of $\Theta (n^2)$.

Bonus Answer:

The runtime of the function to convert an adjacency list to an adjacency matrix is also $\Theta (n^2)$ where $n$ is the number of elements in the list. The first time the function iterates through the adjacency list, it initializes the new matrix which takes $n$ time. The second time the function iterates through the adjacency list, it fills in the nodes where they need to be which also takes $n$ time. Through both iterations, the function has a runtime of $\Theta (n^2)$.
