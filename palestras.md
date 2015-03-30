---
layout: page
title: "Palestras"
---

## Construindo um analisador de executáveis em C
Conto a história e os desafios encontrados no desenvolvimento do pev, uma suíte de ferramentas multi-plataforma escrita em C para trabalhar com binários PE. A história é curiosa porque antes de começar eu nunca tinha compilado mais que um hello, world. Hoje, 5 anos depois, o pev é multi-plataforma, conta com biblioteca para própria para leitura de PE, carregamento dinâmico de plugins e muito mais.

## Data Models Metaprogramados: ORM e Serialização
Data Models em C++ com Metaprogramação
aka C++ ORM and Serialization Made Easy

A maioria das aplicações precisa de um mecanismo de transferência de entidades de modelo de dados de um ponto a outro. Seja um dos pontos um arquivo, seja uma base de dados relacional, uma base NoSQL, ou uma conexão TCP. Não importa, aplicações precisam de dados que muitas vezes poderiam ser modelados com um bom nível de abstração.

Nesta palestra será apresentada a biblioteca Moneta. Uma biblioteca que usa e abusa de template metaprogramming pra facilitar ao máximo a manipulação do modelo de dados das aplicações. Quer dizer, as entidades que nela existem, de maneira muito simples e eficiente.

Em palavras coloquiais, Moneta é um ORM e também um Serializador para C++ metaprogramado.

Moneta é capaz de abstrair a serialização de forma customizável, o que significa que podem ser criados codecs personalizados para as necessidades da aplicação. Moneta já inclui codecs para XML, JSON e RAWBIN, uma implementação binária de exemplo. 

Além da serialização, Moneta cuida da transferência de dados entre modelos relacionais e orientados a objeto, cuidando da impedância e administrando contextos de transação modelados à partir do Git, especificamente seu Index (ou staging area, como é comumente chamado).

Outras linguagens de programação, como Java, contam com excelentes ferramentas de ORM e administração de dados, como Hibernate. Também existem excelentes ferramentas de serialização, como Apache MINA. Minha intenção ao projetar Moneta foi usar o melhor de cada uma delas como inspiração para desenhar uma biblioteca eficiente, performática e muito simples de usar em C++.

Com C++ podemos ter o melhor das ferramentas existentes, tendo certeza que o código ficara otimizado em grande nível graças à sua natureza metaprogramada em tempo de compilação.

Moneta é desenhada para C++03 devido ao grande número de usuários ainda nela.

Moneta é completamente open source, aderindo à Boost Software License.

## Mágica com Qt's meta-object system
Nesta palestra será apresentado como usar alguns recursos avançados do meta-object system do Qt.

## Otimização de código em linguagem C
Quando desenvolvemos aplicações que tratam grandes massas de dados ou que rodam em plataformas com poder de processamento limitado, torna-se necessário escrever código da forma mais otimizada possível.
Porém, às vezes o algoritmo já é o mais otimizado para o problema, em relação à sua complexidade computacional. Ainda assim, pode-se otimizar ainda mais um programa apenas entendendo como os compiladores funcionam, de uma forma geral, e escrevendo um código que tome proveito disso.
Nesta palestra apresentaremos algumas dicas para otimização de programas escritos em linguagem C e vamos entender o porquê elas tornam um programa mais otimizado.

## Otimização em C: História, Mitos e Esquisitices
A linguagem C se preocupa com eficiência e vários dos seus aspectos são consequência disto. Ao longo dos anos os compiladores ficaram cada vez mais agressivos na otimização do código gerado. Esta palestra fala um pouco desta evolução e analisa alguns exemplos, detonando alguns mitos e apresentando alguns resultados inesperados.

## Processamento vetorial, Boost::SIMD e autovetorização
Explora a capacidade de processamento vetorial dos processadores e a sua vantagem nas aplicações do dia a dia.

Apresenta a biblioteca Boost::SIMD e compara o desempenho em relação ao código gerado pelo computador.

Explica a autovetorização realizada pelo compilador e avalia o desempenho de acordo com as outras abordagens.

## Profiling com Perf (do Kernel do Linux), GCC e Valgrind
Tutorial passo-a-passo de como fazer a medição de performance, análise e reagir aos resultados usando as ferramentas de profiling do Kernel do Linux, GCC, Valgrind.

## Trocando bits por segurança
Será apresentado detalhes da implementação em C de algoritmos de detecção/correção de erros e as otimizações para fazer tudo rodar a cada troca de contexto do SO rodando num micro de 8 bits à 16MHz.

## Uma Viagem aos Problemas Intratáveis
Um problema é considerado intratável quando não existe um algoritmo conhecido que o resolva deterministicamente em tempo polinomial. Este tipo de problema é denominado NP. O objetivo desta palestra é apresentar uma abordagem que combina Monads, Computação Paralela, Inteligência Artificial e C++ para encontrar boas soluções em problemas NP.

