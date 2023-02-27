Danny Ding / Summer@Brown / The Quantum Revolution in Technology / Final Project / David Tersegno

2019.0801.4

# Quantum Algorithms

Since the concept of Turing machine was proposed at 1936, human beings haven't stop finding ways to utilize 'natural phenomena' into our logic, to 'help us' by the hand of god. At 1965, the CEO of Intel described a principle in his paper that the components of per integrated circuit will double by every 18 months in near decades, this principle was later called the *Moore's Law*, and it seems to keep effectiveness until now. (ref 1/2)

![img](https://upload.wikimedia.org/wikipedia/commons/8/8b/Moore%27s_Law_Transistor_Count_1971-2018.png)

Nevertheless, our technology now is really approximating the physical limit of accuracy: we are now arranging transistors in a **nm level**! Proud of being born at the great time, we are experiencing the unprecedented revolution of  science and technology in the past century, and it will only became more intense in the future. Now, scientists are considering using a new natural power - Power of Quantum - to built these sorts of 'Logical machine'. Just as how we use the power of electricity, we considered 'Quantum Effect' as a natural resource, a resource of computing, we are trying to model and capture subtle quantum effects, and map them into macro event that could help us. Quantum computing have a strong parallel computing ability due to its characteristics of superposition, but that didn't mean we could directly run programs on our classical computer directly on 'Quantum Computers' and enjoy its advantages of parallel (enjoy an exponentially efficiency promotion). Actually, to manipulate quantum could be tough, and we could not use our classical algorithms to manipulate them parallelly, on the contrary, scientists developed certain specific operation approaches: Quantum Algorithms.

### Quantum Bits

Just like *bits* as the computing unit of classical computers, quantum computers have  *Quantum Bits* or **Qubits**. While classical bits have two states: 0 or 1, always indicated by low / high voltage, Quantum Bits also have two stages: ∣0⟩ or∣1⟩, different from the classical one, stages of qubits were indicated by some quantum characteristics: like the charge of electrons, direction of spin on electron or photons. Moreover, qubits began to differ from classic bits on its quantum characteristics - its ability to **interfere** or **superposition**. A qubit could appear at superposition of two stages, with one coefficient of probability of each stages:

$$
{ a \left | 0 \right\rangle + b \left | 1 \right\rangle }
$$

Whereas

$$
\left | a \right |^{2}, \left | b \right |^{2}
$$
reflects the probability of observing the states 0 or states 1 respectively if we observe this superpositioned qubit immediately. If that's the case, we then could imply the situation of 2 qubit:

![1564700855450](C:\Users\Danny\AppData\Roaming\Typora\typora-user-images\1564700855450.png)

So, we knew there are four stages in total:
$$
{ a{_{1}} a{_{2}} \left | 00 \right\rangle,  a{_{1}} b{_{2}} \left | 01 \right\rangle,

b{_{1}} a{_{2}} \left | 10 \right\rangle,  b{_{1}} b{_{2}} \left | 11 \right\rangle }
$$

All these stages could be compute together, so, using **n** bits as computing resources, while classical computer could only compute **n** of binary numbers at once, qubits allowed us to compute **2^n** of binary numbers. HOWEVER, this kind of cool computing resource also have a limit that made it unable to function using classical algorithms: when we finally 'observe' it in the end, our observing will collapse the wave function, at this time the GOD would roll a dice, and ruthlessly shrink our probability distribution, no matter how big it is, into a single stage, and will not change after that.

Thus, in most quantum algorithms, we would put all qubits in their superposition stage in the intermediate process, and only to observe the result at the end.

 (ref 3)

Now, its time to introduce some famous quantum algorithms

### Grover Algorithm

Grover Algorithm is one quantum - searching algorithms designed for 'searching' un-sorted data. I'll not discuss the mathematic details about algorithms here, but we'll discuss some general issue about them.

First, for common sorted data, searching is very efficient using the **Binary Search Algorithm**, which have the complexity of *O(log n)* (meaning *log n* of computation is expected for running searching in n data). For unsorted dataset, conventional algorithms (if we have to call it 'algorithm') is a little time-consuming, it is just simply iterate through the whole dataset, have the complexity of *O(N)*. For the **Grover Algorithm** here, this quantum algorithm 'shockingly' reduced the complexity to *O(N^(1/2))*, amazing.

| Algorithm      | Datatype | Complexity |
|  ----  | ----  | ---- |
| Binary Search  | Sorted | *O*(log N) |
| Iteration Data | Unsorted |*O*(N)|
| Grover | Unsorted |*O*(√N)|

The general principle of Grover algorithm is similar as what we talked before of the qubit's characteristics. We have **n** qubits to use at the beginning, and each qubit could be at either ∣0⟩ or ∣1⟩ stage, we turn qubit into superposition state through **Hadamard gate**, and then we could mapped out 2^n kinds of different stage (numbers) and let them compute as a whole, eventually we would increase the probability coefficient for the stages of our results to a very high number, so that we could 'observed' the value of qubits and hopefully get the correct result we want.

(ref 4,5)

### Shor's Algorithm

Shor's algorithm was designed for (big) integer factoring. When discuss about integer factoring, we must talk about the RSA encryption, which is one of the most widely adopted encryption method for the internet safety. That was an asymmetric encryption approach, which means that it have one public key to encrypt and another private key to decipher. And this whole method's safety was based on a simply assumption: that it would be very hard for a computer (or even a group of them) to factor a large integer. Basically, the public key of RSA is the product of two **coprime** large numbers (private key). By this mean, it would be easy to generate a public key through private key, but nearly not possible to do the reverse. However, Shor's algorithms might put threat to the whole RSA encryption. (ref 6)

![Shor's_algorithm](D:\0.Danny\2019.07 - 2019Summer\2019.05 - Summer@Brown\HomeworkB\2019.0729.1 - Project - Quantum Algorithms\Shor's_algorithm.svg)

<Center> Shor's Algorithm Chart (ref 7) </Center>

Shor's algorithms also used the superposition characteristic of quantum to realize the parallel computation of all qubits. Also, it is noteworthy that Shor's algorithms itself is not a quantum algorithms, it also have a classical version. It provided us a method of factoring integers through 'educated guess', although we knew a little about prime number and we should guess, Shor's algorithms basically told us how to guess more accurately each time. Eventually, Shor's algorithm on qubits used a quantum discrete **Fourier transform**, before we observe all the qubits. As a result, Shor's algorithm have a polynomial complexity (*O(n^a)*) instead of exponential complexity of classical computers (*O(a^n)*), in large data condition, a polynomial complexity algorithm will behave much better than the exponential complexity one, no matter what the power it have.

If the Shor's algorithms really could factor big integers for us, it will means  a lot - it means almost all of our encryption on the internet would became totally transparent. But, we have nothing to worry about yet, limited by technology, Shor's algorithms only worked on little # of qubits now, we still have time to ameliorate our encryption method, maybe, through Quantum Encryption? 

(ref 4,7)

### Ref:

1. http://www.mooreslaw.org/
2. https://en.wikipedia.org/wiki/Moore%27s_law
3. https://en.wikipedia.org/wiki/Qubit
4. http://quantumalgorithmzoo.org/
5. https://en.wikipedia.org/wiki/Grover%27s_algorithm
6. https://brilliant.org/wiki/rsa-encryption/
7. https://en.wikipedia.org/wiki/Shor's_algorithm