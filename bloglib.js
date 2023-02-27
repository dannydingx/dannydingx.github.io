const blogs_name = ['sampleblog',
                    'catsblog',
                    ];


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
        return "\\";
    }else{
        return `\\blog\\${next_name}.html`;
    }
}


function get_prev_blog_address(this_blog_name){
    let prev_name = get_prev_blog_name(this_blog_name);
    if(prev_name === ''){
        return "\\";
    }else{
        return `\\blog\\${prev_name}.html`;
    }
}


function get_a(){
    return 'de';
}