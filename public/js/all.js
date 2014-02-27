function addUrl(url, title, active) {
    var leaf = {};
    url.split('/')
        .filter(function(e) { return e })
        .reduce(function(p, c) { leaf = p[c] || (p[c] = {}); return leaf; }, this);
    leaf.__url__ = url;
    leaf.__title__ = title;
    leaf.__active__ = active;
    return this;
}

printSidebar.depth = 0;
printSidebar.html = '';
function printSidebar(tree, indentation) {
    for (var key in tree) {
        if (tree[key].__url__ == undefined) {
            if (typeof tree[key] != 'object')
                continue;
            printSidebar.html +=
                '<div class="sidebar-nav-item" style="cursor: pointer">'
                + repeatString(indentation, printSidebar.depth) + key
                + '</div>\n';
        } else {
            if (tree[key].__active__) {
                printSidebar.html += '<a class="sidebar-nav-item active" href="'
                    + tree[key].__url__ + '">'
                    + repeatString(indentation, printSidebar.depth)
                    + tree[key].__title__
                    + '</a>\n';
            } else {
                printSidebar.html += '<a class="sidebar-nav-item" href="'
                    + tree[key].__url__ + '">'
                    + repeatString(indentation, printSidebar.depth)
                    + tree[key].__title__
                    + '</a>\n';
            }
        }
        ++printSidebar.depth;
        printSidebar(tree[key], indentation);
        --printSidebar.depth;
    }

    if (printSidebar.depth == 0) {
        var html = printSidebar.html;
        printSidebar.html = '';
        return html;
    }
}

function repeatString(string, size) {
    return Array(size + 1).join(string);
}

function goToProse(repo, page) {
    window.location = repo.replace(/^https?:\/\/[^\/]*\//i,'http://prose.io/#') + '/edit/master/' + page;
}

function goToGitHub(repo, page) {
    window.location = repo + '/edit/master/' + page;
}

// TODO Pagination: http://developer.github.com/guides/traversing-with-pagination
// TODO OAuth or Caching/Cookies? http://developer.github.com/v3/oauth/
// TODO Make order more random?

function printHireables(organization) {
    var hireables = document.getElementById('hireables');
    if (hireables) {
        $.ajax({
            url: 'https://api.github.com/orgs/' + organization + '/members'
        }).then(function(members) {
            for (var i in members) {
                $.ajax({
                    url: 'https://api.github.com/users/' + members[i].login
                }).then(function(member) {
                    if (member.hireable) {
                        hireables.innerHTML += printHireableRow(member);
                    }
                });
            }
        });
    }
}

function printHireableRow(hireable) {
    var blog = hireable.blog;
    var blog_normalized;
    if (blog == null) {
        blog = "";
        blog_normalized = "";
    } else {
        var uri = new URI(blog);
        if (!uri.protocol()) {
            uri.protocol("http");
        }
        blog_normalized = uri.toString();
    }
    var output =
    '    <tr>\n' +
    '      <td><a href="' + hireable.html_url + '"><img src="'     + hireable.avatar_url + '" /></a></td>\n' +
    '      <td><a href="' + hireable.html_url + '">'               + hireable.name       + '</a></td>\n'     +
    '      <td><a href="' + blog_normalized   + '">'               + blog                + '</a></td>\n'     +
    '      <td style="text-align: center">'   + hireable.followers + '</td>\n'           +
    '      <td style="text-align: center">'   + hireable.following + '</td>\n'           +
    '    </tr>\n';
    return output;
}

$(document).ready(function() {
  jQuery.support.cors = true;

  $('.flexslider').flexslider({
    animation: "slide"
  });

  printHireables('ccppbrasil');
});
