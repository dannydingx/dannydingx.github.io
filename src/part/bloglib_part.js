
var blogs_num = blogs_name.length;

console.log("ss")

function get_next_blog_name(this_blog_name){
    for (let index = 0; index < blogs_num; index++) {
        if(blogs_name[index] === this_blog_name){
            if(index < blogs_num - 1){
                return blogs_name[index+1];
            }else{
                return '';
            }
        }
    }
    return '';
}

function get_prev_blog_name(this_blog_name){
    for (let index = 0; index < blogs_num; index++) {
        if(blogs_name[index] === this_blog_name){
            if(index > 0){
                return blogs_name[index-1];
            }else{
                return '';
            }
        }
    }
    return '';
}

function get_next_blog_address(this_blog_name){
    let next_name = get_next_blog_name(this_blog_name);
    if(next_name === ''){
        return "/src/index.html";
    }else{
        return `${next_name}.html`;
    }
}


function get_prev_blog_address(this_blog_name){
    let prev_name = get_prev_blog_name(this_blog_name);
    if(prev_name === ''){
        return "/src/index.html";
    }else{
        console.log(`${prev_name}.html`);
        return `${prev_name}.html`;
    }
}


function fill_list(){
    const article_list = document.getElementById("article-list")
    for (let index = 0; index < blogs_num; index++) {
        const atc = document.createElement("article");
        const h = document.createElement("header");
        const header = document.createElement("h2");
        const header_a = document.createElement("a");
        header_a.setAttribute("href","blog/" + blogs_name[index] + ".html");
        header_a.innerText = blogs_name[index].replaceAll('_',' ');
        header.append(header_a);
        h.append(header);
        const small = document.createElement("small");
        h.append(small);
        small.innerText = "Probably 100 years ago";
        atc.append(h);
        article_list.append(atc);
        }
}