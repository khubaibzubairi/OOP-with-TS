# OOP-with-TS

OOP with TypeScript

## Interface

Suppose We have 2 classes A, B and we have a 3rd class C. We want to inherit A, B to C but we cannot do it by inheritance. For this we use interfaces.
an Interface is just like an abstrtct class but there is a difference that an abstract class only have one abstract method but interface can have more than one abstract methods.
we us "Interface" keyword to create an interface.
in Interface thre can only be the prototypes or declerations of the methods, we have to define the methods in the drived class.
We can not create object of an interface like a class.
We can use access modifier with the methods declare in an interface.

## Inheritance

Inheritance is a term where a sub class is inherit to a base class or parent class to use its properties or methods.
Lets suppose we have a class A, and a class B. we want to use a method in B which is present in A. So, we will inherit B to A. If we inherit B to A with public access modifier then all public properties or method of A will be publically accessable by B. If we use Private the all public methods of A will be private properties of B.

## Overriding

overriding means that if we use declare property or method in different classes. suppose A class have a property name and B class also have name propert as A. so when we create an object of B and use name property whith that object then name propert of B class will be accessed. Same like property we can override methods.

## Polymorphism

defined as Same operation may behaive differently in differrent class. There are two ways to implement polymorphism, 1. Abstract class and 2. Interface.

## Attributes and Behaviours

Attributes represent the properties of a class like we have a class A and A has property or attribute as name, age etc. SO, these properties of A are said to be attribites of class A.
Behaviours are said to be the use of attributes of a class. For example there is a function which prints name and age of class A. So this function performs action on the properties of class A. So this function is defining the behaviour of name and age.

## Classes and Objects

A class is set of some properties and methods which defines a prticular existance. An Object defines a single entity of a class. For example there is a Class human which have all the information that a human have and we create a object of class human as Ali. So, Ali (object) defines a single entity existance of human.
