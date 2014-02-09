---
layout: page
title: "Como editar o site?"
published: true
---

O site é mantido via GitHub Pages, portanto pode ser editado via
markdown/textile/html/etc no editor de sua preferência. Todas as páginas também
contém um link (o pequeno lápis no topo à esquerda) para a edição através do
editor online [Prose](http://prose.io). Antes de iniciar a edição via Prose
aconselha-se a clicar no ícone verde no canto inferior direito do próprio Prose
para ser realizada a autorização do aplicativo no GitHub.

Se você ainda não é membro do
[time de edição](https://github.com/orgs/ccppbrasil/teams/editors), requisite
suas alterações via *pull request*, ou
[abra uma issue](https://github.com/ccppbrasil/ccppbrasil/issues/new) com a
label [editors-membership](https://github.com/ccppbrasil/ccppbrasil/issues?labels=editors-membership)
no repositório genérico do grupo requisitando sua adição ao time.

Para criar posts no blog, certifique-se de criar um arquivo no formato:

`/_posts/AAAA-MM-DD-<algum-nome-aqui>.md`

O [_front-matter_](http://jekyllrb.com/docs/frontmatter/) básico necessário é:

    ---
    layout: post
    title: "Primeiro _Post_"
    published: true
    ---

Para uma página comum em algum subdiretório bastar criar um aquivo no formato:

`/<um-caminho-ou-nada>/<algum-nome-aqui>.md`

O _front-matter_ básico necessário é:

    ---
    layout: page
    title: "Olá mundo!"
    published: true
    ---

Páginas com _published false_ não aparecerão no menu automaticamente.

A árvore do menu é baseada na estrutura de diretórios do site, exceto pelos
diretórios ignorados, cujos nomes começam com `_`.
