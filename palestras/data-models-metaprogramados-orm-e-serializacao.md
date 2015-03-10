---
layout: page
title: "Data Models Metaprogramados: ORM e Serialização"
published: true
---
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
